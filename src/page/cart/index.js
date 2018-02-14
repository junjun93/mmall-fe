/*
    @Author: junjun
    @Date: 2018/2/14
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
const nav           = require('page/common/nav/index.js');
const _mm           = require('util/mm.js');
const _cart         = require('service/cart-service.js');
const templateIndex = require('./index.string');

const page = {
    data: {

    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        this.loadCart();
    },
    bindEvent: function(){
        var _this = this;
        // 商品的选择/取消选择
        $(document).on('click', '.cart-select', function(){
            var $this = $(this),
                productId = $this.parents('.cart-table').data('product-id');
            if($this.is(':checked')){
                _cart.selectProduct(productId, function(res){
                    _this.renderCart(res);
                }, function(errMsg){
                    _this.showCartError();
                });
            }else{
                _cart.unSelectProduct(productId, function(res){
                    _this.renderCart(res);
                }, function(errMsg){
                    _this.showCartError();
                });
            }
        })
    },
    renderCart: function(){

    },
    showCartError: function(){

    }
};

$(function(){
    page.init();
});