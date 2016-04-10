'use strict';

app.directive('loader', function(){
    return {
        templateUrl: './partials/loader.html',
        replace: true
    };
});
