'use strict';

var technologies = require("./technology.json")

module.exports.get = function (req, res){
    var result = technologies[Math.floor(Math.random()*technologies.length)];

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
    res.end();
};
