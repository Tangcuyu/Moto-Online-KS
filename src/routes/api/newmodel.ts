import * as keystone from 'keystone';

const itemListMock = {
    newModelItems: [
        {
            itemId: 1,
            cost: 145800,
            image: '../assets/img/moto/timg.jpeg',
            label: 'Street™750',
            color: 'black',
            category: '',
            categoryId: '',
            productId: '',
            afterDiscount: 142000,
            productBrief: 'Street™ 750定位于较窄街道,为此哈雷为Street™ 750配上了全新研发的新一代动力装置。这颗发动机命名为“革命”（Revolution X），虽然沿袭了经典的美式V型双缸结构，但是很多技术已经远离了哈雷的传统！',
            productDetail: 'Street™ 750的V型双缸，既没有采用哈雷最拿手的风冷系统，也没有利用新一代的半水冷Twin Cooled，而是用上了全水冷。这颗水冷动力装置，能够保证Street™ 750长时间慢速行驶时，不出现过热现象。同时，为了降低这颗水冷发动机的重心，哈雷放弃了惯用的45°汽缸夹角，改为60°',
            favourite: true
        },
        {
            itemId: 2,
            cost: 142800,
            image: '../assets/img/moto/timg-1.jpg',
            label: 'Street™ Bob',
            color: 'white',
            category: '',
            categoryId: '',
            productId: '',
            productBrief: '倘若阁下的身材算不上高大威猛，但又觉得哈雷的883系列有点太过入门，想要感受更加浓厚的美式重机味道的话，那么这次介绍的哈雷Street Bob街霸车型是一个相当好的选择。',
            productDetail: '倘若阁下的身材算不上高大威猛，但又觉得哈雷的883系列有点太过入门，想要感受更加浓厚的美式重机味道的话，那么这次介绍的哈雷Street Bob街霸车型是一个相当好的选择。',
            afterDiscount: 139000,
            favourite: false
        },
        {
            itemId: 3,
            cost: 135800,
            image: '../assets/img/moto/timg-2.jpg',
            label: 'Roadster™',
            color: 'yellow',
            category: '',
            categoryId: '',
            productId: '',
            productBrief: '新款Roadster™全新演绎运动者®所具备的优质特性，性能升级。车身还配备采用5辐设计的19英寸（前）和18英寸（后）偏移分割式铸铝车轮、降低式把手、中置式控制件以及新款双人座椅。',
            productDetail: '新款Roadster™整车精工制造，经典燃油箱和短款后挡泥板相得益彰，配有带巨大三角轧头的43毫米倒式前叉、强大的双盘式前刹车、卓越的后悬挂装置和新型数字仪表系统。车身还配备采用5辐设计的19英寸（前）和18英寸（后）偏移分割式铸铝车轮、降低式把手、中置式控制件以及新款双人座椅，这些不仅让你的骑行姿势看上去霸气外露，还能保证长期骑行的舒适感。45度、1200cc排量的发动机可提供强大的偏离扭矩。信马由缰，一路飞驰。',
            afterDiscount: 132000,
            favourite: true
        }

    ]
};

