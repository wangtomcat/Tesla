var express = require('express');
var app = express();
app.use(express.static('static'))

var mysql = require('mysql');


// 用户信息
app.get('/orduser', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*")
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from orduser', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//预约信息
app.get('/resinfo', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*")
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from resinfo', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//改变预约信息状态
app.get('/resinfoEdit', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*")
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;
    var stuta = req.query.stuta;
    console.log(name,stuta);
    connection.query("update resinfo set stuta='"+stuta+"' where name='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            status: "success"
        })
    });

    connection.end(); // 关闭数据库

});
//获取app文件夹下的所有静态资源
app.use('/', express.static('../../'));
//监听端口
app.listen(3000);

//连接数据库
function cont(){ 
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tesla' // 数据库名字
    });
    return connection;
}