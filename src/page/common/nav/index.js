/*
    @Author: junjun
    @Date: 2018/2/3
    @Last Modified by: junjun
    @Last Modified time: 2018/2/3
*/
'use strict';
require("./index.css");
const _mm = require('util/mm.js');
const _user = require('server/user-server.js');
const nav = {
    init: function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent: function(){
        //登录
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        //注册
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            },function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
    },
    //加载用户信息
    loadUserInfo: function(){
        _user.checkLogin(function(res){

        },function(errMsg){
            //do nothing
        });
    },
    //加载购物车数量
    loadCartCount: function(){

    }
};
module.exports = nav.init();