import Product from "../Product/Product";
import Styles from "./GridView.module.scss";


export default function GridView(props) {

	const {
		productData 
	} = props

	console.log(productData, "productData")

  return (
    <div className={Styles.GridMainWrapper}>
      <div className="container grid grid-three-column"> 
				{
					productData.map((item) => {
						return(
							<div key={item.id}>
								<Product data={item}/>
							</div>
						)
					})
				}
			</div>
    </div>
  )
}
