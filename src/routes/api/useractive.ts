import * as keystone from 'keystone';

/**
 * User Active
 */
module.exports = async function (req, res) {
    console.log(req.body);
    try {
        const item = await keystone.list('User').model.findOne({ email: req.query.email });
        item.active = true;
        item.save();
        res.send(`<h2>OK,用户账户激活成功!</h2>`);
    } catch (error) {
        res.send(error);
        return;
    }
};

