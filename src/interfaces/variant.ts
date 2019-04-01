/* 商品：表示一个单件产品。包含每件商品的独特属性，比如：高度，宽度，深度，单价等
 * 商品的这些属性与产品属性不同，产品属性是表示一类产品的共有属性
 * 商品由选项类型和选项值决定其唯一性 */

import { OptionValue } from './option_value';
import { Image } from './image';
import { Price } from './price';

export class Variant {
    id: string;
    name: string;
    sku: string; //  Stock keeping unit
    price: string;
    weight: string;
    height: string;
    width: string;
    depth: string;
    is_master: boolean;
    slug: string;
    description: string;
    track_inventory: boolean;
    cost_price: string;
    option_values: OptionValue[];
    total_on_hand: number;
    display_price: string;
    options_text: string;
    in_stock: boolean;
    is_backorderable: boolean;
    is_destroyed: boolean;
    is_orderable: boolean;
    images: Image[];
    options: any;
    selling_price: Price;
    max_retail_price: Price;
}