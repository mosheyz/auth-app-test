import { useAuthStore } from "../store/useAuthSyore";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { token } = useAuthStore();

    if (!token) {
        return <Navigate to={"/login"} replace />;
    }
    return <Outlet />;
};
