import Entete from "./Entete/Entete";
import Input from "./Input/Input";
import Option from "./Option/Option";
import Button from "./Button/Button";
import Connect from "./Connect/Connect";
import Police from "./Police/Police";
import Form from "./Form/Form";
import { useState } from "react";
import ProgressionFooter from "../ProgressionFooter/ProgressionFooter";
import { registeUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import type { AxiosError } from "axios";

const Inscription = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registeUser({ email, password, name });
      console.log("Succès:", response.data);
      localStorage.setItem("email", email);
      navigate("/verification");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error("Erreur Axios:", axiosError);
        setError(
          (axiosError.response?.data as { message: string })?.message ||
            "Erreur Axios"
        );
      } else if (error instanceof Error) {
        console.error("Erreur JS:", error.message);
        setError(error.message);
      } else {
        setError("Erreur inconnue");
      }
    }
  };

  return (
    <>
      <div className="pt-[3rem] pb-[2rem] px-[1.5rem] lg:px-[30%]">
        <Entete />
        <Form onSubmit={handleSubmit}>
          <Input
            label="Nom"
            type="text"
            placeholder="Entrer le nom"
            required
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          /> 
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

          <Option />
          <Connect 
            image="/src//assets/github-logo.svg" 
            text="Github" 
            onClick={() => window.location.href = 'http://localhost:5000/api/auth/github'}
          />
          <Connect 
            image="/src/assets/Google.svg" 
            text="Google" 
            onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}
          />
          <Button text="Creer le compte" type="submit" />
        </Form>

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
