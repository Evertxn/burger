/**
 * Created by Ev on 5/6/17.
 */
var connection = require('../config/connection.js');

function printQuestionMarks(num){
    var arr = [];

    for (var i=0; i<num; i++){
        arr.push('?')
    }

    return arr.toString();
}

function objToSql(ob){

    var arr = [];

    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}

var orm = {
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            cb(result);
        });
    },

    create: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table + ' (' + cols.toString() +') ' + 'VALUES (' + printQuestionMarks(vals.length) + ') ';

        connection.query(queryString, vals, function(err, result){
            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;

        connection.query(queryString, function(err, result){
            cb(result);
        });
    }
};

module.exports = orm;
