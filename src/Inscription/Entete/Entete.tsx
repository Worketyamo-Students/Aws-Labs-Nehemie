import Icon from "./Icon/Icon"
import Titre from "./Titre/Titre"

const Entete = () => {
    return (
        <div className="flex flex-col items-center gap-[2rem]">
            <Icon />
            <Titre 
                text="Creation de compte"
                paragraph="Rentrez vos infos pour creer votre compte."
            />
        </div>
    )
}

export default Entete;