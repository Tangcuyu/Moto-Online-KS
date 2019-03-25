import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Manufacturer Model
 * ==========
 */
const Manufacturer = new keystone.List('Manufacturer');

Manufacturer.add({
      name: { type: Types.Name, required: true, index: true },
      email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
      logo: { type: Types.CloudinaryImage },
      brief: { type: Types.String }
});


/**
 * Relationships
 */
Manufacturer.relationship({ ref: 'Moto', path: 'motos', refPath: 'manufacturer' });


/**
 * Registration
 */
Manufacturer.defaultColumns = 'logo, name, email, brief';
Manufacturer.register();
