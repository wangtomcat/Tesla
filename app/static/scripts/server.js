
var express = require('express')
var app = express()
var mysql = require('mysql');

// 路由
app.get('/information', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tesla' // 数据库名字
    });

    connection.connect(); // 执行连接
    var name = req.query.name;
    var sex = req.query.sex;
    var phone = req.query.phone;
    var address = req.query.address;
    // 执行sql语句
    connection.query("INSERT INTO resinfo ( name,sex,phone,address)VALUES( '"+name+"','"+sex+"','"+phone+"','"+address+"')", function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            results
        })
    });

    connection.end(); // 关闭数据库

});


app.get('/ordlogin', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tesla' // 数据库名字
    });

    connection.connect(); // 执行连接
    var username = req.query.username;
    var password = req.query.password;

    // 执行sql语句
    connection.query("select * from orduser where username='"+username+"' and password='"+password+"'", function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

})


app.listen(3000);
