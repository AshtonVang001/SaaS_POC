import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
  const { companyName } = useAuth();

  return <div>Welcome {companyName} to your Dashboard!</div>;
};
