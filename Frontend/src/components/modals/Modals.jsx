import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { useUI } from "../../hooks/useUI";
import ProductModal from "./ProductModal";

export default function Modals() {
    const { activeModal, closeModal } = useUI();
    return (
        <>
            {activeModal === "login" && (
                <LoginModal onClose={closeModal} />
            )}
            {activeModal === "signup" && (
                <SignupModal onClose={closeModal} />
            )}
            {activeModal == 'product' && (
                <ProductModal onClose={closeModal} />
            )}
        </>
    );
}