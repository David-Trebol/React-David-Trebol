import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc, serverTimestamp, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { cart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const [buyerData, setBuyerData] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: ''
    });

    const handleInputChange = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (!buyerData.name || !buyerData.phone || !buyerData.email || !buyerData.emailConfirm) {
            setError('Por favor complete todos los campos');
            return false;
        }
        if (buyerData.email !== buyerData.emailConfirm) {
            setError('Los emails no coinciden');
            return false;
        }
        if (cart.length === 0) {
            setError('El carrito está vacío');
            return false;
        }
        return true;
    };

    const createOrder = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setLoading(true);
        setError('');

        try {
            const order = {
                buyer: {
                    name: buyerData.name,
                    phone: buyerData.phone,
                    email: buyerData.email
                },
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                total: getTotalPrice(),
                date: serverTimestamp()
            };

            // Verificar stock antes de crear la orden
            for (const item of cart) {
                const productRef = doc(db, 'products', item.id);
                const productDoc = await getDoc(productRef);
                
                if (!productDoc.exists()) {
                    setError(`El producto ${item.name} ya no está disponible`);
                    setLoading(false);
                    return;
                }
                
                const productData = productDoc.data();
                if (productData.stock < item.quantity) {
                    setError(`Stock insuficiente para ${item.name}`);
                    setLoading(false);
                    return;
                }
            }

            // Crear la orden
            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);

            // Actualizar stock
            for (const item of cart) {
                const productRef = doc(db, 'products', item.id);
                const productDoc = await getDoc(productRef);
                await updateDoc(productRef, {
                    stock: productDoc.data().stock - item.quantity
                });
            }

            clearCart();
            
        } catch (error) {
            console.error('Error:', error);
            setError('Error al procesar la orden');
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="checkout-success">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <p>Te enviaremos un email a {buyerData.email} con los detalles</p>
                <button 
                    className="continue-shopping"
                    onClick={() => navigate('/')}
                >
                    Volver a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            
            {error && <p className="error-message">{error}</p>}
            
            <form onSubmit={createOrder} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={buyerData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={buyerData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={buyerData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="emailConfirm">Confirmar Email</label>
                    <input
                        type="email"
                        id="emailConfirm"
                        name="emailConfirm"
                        value={buyerData.emailConfirm}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="order-summary">
                    <h3>Resumen de la compra</h3>
                    <p>Total: €{getTotalPrice().toFixed(2)}</p>
                </div>

                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={loading}
                >
                    {loading ? 'Procesando...' : 'Confirmar Compra'}
                </button>
            </form>
        </div>
    );
};

export default Checkout; 