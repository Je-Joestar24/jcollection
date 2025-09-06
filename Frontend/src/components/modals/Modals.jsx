import LoginModal from "./LoginModal";
import { useUI } from "../../hooks/useUI";

export default function Modals() {
    const { activeModal, closeModal } = useUI();
    return (
        <LoginModal open={activeModal === "login"} onClose={() => { closeModal() }} />
    );
}