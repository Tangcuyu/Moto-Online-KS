/* 订单项：用于跟踪订单中的每一个商品，是订单和商品之间的连接 */
import { Variant } from './variant';
import { Product } from './product';

export class LineItem {
  id: number;
  quantity: number;
  unit_price: Object;
  single_display_amount: number;
  total_price: number;
  display_amount: number;
  variant_id: number;
  variant: Variant;
  product: Product;
}