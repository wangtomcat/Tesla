var express = require('express');
var app = express();
app.use(express.static('static'));

var mysql = require('mysql');


// 用户信息
app.get('/orduser', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
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

//搜索用户
app.get('/orduserDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    connection.query("delete from orduser where username='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//删除用户
app.get('/orduserDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    connection.query("delete from orduser where username='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//查询用户名是否重名
app.get('/reorduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    connection.query("select * from orduser where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//添加用户
app.get('/addorduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;  
    var phone = req.query.phone;  
    connection.query("INSERT INTO orduser ( username,password,phone )VALUES( '"+name+"','"+password+"','"+phone+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//修改用户
app.get('/editorduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;  
    var phone = req.query.phone;
    connection.query("update orduser set password='"+password+"',phone='"+phone+"' where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//预约信息
app.get('/resinfo', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
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
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;
    var stuta = req.query.stuta;
    // console.log(name,stuta);
    connection.query("update resinfo set stuta='"+stuta+"' where name='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//删除预约信息
app.get('/resinfoDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;  
    connection.query("delete from resinfo where name='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//购车订单
app.get('/buycar', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from buycar', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//改变购车订单状态
app.get('/buycarEdit', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;
    var stuta = req.query.stuta;
    // console.log(name,stuta);
    connection.query("update buycar set stuta='"+stuta+"' where name='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//删除购车订单
app.get('/buycarDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;  
    connection.query("delete from buycar where name='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});


//意见信息
app.get('/proposal', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from proposal', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//改变意见信息状态
app.get('/proposalDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    connection.query("delete from proposal where username='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//登录后台
app.get('/adminlogin', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    var password = req.query.password;
    connection.query("select * from admuser where username='"+name+"' and password= '"+password+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//管理员用户信息
app.get('/admuser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from admuser', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//搜索用户
app.get('/admuserDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    connection.query("delete from admuser where username='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//删除管理员用户
app.get('/admuserDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    connection.query("delete from admuser where username='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//添加用户时查询是否重名
app.get('/readmuser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    connection.query("select * from admuser where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//添加用户
app.get('/addadmuser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;  
    connection.query("INSERT INTO admuser ( username,password)VALUES( '"+name+"','"+password+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//修改用户
app.get('/editamduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;
    connection.query("update admuser set password='"+password+"'where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});


//前端数据交互信息
//添加预约信息
app.get('/information', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;  
    var sex = req.query.sex;  
    var phone = req.query.phone;  
    var address = req.query.address;
    connection.query("INSERT INTO resinfo ( name,sex,phone,address)VALUES( '"+name+"','"+sex+"','"+phone+"','"+address+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//前端登录
app.get('/ordlogin', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    var password = req.query.password;
    connection.query("select * from orduser where username='"+name+"' and password= '"+password+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//添加论坛信息
app.get('/forum', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var date = req.query.date;  
    var say = req.query.say;
    connection.query("INSERT INTO proposal ( username,date,say)VALUES( '"+name+"','"+date+"','"+say+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//查询论坛发表的信息
app.get('/reforum', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query(" select * from proposal ", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//注册普通用户
app.get('/register', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;  
    var phone = req.query.phone;
    connection.query("INSERT INTO orduser ( username,password,phone)VALUES( '"+name+"','"+password+"','"+phone+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//注册，查询是否有重名
app.get('/repregister', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    connection.query(" select * from orduser where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});


//购车订单添加
app.get('/cars', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;  
    var sex = req.query.sex;  
    var phone = req.query.phone;
    var car = req.query.car;
    var price = req.query.price;
    var address = req.query.address;
    connection.query("INSERT INTO buycar ( name,sex,phone,car,price,address)VALUES( '"+name+"','"+sex+"','"+phone+"','"+car+"','"+price+"','"+address+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
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
