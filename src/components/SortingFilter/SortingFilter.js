import { useFilterContext } from "@/context/FilterContext";
import Styles from "./SortingFilter.module.scss";
import { BsFillGridFill, BsList } from "react-icons/bs";

export default function SortingFilter() {
  const { sorting, filter_products, grid_view, setGridView, setListView } =
    useFilterContext();
  return (
    <div className={Styles.sortingMainWrapper}>
      <div className={Styles.sortingListGrid}>
        <button
          onClick={setGridView}
          className={`${Styles.sortBtn} ${grid_view && "active"}`}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          onClick={setListView}
          className={`${Styles.sortBtn} ${!grid_view && "active"}`}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className={Styles.productData}>
        <p>{filter_products[0].length} Products Available</p>
      </div>
      <div className={Styles.sortSelection}>
        <form action="#">
          <label htmlFor="sort" className="me-2">Sort By</label>
          <select onClick={sorting} name="sort" id="sort" className={Styles.sortSelectionStyle}>
            <option value="price-lowest">Price (Lowest)</option>
            <option value="price-highest">Price (Highest)</option>
            <option value="a-z">Name (A-Z)</option>
            <option value="name-z">Name (Z-A)</option>
          </select>
        </form>
      </div>
    </div>
  );
}
