import * as keystone from 'keystone';

/**
 * User Active
 */
module.exports = async function (req, res) {
    console.log(req.query);
    const item = await keystone.list('User').model.findOne({email: req.query.email});
    if (item) {
        item.active = true;
        item.save();
        res.send(`<h2>OK,用户账户激活成功!</h2>`);
    } else {
        res.send({err: '激活失败，请检查要激活的邮箱账号名称'});
        return;
    }
};

