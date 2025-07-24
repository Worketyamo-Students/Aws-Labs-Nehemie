import Icon from "../../Inscription/Entete/Icon/Icon";
import Titre from "../../Inscription/Entete/Titre/Titre";

const Entete = () => {
    return (
        <div className="flex flex-col items-center gap-[2rem]">
            <Icon />
            <Titre 
                text="Bienvenue"
                paragraph="Plus que 3 petites minutes ........"
            />
        </div>
    )
}

export default Entete