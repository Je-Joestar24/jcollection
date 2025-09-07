import api from "../../config/api";

const logout = async () => {
    try {
        await api.post('/api/auth/logout');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return { success: true };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || error.message || "Logout failed",
        };
    }
};

export default logout;