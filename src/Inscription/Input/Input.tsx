interface Props {
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ label, type, placeholder, required, value, onChange}) => {
    return (
        <div className="flex flex-col gap-1 pt-3">
            <label htmlFor={label} className="font-medium text-[1rem] text-[#09090B]">{label}</label>
            <input 
                className="font-normal text-[#71717A] p-3 border-[1px] border-[#E4E4E7] rounded-md bg-[#F4F4F580]" 
                type={type} 
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}

            />
        </div>
    )
}

export default Input;