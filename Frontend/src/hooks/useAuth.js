import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';
import { clearModal } from '../store/uiSlice';

export function useUserLogin() {
    const dispatch = useDispatch();
    const { user, token, userLogged, loading, error } = useSelector(state => state.user);

    const handleLogin = async (email, password) => {
        try {
            await dispatch(login({ email, password })).unwrap();
            dispatch(clearModal());
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return {
        user,
        token,
        userLogged,
        loading,
        error,
        login: handleLogin,
    };
}