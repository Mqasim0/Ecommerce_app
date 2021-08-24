export const addCart = data => {
  console.warn('ACtion', data);
  const {id, price, category, quantity} = data;
  return {
    type: 'ADD_CART',
    id,
    category,
    price,
    quantity,
  };
};

export const Removecart = id => {
  return {
    type: 'REMOVE_CART',
    id,
  };
};

export const updateCart = (id, quantity) => {
  //console.warn('ACtion update', id, value);
  return {
    type: 'UPDATE_CART',
    id: id,
    quantity: quantity,
  };
};
