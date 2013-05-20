/*=============================================================================
#     FileName: index.js
#         Desc: 指南针
#       Author: Smeagol
#        Email: star212417@163.com
#     HomePage: http://www.quxing.info
#      Version: 0.0.1
#   LastChange: 2013-04-16 13:59:18
#      History:
=============================================================================*/
seajs.config({
	alias: {
		//'mu': 'mustache/0.4.0/mu',
		//'less': 'less/1.3.0/less-debug',
		'zepto': 'zepto/1.0.0/zepto'
		//'tip': '../../../../base/utils/tip/tip',
		//'uriBroker': './../../../../../base/utils/server/uriBroker',
		//'cdn': './../../../../../base/utils/server/cdn'
	},
    base: 'http://a.tbcdn.cn/mw/base/libs',
	//preload: ['plugin-less'],
	//preload: ['plugin-combo','plugin-less'],
	debug: false
});

define(function(require) {

    var $ = require('zepto');
    //alert(1);

    var options = { frequency: 500 };
    window.watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    // onSuccess: Get the current heading
    //
    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;

        $("#wrap").animate({
            rotate : (360 - parseFloat(heading.magneticHeading)) + "deg"
        },450,"ease");
    }

    // onError: Failed to get the heading
    //
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }

 
});

