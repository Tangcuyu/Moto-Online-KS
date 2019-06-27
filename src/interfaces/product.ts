/* 产品：记录在线商店中的一种产品。比如：摩托车，汽车，T恤等都是一种产品 */

import { OptionType } from './OptionType';
import { Classification } from './Classification';
import { ProductProperty } from './ProductProperty';
import { Variant } from './Variant';
import { OptionValue } from './OptionValue';
import { Image } from './Image';
import { Price } from './Price';
import { Review } from './Review';
import { RatingSummary } from './RatingSummary';


export class Product {
    id: string;
    name: string;
    description: string;
    available_on: string;
    slug: string;
    is_favorited_by_current_user: boolean;
    meta_description: string;
    meta_keywords: string;
    shipping_category_id: number;
    taxon_ids?: number[];
    total_on_hand: number;
    has_variants: boolean;
    master: Variant;
    variants: Variant[];
    option_types?: OptionType[];
    product_properties?: ProductProperty[];
    classifications?: Classification[];
    product_url?: string;
    currency: string;
    selling_price: Price;
    max_retail_price: Price;
    options?: OptionValue[];
    images: Image[];
    reviews: Array<Review>;
    rating_summary: RatingSummary;
    is_orderable: boolean;
}