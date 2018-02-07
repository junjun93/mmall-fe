/*
    @Author: junjun
    @Date: 2018/2/3
    @Last Modified by: junjun
    @Last Modified time: 2018/2/3
*/
'use strict';
require("./index.css");

var _mm = require('util/mm.js');
var templateIndex = require('./index.string');

//侧边导航
var navSide = {
    option: {
        name: '',
        navList: [
            {name: 'user-center', desc: '个人中心', href: './user-center.html'},
            {name: 'user-list', desc: '我的订单', href: './order-list.html'},
            {name: 'user-pass-update', desc: '修改密码', href: './user-pass-update.html'},
            {name: 'user-about', desc: '关于MMall', href: './about.html'}
        ]
    },
    init: function(option){
        // 合并选项
        $.extend(this.option, option);
        this.renderNav();
    },
    //渲染导航菜单
    renderNav: function(){
        var iLength = this.option.navList.length;
        for(var i=0; i < iLength; i++){
            if(this.option.navList[i].name === this.option.name){
              this.option.navList[i].isActive = true;
            }
        }
        //渲染list数据
        var navHtml = _mm.renderHtml(templateIndex, {
            navList: this.option.navList
        });
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;

