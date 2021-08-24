class GetDataMiddleware {
  static getProductData = async () => {
    try {
      const result = await fetch('https://fakestoreapi.com/products').then(
        res => res.json(),
      );
      // let add = {
      //   ...result,
      //   wishlist: false,
      // };
      // return add;

      let response = result.map(r => {
        return {
          ...r,
          wish: false,
          icon: 'heart-outline',
        };
      });

      // console.warn('inside api,,,,,,,,,', response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getToken = async data => {
    try {
      let res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      }).then(res => res.json());
      // .then(json => {
      //   return json;
      // });
      return res;
      // let add = {
      //   ...res,
      //   wishlist: false,
      // };
      // console.warn(add);
      // return add;
    } catch (err) {
      console.log('err', err);
    }
  };
}

export {GetDataMiddleware};
