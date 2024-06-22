import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

	const initialState = {
		isLoading : false,
		isError: false,
		products: [],
		featuresProducts: [],
		isSingleLoading: false,
		singleProduct:[]
	}

	const[state, dispatch] = useReducer(reducer, initialState);

	const getApiData = async (url) =>{
		dispatch({type : "SET_LOADING"})
		try {
			const responce = await axios.get(url);
			console.log(responce, "responce")
			const products = await responce.data;
			dispatch({type : "SET_API_DATA", payload : products})
		} catch (error) {
			dispatch({type : "API_ERROR"})
		}
	}

	const getSingleProduct = async (url) =>{
		dispatch({type : "SET_SINGLE_LOADING"})
		try{
			const res = await axios.get(url);
			const singleProduct = await res.data;
			dispatch({type : "SET_SINGLE_DATA", payload : singleProduct})
		} catch(error){
			dispatch({type : "API_SINGLE_ERROR"})
		}

	} 

  useEffect(() =>{
		getApiData(API);
	}, [])

  return (
    <AppContext.Provider 
        value={{...state, getSingleProduct}}
    >
        {children}
    </AppContext.Provider>
    );
};

const useProductContext = () =>{
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProductContext };
