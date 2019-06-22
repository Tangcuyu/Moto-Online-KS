import * as keystone from 'keystone';
import { Schema } from 'mongoose';
const Types = keystone.Field.Types;

/**
 *  Variantmoto SCHEMA  具体的某一个moto商品
 *  slug：固定链接地址：用于生成一个有意义URL.http://www.abc.com/what-is-slug 后面的“what-is-slug”就是slug
 */

const Variantmoto = new keystone.List('Variantmoto', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
});

Variantmoto.add({
    image: {type: Types.CloudinaryImage, required: true , default: {}}, // newmodel 图片大小750*1000
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'instock, reserve, soldout', default: 'instock', index: true },
    sku: { type: Number }, // 库存
    images: {type: Types.CloudinaryImages }, // productdetail 图片数组 300*450
    thumbnail: {type: Types.CloudinaryImage, required: true, default: {}},  // productlist 图片大小 255*150
    price: { type: Types.Money },
    color: { type: String },
    weight: { type: Number },
    height: { type: Number },
    width: { type: Number },
    output: { type: Number },
    category: { type: Types.Relationship, ref: 'MotoCategory' },
    is_master: { type: Boolean, default: 'false' }, // 是否是新产品
    available_on: { type: Types.Date, index: true },
    is_favorited_by_current_user: { type: Boolean, alias: 'favourite' },
    productBrief: { type: Types.Text, max: 60},
    productDetail: { type: Types.Textarea },
    total_on_hand: { type: Number },
    cost_price: { type: Types.Money, alias: 'cost' },
    display_price: { type: Types.Money },
    is_backorderable: { type: Boolean },
    is_destroyed: { type: Boolean },
    is_orderable: { type: Boolean },
    selling_price: { type: Types.Money },
});

Variantmoto.defaultColumns = 'title, image, selling_price|20%, category|20%, is_master|20%';
Variantmoto.register();
