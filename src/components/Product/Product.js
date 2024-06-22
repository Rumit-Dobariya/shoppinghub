import { NavLink } from "react-router-dom";
import FormatPrice from "../FormatPrice/FormatPrice";

export default function Product(props) {

  const {
		data
	} = props;

  return (
    <NavLink to={`/single/${data.id}`}>
      <div className="card">	
				<figure>
					<img src={data.image} alt={data.name}/>
					<figcaption className="caption">
						{data.category}
					</figcaption>
				</figure>

				<div className="cardData">
					<div className="cardDataFlex">
						<h3>{data.name}</h3>
						<p className="cardDataPrice"><FormatPrice price={data.price}/></p>
					</div>
				</div>
			</div>
    </NavLink>
  )
}
