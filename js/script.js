"use strict";

//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#findAndReplace").submit(function(event) {
      var ignoreCase = $("input#ignoreCase").is(':checked');
      var textToSearch = $("textarea#toSearch").val();
      var find = $("input#find").val();
      var replaceWith = $("input#replaceWith").val();

      var result = findAndReplace(textToSearch, find, replaceWith, ignoreCase);

      $("div#result").text(result);

      $("div#result-panel").css('width','auto');
      $("div#result-panel").css('visibility','visible');

      event.preventDefault();
    });

});

//raw js
var findAndReplace = function(toSearch, find, replaceWith, matchAnyCase) {
  var regexOptions = 'g'
  if (matchAnyCase) { regexOptions += 'i'}
  var regex = new RegExp('\\b' + find + '\\b',regexOptions);
  var result = toSearch.replace(regex, replaceWith)
  return result;
};
