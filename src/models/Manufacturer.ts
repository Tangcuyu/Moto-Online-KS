import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Manufacturer Model
 * ==========
 */
const Manufacturer = new keystone.List('Manufacturer', {
      map: { name: 'mfname' },
      autokey: { from: 'mfname', path: 'key', unique: true },
});

Manufacturer.add({
      mfname: { type: String, required: true },
      website: { type: String },
      logo: { type: Types.CloudinaryImage },
      ranking: { type: Number },
      brief: { type: String }
});


/**
 * Relationships
 */
Manufacturer.relationship({ ref: 'Moto', path: 'motos', refPath: 'manufacturer' });


/**
 * Registration
 */
Manufacturer.defaultColumns = 'mfname, ranking, logo|30%, website ';
Manufacturer.register();
