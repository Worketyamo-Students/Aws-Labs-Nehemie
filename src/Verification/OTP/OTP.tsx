interface Props {
    type: string;
    value: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

}
const OTP = ({ type, value, onChange }: Props) => {
    return (
        <div 
            className="w-[6.5rem] h-[6.5rem] bg-[#F4F4F580] border-[1px] border-[#E4E4E7] rounded-md flex justify-center items-center"
            onChange={onChange}
        >
            <input type={type} value={value} className="w-[3.5rem] h-[2rem]"/>
        </div>
    )
}

export default OTP