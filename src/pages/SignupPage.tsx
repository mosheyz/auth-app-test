import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
    return (
        <div>
          <SignupForm />
            Already have a profile? <Link to={"/"}>Login here</Link>
        </div>
    );
};

export default SignupPage;
