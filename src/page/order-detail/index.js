/*
    @Author: junjun
    @Date: 2018/2/17
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
const navSide         = require('page/common/nav-side/index.js');
const _mm             = require('util/mm.js');
const _order          = require('service/order-service.js');
const templateIndex   = require('./index.string');

const page = {
    data: {
        listParam: {
            orderNumber : _mm.getUrlParam('orderNumber')
        }
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        // 初始化左侧菜单
        navSide.init({
            name: 'order-list'
        });
        // 加载detail数据
        this.loadDetail();
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('click', '.order-cancel', function(res){
            if(window.confirm('确实要取消该订单？')){
                _order.cancelOrder(_this.data.orderNumber, function(res){
                   _mm.successTips('该订单取消成功');
                   _this.loadDetail();
                }, function(errMsg){
                    _mm.errorTips(errMsg);
                });
            }
        });
    },

    // 加载detail数据
    loadDetail: function(){
        var _this           = this,
            orderDetailHtml = '',
            $content        = $('.content');
        $content.html('<div class="loading"></div>');
        _order.getOrderDetail(this.data.orderNumber, function(res){
            _this.dataFilter(res);
            orderDetailHtml = _mm.renderHtml(templateIndex, res);
            $content.html(orderDetailHtml);
        }, function(errMsg){
            $content.html('<p class="err-tip">' + errMsg + '</p>');
        });
    },
    // 数据的适配
    dataFilter: function(data){
        data.needPay        = data.status === 10;
        data.isCancelable   = data.status === 10;
    }
};

$(function(){
    page.init();
});

