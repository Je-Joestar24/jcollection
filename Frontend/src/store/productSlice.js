// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchProductsService from "../services/products/fetch";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async (params, { rejectWithValue }) => {
        const result = await fetchProductsService(params);
        if (result.success) {
            return result.data; // full API response with data, links, meta
        } else {
            return rejectWithValue(result.error);
        }
    }
);

const initialState = {
    items: [], // product list
    links: null, // pagination links
    meta: null, // pagination meta
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.items = [];
            state.links = null;
            state.meta = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data || [];
                state.links = action.payload.links || null;
                state.meta = action.payload.meta || null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch products";
            });
    },
});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;
