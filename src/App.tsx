import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/profile" element={<ProfilePage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
