import * as keystone from 'keystone';
import { User } from '../../interfaces/User';


/**
 * User Active
 */
module.exports = function (req, res) {
    const UserList = keystone.list('User');
    const userData: User = new User(req.body);
    const item = UserList.model.find();
    console.log(userData);
    // UserList.updateItem(item, req.body.active , {
    //     files: req.files,
    //     ignoreNoEdit: true,
    //     user: req.user,
    // }, function (err) {
    //     if (err) {
    //         const status = err.name === 'validation errors' ? 400 : 500;
    //         const error = err.name === 'database error' ? err.toString : err;
    //         return res.send(status, error);
    //     }
    //     res.send('ok');
    // });
};

