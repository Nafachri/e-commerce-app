const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // check product if alreadt exist
      const exist = state.find((v) => v.id === product.id);
      if (exist) {
        return state.map((v) =>
          v.id === product.id ? { ...v, qty: v.qty + 1 } : v
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((v) => v.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((v) => v.id !== exist1.id);
      } else {
        return state.map((v) =>
          v.id === product.id ? { ...v, qty: v.qty - 1 } : v
        );
      }

    default:
      return state;
  }
};

export default handleCart;
