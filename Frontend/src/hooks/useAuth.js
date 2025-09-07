import { useDispatch, useSelector } from 'react-redux';
import { login, signup, logout } from '../store/userSlice';
import { clearModal } from '../store/uiSlice';

export function useUserAuth() {
    const dispatch = useDispatch();
    const { user, token, userLogged, loading, error,
        signupErrors,
        signupMessage } = useSelector(state => state.user);

    const handleLogin = async (email, password) => {
        try {
            await dispatch(login({ email, password })).unwrap();
            dispatch(clearModal());
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    // Signup handler
    const handleSignup = async (name, email, password, password_confirmation) => {
        try {
            await dispatch(signup({ name, email, password, password_confirmation })).unwrap();
            dispatch(clearModal());
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };

    const handleLogout = () => { dispatch(logout()) };

    return {
        user,
        token,
        userLogged,
        loading,
        error,
        signupErrors,
        signupMessage,
        login: handleLogin,
        signup: handleSignup,
        logout: handleLogout,
    };
}