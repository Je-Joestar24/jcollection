import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../services/auth/login';

// Async thunk for login
export const login = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        const result = await loginService(email, password);
        if (result.success) {
            // Store token in localStorage
            if (result.data.access_token) localStorage.setItem('token', result.data.access_token);
            
            return {
                user: result.data.user || null,
                token: result.data.token || null,
            };
        } else {
            return rejectWithValue(result.error);
        }
    }
);

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    userLogged: !!localStorage.getItem('token'),
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.userLogged = !!action.payload.token;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            });
    },
});

export default userSlice.reducer;