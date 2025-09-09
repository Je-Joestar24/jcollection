// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchProductsService from "../services/products/fetch";
import showProductService from "../services/products/show";

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

// Async thunk to fetch a single product
export const showProduct = createAsyncThunk(
    "products/show",
    async (id, { rejectWithValue }) => {
        const result = await showProductService(id);
        if (result.success) {
            return result.data; // single product object
        } else {
            return rejectWithValue(result.error);
        }
    }
);

const initialState = {
    items: [], // product list
    links: null, // pagination links
    meta: null, // pagination meta
    current: null, // currently viewed single product
    loading: false,
    showLoading: false,
    error: null,
    search: ""
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
        clearCurrentProduct: (state) => {
            state.current = null;
            state.error = null;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
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
            })
            // show single product
            .addCase(showProduct.pending, (state) => {
                state.showLoading = true;
                state.error = null;
            })
            .addCase(showProduct.fulfilled, (state, action) => {
                state.showLoading = false;
                state.current = action.payload || null;
            })
            .addCase(showProduct.rejected, (state, action) => {
                state.showLoading = false;
                state.error = action.payload || "Failed to fetch product";
            });
    },
});

export const { clearProducts, clearCurrentProduct, setSearch } = productSlice.actions;
export default productSlice.reducer;
