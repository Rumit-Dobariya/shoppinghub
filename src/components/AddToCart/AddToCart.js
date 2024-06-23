import { useState } from "react";
import Styles from "./AddToCart.module.scss";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

export default function AddToCart(props) {
  const { data } = props;

  const [colorNew, setColorNew] = useState(data.colors[0]);

	const [amount, setAmount] = useState(1);
	const	setIncrement = () => {
		if (amount < data.stock) {
			setAmount(amount + 1);
		} else {
			setAmount(data.stock);
	}
	}

	const setDecrement = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		}	else {
			setAmount(1);
		}
	}

  return (
    <>
      <div className={Styles.colors}>
        <p>
          Colors:
          {data.colors.map((color, index) => {
            return (
              <button
                onClick={() => setColorNew(color)}
                className={`${Styles.btnStyle} ${
                  color === colorNew && Styles.active
                }`}
                key={index}
                style={{ backgroundColor: color }}
              >
                {color === colorNew && "✔"}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setIncrement={setIncrement}
        setDecrement={setDecrement}
      />

			<NavLink to="/cart" className={Styles.addToCartBtn}>
					<Button name="Add to Cart"/>
			</NavLink>
    </>
  );
}
