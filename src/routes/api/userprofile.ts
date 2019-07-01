import * as keystone from 'keystone';
const md5 = require('crypto-md5');

/**
 * Get User Profile
 */
exports.getUserProfile = function (req, res) {
    keystone.list('User').model.find({ _id: req.userId }).exec( function (err, results) {
            if (err || !results.length) {
                if (err) return res.apiError('database error', err);
            }

            // Set the avatar for user email using Gravatar service
            // This step is creating the Hash for user's email address
            results[0].avatar = md5(results[0].email, 'hex');
            res.json(results);
        });
};

