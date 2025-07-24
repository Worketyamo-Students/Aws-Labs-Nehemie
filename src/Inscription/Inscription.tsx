import Entete from "./Entete/Entete";
import Input from "./Input/Input";
import Option from "./Option/Option";
import Button from "./Button/Button";
import Connect from "./Connect/Connect";
import Police from "./Police/Police";
import ProgressBar from "../ProgressBar/ProgressBar";

const Inscription = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] px-[1.5rem]">
      <Entete />
      <div className="flex flex-col gap-2 pt-4">
        <Input
          label="Email"
          type="text"
          placeholder="abc@example.com"
          required
        />
        <Input
          label="Mot de passe"
          type="password"
          placeholder="**************"
          required
        />
      </div>
      <Option />
      <Connect image="/src//assets/github-logo.svg" text="Github" />
      <Connect image="/src/assets/Google.svg" text="Google" />
      <Button text="Creer le compte" />
      <Police
        text1="By clicking continue, you agree to our  "
        link1="#"
        text2="Terms of Service   "
        text3="    and"
        link2="#"
        text4="    Privacy Policy."
      />
      <ProgressBar currentStep={0} />
    </div>
  );
};

export default Inscription;
