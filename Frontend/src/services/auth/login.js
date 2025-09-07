import api, { csrf } from '../../config/api';

const login = async (email, password) => {
    try {
        await csrf(); // Ensure CSRF token is set
        const response = await api.post('/api/auth/login', { email, password });

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        // Extract error message
        let message = 'Login failed';
        if (error.response?.data?.message) {
            message = error.response.data.message;
        } else if (error.message) {
            message = error.message;
        }

        return {
            success: false,
            error: message,
        };
    }
};

export default login;