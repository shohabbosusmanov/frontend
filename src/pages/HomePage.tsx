import Cards from "../components/home/Cards";
import HeroSection from "../components/home/HeroSection";
import RatingSection from "../components/home/RatingSection";
import Subscribe from "../components/home/Subscribe";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <RatingSection />
            <Cards />
            <Subscribe />
        </>
    );
};

export default HomePage;
