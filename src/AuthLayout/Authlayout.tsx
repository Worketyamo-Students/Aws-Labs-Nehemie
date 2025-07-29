import Side from "../side/side";
import { useMediaQuery } from "react-responsive";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? (
    <div className="flex h-screen">
      <Side />
      <div className="w-full lg:w-[70%] overflow-y-auto">{children}</div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;