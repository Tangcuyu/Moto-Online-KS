import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Moto Model
 * ==========
 */

const Moto = new keystone.List('Moto', {
      map: { name: 'title' },
      autokey: { path: 'slug', from: 'title', unique: true },
});

Moto.add({
      title: { type: String },
      state: { type: Types.Select, options: 'instock, reserve, soldout', default: 'instock', index: true },
      manufacturer: { type: Types.Relationship, ref: 'Manufacturer', default: '哈雷戴维森' },
      orgin: {type: Types.Select, options: 'USA, CN, CA', default: 'USA'},
      description: { type: Types.Html, wysiwyg: true, height: 150},
      available_on: { type: Types.Date, index: true },
      categories: { type: Types.Relationship, ref: 'MotoCategory' },
      is_favorited_by_current_user: { type: Boolean },
      meta_description: { type: String }, // A description targeted at search engines for search engine optimization (SEO)
      meta_keywords: { type: String }, // Several words and short phrases separated by commas, also targeted at search engines
      shipping_category_id: {type: Number},
      total_on_hand: { type: Number },
      has_variants: { type: Boolean },
      master: { type: Types.Relationship, ref: 'Variantmoto'},
      variants: { type: Types.Relationship, ref: 'Variantmoto', many: true },
      price: { type: Types.Money },
      selling_price: { type: Types.Money },
      max_retail_price: { type: Types.Money },
      images: {type: Types.CloudinaryImages },
      is_orderable: {type: Boolean},
      delete_at: {type: Boolean } // The date the product is no longer available for sale in the store
});


Moto.defaultColumns = 'title, orgin, state|20%, manufacturer|20%, available_on|20%';
Moto.register();
