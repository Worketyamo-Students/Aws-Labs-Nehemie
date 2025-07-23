interface Props {
    text: string;
    paragraph: string
}
const Titre: React.FC<Props> = ({ text, paragraph}) => {
    return (
        <div className="flex flex-col text-center">
            <h1 className="text-[1.5rem] text-[#18181B] font-semibold ">{text}</h1>
            <p className="font-400 text-[1.1rem] text-[#71717A]">{paragraph}</p>
        </div>
    )
}

export default Titre;          