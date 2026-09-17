import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { token } = useAuthStore();

    if (!token) {
        return <Navigate to={"/"} replace />;
    }
    return <Outlet />;
};
