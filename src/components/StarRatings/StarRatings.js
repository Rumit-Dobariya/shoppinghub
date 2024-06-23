import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import Styles from "./StarRatings.module.scss";

export default function StarRatings(props) {

  const {
		stars,
		reviews
	} = props;

	const ratingStart = Array.from({length : 5}, (_, index) =>{
		const number = index + 1;
		const half = stars + 0.5;
		// debugger;
		return (
			<span key={index}>
				{stars >= number ? <FaStar className="icon"/> : stars >= half ? <FaStarHalfAlt className="icon"/> : <AiOutlineStar className="icon"/>}
			</span>
		)
	}
	)

  return (
    <div className={Styles.iconStyle}>
      {ratingStart}
			<p>{reviews} customer reviews</p>
    </div>
  )
}
