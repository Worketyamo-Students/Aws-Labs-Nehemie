import { NavLink, useLocation } from "react-router-dom";

interface Props {
  image: string;
  label: string;
  text: string;
  path: string;
  children?: React.ReactNode;
}

export function StepSidebar({ image, label, text, path, children }: Props) {
    const location = useLocation();
    const isActive = location.pathname === path;
  return (
    <>
      <NavLink to={path}>
      <div className={`flex gap-3 items-center cursor-pointer ${isActive ? 'opacity-100' : 'opacity-50'}`}>
          <div className="border-1 border-gray-300 bg-white rounded-2xl h-[50px] w-[59px] flex justify-center items-center">
            <img src={image} alt={label} className="h-[32px] w-[25px]" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="">{label}</h3>
            <p className="">{text}</p>
          </div>
        </div>
      </NavLink>
      {children}
    </>
  );     
}
