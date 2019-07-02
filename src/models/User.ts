import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
const User = new keystone.List('User');

User.add({
      name: { type: Types.Name, index: true },
      email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
      phone: { type: Types.Number, initial: false },
      avatar: { type: String, initial: false},
      password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
      isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
      return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, phone, isAdmin';
User.register();
