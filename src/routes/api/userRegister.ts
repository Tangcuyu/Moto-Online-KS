import * as keystone from 'keystone';
import { User } from '../../interfaces/User';
import * as nodemailer  from 'nodemailer';

module.exports = function (req, res) {
    // if (!keystone.security.csrf.validate(req)) {
    //     return res.apiError(403, 'invalid csrf');
    // }
    const userData: User = new User(req.body);
    const UserList = keystone.list('User');
    const newUser = new UserList.model();

    const transporter = nodemailer.createTransport({
        service: '126',
        auth: {
            user: 'joysmshr@126.com',
            pass: 'Bacchae123'
        }
    });

    const mailOption = {
        from: 'joysmshr@126.com',
        to: userData.email,
        subject: 'MotoOnline',
        html: `<h3> Thank you for joining MotoOnline </h3>
        Please click the following URL to activate your account:
        <a href="http://192.168.8.107:3000/api/userActive?email=${userData.email}">
        http://192.168.8.107:3000/api/userActive?email=${userData.email}</a>
        <p>if clicking the URL above dose not work, copy and paste the URL into a
        browser window.</p>
        <p>Thank you and Best Regards</p>
        MotoOnline Team`

    };

    UserList.updateItem(newUser, userData, {
        files: req.files,
        ignoreNoEdit: true,
        user: req.user,
    }, function (err) {
        if (err) {
            const status = err.name === 'validation errors' ? 400 : 500;
            const error = err.name === 'database error' ? err.toString : err;
            return res.send(status, error);
        }
        transporter.sendMail(mailOption, function (err, info) {
            if (err) {
                    console.log(err);
                    return res.send(err);
            }
            console.log('用户激活邮件发送成功');
        });
        res.send(newUser);
    });
};