var orm = require("../config/orm.js");

var burgerQueries = {
    show: function (cb) {
        orm.showBurgers('tableName', function (res) {
            cb(res);
        });
    },
    add: function (burgerName, cb) {
        orm.addBurger(burgerName, function (res){
            cb(res);
        });
    },
    eat: function (burgerId, cb) {
        orm.eatBurger(burgerId, function (res){
            cb(res);
        })
    }
};

module.exports = burgerQueries;
