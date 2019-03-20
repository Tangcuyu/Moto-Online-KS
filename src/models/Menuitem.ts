import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Menuitems Model
 * =============
 */

const Menuitem = new keystone.List('Menuitem', {
      map: { name: 'buttonName' },
      autokey: { from: 'buttonName', path: 'key', unique: true },
});

Menuitem.add({
      buttonName: { type: String, required: true },
      iconString: { type: String },
      subItems: { type: Types.Relationship, ref: 'Submenuitem', many: true}
});

Menuitem.defaultColumns = 'buttonName, iconString, subItems';

Menuitem.register();