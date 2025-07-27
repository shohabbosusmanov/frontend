import StarRatings from "react-star-ratings";

interface IRating {
    rating?: number;
}

export default function StarRating({ rating }: IRating) {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="22px"
            starSpacing="5px"
        />
    );
}
