import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth.ts";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signup, signupError, signupPending } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        signup({ username, email, password });
    };

    if (signupPending) return <p>Signing up...</p>;
    if (signupError) return <p>Error: {signupError.message}</p>;
    return (
        <div>
            <form
                onSubmit={(e: React.FormEvent) => handleSubmit(e)}
                className="signup-form"
            >
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupForm;
