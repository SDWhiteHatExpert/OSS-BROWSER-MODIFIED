const path = require("path");
const koa = require("koa");
const app = new koa ();
const convert = require("koa-convert");
const serve = require("koa-static-server");


app.user(serve{rootDir: path.join(__dirname, "static")});

module.exports = app;


