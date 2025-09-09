import api from "../../config/api";

/**
 * Fetch a single product by ID
 * @param {number|string} id - Product ID
 */
const showProduct = async (id) => {
    try {
        const response = await api.get(`/api/products/${id}`);

        return {
            success: true,
            data: response.data?.data || {}, // API wraps product inside "data"
        };
    } catch (error) {
        const res = error.response?.data || {};
        return {
            success: false,
            error: res.message || error.message || "Failed to fetch product",
            errors: res.errors || {},
        };
    }
};

export default showProduct;
