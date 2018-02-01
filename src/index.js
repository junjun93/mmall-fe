/*
* @Author: junjun
* @Date:   2018-01-31 16:23:12
* @Last Modified by:   junjun
* @Last Modified time: 2018-01-31 16:23:12
*/
import _ from 'lodash';
    function component(){
        var element = document.createElement('div');

        //Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], '');
        return element;
    }
    document.body.appendChild(component());