import {tokenReducer} from '../reducer';
import {wishlistReducer} from '../reducer/wishlistReducer';
import {cartReducer} from '../reducer/cartReducer';
import {productReducer} from '../reducer/productReducer';
import {combineReducers} from 'redux';

const AppReducer = combineReducers({
  tokenReducer,
  productReducer,
  cartReducer,
  wishlistReducer,
});

export {AppReducer};
