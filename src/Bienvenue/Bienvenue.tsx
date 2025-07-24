import Entete from "./Entete/Entete";
import Button from "../Inscription/Button/Button";
import Police from "../Inscription/Police/Police";

const Bienvenue = () => {
    return (
        <div className="pt-[8rem] pb-[3rem] px-[1.5rem]">
            <Entete />
            <img src="/src/assets/Bienvenu.svg" alt="Acceuil"  className="w-full my-[2rem]"/>
            <Button text="Creer le compte" />
            <Police  text1="By clicking continue, you agree to our  " link1="#" text2="Terms of Service   " 
              text3="    and" 
              link2="#" text4="    Privacy Policy."/> 

        </div>
    )
}

export default Bienvenue