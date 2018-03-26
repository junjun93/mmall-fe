/*
    @Author: junjun
    @Date: 2018/2/5
    @Last Modified by: junjun
    @Last Modified time: 2018/2/5
*/
'use strict';
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css');
const navSide = require('page/common/nav-side/index.js');
const _mm = require('util/mm.js');
const _user = require('service/user-service.js');

const page = {
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        // 初始化左侧菜单
        navSide.init({
            name: 'user-pass-update'
        });
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('click', '.btn-submit', function(){
            var userInfo = {
                    password            : $.trim($('#password').val()),
                    passwordNew         : $.trim($('#password-new').val()),
                    passwordConfirm     : $.trim($('#password-confirm').val())
                },
                validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                _user.updatePassword({
                    passwordOld: userInfo.password,
                    passwordNew: userInfo.passwordNew
                }, function(res, msg){
                    _mm.successTips(msg);
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
        if(!_mm.validate(fromData.password, 'require')){
            result.msg = '原密码不能为空';
            return result;
        }
        if(!formData.passwordNew || formData.passwordNew.length < 6){
            result.msg = '密码长度不得少于6位';
            return result;
        }
        /*if(!fromData.passwordNew){
            result.msg = '新密码不得为空';
        }else if(fromData.passwordNew.length > 1 && fromData.passwordNew.length < 6){
            result.msg = '新密码长度不得少于6位';
            return result;
        }*/
        if(fromData.passwordNew !== fromData.passwordConfirm){
            result.msg = '两次输入的密码不一致';
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