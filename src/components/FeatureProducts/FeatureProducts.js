import { useProductContext } from "@/context/ProductContext";
import Styles from "./FeatureProducts.module.scss"
import Product from "../Product/Product";

export default function FeatureProducts() {
  const { isLoading, featuresProducts } = useProductContext();

  if (isLoading) {
    return <span>...Loading</span>;
  }

  console.log(featuresProducts, "featuresData");

  return (
		<div className={Styles.sectionMain}>
			<div className="container">
				<div className={Styles.introData}>Check Now!</div>
				<div className="common-heading">Our Feature Services</div>
				<div className="grid grid-three-column">
					{
						featuresProducts.map((item) =>{
							return(
								<Product key={item.id} data={item}/>
							)
						})
					}
				</div>
			</div>
		</div>
	);
}
