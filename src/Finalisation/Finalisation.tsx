import Entete from "./Entete/Entete";
import Input from "./Input/Input";
import Button from "../Inscription/Button/Button";
import Police from "../Inscription/Police/Police";
import ProgressBar from "../ProgressBar/ProgressBar";

const Finalisation = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] px-[1.5rem]">
      <Entete />
      <div className="flex flex-col gap-2 mt-6">
        <h3 className="text-[#09090B] text-[1.2rem] font-medium">
          Numeros de Télephone
        </h3>
        <Input type="number" placeholder="Numero whatsapp" />
        <Input type="number" placeholder="Numero whatsapp" />
        <Input type="number" placeholder="Numero whatsapp" />
        <Input type="number" placeholder="Numero whatsapp" />
      </div>
      <Button text="Creer le compte" />
      <Police
        text1="By clicking continue, you agree to our  "
        link1="#"
        text2="Terms of Service   "
        text3="    and"
        link2="#"
        text4="    Privacy Policy."
      />
      <ProgressBar currentStep={2} />
    </div>
  );
};

export default Finalisation;
