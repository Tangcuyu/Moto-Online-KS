import * as keystone from 'keystone';
import { Menuitem } from '../../interfaces/interfaceDefine';

const jwt = require('jsonwebtoken');
const secret = 'ILOVENINGHAO';



export = module.exports = function (req, res, next) {
    let rtn: Menuitem;
    let guest: Menuitem;
    keystone.list('Menuitem').model.find().populate('subItems').exec(function (err, results) {
        if (results.length == 0) {
            res.send('no results found');
            return;
        }
        if (err || !results.length) {
            return next(err);
        }
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        if (!req.headers.authorization || token === 'null') {
            const [, , , i, ] = results[3].subItems;
            results[3].subItems = [i];
            guest = results;
            return res.send(guest);
        }
        const payload = jwt.verify(token, secret);
        console.log(payload.name.first);
        results[3].subItems.splice(results[3].subItems.findIndex(item => item.subItemUrl === 'login'), 1);
        results[3].buttonName = payload.name.first;
        rtn = results;
        res.send(rtn);
        return;
  });
};
