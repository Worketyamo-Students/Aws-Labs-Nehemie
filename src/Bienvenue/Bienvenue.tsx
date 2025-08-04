import Entete from "./Entete/Entete";
import Button from "../Inscription/Button/Button";
import Police from "../Inscription/Police/Police";
import ProgressionFooter from "../ProgressionFooter/ProgressionFooter";

// const API_URL = import.meta.env.VITE_API_URL;

const Bienvenue = () => {
  return (
    <div className="pt-[3rem] pb-[2rem] px-[1.5rem] lg:px-[30%]">
      <Entete />
      <img
        src="/src/assets/Bienvenu.svg"
        alt="Acceuil"
        className="w-full my-[2rem] lg:h-[20rem]"
      />
      <Button text="Creer le compte" />
      <Police
        text1="By clicking continue, you agree to our  "
        link1="#"
        text2="Terms of Service   "
        text3="    and"
        link2="#"
        text4="    Privacy Policy."
      />
      <ProgressionFooter currentStep={3} />
    </div>
  );
};

export default Bienvenue;
