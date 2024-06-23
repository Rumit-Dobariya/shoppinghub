import { useState } from "react";
import Styles from "./ImageSlider.module.scss";

export default function ImageSlider(props) {

  const {
		images = [{url : ""}]
	} = props;

	console.log(images, "images")

	const[imageUrl, setImageUrl] = useState(images[0]);

	console.log(imageUrl, "imageUrl")

  return (
    <div className={Styles.imageMainWrapper}>
      <div className="grid grid-four-column">
				{
					images?.map((item, index) =>{
						return(
							<figure key={item.id}>
								<img onClick={() => setImageUrl(item)} src={item.url} alt="product" />
							</figure>
						)
					})
				}
			</div>
			<div className={Styles.mainScreen}> 
				<img src={imageUrl.url} alt="product" />
			</div>
    </div>
  )
}
