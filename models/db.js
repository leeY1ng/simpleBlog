var settings = require("../settings");
var	mongodb = require("mongodb").Db;
var	Connection = require("mongodb").Connection,
	Server = require("mongodb").Server;

//设置数据库名 数据库地址和数据库端口创建了数据库连接实例
module.exports = new mongodb(settings.db,new Server(settings.host,settings.port),{safe:true});