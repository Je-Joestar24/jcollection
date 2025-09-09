import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useAuth";

export default function RequireAuth({ children }) {
  const { user, userLogged, loading } = useUserAuth(); // <- add a loading state if you don’t have one

  // Still checking auth (e.g. reading token from storage, validating session)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || !userLogged) {
    return <Navigate to="/" replace />;
  }
  return children;
}
