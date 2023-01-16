import Product from './product.interface';

interface ProductsOrder {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
  products?: Product[];
}
export default ProductsOrder;
