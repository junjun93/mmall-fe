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
	3.npm install --save-dev  webpack 
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
        npm install --save-dev webpack-dev-server

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

	
	
