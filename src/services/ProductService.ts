import axios, { AxiosResponse } from "axios";
import IProduct from "../interface/IProduct";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/products";

class ProductService {
  getProducts(): Promise<AxiosResponse<IProduct[]>> {
    return axios.get<IProduct[]>(PRODUCT_API_BASE_URL);
  }

  createProduct(product: IProduct) {
    return axios.post<IProduct>(PRODUCT_API_BASE_URL);
  }

  getProductById(productId: IProduct["id"]): Promise<AxiosResponse<IProduct>> {
    return axios.get<IProduct>(PRODUCT_API_BASE_URL + "/" + productId);
  }

  updateProduct(
    product: IProduct,
    productId: IProduct["id"]
  ): Promise<AxiosResponse<IProduct>> {
    return axios.put<IProduct>(PRODUCT_API_BASE_URL + "/" + productId, product);
  }

  deleteProduct(productId: IProduct["id"]) {
    return axios.delete<IProduct>(PRODUCT_API_BASE_URL + "/" + productId);
  }
}

export default new ProductService();
