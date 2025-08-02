import Entete from "./Entete/Entete";
import Input from "./Input/Input";
import Option from "./Option/Option";
import Button from "./Button/Button";
import Connect from "./Connect/Connect";
import Police from "./Police/Police";
import Form from "./Form/Form";
import ProgressionFooter from "../ProgressionFooter/ProgressionFooter";
import { registeUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


const Inscription = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registeUser({ email, password });
      console.log("Succès:", response.data);
      navigate("/verification");
    } catch (error) {
      console.error("Erreur:", error);
      setError("Une erreur s'est produite lors de l'inscription.");
    }
  }

  return (
    <>
      <div className="pt-[6rem] pb-[3rem] px-[1.5rem]">
        <Entete />
        <Form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="text"
            placeholder="abc@example.com"
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            label="Mot de passe"
            type="password"
            placeholder="**************"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          {error && <p className="text-red-500">{error}</p>}

        </Form>
        <Option />
        <Connect image="/src//assets/github-logo.svg" text="Github" />
        <Connect image="/src/assets/Google.svg" text="Google" />
        <Button text="Creer le compte" 
        />
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