const motoTypesMock = [
    { "moto_type": "H-D STREET™" },
    { "moto_type": "SPORTSTER™运动者" },
    { "moto_type": "SOFTAIL™软尾" },
    { "moto_type": "TOURING旅行" },
    { "moto_type": "CVO™" }
];
const motoMock = [{
    "manufacturer": "哈雷戴维森",
    "manufacturer_logo": "",
    "manufacturer_brief": "美国最受欢迎的摩托车品牌",
    "manufacturer_detail": "1903年，威廉•哈雷(William Harley)和戴维森(Davidson)三兄弟在密尔沃基创建了著名的Harley-Davidson Motor Company——哈雷戴维森摩托车公司",
    "motos": [
        {
            "itemId": 1,
            "name": "Street™750",
            "label": 'Street™750',
            "image": '../assets/img/moto/timg.jpeg',
            "colors": [
                {"varnish_color": "black_light"},
                {"varnish_color": "black_twill"},
                {"varnish_color": "red_twill"},
                {"varnish_color": "pearl_bona"},
                {"varnish_color": "brown"},
                {"varnish_color": "black_luxury"},
                {"varnish_color": "red_charm"},
                {"varnish_color": "pearl_luxury"},
            ],
            "cost": 145800,
            "afterDiscount": 142000,
            "productBrief": '为城市街道而生。时尚灵活，充满十足的都市气魄',
            "productDetail": '750cc Revolution X™发动机迸发出强劲动力，灵巧敏捷的车架和无缝契合的悬挂系统则带来自信快速的操控。绿灯亮起，即刻启程，畅享无尽乐趣。',
            "favourite": true,
            "moto_series": [
                { "moto_type": "H-D STREET™" }
            ],
            "moto_models": [
                { "model": "哈雷戴维森STREET® 750"}
            ]
        },
        {
            "itemId": 2,
            "name": "STREET ROD™ 街路德",
            "label": 'STREET ROD™ 街路德',
            "image": '../assets/img/moto/timg.jpeg',
            "colors": [
                {"varnish_color": "black_light"},
                {"varnish_color": "black_twill"},
                {"varnish_color": "red_twill"},
                {"varnish_color": "pearl_bona"},
                {"varnish_color": "brown"},
                {"varnish_color": "black_luxury"},
                {"varnish_color": "red_charm"},
                {"varnish_color": "pearl_luxury"},
            ],
            "cost": 145800,
            "afterDiscount": 142000,
            "productBrief": '为城市街道而生。时尚灵活，充满十足的都市气魄',
            "productDetail": '750cc Revolution X™发动机迸发出强劲动力，灵巧敏捷的车架和无缝契合的悬挂系统则带来自信快速的操控。绿灯亮起，即刻启程，畅享无尽乐趣。',
            "favourite": true,
            "moto_series": [
                { "moto_type": "H-D STREET™" }
            ],
            "moto_models": [
                { "model": "哈雷戴维森STREET® 750"}
            ]
        },
        {
            "itemId": 1,
            "name": "Street™750",
            "label": 'Street™750',
            "image": '../assets/img/moto/timg.jpeg',
            "colors": [
                {"varnish_color": "black_light"},
                {"varnish_color": "black_twill"},
                {"varnish_color": "red_twill"},
                {"varnish_color": "pearl_bona"},
                {"varnish_color": "brown"},
                {"varnish_color": "black_luxury"},
                {"varnish_color": "red_charm"},
                {"varnish_color": "pearl_luxury"},
            ],
            "cost": 145800,
            "afterDiscount": 142000,
            "productBrief": '为城市街道而生。时尚灵活，充满十足的都市气魄',
            "productDetail": '750cc Revolution X™发动机迸发出强劲动力，灵巧敏捷的车架和无缝契合的悬挂系统则带来自信快速的操控。绿灯亮起，即刻启程，畅享无尽乐趣。',
            "favourite": true,
            "moto_series": [
                { "moto_type": "H-D STREET™" }
            ],
            "moto_models": [
                { "model": "哈雷戴维森STREET® 750"}
            ]
        }
    ]
}];

export = module.exports = function (req, res, next) {
    if (!req.params.itemId) {
        keystone.list('Variantmoto').model.find().limit(3).sort().exec(function (err, results) {
            if (results.length == 0) {
                res.send('no results found');
            }
            if (err || !results.length) {
                  return next(err);
            }
            // console.log(results[1].id);
            res.send(results);
      });
    } else {
        keystone.list('Variantmoto').model.find({ _id: req.params.itemId }).exec(function(err, result) {
            if (result.length == 0) {
                res.send('no results found');
            }
            if (err || !result.length) {
                  return next(err);
            }
            res.send(result);
        });
    }
};
