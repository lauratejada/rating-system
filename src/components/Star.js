import { FaStar } from "react-icons/fa";

function Star(props) {
  return (
    <FaStar 
     color={props.filled ? "#ffe000" : "#a9a9a9"} 
     onClick={props.onClick} 
    />
  );
}

export default Star;