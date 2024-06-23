import { NavLink } from "react-router-dom";
import FormatPrice from "../FormatPrice/FormatPrice";
import Styles from "./ListView.module.scss";
import Button from "../Button/Button";

export default function ListView(props) {

	const {
		productData
	} = props

  return (
    <div className={Styles.ListMainWrapper}>
      <div className="container grid">
        {
					productData.map((item) => {
						return(
							<div key={item.id} className="card grid grid-two-column">
								<figure>
									<img src={item.image} alt={item.name}></img>
								</figure>

								<div className="cardData">
									<h3>{item.name}</h3>
									<p><FormatPrice  price={item.price} /></p>
									<p>{item.description.slice(0,90)}...</p>
									<NavLink className="d-flex" to={`/single/${item.id}`}>
										<Button className="btn" name="Read More"/>
									</NavLink>
								</div>
							</div>
						)
					})
				}
      </div>
    </div>
  )
}
