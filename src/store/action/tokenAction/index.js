import {GetDataMiddleware} from '../../Middleware';

export function GetToken(data) {
  console.warn('data............', data);
  return function (dispatch) {
    dispatch({type: 'GET_TOKEN'});
    return GetDataMiddleware.getToken(data)
      .then(result => {
        dispatch({
          type: 'GET_TOKEN_SUCESS',
          payload: result,
        });
        console.log('REsulkt,,, ', result);
      })
      .catch(error => {
        console.log('Error', error);
        return dispatch({
          type: 'GET_TOKEN_FAIL',
          payload: error,
          message: 'INVALID USERNAME AND PASSWORD',
        });
      });
  };
}
