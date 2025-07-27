interface Props {
    link: string
}

const IconStep = ({ link }: Props) => {
    return (
        <div className="flex justify-center items-center p-3">
            <img src={link} alt="Icone de l'étape" />
        </div>
    )
}

export default IconStep