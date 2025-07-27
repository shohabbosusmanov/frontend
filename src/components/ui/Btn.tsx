import type React from "react";
import type { HTMLAttributes } from "react";

interface IBtn extends HTMLAttributes<HTMLButtonElement> {
    text: string;
    bg?: string;
    color?: string;
}

const Btn: React.FC<IBtn> = ({
    text,
    bg = "bg-[#F0F0F0]",
    color = "text-[#00000099]",
    className = "",
    ...rest
}: IBtn) => {
    return (
        <button
            {...rest}
            className={`py-3 px-6 rounded-full transition-all duration-400 ${color} ${bg} ${className}`}
        >
            {text}
        </button>
    );
};

export default Btn;
