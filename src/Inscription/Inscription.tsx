import Entete from "./Entete/Entete";
import Input from "./Input/Input";
import Button from "./Button/Button";

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
        <Button text="Creer le compte" />
      </div>
  );
};

export default Inscription;
