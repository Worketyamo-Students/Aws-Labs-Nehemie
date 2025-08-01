interface Props {
    text: string
    onClick?: () => void
}

const Button: React.FC<Props> = ({ text }) => {
    return (
        <div className="w-full p-[.8rem] mt-8 rounded-md bg-[#00539C] flex align-center justify-center cursor-pointer">
            <p className="font-medium text-[1.2rem] text-[#FAFAFA] text-center">{text}</p>
        </div>
    )
}

export default Button;