"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json);
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.listen(3000, function () {
    console.log("start on port 3000.");
});
var hello = function (message) {
    console.log("message is " + message);
};
hello("hoge");
var users = [
    { id: 1, name: "User1", email: "user1@test.local" },
    { id: 2, name: "User2", email: "user2@test.local" },
    { id: 3, name: "User3", email: "user3@test.local" }
];
app.get('/users', function (req, res) {
    res.send(JSON.stringify(users));
});
app.get('/', function (req, res) {
    res.send(JSON.stringify(users));
});
