"use strict";

var playgroundHtml = require("graphql-playground-html");
var playgroundVersion = require('./package.json').version;

var __assign = (this && this.__assign) || Object.assign || function(a) {
    for (var b, i = 1, n = arguments.length; i < n; i++) {
        b = arguments[i];
        for (var m in b) if (Object.prototype.hasOwnProperty.call(b, m))
            a[m] = s[m];
    }
    return a;
};

Object.defineProperty(
	exports, "__esModule",
	{ value: true }
);

var express = {
    expressPlayground : function voyagerExpress(options) {
                            var middlewareOptions = __assign({}, options, { version: playgroundVersion });
                            return function (req, res, next) {
                                res.setHeader('Content-Type', 'text/html');
                                var playground = playgroundHtml.renderPlaygroundPage(middlewareOptions);
                                res.write(playground);
                                res.end();
                                next();
                            };
                        }
}

module.exports = express;
