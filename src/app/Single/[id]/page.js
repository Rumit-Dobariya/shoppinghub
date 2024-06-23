import React, { useEffect } from "react";
import Styles from "./Single.module.scss";
import { useParams } from "react-router-dom";
import { useProductContext } from "@/context/ProductContext";
import PageNavigation from "@/components/PageNavigation/PageNavigation";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import FormatPrice from "@/components/FormatPrice/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import StarRatings from "@/components/StarRatings/StarRatings";
import AddToCart from "@/components/AddToCart/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

export default function page() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  // console.log(singleProduct,"singleProduct")

  const { id } = useParams();
  // console.log(id, "id")

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className={Styles.pageMain}>
      <PageNavigation title={singleProduct.name} />
      <div className={Styles.container}>
        <div className="grid grid-two-column">
          <div className={Styles.productImages}>
            <ImageSlider images={singleProduct.image} />
          </div>
          <div className={Styles.productData}>
            <h2>{singleProduct.name}</h2>
            <StarRatings stars={singleProduct.stars} reviews={singleProduct.reviews}/>
            <p className={Styles.productDataPrice}>
              <del>
                <FormatPrice price={singleProduct.price + 250000} />
              </del>
            </p>
            <p className={Styles.productDataRealPrice}>
              Deal of the Day: <FormatPrice price={singleProduct.price} />
            </p>
            <p>{singleProduct.description}</p>
            <div className={Styles.productDataWarranty}>
              <div className={Styles.productWarrantyData}>
                <TbTruckDelivery className={Styles.warrantyIcon} />
                <p>Free Delivery</p>
              </div>

              <div className={Styles.productWarrantyData}>
                <TbReplace className={Styles.warrantyIcon} />
                <p>30 Days Replacement</p>
              </div>

              <div className={Styles.productWarrantyData}>
                <TbTruckDelivery className={Styles.warrantyIcon} />
                <p>Thapa Delivered </p>
              </div>

              <div className={Styles.productWarrantyData}>
                <MdSecurity className={Styles.warrantyIcon} />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className={Styles.productDataInfo}>
              <p>Available: <span>{singleProduct.stock > 0 ? "In stock" : "Not Available"}</span></p>
              <p>ID : {singleProduct.id}</p>
              <p>Brand : {singleProduct.company}</p>
            </div>
            <hr />
            {
              singleProduct.stock > 0 &&
              <AddToCart data={singleProduct}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
