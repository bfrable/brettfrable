'use strict';

var HTMLDocument;

(function() {

    HTMLDocument.prototype.ready = function () {
        // should be a function(resolve, reject) rather just resolve but resolve was breaking, something to look into
        return new Promise(function(resolve) {
            if (document.readyState === 'complete') {
                resolve(document);
            } else if (document.readyState === 'interactive') {
                document.addEventListener('DOMContentLoaded', function() {
                    resolve(document);
                });
            } else {
                resolve(document);
            }
        });
    };

    var stateLoaded = function () {
        document.body.className += ' loaded';
    };

    var removeLoader = function() {
        var loader = document.getElementById('loader');

        document.ready().then(function(){
            loader.parentNode.removeChild(loader);
            stateLoaded();
        });
    };

    var mainnav = {
        navigation: document.getElementById('main-nav'),
        trigger: document.getElementById('menu-trigger'),

        toggleMenu: function() {
            if (mainnav.navigation.classList.contains('open')) {
                mainnav.navigation.className = '';
                document.body.classList.remove('nav-open');
            } else {
                mainnav.navigation.className = 'open';
                document.body.classList.add('nav-open');
            }
        },
        toggleIcon: function() {
            if (mainnav.trigger.firstChild.classList.contains('fa-bars')) {
                mainnav.trigger.firstChild.className = '';
                mainnav.trigger.firstChild.className = 'fa fa-times';
            } else {
                mainnav.trigger.firstChild.className = '';
                mainnav.trigger.firstChild.className = 'fa fa-bars';
            }
        },
        init: function() {
            mainnav.trigger.onclick = function() {
                mainnav.toggleMenu();
                mainnav.toggleIcon();
            };
        }
    };

    var init = function() {
        setTimeout(function(){
            removeLoader();
        }, 1500);

        mainnav.init();
    };

    init();

}());
