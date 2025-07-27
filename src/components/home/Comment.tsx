import StarRating from "./Rating";
import dots from "../../assets/icons/dot.svg";
import icon from "../../assets/icons/icon.svg";

interface IComment {
    rating: number;
    name: string;
    textContent: string;
    posted: string;
}

const Comment = ({ rating, name, textContent, posted }: IComment) => {
    return (
        <div className="w-[610px] h-[242px] py-7 px-8 border rounded-[14px]">
            <div className=" flex items-center justify-between  ">
                <StarRating rating={rating} />
                <img src={dots} alt="dots" />
            </div>
            <div className="flex items-center gap-1 mt-[15px] mb-3 h-6">
                <span className="text-[22px] font-[600]">{name}</span>
                <img src={icon} alt="icon" />
            </div>
            <p className="mb-6 text-[#00000099] text-base leading-[22px]">
                {textContent}
            </p>
            <p className="text-[22px]  text-[#00000099]">{posted}</p>
        </div>
    );
};

export default Comment;
