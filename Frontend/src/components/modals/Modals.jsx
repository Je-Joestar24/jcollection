import LoginModal from "./LoginModal";
import { useUI } from "../../hooks/useUI";

export default function Modals() {
    const { activeModal, closeModal } = useUI();
    return (
        <>
            {activeModal === "login" && (
                <LoginModal onClose={closeModal} />
            )}
        </>
    );
}