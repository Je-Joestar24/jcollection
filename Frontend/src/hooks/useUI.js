import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal, clearModal } from '../store/uiSlice';

export function useUI() {
    const dispatch = useDispatch();
    const { activeModal, globalLoading } = useSelector(state => state.ui);

    const openModal = (modalName) => {dispatch(setActiveModal(modalName));};

    const closeModal = () => dispatch(clearModal());

    return {
        globalLoading,
        activeModal,
        openModal,
        closeModal,
    };
}
