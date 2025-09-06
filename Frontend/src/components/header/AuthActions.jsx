import { useUI } from "../../hooks/useUI"

export default function AuthActions() {
    const { openModal, activeModal } = useUI();

    return (
        <nav>
            <button onClick={() => openModal("login")}>Login</button>
            <button onClick={() => openModal("signup")}>Signup</button>
        </nav>
    )
}