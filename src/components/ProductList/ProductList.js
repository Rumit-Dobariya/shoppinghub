import { useFilterContext } from '@/context/FilterContext';
import React from 'react'
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';

export default function ProductList() {

  const {filter_products, grid_view} = useFilterContext();

  if (grid_view) {
    return(
      <GridView productData={filter_products[0]} />
    )
  } else {
    return(
      <ListView productData={filter_products[0]} />
    )
  }
}
