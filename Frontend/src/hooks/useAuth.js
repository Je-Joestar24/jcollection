import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';

export function useUserLogin() {
    const dispatch = useDispatch();
    const { user, token, userLogged, loading, error } = useSelector(state => state.user);

    const handleLogin = async (email, password) =>  dispatch(login({ email, password }));

    return {
        user,
        token,
        userLogged,
        loading,
        error,
        login: handleLogin,
    };
}