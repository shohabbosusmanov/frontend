import Card from "./Card";
import image5 from "../../assets/images/image5.svg";
import image6 from "../../assets/images/image6.svg";
import image7 from "../../assets/images/image7.svg";
import image8 from "../../assets/images/image8.svg";

const Cards = () => {
    return (
        <section className="my-container h-[510px] !mt-[64px] !mb-[70px]">
            <h1 className="title text-[40px] text-center leading-[100%] mb-[55px]">
                YOU MIGHT ALSO LIKE
            </h1>
            <div className="cards flex justify-between">
                <Card
                    rating={4}
                    image={image5}
                    text="Polo with Contrast Trims"
                    price={242}
                    discount={20}
                />
                <Card
                    rating={3.5}
                    image={image6}
                    text="Gradient Graphic T-shirt"
                    price={145}
                />
                <Card
                    rating={4.5}
                    image={image7}
                    text="Polo with Tipping Details"
                    price={180}
                />
                <Card
                    rating={5}
                    image={image8}
                    text="Black Striped T-shirt"
                    price={150}
                    discount={30}
                />
            </div>
        </section>
    );
};

export default Cards;
