import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../services/auth/login';
import signupService from '../services/auth/signup';

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

// Async thunk for signup
export const signup = createAsyncThunk(
    'user/signup',
    async ({ name, email, password, password_confirmation }, { rejectWithValue }) => {
        const result = await signupService(name, email, password, password_confirmation);
        if (result.success) {
            if (result.data.access_token) localStorage.setItem('token', result.data.access_token);
            return {
                user: result.data.user || null,
                token: result.data.access_token || null,
                message: result.data.message || 'Registration successful.',
            };
        } else {
            // Pass both error message and field errors
            return rejectWithValue({
                error: result.error,
                errors: result.errors,
            });
        }
    }
);


const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    userLogged: !!localStorage.getItem('token'),
    loading: false,
    error: null,
    signupErrors: null,
    signupMessage: null,
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
            })
            // Signup reducers
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.signupErrors = null;
                state.signupMessage = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.userLogged = !!action.payload.token;
                state.signupMessage = action.payload.message;
                state.signupErrors = null;
                state.error = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.error || 'Signup failed';
                state.signupErrors = action.payload?.errors || null;
            });
    },
});

export default userSlice.reducer;