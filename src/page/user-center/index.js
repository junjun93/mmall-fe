/*
    @Author: junjun
    @Date: 2018/2/5
    @Last Modified by: junjun
    @Last Modified time: 2018/2/5
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
const navSide = require('page/common/nav-side/index.js');
const _mm = require('util/mm.js');
const _user = require('service/user-service.js');
const templateIndex = require('./index.string');

const page = {
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });
        this.loadUserInfo();
    },

    loadUserInfo: function () {
        var userHtml = '';
        _user.getUserInfo(function (res) {
            userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function (errMsg) {
            _mm.errorTips(errMsg);
        });
    }
}

$(function(){
    page.init();
});