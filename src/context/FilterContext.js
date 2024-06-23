import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
	filter_products: [],
	// filter_products_New: [],
	all_products: [],
	grid_view: true,
	list_view: false,
	sorting_value: "lowest"
}

export const FilterContextProvider = ({ children }) => {
  
	const { products } = useProductContext();

	console.log(products[0], "products");

	const [state, dispatch] = useReducer(reducer, initialState);

	const setGridView = () => {
		dispatch({type: "SET_GRID_VIEW"})
	}
	const setListView = () => {
		dispatch({type: "SET_LIST_VIEW"})
	}

	const sorting = () => {
		dispatch({type : "GET_SORT_VALUE"})
	}

	// to sort products
	useEffect(() =>{
		dispatch({type: "SORTING_PRODUCTS"})
	}, [state.sorting_value, products])

	useEffect(() => {
		dispatch({type : "LOAD_FILTER_PRODUCTS", payload : products})
	}, [products]);  
	
	return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
