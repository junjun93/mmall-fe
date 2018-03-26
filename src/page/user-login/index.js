/*
    @Author: junjun
    @Date: 2018/2/5
    @Last Modified by: junjun
    @Last Modified time: 2018/2/5
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
const _user = require('service/user-service.js');
const _mm   = require('util/mm.js');

const formError = {
    show: function(errMsg){
        $('.error-item').show().find('.err-msg').text(errMsg);
    },
    hide: function(){
       $('.error-item').hide().find('.err-msg').text();
    }
}

const page = {
    init: function(){
        this.bindEvent();
    },
    bindEvent: function(){
        var _this = this;
        $('#submit').click(function(){
            _this.submit();
        });
        $('.user-content').keyup(function(e){
            if(e.keyCode === 13){
                _this.submit();
            }
        });
    },
    submit: function(){
        var formData = {
            username: $.trim($('#username').val()),
            password: $.trim($('#password').val())
        },
        validateResult = this.formValidate(formData);
        if(validateResult.status){
            _user.login(formData, function(){
                window.location.href = _mm.getUrlParam('redirect') || './index.html';
            }, function(errMsg){
                formError.show(errMsg);
            });
        }else{
            formError.show(validateResult.msg);
        }
    },

    // 表单字段的验证
    formValidate: function(formData){
        var result = {
            status  : false,
            msg     : ''
        };
        if(!_mm.validate(formData.username, 'require')){
            result.msg = '用户名不能为空';
            return result;
        }
        if(!_mm.validate(formData.password, 'require')){
            result.msg = '密码不能为空';
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