interface ProgressBarProps {
    currentStep: Number;
}

const ProgressBar = ({ currentStep } :ProgressBarProps) => {
    const stepColors = [
        "bg-linear-to-r from-[#FFA273] from-56% to-[#FFA273]",
        "bg-[#FFA273]",
        "bg-linear-to-r from-[#FFA273] to-[#00539C]",
        "bg-[#00539C]"
    ];

    return(
        <div className="flex justify-between items-center w-full pt-4 ">
            {stepColors.map((color, index) => (
                <div 
                   key={index}
                   className="w-4 h-4 rounded-full mx-1 flex-1"
                   style={{ 
                       backgroundColor: color, 
                       opacity: currentStep === index ? 1 : 0.3,
                       transition: "opacity 0.3s ease"
                   }}
                /> 
            ))}
        </div>
    )
}

export default ProgressBar;