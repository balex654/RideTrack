import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
    const { logout } = useAuth0();

    const handleLogout = (event: any) => {
        event.preventDefault();
        logout({ returnTo: process.env.REACT_APP_RETURN_TO_URI });
    }

    return (
        <div>Dashboard
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;