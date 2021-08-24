const initialState = {
  cart: [],
  loading: true,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.id,
            category: action.category,
            price: action.price,
            quantity: action.quantity,
          },
        ],
      };
    case 'UPDATE_CART':
      //console.log('reducer update', action.title, action.id);
      return {
        ...state,
        cart: state.cart.map((cat, i) =>
          cat.id == action.id
            ? {
                ...cat,
                quantity: action.quantity,
              }
            : cat,
        ),
      };
    case 'REMOVE_CART':
      const newcart = state.cart.filter(elem => elem.id != action.id);
      return {
        ...state,
        cart: newcart,
      };
    default:
      return state;
  }
};

export {cartReducer};
