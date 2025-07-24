import Entete from "../Verification/Entete/Entete";
import Button from "../Inscription/Button/Button";
import Police from "../Inscription/Police/Police";

const Verification = () => {
    return (
        <div className="pt-[10rem] pb-[3rem] px-[1.5rem]">
            <Entete />
            <Button text="Creer le compte" />
            <Police  text1="By clicking continue, you agree to our  " link1="#" text2="Terms of Service   " 
              text3="    and" 
              link2="#" text4="    Privacy Policy."/> 

        </div>
    )
}

export default Verification