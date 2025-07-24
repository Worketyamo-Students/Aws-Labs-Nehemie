import Icon from "../../Inscription/Entete/Icon/Icon";
import Titre from "../../Inscription/Entete/Titre/Titre";

const Entete = () => {
    return (
        <div className="flex flex-col items-center gap-[2rem]">
            <Icon />
            <Titre 
                text="Finalisation"
                paragraph="Inviter 04 amis pour finaliser l’inscription "
            />
        </div>
    )
}

export default Entete