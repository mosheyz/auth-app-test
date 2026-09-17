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
            <h2>Your profile details is right here:</h2>
            <br />
            <h3>
                Wellcome{" "}
                {profileData.username.includes(" ")
                    ? profileData.username.split(" ")[0]
                    : profileData.username}
            </h3>
            <p>Your details:</p>
            <br />
            <div className="profile-details">
                <p>Username: {profileData.username}</p>
                <p>Email: {profileData.email}</p>
            </div>
            <br />
            <p>The password is not shown.. sorry {":("}</p>
            <br />
            <button className="logout-btn" onClick={hnadleLogout}>
                logout
            </button>
        </div>
    );
};

export default ProfilePage;
