import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/appointments");
  };
  return (
    <div>
      Welcome to SaaS how can i help you
      <button onClick={handleClick}>appointments</button>
    </div>
  );
};
