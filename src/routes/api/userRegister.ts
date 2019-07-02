import * as keystone from 'keystone';

module.exports = function (req, res) {
    console.log(req.body);
    // if (!keystone.security.csrf.validate(req)) {
    //     return res.apiError(403, 'invalid csrf');
    // }
    const userData = {
        email: '',
        password: ''
    };
    userData.email = req.body.email;
    userData.password = req.body.matchingPasswords.password;
    const User = keystone.list('User');
    const newUser = new User.model();
    User.updateItem(newUser, userData, {
        files: req.files,
        ignoreNoEdit: true,
        user: req.user,
    }, function (err) {
        if (err) {
            const status = err.name === 'validation errors' ? 400 : 500;
            const error = err.name === 'database error' ? err.toString : err;
            return res.send(status, error);
        }
        res.send('ok');
    });
};