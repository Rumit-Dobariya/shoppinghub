import Styles from "./CartAmountToggle.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CartAmountToggle(props) {

  const {amount, setIncrement, setDecrement} = props;

  return (
    // <div className="cardButton">
			<div className={Styles.amountToggle}>
				<button onClick={setDecrement}><FaMinus /></button>
				<div className={Styles.amountStyle}>{amount}</div>
				<button onClick={setIncrement}><FaPlus /></button>
			</div>
    // </div>
  )
}
