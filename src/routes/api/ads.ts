import * as keystone from 'keystone';

export = module.exports = function (req, res, next) {

      // Return the galleries by sortOrder
      keystone.list('Gallery').model.find().sort('-publishedDate').exec((err, result) => {
            if (result.length == 0) {
                  res.send('no results found');
                  return;
              }
              if (err || !result.length) {
                    return next(err);
              }
              // console.log(result);
              res.send(result);
              return;
      });

};
