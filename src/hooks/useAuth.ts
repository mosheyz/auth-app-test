import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { api } from "../services/authAxios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAuth = () => {
    const { logout, token, setToken } = useAuthStore();
    const navigate = useNavigate();

    const signupQuery = useMutation({
        mutationFn: api.signup,
        onSuccess: (data) => {
            if (data.token) {
                setToken(data.token);
                navigate("/profile");
            }
        },
    });

    const loginQuery = useMutation({
        mutationFn: api.login,
        onSuccess: (data) => {
            if (data.token) {
                setToken(data.token);
                navigate("/profile");
            }
        },
    });

    const profileQuery = useQuery({
        queryKey: ["profile"],
        queryFn: () => api.getProfile(token!),
    });

    const logoutFn = () => {
        logout();
    };

    return {
        signup: signupQuery.mutate,
        signupPending: signupQuery.isPending,
        signupError: signupQuery.error,

        login: loginQuery.mutate,
        loginPending: loginQuery.isPending,
        loginError: loginQuery.error,

        profileData: profileQuery.data,
        profilePending: profileQuery.isPending,
        profileError: profileQuery.error,

        logoutFn,
    };
};
