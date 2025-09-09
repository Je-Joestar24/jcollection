import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
    timeout: 30000,
    withCredentials: true, // <--- REQUIRED for cookie-based auth (send cookies)
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export async function csrf() {
    try {
        await api.get('/sanctum/csrf-cookie')
        await new Promise(resolve => setTimeout(resolve, 100))
        const token = getCookie('XSRF-TOKEN')

        if (token) {
            const decodedToken = decodeURIComponent(token)
            api.defaults.headers.common['X-CSRF-TOKEN'] = decodedToken
        } else {
            console.warn('No CSRF token found in cookies')
        }
        return true
    } catch (error) {
        console.error('Failed to get CSRF token:', error)
        return false
    }
}

// Helper function to get cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
    return null
}

// Add request interceptor (e.g. add token)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Add response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // handle global errors here
        return Promise.reject(error);
    }
);

export default api;
