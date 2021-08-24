const initialState = {
  Token: {},
  loading: true,
  error: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
      console.warn('get token');
      return {...state, loading: true};
    case 'GET_TOKEN_SUCESS':
      console.warn('get token success');
      return {...state, Token: action.payload, loading: false};
    case 'GET_TOKEN_FAIL':
      console.warn('get token fail');
      return {...state, error: action.message};
    default:
      return state;
  }
};

export {tokenReducer};
