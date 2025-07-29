import { StepSidebar } from "../StepSidebar/StepSidebar";
import TimeLine from "../TimeLine/Timeline";

const Side = () => {
    return (
        <div className="flex flex-col items-baseline w-[30%] px-20  gap-20 pt-[28px] h-[100%] bg-[#00539C0A] my-[2rem] mx-[2rem]">
            <img
                src="/src/assets/Icon-worketyamo.svg"
                alt="Worketyamo"
                className="w-[100px] h-[100px]"
            />
            <div>
                <StepSidebar
                    path="/"
                    image="/src/assets/Person.svg"
                    label="Inscription"
                    text="Entrez vos informations personnelles."
                >
                    <TimeLine path="/verification" />
                </StepSidebar>

                <StepSidebar
                    path="/verification"
                    image="/src/assets/mail.svg"
                    label="Validation OTP"
                    text="Confirmez votre adresse e-mail."
                >
                    <TimeLine path="/finalisation" />
                </StepSidebar>

                <StepSidebar
                    path="/finalisation"
                    image="/src/assets/add-team.svg"
                    label="Invitez vos amis"
                    text="Envoyez des invitations à vos amis."
                >
                    <TimeLine path="/bienvenue" />
                </StepSidebar>

                <StepSidebar
                    path="/Bienvenue"
                    image="/src/assets/rocket-stroke.svg"
                    label="Bienvenue à Worketyamo"
                    text="Votre inscription est terminée."
                ></StepSidebar>
            </div>
        </div>
    );
};

export default Side;
