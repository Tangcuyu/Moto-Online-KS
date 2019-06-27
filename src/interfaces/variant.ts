/* 商品：表示一个单件产品。包含每件商品的独特属性，比如：高度，宽度，深度，单价等
 * 商品的这些属性与产品属性不同，产品属性是表示一类产品的共有属性
 * 商品由选项类型和选项值决定其唯一性 */

import { Price } from './Price';
import { Image } from './Image';
import { OptionValue } from './OptionValue';
import { Thumbnail } from './Thumbnail';



export class Variant {
    costPrice: number;
    depth: number;
    displayPrice: number;
    height: number;
    id: string;
    image: string; // hero image
    isMaster: boolean;  // 是否为最新产品
    inStock: boolean;
    isBackorderable: boolean;
    isDestroyed: boolean;
    isOrderable: boolean;
    images: Image[];
    maxRetailPrice: Price;
    optionValues: OptionValue[];
    output: number;
    optionsText: string;
    price: Price;
    productBrief: string;
    productDetail: string;
    slug: string; // 表示URL中产品标识部分
    sellingPrice: Price;
    sku: string; //  Stock keeping unit
    thumbnail: Thumbnail;
    title: string;
    totalOnHand: number;
    trackInventory: boolean;
    weight: number;
    width: number;
}