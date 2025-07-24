interface Props {
    link: string
}

export function Logo ({link}: Props) {
    return (
        <img src={link} alt="Logo-worketyamo" className="w-[20rem] h-[4rem]" />
    )
}