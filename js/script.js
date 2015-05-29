"use strict";

//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findAndReplace = function(toSearch, find, replaceWith, matchAnyCase) {
  var regexOptions = 'g'
  if (matchAnyCase) { regexOptions += 'i'}
  var regex = new RegExp('\\b' + find + '\\b',regexOptions);
  var result = toSearch.replace(regex, replaceWith)
  return result;
};
