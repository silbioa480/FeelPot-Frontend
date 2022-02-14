export function fetchProduct() {
  return fetch("http://localhost:8080/api/products").then((response) =>
    response.json()
  );
}
