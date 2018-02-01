/*
* @Author: junjun
* @Date:   2018-01-31 16:23:12
* @Last Modified by:   junjun
* @Last Modified time: 2018-01-31 16:23:12
*/
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';
    function component(){
        var element = document.createElement('div');
        var btn = document.createElement('button');

        //Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], '');
        element.classList.add('hello');

        //将图像添加到现有的div
        var myIcon = new Image();
        myIcon.src = Icon;
        element.appendChild(myIcon);
        console.log(Data);

        btn.innerHTML = 'Click me and check the console';
        btn.onclick = printMe;
        element.appendChild(btn);
        return element;
    }
    document.body.appendChild(component());