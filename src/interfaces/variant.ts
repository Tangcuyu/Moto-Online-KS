/* 商品：表示一个单件产品。包含每件商品的独特属性，比如：高度，宽度，深度，单价等
 * 商品的这些属性与产品属性不同，产品属性是表示一类产品的共有属性
 * 商品由选项类型和选项值决定其唯一性 */

import { OptionValue } from './option_value';
import { Image } from './image';
import { Price } from './price';

export class Variant {
    id: string;
    name: string;
    slug: string;
    image: string; // hero image
    sku: string; //  Stock keeping unit
    weight: number;
    height: number;
    width: number;
    depth: number;
    output: number;
    is_master: boolean;
    productBrief: string;
    productDetail: string;
    track_inventory: boolean;
    price: number;
    cost_price: number;
    option_values: OptionValue[];
    total_on_hand: number;
    display_price: number;
    options_text: string;
    in_stock: boolean;
    is_backorderable: boolean;
    is_destroyed: boolean;
    is_orderable: boolean;
    images: Image[];
    selling_price: Price;
    max_retail_price: Price;
}