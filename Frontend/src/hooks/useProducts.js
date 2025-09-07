// src/hooks/useProducts.js
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, clearProducts } from "../store/productSlice";

export function useProducts() {
    const dispatch = useDispatch();

    const {
        items,
        links,
        meta,
        loading,
        error,
    } = useSelector((state) => state.products);

    // Fetch products with params
    const loadProducts = async (params = {}) => {
        try {
            await dispatch(fetchProducts(params)).unwrap();
        } catch (err) {
            console.error("Failed to fetch products:", err);
        }
    };

    // Clear product list
    const resetProducts = () => {
        dispatch(clearProducts());
    };

    return {
        items,
        links,
        meta,
        loading,
        error,
        fetchProducts: loadProducts,
        clearProducts: resetProducts,
    };
}
