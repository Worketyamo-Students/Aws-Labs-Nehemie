interface Props {
    text: string
}

const Button: React.FC<Props> = ({ text }) => {
    return (
        <div className="w-full p-[1rem] mt-4 rounded-md bg-[#00539C] flex align-center justify-center ">
            <p className="font-medium text-[1.2rem] text-[#FAFAFA] text-center">{text}</p>
        </div>
    )
}

export default Button;