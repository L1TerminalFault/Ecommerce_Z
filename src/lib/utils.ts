export function setupCart() {
  if (!localStorage.getItem("__ecommerce_cart__"))
    localStorage.setItem("__ecommerce_cart__", JSON.stringify({ cart: [] }));
}

export function getCart(): { cart: string[] } {
  return JSON.parse(
    localStorage.getItem("__ecommerce_cart__") || JSON.stringify({ cart: [] }),
  );
}

export function addToCart(item: string) {
  const cartItems = getCart();
  cartItems.cart.push(item);
  localStorage.setItem("__ecommerce_cart__", JSON.stringify(cartItems));
}

export function removeFromCart(item: string) {
  const newCartItems: { cart: string[] } = { cart: [] };
  getCart().cart.forEach((cartItem) => {
    if (cartItem !== item) newCartItems.cart.push(cartItem);
  });
  localStorage.setItem("__ecommerce_cart__", JSON.stringify(newCartItems));
}

export function existsInCart(item: string) {
  return getCart().cart.find((cartItem) => cartItem === item);
}
