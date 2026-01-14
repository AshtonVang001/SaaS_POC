import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/demo");
  };
  const handleAccount = () => {
    navigate("/create_account");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleDashboard = () => {
    navigate("/dashboard")
  }

  return (
    <div>
      Welcome to SaaS how can i help you
      <button onClick={handleDemo}>Demo</button>
      <button onClick={handleAccount}>Create Your Organization</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleDashboard}>Dashboard</button>
    </div>
  );
};
