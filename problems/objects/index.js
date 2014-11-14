var path = require('path');
var getFile = require('../../get-file');
var run = require('../../run-solution');
var fs = require('fs');

exports.problem = getFile(path.join(__dirname, 'problem.md'));

exports.solution = getFile(path.join(__dirname, 'solution.md'));

var expected = "{ ingredientes: [ 'queso', 'salsa de tomate', 'aceitunas' ],\n"
  + "  coccion: 'a la piedra',\n"
  + "  porciones: 8 }\n";

exports.verify = function (args, cb) {
  run(args[0], function (err, result) {
    if (result === expected) cb(true);
    else cb(false);
  });
};
