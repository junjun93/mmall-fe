/*
    @Author: junjun
    @Date: 2018/2/1
*/
'use strict';

var hogan = require('hogan.js');
const conf = {
    serverHost: ''
};
const _mm = {
    //网络请求
    request: function(param){
        const _this = this;
        $.ajax({
            type        : param.method  || 'get',
            url         : param.url     || '',
            dataType    : param.type    || 'json',
            data        : param.data    || '',
            success     : function(res){
                //请求成功
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                //未登录，需要强制登录
                else if(10 === res.status){
                    _this.doLogin();
                }
                //请求数据错误
                else if(1 === res.status){
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error       : function(res){
                typeof param.error === 'function' && param.error(res.msg);
            }
        })
    },
    //获取服务器地址
    getServerUrl: function(path){
        return conf.serverHost + path;
    },
    //获取url参数 4-3 03:28 后台解码
    getUrlParam: function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //渲染html模板
    renderHtml: function(htmlTemplate, data){
        var template = hogan.compile(htmlTemplate);
        return template.render(data);
    },
    //成功提示
    successTips: function(msg){
        alert(msg || '操作成功！');
    },
    //失败提示
    errorTips: function(msg){
        alert(msg || '哪里不对了~');
    },
    //非空、手机号、邮箱验证
    validate: function(v, type){
        var value = $.trim(v);
        //value强转成布尔型
        if('require' !== value){
            return !!value;
        }
        if('phone' === type){
            return /^1\d{10}$/.test(value);
        }
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    //统一登录处理
    doLogin: function(){
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    goHome: function(){
        window.location.href = './index.string';
    }
};

module.exports = _mm;
