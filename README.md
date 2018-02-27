这是一个前后端分离项目的前端部分  ls
Chrome快捷键：
Developer Tools: cmd+shift+c
console: cmd+option+j

1.git命令
	touch .gitignore
	新建文件
	touch README.md

	1.git init
	初始化
	2.git status
	状态变更，变化的文件(red)
	3.git add .
	添加所有变化到本地仓库  
	4.git status 
	状态变更，验证是否添加成功(green)
	5.git commit -am "first commit into project"
	提交变更到本地仓库

	1.git remote add origin ssh-address
	连接远程仓库(同一个仓库只需要连接一次)
	2.git branch
	查看分支
	3.git push -u origin master
	推送变更到远程仓库
	git pull
	git push -u -f origin master
	4.git branch -r
	创建分支(分支开发，主干发布)
	5.git checkout -b v1.0 origin/master
	给分支命名
	6.git push origin HEAD -u
	将推送地址变更到分支
	
	git merge origin master
	git tag tag-dev-initial
	git push tag-dev-initial
	
2.webpack安装

    1.brew install node
    安装node.js
    2.npm init
    初始化npm	
	3.sudo npm install -g webpack
	  npm install --save-dev webpack 
	  npm install --save lodash
	防止本地环境与部署环境版本不一致
	
3.webpack起步

	1.bundle文件+lodash依赖
        npx webpack src/index.js dist/bandle.js
        
	2.webpack.config.js配置文件
        npx webpack --config webpack.config.js
        npm run build(添加script-build参数)

4.webpack管理资源

    1.加载css
        npm install --save-dev style-loader css-loader

    2.加载图片
        npm install --save-dev file-loader
    
    3.加载字体
    
    4.加载数据
        npm install --save-dev csv-loader xml-loader
        
5.管理输出

    1.设定html模板
        npm install --save-dev html-webpack-plugin

6.开发
    
    4.使用webpack-dev-server
        sudo npm install -g webpack-dev-server
        npm install --save-dev webpack-dev-server
        
        npm install hogan
        
    5.引入sass
        npm install gem
        gem install sass

四.通用功能开发
 交互设计，弱化导航栏 蓝白+灰
 字体不要纯黑
1.mm.js 'use strict'
配置resolve-alias plugin前
request()getServerUrl()
getUrlParam()
renderHtml() --save hogan
successTips() errorTips()
validate()
doLogin()
goHome()
var conf

sudo -g 全局服务器，然后可以用命令 
6.logout.css head-common.html 
index footer 28 overflow清除浮动css reset 定宽布局 全局通用样式
隐藏类、超链样式 btn loading
--save  font-awesome
7.nav-simple+html 
比利时-巧克力王国、世界史-希腊
nav.html index.js index.css

引入jQuery:
  externals加载外部jQuery+提取公共模块
  设置全局模块 
  npm install --save-dev extract-text-webpack-plugin
  ejs语法 html-loader url-loader
sudo→用做命令行

user-service.js 
cart-service.js

1.webpack启动失败
    
    更改配置文件中output下的path   : __dirname + '/dist',
    
2.font-awesome报错
    
    更改配置文件中plugin下的url-loader匹配正则

3.css样式部分匹配

    index/index.js引入common里面未使用的index.js
    更改错误路径(恶补相对路径、绝对路径)
    
4.You may need an appropriate loader to handle this file type.
    
    少正则

5.nav-side显示失败
 
    hogan.js没问题，漏代码不报错
    
6.类选择器漏写.，使登录信息加载失败

WebStorm快捷键
    
    command+option+down 复制整行
    option+click(鼠标左键) 多光标操作
a字体不继承，input行高、字体不继承

    unslider 
    
1.list列表查不到，Charles代理地址写错，多写了一个心
    反例：localhost:8088/product/*-->www.happymmall.com:80/product/*
    正例：localhost:8088/product/*-->www.happymmall.com:80/product/
    
2.分页实现不了,pagination/index.string漏代码、type改为value
    反例：
    {{#active}}
        <span class="pg-item active" data-type="{{value}}">{{name}}</span>
    {{^active}}
        <span class="pg-item" data-type="{{value}}">{{name}}</span>
    {{/active}}
    正例：
    {{#active}}
        <span class="pg-item active" data-value="{{value}}">{{name}}</span>
    {{/active}}
    {{^active}}
        <span class="pg-item" data-value="{{value}}">{{name}}</span>
    {{/active}}

this.pagination ? '' : (this.pagination = new Pagination());

3.搜索框回填实现不了
//module.exports = header;
header.init();
    init方法必须要调用的，才能执行那些逻辑，光export只是输出出去了
    异步接口加载的页面，页面一出来是绑定不上事件的，要用事件代理
    mouseenter mouseover hover 
    
    订单确认页最难,该页购物车数量回填问题
    
    功能性bug:
        订单确认页修改商品数量
        添加、修改地址弹窗顺序问题
    
    