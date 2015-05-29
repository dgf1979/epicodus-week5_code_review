"use strict";

//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findAndReplace = function(toSearch, find, replaceWith) {

  return toSearch.replace(find, replaceWith);;
};
