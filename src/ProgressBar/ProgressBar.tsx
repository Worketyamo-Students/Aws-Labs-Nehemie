interface Props {
    color?: string;
}

const ProgressBar = ({ color }: Props) => {
    return (
<div className={`${color} rounded-full h-2 w-full transition-all duration-300`}></div>    )
}

export default ProgressBar