export function fetchProduct() {
  return fetch("https://feel-pot-backend.herokuapp.com/api/products").then(
    (response) => response.json()
  );
}
