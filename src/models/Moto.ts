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
      title: { type: String, required: true },
      state: { type: Types.Select, options: 'instock, reserve, soldout', default: 'instock', index: true },
      manufacturer: { type: Types.Relationship, ref: 'Manufacturer', index: true },
      modelType: {type: Types.Select, options: 'newest, classic', default: 'classic'},
      onsaleDate: { type: Types.Date, index: true, dependsOn: { state: 'reserve' } },
      image: { type: Types.CloudinaryImage },
      content: {
            brief: { type: Types.Html, wysiwyg: true, height: 150 },
            extended: { type: Types.Html, wysiwyg: true, height: 400 },
      },
      categories: { type: Types.Relationship, ref: 'MotoCategory', many: true },
});

Moto.schema.virtual('content.full').get(function () {
      return this.content.extended || this.content.brief;
});

Moto.defaultColumns = 'image, title, state|20%, manufacturer|20%, onsaleDate|20%';
Moto.register();
