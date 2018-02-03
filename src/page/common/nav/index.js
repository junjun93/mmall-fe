/*
    @Author: junjun
    @Date: 2018/2/3
    @Last Modified by: junjun
    @Last Modified time: 2018/2/3
*/
'use strict';
require("./index.css");
const _mm = require('util/mm.js');
const nav = {
    init: function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent: function(){
        //登录


    },
    //加载用户信息
    loadUserInfo: function(){

    },
    //加载购物车数量
    loadCartCount: function(){

    }
};
module.exports = nav.init;