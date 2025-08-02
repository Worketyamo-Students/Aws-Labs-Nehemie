interface Props {
    text: string
    type?: "button" | "submit" | "reset"
    onClick?: () => void
}

const Button: React.FC<Props> = ({ text, onClick, type = "button" }) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className="w-full p-[.8rem] mt-8 rounded-md bg-[#00539C] flex align-center justify-center cursor-pointer"
        >
            <p className="font-medium text-[1.2rem] text-[#FAFAFA] text-center">{text}</p>
        </button>
    )
}

export default Button;