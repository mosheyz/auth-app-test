import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    
    return (
        <div>
            Do not have a profile? <Link to={"/signup"}>Signup here</Link>
        </div>
    );
};

export default LoginPage;
