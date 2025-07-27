import StarRating from "./Rating";

interface ICard {
    image: string;
    text: string;
    rating: number;
    price: number;
    discount?: number;
}

const Card = ({ image, text, rating, price, discount }: ICard) => {
    return (
        <div className="card flex flex-col gap-2">
            <img
                className="mb-[8px] w-[295px] h-[298px]"
                src={image}
                alt="image"
            />
            <div className="text font-[600] text-[20px] leading-[27px]">
                {text}
            </div>
            <div className="rating h-[19px] text-[14px] flex items-center gap-x-[13px]">
                <StarRating rating={rating} />
                <div className="text-[black] mt-1">
                    {rating}/
                    <span className="text-[black] text-opacity-60">5</span>
                </div>
            </div>
            <div className="price text-[24px] font-[600] max-w-[220px] flex gap-[10px] leading-[32px]">
                <span>
                    ${discount ? price - (price / 100) * discount : price}
                </span>
                {discount && (
                    <>
                        <span className="line-through text-[24px]  text-gray-400 leading-[32px]">
                            ${price}
                        </span>
                        <span className="text-[#ff3333] flex items-center justify-center text-[14px] px-[13.5px] py-[6px] font-[400] rounded-full bg-[#f8e5e5] leading-none">
                            -{discount}%
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;
