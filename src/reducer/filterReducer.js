const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
			return{
				...state,
				filter_products : [...action.payload],
				all_products : [...action.payload],
			};

    case "SET_GRID_VIEW":
      return{
        ...state,
        grid_view : true,
        list_view : false,
      };
    case "SET_LIST_VIEW":
      return{
        ...state,
        list_view : true,
        grid_view : false,
      };

    case "GET_SORT_VALUE":

      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value
      console.log(sort_value, "value")
      return{
        ...state,
        sorting_value : sort_value
      }

    case "SORTING_PRODUCTS":
      let newSortData ;
      // let tempData = [...action.payload]
      
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        console.log(sorting_value, "value")

        if (sorting_value == "a-z") {
          console.log("hyy")
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      console.log(tempSortProduct[0],'newSortData')
      
      return{
        ...state,
        filter_products : newSortData[0],
      }

    default:
      return state;
  }
};

export default filterReducer;