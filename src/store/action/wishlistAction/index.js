export const addwishList = data => {
  const {id, image, title, description, price, wish, icon} = data;
  return {
    type: 'ADD_WISHLIST',
    // icon: 'heart',
    // wish: true,
    id,
    image,
    title,
    description,
    price,
    wish,
    icon,
  };
};

export const RemoveWishList = data => {
  const {id, image, title, description, price} = data;
  return {
    type: 'REMOVE_WISHLIST',
    id,
  };
};
