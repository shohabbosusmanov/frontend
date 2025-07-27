import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoIosArrowForward, IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import img2 from "../../assets/images/image2.svg";
import img3 from "../../assets/images/image3.svg";
import img4 from "../../assets/images/image4.svg";
import img from "../../assets/images/img.svg";
import Btn from "../ui/Btn";
import StarRating from "./Rating";

const HeroSection = () => {
    const [activeClr, setActiveclr] = useState(1);
    const [sizeBtn, setSizeBtn] = useState(3);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
    }, [activeClr, sizeBtn]);

    return (
        <div className="my-container h-[612px] border-t-[1px]">
            <section className="list w-fit flex items-center gap-x-3 text-base leading-[24px] text-[#00000099] mt-6 mb-9">
                <Link to={"/"} className="flex items-center">
                    Home <IoIosArrowForward />
                </Link>
                <Link to={"/"} className="flex items-center">
                    Shop <IoIosArrowForward />
                </Link>
                <Link to={"/"} className="flex items-center">
                    Men <IoIosArrowForward />
                </Link>
                <Link to={"/"} className="flex items-center text-[#000000]">
                    T-Shirt
                </Link>
            </section>
            <div className="w-full h-[530px] flex justify-between">
                <section className="img-section w-[610px] h-[530px] flex gap-[14px]">
                    <div className="flex flex-col gap-[14px]">
                        <Link to={"/"}>
                            <img src={img} alt="T-Shirt" />
                        </Link>
                        <Link to={"/"}>
                            <img src={img2} alt="T-Shirt" />
                        </Link>
                        <Link to={"/"}>
                            <img src={img3} alt="T-Shirt" />
                        </Link>
                    </div>
                    <div>
                        <img src={img4} alt="T-Shirt" />
                    </div>
                </section>
                <section className="desc w-[610px] h-[530px]">
                    <h1 className="title text-[40px] leading-[100%] mb-[14px]">
                        ONE LIFE GRAPHIC T-SHIRT
                    </h1>
                    <div className="rating h-[19px] text-[14px] flex items-center gap-x-[13px] mb-[14px]">
                        <StarRating rating={4.5} />
                        <div className="text-[black] mt-1">
                            {4.5}/
                            <span className="text-[black] text-opacity-60">
                                5
                            </span>
                        </div>
                    </div>
                    <div className="price text-[32px] font-[600] max-w-[220px] flex gap-[10px] leading-[32px] mb-[16px]">
                        <span>${300 - (300 / 100) * 40}</span>

                        <span className="line-through text-[32px]  text-gray-400 leading-[32px]">
                            ${300}
                        </span>
                        <span className="text-[#ff3333] flex items-center justify-center text-[16px] px-[13.5px] py-[6px] font-[400] rounded-full bg-[#f8e5e5] leading-none">
                            -{40}%
                        </span>
                    </div>
                    <p className="w-[90%] text-base text-[#00000099] leading-[22px]">
                        This graphic t-shirt which is perfect for any occasion.
                        Crafted from a soft and breathable fabric, it offers
                        superior comfort and style.
                    </p>
                    <hr className="my-6" />
                    <p className="text-[#00000099] leading-[100%]">
                        Select Colors
                    </p>
                    <div className="flex gap-4 mt-4">
                        <div
                            onClick={() => setActiveclr(1)}
                            className="w-[37px] bg-[#4F4631] h-[37px] rounded-full flex items-center justify-center text-white"
                        >
                            {activeClr === 1 ? <IoMdCheckmark /> : ""}
                        </div>
                        <div
                            onClick={() => setActiveclr(2)}
                            className="w-[37px] bg-[#314F4A] h-[37px] rounded-full flex items-center justify-center text-white"
                        >
                            {activeClr === 2 ? <IoMdCheckmark /> : ""}
                        </div>
                        <div
                            onClick={() => setActiveclr(3)}
                            className="w-[37px] bg-[#31344F] h-[37px] rounded-full flex items-center justify-center text-white"
                        >
                            {activeClr === 3 ? <IoMdCheckmark /> : ""}
                        </div>
                    </div>
                    <hr className="my-6" />
                    <p className="text-[#00000099] leading-[100%] mb-4">
                        Choose Size
                    </p>
                    <div className="sizeButtons flex gap-3 ">
                        <Btn
                            onClick={() => setSizeBtn(1)}
                            text="Small"
                            bg={sizeBtn === 1 ? "bg-[black]" : "bg-[#F0F0F0]"}
                            color={
                                sizeBtn === 1
                                    ? "text-white"
                                    : "text-[#00000099]"
                            }
                        />
                        <Btn
                            onClick={() => setSizeBtn(2)}
                            text="Medium"
                            bg={sizeBtn === 2 ? "bg-[black]" : "bg-[#F0F0F0]"}
                            color={
                                sizeBtn === 2
                                    ? "text-white"
                                    : "text-[#00000099]"
                            }
                        />
                        <Btn
                            onClick={() => setSizeBtn(3)}
                            text="Large"
                            bg={sizeBtn === 3 ? "bg-[black]" : "bg-[#F0F0F0]"}
                            color={
                                sizeBtn === 3
                                    ? "text-white"
                                    : "text-[#00000099]"
                            }
                        />
                        <Btn
                            onClick={() => setSizeBtn(4)}
                            text="X-Large"
                            bg={sizeBtn === 4 ? "bg-[black]" : "bg-[#F0F0F0]"}
                            color={
                                sizeBtn === 4
                                    ? "text-white"
                                    : "text-[#00000099]"
                            }
                        />
                    </div>

                    <hr className="my-6" />
                    <div className="w-full flex gap-5">
                        <div className="w-[170px] h-[52px] bg-[#F0F0F0] rounded-full px-5 py-[14px] text-base flex items-center justify-between">
                            <button
                                onClick={() =>
                                    setCount((v) => (v > 1 ? v - 1 : 1))
                                }
                                className="w-6 h-6 text-[24px]"
                            >
                                <FiMinus />
                            </button>
                            {count}
                            <button
                                onClick={() => setCount((v) => v + 1)}
                                className="w-6 h-6 text-[24px]"
                            >
                                <GoPlus />
                            </button>
                        </div>
                        <Btn
                            className="grow"
                            color="text-white"
                            bg="bg-[black]"
                            text="Add to Cart"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HeroSection;
