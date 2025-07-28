import ProgressBar from "../ProgressBar/ProgressBar";

const stepColors = [
  "bg-[#FFA273] opacity-60", 
  "bg-[#FFA273]",
  "bg-gradient-to-r from-[#FFA273] to-[#00539C]", 
  "bg-[#00539C]", 
];

const ProgressionFooter = ({ currentStep = 0}: { currentStep: number }) => {
    return (
        <div className="flex gap-2 items-center w-full pt-[3rem]">
            {stepColors.map((color, index) => {
                if (index < currentStep) {
                    return <ProgressBar key={index} color={color} />;
                } else if (index === currentStep) {
                    return <ProgressBar key={index} color={color} />;
                } else {
                    return <ProgressBar key={index} color="bg-[#D9D9D9]" />;
                }
            })}
        </div>
    )
}

export default ProgressionFooter