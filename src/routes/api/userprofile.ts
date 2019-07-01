import * as keystone from 'keystone';

/**
 * Get User Profile
 */
exports.getUserProfile = function (req, res) {
    keystone.list('User').model.find({ _id: req.userId }).exec( function (err, results) {
            if (err || !results.length) {
                if (err) return res.apiError('database error', err);
            }
            res.json(results);
        });
};

