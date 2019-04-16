const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/article/1', 'get', require('./json/article'));
Mock.mock('/article/2', 'get', require('./json/article2'));
Mock.mock('/article/1ist', 'get', require('./json/article_list'));
Mock.mock('/user/login', 'post', require('./json/login'));
Mock.mock('/user/register', 'post', require('./json/login'));
Mock.mock('/user/info', 'post', require('./json/user'));
