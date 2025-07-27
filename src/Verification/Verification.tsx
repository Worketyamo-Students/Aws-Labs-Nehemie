import Entete from "../Verification/Entete/Entete";
import OTP from "./OTP/OTP";
import Button from "../Inscription/Button/Button";
import Police from "../Inscription/Police/Police";
import FooterLoaging from "../FooterLoaging/FooterLoaging";

const Verification = () => {
  return (
    <div className="pt-[8rem] pb-[3rem] px-[1.5rem]">
      <Entete />
      <div className="flex items-center gap-3 my-[2rem]">
        <OTP type="number" value="#" />
        <OTP type="number" value="#" />
        <OTP type="number" value="#" />
        <OTP type="number" value="#" />
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
      <FooterLoaging />
    </div>
  );
};

export default Verification;
