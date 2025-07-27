import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import filterIcon from "../../assets/icons/filterIcon.svg";
import Comment from "./Comment";

const RatingSection = () => {
    const [nav, setNav] = useState(2);
    return (
        <section className="my-container">
            <nav className="w-full list text-[#00000099] text-xl flex border-b-[1px] mt-[56px]">
                <Link
                    onClick={() => setNav(1)}
                    className={`grow py-6 text-center transition-all duration-400
                        ${
                            nav === 1
                                ? "text-[black] border-b border-b-[black]"
                                : ""
                        }
                    `}
                    to={"/"}
                >
                    Product Details
                </Link>
                <Link
                    onClick={() => setNav(2)}
                    className={`grow py-6 text-center transition-all duration-400
                        ${
                            nav === 2
                                ? "text-[black] border-b border-b-[black]"
                                : ""
                        }
                    `}
                    to={"/"}
                >
                    Rating & Reviews
                </Link>
                <Link
                    onClick={() => setNav(3)}
                    className={`grow py-6 text-center transition-all duration-400
                        ${
                            nav === 3
                                ? "text-[black] border-b border-b-[black]"
                                : ""
                        }
                    `}
                    to={"/"}
                >
                    FAQs
                </Link>
            </nav>
            <div className="mt-8 flex items-center justify-between">
                <div className="flex items-end gap-2">
                    <h2 className="text-2xl font-[600]">All Reviews</h2>
                    <span className="text-base text-[#00000099]">(451)</span>
                </div>
                <div className="flex gap-[10px]">
                    <button className="w-12 h-12 flex items-center justify-center bg-[#F0F0F0] rounded-full">
                        <img src={filterIcon} alt="filterIcon" />
                    </button>
                    <button className="flex items-center gap-5 py-[13px] bg-[#F0F0F0] rounded-full px-5">
                        <span>Latest</span>
                        <IoIosArrowDown />
                    </button>
                    <button className="py-3 px-[30px] rounded-full bg-[black] text-white">
                        Write a Review
                    </button>
                </div>
            </div>
            <div className="comments w-full h-[766px] flex gap-5 flex-wrap mt-6 justify-between">
                <Comment
                    rating={4.5}
                    name="Samantha D."
                    textContent={`"I absolutely love this t-shirt! The design is unique
                        and the fabric feels so comfortable. As a fellow
                        designer, I appreciate the attention to detail. It's
                        become my favorite go-to shirt."`}
                    posted="Posted on August 14, 2023"
                />
                <Comment
                    rating={4}
                    name="Alex M."
                    textContent={`"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`}
                    posted="Posted on August 15, 2023"
                />
                <Comment
                    rating={3.5}
                    name="Ethan R."
                    textContent={`"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`}
                    posted="Posted on August 16, 2023"
                />
                <Comment
                    rating={4}
                    name="Olivia P."
                    textContent={`"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`}
                    posted="Posted on August 17, 2023"
                />
                <Comment
                    rating={4}
                    name="Liam K."
                    textContent={`"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`}
                    posted="Posted on August 18, 2023"
                />
                <Comment
                    rating={4.5}
                    name="Ava H."
                    textContent={`"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`}
                    posted="Posted on August 19, 2023"
                />
            </div>
            <div className="w-full flex justify-center mt-9">
                <button className="px-[45px] py-[15px] rounded-full border">
                    Load More Reviews
                </button>
            </div>
        </section>
    );
};

export default RatingSection;
