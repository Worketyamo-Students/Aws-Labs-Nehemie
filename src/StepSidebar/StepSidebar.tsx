import { Logo } from "./Logo/Logo"

export function StepSidebar() {
    return (
        <div className="flex flex-col my-[2rem] mx-[2rem] bg-[#FAFAFA]">
            <Logo link="/src//assets//logo-worketyamo.svg" />
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                    <img src="/src//assets//fleche.svg" alt="fleche" />
                    <p className="text-[1.5rem] text-[#00539C] font-medium">Vos details</p>
                </div>
                <a href="/" className="text-[1.3rem] text-[#00539C] font-medium">SignIn</a>
            </div>
        </div>
    )
}