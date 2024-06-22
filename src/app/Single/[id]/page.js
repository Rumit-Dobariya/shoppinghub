import React, { useEffect } from 'react';
import Styles from "./Single.module.scss";
import { useParams } from 'react-router-dom';
import { useProductContext } from '@/context/ProductContext';

const API = "https://api.pujakaitem.com/api/products";

export default function page() {

  const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();

  // console.log(singleProduct,"singleProduct")

  const {id} = useParams();
  // console.log(id, "id")

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [id])

  return (
    <div className={Styles.pageMain}>
      <h3>{singleProduct.name}</h3>
    </div>
  )
}
