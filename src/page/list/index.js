/*
    @Author: junjun
    @Date: 2018/2/13
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
const _mm = require('util/mm.js');
const _product = require('service/product-service.js');
const Pagination = require('util/pagination/index.js');
const templateIndex = require('./index.string');

const page = {
    data: {
        listParam: {
            keyword         : _mm.getUrlParam('keyword')    || '',
            categoryId      : _mm.getUrlParam('categoryId') || '',
            orderBy         : _mm.getUrlParam('orderBy')    || 'default',
            pageNum         : _mm.getUrlParam('pageNum')    || 1,
            pageSize        : _mm.getUrlParam('pageSize')   || 20
        }
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        var _this   = this,
        listHtml    = '',
        listParam   = this.data.listParam,
        $pListCon   = $('.p-list-con');
        $pListCon.html('<div class="loading"></div>');
        // 删除不必要的字段
        listParam.categoryId ? (delete listParam.keyword) : (delete listParam.categoryId);
        // 请求接口  res
        _product.getProductList(listParam, function(res){
            listHtml = _mm.renderHtml(templateIndex, {
                list : res.list
            });
            $pListCon.html(listHtml);
            /*_this.loadPagination({
                hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
            });*/
        }, function(errMsg){
            _mm.errorTips(errMsg);
        });
    },

    /*loadPagination: function(pageInfo){
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container : $('.pagination'),
            onSelectPage : function(pageNum){
                _this.data.listParam.pageNum = pageNum;
                _this.onLoad();
            }
        }));
    },*/

    bindEvent: function(){
        var _this = this;
        // 排序的点击事件
        $('.sort-item').click(function(){
            var $this = $(this);
            _this.data.listParam.pageNum = 1;
            // 点击默认排序
            if($this.data('type') === 'default'){
                if($this.hasClass('active')){
                    return;
                }else{
                    $this.addClass('active').siblings('.sort-item').removeClass('active asc desc');
                    _this.data.listParam.orderBy = 'default';
                }
            }
            // 点击价格排序
            else if($this.data('type') === 'price'){
                $this.addClass('active').siblings('.sort-item').removeClass('active asc desc');
                if(!$this.hasClass('asc')){
                    $this.addClass('asc').removeClass('desc');
                    _this.data.listParam.orderBy = 'price_asc';
                }else{
                    $this.addClass('desc').removeClass('asc');
                    _this.data.listParam.orderBy = 'price_desc';
                }
            }
            // 重新加载列表
            _this.onLoad();
        });
    }
};

$(function(){
    page.init();
});