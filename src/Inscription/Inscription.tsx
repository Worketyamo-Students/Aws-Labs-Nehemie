import Entete from "./Entete/Entete";
import Input from "./Input/Input";
import Option from "./Option/Option";
import Button from "./Button/Button";
import Connect from "./Connect/Connect";
import Police from "./Police/Police";
import ProgressionFooter from "../ProgressionFooter/ProgressionFooter";
import { registeUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Inscription = () => {
  const  [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await registeUser(email, password);
      console.log("Succès:", response.data);
      navigate("/verification"); 
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Erreur:", err.message || "Erreur inconnue");
      } else {
        console.error("Erreur inconnue:", err);
      }
    }
  };
    return (
    <>
      <div className="pt-[6rem] pb-[3rem] px-[1.5rem]">
        <Entete />
        <div className="flex flex-col gap-2 pt-4">
          <Input
            label="Email"
            type="text"
            placeholder="abc@example.com"
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Input
            label="Mot de passe"
            type="password"
            placeholder="**************"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>
        <Option />
        <Connect image="/src//assets/github-logo.svg" text="Github" />
        <Connect image="/src/assets/Google.svg" text="Google" />
        <Button text="Creer le compte" onClick={handleRegister} />
        <Police
          text1="By clicking continue, you agree to our  "
          link1="#"
          text2="Terms of Service   "
          text3="    and"
          link2="#"
          text4="    Privacy Policy."
        />
        <ProgressionFooter currentStep={0} />
      </div>
    </>
  );
};

export default Inscription;
