import { useState} from "react";

const StarRating = ({stars, defaultRating}) => {

    let limit = stars || 5;
    const [rating, setRating] = useState(defaultRating || 0);


    console.log("selectedStars",rating);

    return (
        <div>
            {[...Array(limit)].map((_, i) => (
                <span key={i} onClick={() => setRating(i+1)} className={ i < rating ? 'star rated' : 'star'}>
                    { i < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    )
}

export default StarRating