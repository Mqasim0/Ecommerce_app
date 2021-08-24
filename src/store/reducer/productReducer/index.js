const initialState = {
  products: [],
  loading: true,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return {...state, loading: true};
    case 'GET_PRODUCT_SUCESS':
      return {...state, products: action.payload, loading: false};
    case 'GET_PRODUCT_FAIL':
      return {...state, error: action.message};
    case 'WISHLIST':
      //console.log('reducer update', action.title, action.id);
      return {
        ...state,
        products: state.products.map((prod, i) =>
          prod.id == action.id
            ? {
                ...prod,
                wish: action.wish,
                icon: action.icon,
              }
            : prod,
        ),
      };
    default:
      return state;
  }
};

export {productReducer};
