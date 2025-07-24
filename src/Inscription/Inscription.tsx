import Entete from "./Entete/Entete";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Connect from "./Connect/Connect";
import Police from "./Police/Police";

const Inscription = () => {
  return (
      <div className="pt-[5rem] pb-[3rem] px-[1.5rem]">
        <Entete />
        <div className="flex flex-col gap-2 pt-4">
            <Input label="Email" type="text" placeholder="abc@example.com" required/>
            <Input label="Mot de passe" type="password" placeholder="**************" required/>
        </div>
        {/* <div className="flex justify-between w-full pt-2">
            <Progression color="bg-[#00539C]" /> 
            <Progression color="bg-[#D9D9D9]" />
            <Progression color="bg-[#D9D9D9]" />
            <Progression color="bg-[#D9D9D9]" /> 
        </div>  */}
        <Connect image="/src//assets/github-logo.svg" text="Github"/>
        <Connect image="/src/assets/Google.svg" text="Google" />
        <Button text="Creer le compte" />
        <Police  text1="By clicking continue, you agree to our  " link1="#" text2="Terms of Service   " 
              text3="    and" 
              link2="#" text4="    Privacy Policy."/> 
           
      </div>
  );
};

export default Inscription;
