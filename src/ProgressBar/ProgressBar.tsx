import { useNavigate } from "react-router-dom";

interface Props {
  color?: string;
  path: string;
}

const ProgressBar = ({ color, path }: Props) => {
    const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path)}
      className={`${color} rounded-full h-2 w-full cursor-pointer transition-all duration-300`}
    ></div>
  );
};

export default ProgressBar;
