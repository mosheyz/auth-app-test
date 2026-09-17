import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <LoginForm />
            Do not have a profile? <Link to={"/signup"}>Signup here</Link>
        </div>
    );
};

export default LoginPage;
