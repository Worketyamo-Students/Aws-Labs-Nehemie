interface Props {
    type: string;
    placeholder: string;
}

const Input = ({ type, placeholder }: Props) => {
    return (
        <div className="flex flex-col gap-1 pt-3">
            <input 
                className="font-normal text-[#71717A] text-[1rem] p-3 border-[1px] border-[#E4E4E7] rounded-md bg-[#F4F4F580]" 
                type={type} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input