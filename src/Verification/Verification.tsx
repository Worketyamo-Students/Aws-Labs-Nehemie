import Entete from "../Verification/Entete/Entete";
import OTP from "./OTP/OTP";
import Button from "../Inscription/Button/Button";
import Police from "../Inscription/Police/Police";
import ProgressionFooter from "../ProgressionFooter/ProgressionFooter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyotp } from "../services/authService";
import axios from "axios";
import type { AxiosError } from "axios";

const Verification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const email = localStorage.getItem("email") || ""; // On récupere l'email stocké dans le localStorage à la connexion

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  }

  const handleSubmit = async () => {
    try {
      const fullOtp = otp.join("");
      const response = await verifyotp({ email, otp: fullOtp });
      console.log("Succès:", response.data);
      navigate("/Finalistion");
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
  }
  return (
  <div className="pt-[3rem] pb-[2rem] px-[1.5rem] lg:px-[30%]">
      <Entete />
      <div className="flex items-center gap-3 my-[2rem]">
        {otp.map((digit, index) => (
          <OTP
            key={index}
            type="number"
            value={parseInt(digit)}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <Button 
        text="Creer le compte" 
        onClick={handleSubmit}
      />
      <Police
        text1="By clicking continue, you agree to our  "
        link1="#"
        text2="Terms of Service   "
        text3="    and"
        link2="#"
        text4="    Privacy Policy."
      />
      <ProgressionFooter currentStep={1} padding="pt-[16rem]"/>
    </div>
  );
};

export default Verification;
