import { StepSidebar } from "../StepSidebar/StepSidebar";
import TimeLine from "../TimeLine/Timeline";

const Side = () => {
    return (
        <div className="flex flex-col w-[40%] h-[100%] px-20 bg-[#00539C0A] ">
            <img
                src="/src/assets/worketyamo.svg"
                alt="Worketyamo"
                className="w-[15rem] h-[15rem]"
            />
            <div className="flex flex-col gap-[3rem]">
                <StepSidebar
                    path="/"
                    image="/src/assets/Person.svg"
                    label="Inscription"
                    text="Entrez vos informations personnelles."
                >
                    {/* <TimeLine path="/verification" /> */}
                </StepSidebar>

                <StepSidebar
                    path="/verification"
                    image="/src/assets/mail.svg"
                    label="Validation OTP"
                    text="Confirmez votre adresse e-mail."
                >
                    {/* <TimeLine path="/finalisation" /> */}
                </StepSidebar>

                <StepSidebar
                    path="/finalisation"
                    image="/src/assets/add-team.svg"
                    label="Invitez vos amis"
                    text="Envoyez des invitations à vos amis."
                >
                    {/* <TimeLine path="/bienvenue" /> */}
                </StepSidebar>

                <StepSidebar
                    path="/Bienvenue"
                    image="/src/assets/rocket-stroke.svg"
                    label="Bienvenue à Worketyamo"
                    text="Votre inscription est terminée."
                ></StepSidebar>

                <TimeLine path="/Bienvenue" />
            </div>
        </div>
    );
};

export default Side;
