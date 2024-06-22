const ProductReducer = (state, action) => {
  // if(action.type === "IS_LOADING"){
  //     return{
  //         ...state,
  //         isLoading : true
  //     }
  // }

  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featuresProducts = action.payload.filter((item) => {
        return item.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: [action.payload],
        featuresProducts: featuresProducts,
      };

    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_SINGLE_DATA":
      return {
        ...state,
        isLoading: true,
        singleProduct : action.payload
      };

    case "API_SINGLE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
};

export default ProductReducer;
