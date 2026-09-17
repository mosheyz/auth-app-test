import { useAuth } from "../hooks/useAuth";

const ProfilePage = () => {
    const { profileData, profilePending, profileError, logoutFn } = useAuth();
    if (profilePending) return <p>Loging in...</p>;
    if (profileError) return <p>Error: {profileError.message}</p>;

    const hnadleLogout = () => {
        logoutFn();
    };

    return (
        <div>
            ProfilePage
            <h2>Wellcome {profileData.username}</h2>
            <p>User details:</p>
            <p>Email: {profileData.email}</p>
            <p>Id: {profileData.id}</p>
            <button onClick={hnadleLogout}>logout</button>
        </div>
    );
};

export default ProfilePage;
