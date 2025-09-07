import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useAuth";

export default function RequireAuth({ children }) {
  const { userLogged, user } = useUserAuth();

  if (!userLogged || !user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
