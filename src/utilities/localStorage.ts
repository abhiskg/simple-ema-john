const addToLocalStorage = (id: string) => {
  const storedCartData = localStorage.getItem("cart");

  let cartData;

  if (storedCartData) {
    cartData = JSON.parse(storedCartData);
  } else {
    cartData = {};
  }

  if (!cartData[id]) {
    cartData[id] = 1;
  } else {
    cartData[id] = cartData[id] + 1;
  }

  localStorage.setItem("cart", JSON.stringify(cartData));
};

const getLocalStorageCart = () => {
  const storedCartData = localStorage.getItem("cart");

  let cartData;

  if (storedCartData) {
    cartData = JSON.parse(storedCartData);
  } else {
    cartData = {};
  }
  return cartData;
};

const removeFromLocalStorage = (id: string) => {
  const storedCartData = localStorage.getItem("cart");

  if (storedCartData) {
    const cartData = JSON.parse(storedCartData);
    if (id in cartData) {
      delete cartData[id];
      localStorage.setItem("cart", cartData);
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("cart");
};

export {
  addToLocalStorage,
  removeFromLocalStorage,
  deleteShoppingCart,
  getLocalStorageCart,
};
