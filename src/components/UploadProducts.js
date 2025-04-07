import { useEffect } from 'react';
import uploadProducts from '../firebase/uploadProducts';

const UploadProducts = () => {
    useEffect(() => {
        uploadProducts();
    }, []);

    return null;
};

export default UploadProducts; 