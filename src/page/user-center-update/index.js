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
        this.bindEvent();
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
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('click', '.btn-submit', function(){
            var userInfo = {
                phone       : $.trim($('#phone').val()),
                email       : $.trim($('#email').val()),
                question    : $.trim($('#question').val()),
                answer      : $.trim($('#answer').val())
            },
            validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                _user.updateUserInfo(userInfo, function(res, msg){
                    _mm.successTips(msg);
                    window.location.href = './user-center.html';
                }, function(errMsg){
                    _mm.errorTips(errMsg);
                });
            }else{
                _mm.errorTips(validateResult.msg);
            }
        });
    },
    validateForm: function(fromData){
        var result = {
            status  : false,
            msg     : ''
        };
        if(!_mm.validate(fromData.phone, 'phone')){
            result.msg = '手机号码格式不正确';
            return result;
        }
        if(!_mm.validate(fromData.email, 'email')){
            result.msg = '邮箱格式不正确';
            return result;
        }
        if(!_mm.validate(fromData.phone, 'require')){
            result.msg = '密码提示问题不能为空';
            return result;
        }
        if(!_mm.validate(fromData.phone, 'require')){
            result.msg = '提示问题答案不能为空';
            return result;
        }
        result.status   = true;
        result.msg      = '验证通过';
        return result;
    }
};

$(function(){
    page.init();
});