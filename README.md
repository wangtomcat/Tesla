
## 项目介绍

1. 项目名称：[特斯拉非官方官网](https://github.com/wangtomcat/Tesla.git)
2. 运行环境：[nodejs](http://nodejs.cn/)    [npm](https://www.npmjs.cn/) npm会随着node安装集成在里面，所以不需要安装npm
3. 第三方插件：[express](http://www.expressjs.com.cn/) + [mysql]() 使用这两个第三方插件都是通过 npm install express(mysql)安装的，本地数据库则使用了[wamp]()中集成的mysql数据库；

## 项目组成

+ 前端
    + 首页
        + 登录/注册
    + 车辆信息
        + 预约试驾/购买车辆
    + 论坛
+ 后台管理
    + 登录
    + 普通用户信息
    + 预约试驾信息
    + 购车信息
    + 管理员信息

## 项目使用

1. 使用 [npm install]() 即可安装该项目所需的环境及所依赖的插件
2. 创建 tesla 数据库，把目录下 tesla.sql 文件导入到数据库中，即可创建该项目所需的数据库和数据表信息；
![数据库文件](https://github.com/wangtomcat/IMG/raw/master/tesla/teslamysql.png)

![导入数据](https://github.com/wangtomcat/IMG/raw/master/tesla/mysql.png)

或者你也可以打开 mysql.txt 文件复制里面的语句去  mysql数据库中运行这些语句进行创建数据库：
![mysql.txt](https://github.com/wangtomcat/IMG/raw/master/tesla/mysqltxt.png)
 
![mysql语句](https://github.com/wangtomcat/IMG/raw/master/tesla/mysqlseach.png)

3. 首先启动 node 服务，在目录 static/scripts 下打开终端使用 [node server.js]() 命令运行node服务器；(启动服务前查看一下数据库的端口，用户，及密码与代码中的连接数据库是否匹配，以及数据库的服务是否开启)
4. 访问 [localhost:3000/views/index.html]() 即可进入网站首页；访问 [localhost:3000/views/adminlogin.html]() 即可进入到网站后台

## 项目功能

1. 前端登录/注册：均为普通用户的账号，
2. 预约试驾/购车：前端填入信息，把信息传给后台数据库
3. 论坛发表：从后台数据库拿到数据渲染在论坛页面；用户登录，进入论坛页面，发表意见，展示在论坛页面，并把数据传入给后台数据库；
4. 后台管理：所有的数据都是从数据库里加载过来的；
    + 登录功能：记录登录者是 admin 还是其它管理员
    + 管理员与普通用户都可以进行增删改查功能，
    + 权限：只有 admin 用户才有权限对其它管理员用户进行增删改操作，而所有管理员用户都可以对普通用户进行增删改操作
    + 预约与购车信息：有状态功能，处理与未处理；只能进行删除操作；
5. js效果:
    + 首页滑动图效果
    + 车型页面屏风效果
    + 论坛轮播图效果
    + 前端注册验证
    + cookie验证哪个用户登录
    + 预约与购车百度地图api
    + 后台数据的增删改查的验证
    + 后台使用boostrap框架实现响应式布局效果、等其它效果功能；

## 项目解决遇到的问题

1. 因为使用了前后端分离，我是用的是 [express](http://www.expressjs.com.cn/) 模块来创建 node 服务器，所以就会出现跨域的问题
    + hack： `res.append("Access-Control-Allow-Origin", "*")`
2. 静态资源加载，[express](http://www.expressjs.com.cn/) 创建的服务器，静态资源加载跟 node 自带的 fs 模块加载静态资源的方法不一样
    + hack： 头部添加   
    `//调用use()方法，告知需要使用静态资源 app.use(express.static('static'));`

    + `app.use('/', express.static('../../'));`   
    使用 / 路由代替 ../../ 所代表的路径，所以只需要在本地服务 3000 端口 加 / 再通过相对路径就可以访问某个文件了，
+ 如果没有静态资源加载方法，即便解决了跨域问题，依然不能通过服务器打开相对路径的文件，只能使用本地方式打开文件，虽然各种功能都能实现，但使用到了cookie的地方都是无效的。

## 项目成员及负责内容
+ 赵文蕾 (kevin)
    + 特斯拉首页
    + 登录
    + 预约试驾
+ 廖翔 (lx)
    + 车型页面
    + 四种车型分页面
    + 购车
+ 黎海明 (lhm2)
    + 论坛页面
    + 注册
+ 王志源 (tomc)
    + 后台页面
    + 后台登录
    + 数据库
    + node 服务器

