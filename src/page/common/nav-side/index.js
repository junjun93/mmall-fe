/*
    @Author: junjun
    @Date: 2018/2/3
    @Last Modified by: junjun
    @Last Modified time: 2018/2/3
*/
'use strict';
require("./index.css");

const _mm = require('util/mm.js');
const templateIndex = require('./index.string');

//侧边导航
const navSide = {
    option: {
        name: '',
        navList: [
            {name: 'user-center', desc: '个人中心', href: './user/user-center'},
            {name: 'user-list', desc: '我的订单', href: './user/user-center'},
            {name: 'user-pass-update', desc: '修改密码', href: './user/user-pass-update'},
            {name: 'user-about', desc: '关于MMall', href: './user/user-about'}
        ]
    },
    init: function(option){
        $.extend(this.option, option);
        this.renderNav();
    },
    //渲染菜单
    renderNav: function(){
        var iLength = this.option.navList.length;
        for(var i=0; i < iLength; i++){
            if(this.option.navList[i].name = this.option.name){
              this.option.navList[i].isActive = true;
            }
        };
        //渲染list数据
        var navHtml = _mm.renderHtml(templateIndex, {
            navList: this.option.navList
        });
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;

