import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Loading from "../../ui/Loading";

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();

  if (isAuthenticated === null) {
    return (
      <main className="h-screen flex justify-center items-center">
        <Loading text="loading..." />
      </main>
    );
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default ProtectedRoute;