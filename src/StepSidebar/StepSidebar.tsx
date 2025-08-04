import { NavLink, useLocation } from "react-router-dom";
{/* "Navlink" : un composant React Router qui permet de créer un lien de navigation avec des classes conditionnelles automatiques selon l'URL active.
    "useLocation" : hook de React Router qui retourne l’objet location (chemin actuel, hash, etc.). Il est utilisé ici pour savoir quelle page est active.
*/}

interface Props {
  image: string;
  label: string;
  text: string;
  path: string;
  children?: React.ReactNode; // pour ajouter éventuellement un composant enfant (comme TimeLine)
}

export function StepSidebar({ image, label, text, path, children }: Props) {
    const location = useLocation();
    const isActive = location.pathname === path;
  return (
    <>
      <NavLink to={path}>
      <div className="flex gap-3 items-center cursor-pointer text-[#8080808C]">
          <div className="border-[1px] border-gray-400 rounded-2xl h-[50px] w-[59px] flex justify-center items-center">
            <img src={image} alt={label} className={`h-[32px] w-[25px] ${isActive ? 'fill-[#000000]' : 'fill-[#8080808C]'}`} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className={`text-[20px] font-medium ${isActive ? 'text-[#000000]' : 'text-[#8080808C]'}`}>{label}</h3>
            <p className="">{text}</p>
          </div>
        </div>
      </NavLink>
      {children}
    </>
  );     
}
