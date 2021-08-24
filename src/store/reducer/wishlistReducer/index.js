const initialState = {
  wishlist: [],
  loading: true,
  //   icon: 'heart-outline',
  //   wish: false,
  error: null,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WISHLIST':
      console.warn('wishlist reducer,,,', action);
      //   return {
      //     ...state,
      //     todos: state.todos.map((todo, i) =>
      //       todo.id == action.id
      //         ? {
      //             ...todo,
      //             title: action.title,
      //           }
      //         : todo,
      //     ),
      //   };
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          {
            id: action.id,
            image: action.image,
            title: action.title,
            description: action.description,
            price: action.price,
            wish: action.wish,
            icon: action.icon,
          },
        ],
      };
    case 'REMOVE_WISHLIST':
      console.warn('remove wishlist,,,', action);
      const newlist = state.wishlist.filter(elem => elem.id != action.id);
      return {
        ...state,
        wishlist: newlist,
      };
    default:
      return state;
  }
};

export {wishlistReducer};
