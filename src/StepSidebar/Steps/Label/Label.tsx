interface Props {
    label: string
    description: string
}

export function Label ({label, description}: Props) {
    <div className="flex flex-col gap-1">
        <h1 className="">{label}</h1>
        <p>{description}</p>
    </div>
}