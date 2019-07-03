import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
const User = new keystone.List('User');

User.add({
      phone: { type: String, initial: true, index: true },
      avatar: { type: String, initial: false },
      active: { type: Boolean, initial: false},
      name: { type: Types.Name },
      email: { type: Types.Email, initial: true, unique: true, required: true },
      password: { type: Types.Password, initial: true },
      brief: { type: Types.Text}
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
