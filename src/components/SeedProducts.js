import { useEffect } from 'react';
import { seedProducts } from '../utils/seedProducts';

const SeedProducts = () => {
    useEffect(() => {
        seedProducts();
    }, []);

    return null;
};

export default SeedProducts; 