import api, { csrf } from "../../config/api";

/**
 * Fetch products with support for search, filters, sorting, and pagination
 * @param {Object} params
 * @param {string} [params.search] - Search query (name/description)
 * @param {number} [params.page=1] - Current page
 * @param {number} [params.per_page=10] - Items per page
 * @param {string} [params.sort_by="created_at"] - Field to sort by
 * @param {string} [params.sort_order="desc"] - asc | desc
 * @param {Object} [params.filters] - Key/value filters (e.g., { category_id: 3 })
 */
const fetchProducts = async ({
    search = "",
    page = 1,
    per_page = 10,
    sort_by = "created_at",
    sort_order = "desc",
    filters = {},
} = {}) => {
    try {
        await csrf(); // ensure CSRF token is set (if required)

        const response = await api.get("/api/products", {
            params: {
                search,
                page,
                per_page,
                sort_by,
                sort_order,
                ...filters, // send additional filters dynamically
            },
        });

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        const res = error.response?.data || {};
        return {
            success: false,
            error: res.message || error.message || "Failed to fetch products",
            errors: res.errors || {},
        };
    }
};

export default fetchProducts;
