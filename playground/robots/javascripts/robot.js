/* 
 * robot.js | jQuery Plugin
 * Name: robotUtil
 * Description: Client side controller utils for robots
 */

(function ($, console) {
    'use strict';
    $.robotUtil = function (element, options) {
        console.log('robotUtil...');
        var defaults = {
            id : 1,
            onInteract : function () {
            }
        },
        plugin = this,
        $element = $(element),

        doRobot = function (pin, enable) {
            console.log('doRobot...');
            var toggle = (enable) ? 'on' : 'off',
                ajaxUrl = 'http://192.168.1.113/ebot/' + pin + toggle + '.php';
            console.log('robot url: ' + ajaxUrl);
            $.ajax({
                url: ajaxUrl,
                //dataType: 'json',
                //data: {
                //    toggle: enable,
                //    pin: pin
                //},
                beforeSend: function () {
                    console.log('beforeSend...');
                },
                success: function () {
                    //console.log('sucessful ajax...');
                },
                statusCode: {
                    404: function() {
                        console.log('Page not Found!');
                    }
                }
            }).done(function () {
                console.log('Done Ajax');
            });
        },
        
        /*
         * 17: right {on: 'fwd'}
         * 18: right {on: 'back'}
         * 27: left {on: 'fwd'}
         * 22: left {on: 'back'}
         */

        robotLeft = function () {
            console.log('turnLeft...');
            doRobot(17, 0);
            doRobot(28, 0);
            doRobot(27, 1);
            doRobot(18, 1);
        },

        robotRight = function () {
            console.log('turnRight...');
            doRobot(27, 0);
            doRobot(18, 0);
            doRobot(17, 1);
            doRobot(28, 1);
        },

        robotFwd = function () {
            console.log('robotFwd...');
            doRobot(22, 0);
            doRobot(18, 0);
            doRobot(17, 1);
            doRobot(27, 1);
        },

        robotStop = function () {
            console.log('robotStop...');
            doRobot(17, 0);
            doRobot(18, 0);
            doRobot(22, 0);
            doRobot(27, 0);
        },

        setupListeners = function () {
            console.log('setupListeners...');
            $element.keypress(function (event) {
                console.log('Key press: ' + event.which);
            });
            $element.keydown(function (event) {
                console.log('Key down: ' + event.which);
                if (event.which === 38) {
                    event.preventDefault();
                    robotFwd();
                }
                if (event.which === 37) {
                    event.preventDefault();
                    robotLeft();
                }
                if (event.which === 39) {
                    event.preventDefault();
                    robotRight();
                }
                if (event.which === 40) {
                    event.preventDefault();
                    robotStop();
                }
            });
        };
        plugin.settings = {};

        // public methods
        plugin.init = function () {
            console.log('plugin init...');
            plugin.settings = $.extend({}, defaults, options);

            setupListeners();
        };

        // a public method. for demonstration purposes only - remove it!
        plugin.stopRobot = function () {
            console.log('stop robot!');
            robotStop();
        };

        plugin.init();
    };

    // add the plugin to the jQuery.fn object
    $.fn.robotUtil = function (options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function () {
            // if plugin has not already been attached to the element
            if (undefined === $(this).data('robotUtil')) {
                var plugin = new $.robotUtil(this, options);
                $(this).data('robotUtil', plugin);
            }
        });
    };
}(jQuery, console));

$(window).robotUtil();
