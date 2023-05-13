import { useState } from "react";
import Star from "./Star";

function StarRating({ onChange }) {

  const [rating, setRating] = useState(0);
  const [text, setText] = useState('Your ratings');
  
  const changeRating = (newRating) => {
    setRating(newRating);
   // console.log(newRating);
    //onChange?.(newRating);
    onChange = (newRating) => {
        console.log(newRating);
    }
    
    switch(newRating) {
        case 1: setText('Terrible'); break;
        case 2: setText('Not too terrible'); break;
        case 3: setText('Average'); break;
        case 4: setText('Good'); break;
        case 5: setText('Excellent'); break;
        default: setText('Your ratings'); 
    }
  };

  return (
    <div>
        <span>
        {[1, 2, 3, 4, 5].map((value) => (
            <Star
            key={value}
            filled={value <= rating}  // if value of the star is less or equal to the current rating so change color of the star
            onClick={() => {
                return changeRating(value);
            }}
            />
        ))}
        </span>
        <h2>{text}</h2>
    </div>
  );
}

export default StarRating;