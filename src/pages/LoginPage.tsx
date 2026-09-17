import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <h2>Wellcome to my website!!</h2>
            <br />
            <LoginForm />
            <br />
            Do not have a profile? <Link to={"/signup"}>Signup here</Link>
        </div>
    );
};

export default LoginPage;
