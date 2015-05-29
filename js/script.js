"use strict";

//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findAndReplace = function(toSearch, find, replaceWith) {
   var regex = new RegExp(find,'g');
   var result = toSearch.replace(regex, replaceWith)
   return result;
};
