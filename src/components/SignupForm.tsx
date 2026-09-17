import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { api } from "../services/authAxios.ts";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { isPending, error, mutate } = useMutation({
        mutationFn: () => api.signup({ username, email, password }),
        onSuccess: () => {
            console.log({ username, email, password })
            navigate("/");
        },
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        mutate();
    };

    if (isPending) return <p>Signing up...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <form className="signup-form">
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" onSubmit={() => handleSubmit}>
                    Signup
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
