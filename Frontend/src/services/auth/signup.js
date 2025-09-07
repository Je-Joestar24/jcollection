import api, { csrf } from "../../config/api";

const signup = async (name, email, password, password_confirmation) => {
    try {
        await csrf(); // Ensure CSRF token is set
        const response = await api.post('/api/auth/signup', {
            name,
            email,
            password,
            password_confirmation,
        });

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        const res = error.response?.data || {};
        return {
            success: false,
            error: res.message || error.message || 'Signup failed',
            errors: res.errors || {},
        };
    }
};

export default signup;