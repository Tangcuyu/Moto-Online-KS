import * as keystone from 'keystone';


export = module.exports = function (req, res, next) {
    if (!req.params.itemId) {
        keystone.list('Variantmoto').model.find({ is_master: false }).sort().exec(function (err, results) {
            if (results.length == 0) {
                res.send('no results found');
                return;
            }
            if (err || !results.length) {
                  return next(err);
            }
            // console.log(results[1].id);
            res.send(results);
            return;
      });
    } else {
        keystone.list('Variantmoto').model.find({ _id: req.params.itemId }).exec(function(err, result) {
            if (result.length == 0) {
                res.send('no results found');
                return;
            }
            if (err || !result.length) {
                  return next(err);
            }
            res.send(result);
            return;
        });
    }
};
