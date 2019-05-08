import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Submenuitems Model
 * =============
 */

const Submenuitem = new keystone.List('Submenuitem', {
      map: { name: 'subItemName' },
      autokey: { path: 'slug', from: 'subItemName', unique: true },
});

Submenuitem.add({
      subItemName: { type: String, required: true },
      subItemString: { type: String },
      subItemUrl: {type: String}
});


Submenuitem.relationship({ ref: 'Menuitem', path: 'menuitems', refPath: 'subItems' });
Submenuitem.defaultColumns = 'subItemName, subItemString';

Submenuitem.register();
