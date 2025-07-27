import { Link } from "react-router-dom";

interface IList {
    text: string;
    links: string[];
}

const List = ({ text, links }: IList) => {
    return (
        <div className="w-fit h-full flex flex-col gap-[15px] text-base">
            <p>{text}</p>
            <Link className=" text-[#00000099]" to={"/"}>
                {links[0]}
            </Link>
            <Link className=" text-[#00000099]" to={"/"}>
                {links[1]}
            </Link>
            <Link className=" text-[#00000099]" to={"/"}>
                {links[2]}
            </Link>
            <Link className=" text-[#00000099]" to={"/"}>
                {links[3]}
            </Link>
        </div>
    );
};

export default List;
