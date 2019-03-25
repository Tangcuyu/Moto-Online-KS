import * as keystone from 'keystone';

/**
 * MotoCategory Model
 * ==================
 */

const MotoCategory = new keystone.List('MotoCategory', {
      autokey: { from: 'name', path: 'key', unique: true },
});

MotoCategory.add({
      name: { type: String, required: true },
});

MotoCategory.relationship({ ref: 'Moto', path: 'motos', refPath: 'categories' });

MotoCategory.register();
