/*
    @Author: junjun
    @Date: 2018/2/4
    @Last Modified by: junjun
    @Last Modified time: 2018/2/4
*/
'use strict';

const _mm = require('util/mm.js');

const _cart = {
    getCartCount: function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            request : 'GET',
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _cart;