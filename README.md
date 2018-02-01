这是一个前后端分离项目的前端部分
fileHeader command+option+a enter
npm install jquery --save
Webpack2种方式打包、JS文件引入问题、引入公共模块

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

2.webpack安装

    1.brew install node
    安装node.js
    2.npm init
    初始化npm	
	3.npm install --save-dev  webpack 
	  npm install --save lodash
	防止本地环境与部署环境版本不一致
	
3.webpack管理资源

	1.bundle文件+lodash依赖
        npx webpack src/index.js dist/bandle.js
        
	2.webpack.config.js配置文件
        npx webpack --config webpack.config.js
        npm run build(添加script-build参数)

	
	
