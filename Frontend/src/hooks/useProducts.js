// src/hooks/useProducts.js
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, clearProducts, showProduct, clearCurrentProduct } from "../store/productSlice";

export function useProducts() {
    const dispatch = useDispatch();

    const {
        items,
        links,
        meta,
        current,
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

    // Fetch single product by ID
    const loadProduct = async (id) => {
        try {
            await dispatch(showProduct(id)).unwrap();
        } catch (err) {
            console.error(`Failed to fetch product ${id}:`, err);
        }
    };

    // Clear single product
    const resetCurrentProduct = () => {
        dispatch(clearCurrentProduct());
    };

    return {
        items,
        links,
        meta,
        current,
        loading,
        error,
        fetchProducts: loadProducts,
        clearProducts: resetProducts,
        fetchProduct: loadProduct,
        clearProduct: resetCurrentProduct,
    };
}
