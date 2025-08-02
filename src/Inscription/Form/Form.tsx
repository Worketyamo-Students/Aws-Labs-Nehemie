import type React from "react";

interface FormProps {
    children: React.ReactNode;
    onSubmit?: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}className="flex flex-col gap-2 pt-4">
            {children} 
        </form>
    )
}

export default Form