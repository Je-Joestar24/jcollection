import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal, clearModal } from '../store/uiSlice';

export function useUI() {
    const dispatch = useDispatch();
    const { activeModal } = useSelector(state => state.ui);

    const openModal = (modalName) => {dispatch(setActiveModal(modalName));};

    const closeModal = () => dispatch(clearModal());

    return {
        activeModal,
        openModal,
        closeModal,
    };
}
