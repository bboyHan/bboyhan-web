const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；

// import article_mysql_info_1 from '../md/mysql/一、基本操作与数据类型.md'
// import article_mysql_info_2 from '../md/mysql/二、Linux环境安装Mysql.md'

// const articleData1 = require('./json/article')
// const articleData2 = require('./json/article')
// articleData1.data.info = article_mysql_info_1
// articleData2.data.info = article_mysql_info_2

// Mock.mock('/article/1', 'get', articleData1);
Mock.mock('/article/1', 'get', require('./json/article'));
Mock.mock('/article/2', 'get', require('./json/article'));
Mock.mock('/article/3', 'get', require('./json/article'));
Mock.mock('/article/4', 'get', require('./json/article'));
Mock.mock('/article/5', 'get', require('./json/article'));
Mock.mock('/article/6', 'get', require('./json/article'));
Mock.mock('/article/7', 'get', require('./json/article'));
Mock.mock('/article/8', 'get', require('./json/article'));
Mock.mock('/article/1ist', 'get', require('./json/article_list'));

Mock.mock('/user/login', 'post', require('./json/login'));
Mock.mock('/user/register', 'post', require('./json/login'));
Mock.mock('/user/info', 'post', require('./json/user'));

Mock.mock('/share/1ist', 'get', require('./json/share_list'));
Mock.mock('/share/1', 'get', require('./json/article'));
Mock.mock('/share/2', 'get', require('./json/article2'));
