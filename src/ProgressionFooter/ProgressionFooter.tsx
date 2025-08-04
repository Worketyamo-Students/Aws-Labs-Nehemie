import ProgressBar from "../ProgressBar/ProgressBar";

interface Props {
    currentStep: number;
    padding?: string 
}

const stepPaths = [
    "/",
    "/Verification",
    "/Finalisation",
    "/Bienvenue",
]

const stepColors = [
  "bg-[#FFA273] opacity-60", 
  "bg-[#FFA273]",
  "bg-gradient-to-r from-[#FFA273] to-[#00539C]", 
  "bg-[#00539C]", 
];



const ProgressionFooter = ({ currentStep = 0, padding} : Props) => {
    return (
        <div className={`flex gap-2 items-center w-full pt-[3rem] ${padding}`}>
            {stepColors.map((color, index) => {
                const appliedColor = 
                    index < currentStep ? color :
                    index === currentStep ? color :
                    "bg-[#D9D9D9] opacity-60";

                return (
                    <ProgressBar key={index} color={appliedColor} path={stepPaths[index]}/>
                )
            })}
        </div>
    )
}

export default ProgressionFooter