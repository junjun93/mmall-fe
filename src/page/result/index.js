/*
    @Author: junjun
    @Date: 2018/2/4
    @Last Modified by: junjun
    @Last Modified time: 2018/2/4
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
const _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default';
    var $element = $('.' + type + '-success');

    //显示对应的提示元素
    $element.show();
});

