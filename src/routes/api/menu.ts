import * as keystone from 'keystone';
import { Menuitem } from '../../interfaces/interfaceDefine';

const jwt = require('jsonwebtoken');
const secret = 'ILOVENINGHAO';



export = module.exports = function (req, res, next) {
    let rtn: Menuitem;
    let guest: Menuitem;
    keystone.list('Menuitem').model.find().populate('subItems').exec(function (err, results) {
        // 从数据中获取菜单数据
        if (results.length == 0) {
            res.send('no results found');
            return;
        }
        if (err || !results.length) {
            return next(err);
        }

        // 判断登录状态，为客户端返回不同的菜单
        const token = req.headers.authorization.split(' ')[1];
        if (!req.headers.authorization || token === 'null' || req.query.login === 'logout') {
            const [, , , i, ] = results[3].subItems;
            results[3].subItems = [i];
            results[3].buttonName  = 'Guest';
            guest = results;
            return res.send(guest);
        }
        const payload = jwt.verify(token, secret);
        if (!payload) {
            return res.status(401).send('Unauthorized request');
        }
        results[3].subItems.splice(results[3].subItems.findIndex(item => item.subItemUrl === 'login'), 1);
        if (payload.name.first) {
            results[3].buttonName = payload.name.first;
        }
        rtn = results;
        return res.send(rtn);
  });
};