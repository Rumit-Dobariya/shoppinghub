import Product from "@/components/Product/Product";
import Styles from "./Products.module.scss";
import FilterSection from "@/components/FilterSection/FilterSection";
import SortingFilter from "@/components/SortingFilter/SortingFilter";
import ProductList from "@/components/ProductList/ProductList";
import { useFilterContext } from "@/context/FilterContext";

export default function page() {

  const {all_products} = useFilterContext();

  console.log(all_products, "data")

  return (
    <div className={Styles.pageMain}>
      <div className="container grid gridFilterColumn">
        <FilterSection />

        <section className="product-view--sort">
          <div className="sort-filter">
            <SortingFilter />
          </div>

          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
}
