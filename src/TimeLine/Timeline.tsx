import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";
{/* "Link" : un composant React Router qui permet de créer un lien de navigation. Naviguer sans recharger la page. 
  "useNavigate" : hook de React Router qui permet de naviguer vers une autre page sans recharger la page." 
*/}
interface prop {
  path: string;
}
const TimeLine = ({ path }: prop) => {
  // const navigate = useNavigate();
  function handleNavigation() {
    window.history.back();
  }
  return (
    <div className="flex justify-between w-full text-[#00539C] pt-[5.5rem] ">
      <div onClick={handleNavigation} className="flex gap-4 cursor-pointer">
        <img src="/src/assets/fleche.svg" alt="" /> Vos details
      </div>
      <Link to={path}>signIn</Link>
    </div>
  );
};

export default TimeLine;