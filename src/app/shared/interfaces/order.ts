export interface Order {
  _id: string;
  userId: string;
  userToken: string;
  products: Product[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Product {
  productId: string;
  quantity: number;
  price: number;
  _id: string;
}
