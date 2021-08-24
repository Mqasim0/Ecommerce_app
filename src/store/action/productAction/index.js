import {AsyncStorage} from '@react-native-community/async-storage';
import {GetDataMiddleware} from '../../Middleware';

export const getProducts = products => ({
  type: 'GET_PRODUCT_SUCESS',
  products,
});

export const getProductsError = error => ({
  type: 'GET_PRODUCT_FAIL',
  error,
});

export function GetProductData() {
  return function (dispatch) {
    dispatch({type: 'GET_PRODUCT'});
    return GetDataMiddleware.getProductData()
      .then(result => {
        dispatch({
          type: 'GET_PRODUCT_SUCESS',
          payload: result,
        });
      })
      .catch(error => {
        return dispatch({
          type: 'GET_PRODUCT_FAIL',
          payload: error,
          message: 'Failed to fatch data',
        });
      });
  };
}

export const wishList = (id, wish, icon) => {
  //console.warn('ACtion update', id, value);
  return {
    type: 'WISHLIST',
    id: id,
    wish: wish,
    icon: icon,
  };
};
