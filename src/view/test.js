/*
    @Author: junjun
    @Date: 2018/2/1
*/
'user strict';
var _mm = require('util/mm.js');
alert(123);
_mm.request({
        url: './test.do',
        success: function(res){
            console.log(res);
        },
        error: function(err){
            console.log(err);
        }
    }
);