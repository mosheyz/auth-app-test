import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
    return (
        <div>
            <h2>Signup here</h2>
            <br />
            <SignupForm />
            <br />
            Already have a profile? <Link to={"/"}>Login here</Link>
        </div>
    );
};

export default SignupPage;
