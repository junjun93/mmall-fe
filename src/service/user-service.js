/*
    @Author: junjun
    @Date: 2018/2/3
    @Last Modified by: junjun
    @Last Modified time: 2018/2/3
*/
'use strict';

const _mm = require('util/mm.js');

const _user = {
    //检查登录状态
    checkLogin: function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  :'POST',
            success : resolve,
            error   :reject
        });
    },
    //登出
    logout: function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _user;