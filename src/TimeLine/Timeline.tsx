import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
interface prop {
  path: string;
}
const TimeLine = ({ path }: prop) => {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate(-1);
  }
  return (
    <div className="flex justify-between w-full text-[#00539C] pt-65 ">
      <div onClick={handleNavigation} className="flex gap-4">
        <img src="/arrow.svg" alt="" /> Vos details
      </div>
      <Link to={path}>sign Up</Link>
    </div>
  );
};

export default TimeLine;