import { useState } from "react";
import { useAuth } from "../hooks/useAuth.ts";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loginError, loginPending } = useAuth();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        login({ username, email, password });
    };

    if (loginPending) return <p>Loging in...</p>;
    if (loginError) return <p>Error: {loginError.message}</p>;
    return (
        <div>
            <form
                onSubmit={(e: React.FormEvent) => handleSubmit(e)}
                className="login-form"
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default LoginForm;
