//raw js
var findAndReplace = function(toSearch, find, replaceWith, matchAnyCase) {
  "use strict";
  var regexOptions = "g";
  if (matchAnyCase) { regexOptions += "i"; }
  var regex = new RegExp("\\b" + find + "\\b", regexOptions);
  var result = toSearch.replace(regex, replaceWith);
  return result;
};
//jQuery
$( document ).ready(function() {
  "use strict";
    console.log( "jQuery Ready" );
    $("#findAndReplace").submit(function(event) {
      event.preventDefault();
      var ignoreCase = $("input#ignoreCase").is(":checked");
      var textToSearch = $("textarea#toSearch").val();
      var find = $("input#find").val();
      var replaceWith = $("input#replaceWith").val();
      if (!textToSearch) {
        alert("No text to search!");
        return;
      }
      if (!find) {
        alert("No word to match!");
        return;
      }
      var result = findAndReplace(textToSearch, find, replaceWith, ignoreCase);
      $("div#result").text(result);
      var inputPanel = $("div#input-panel");
      var resultPanel = $("div#result-panel");
      //resize the result panel to match the input panel
      resultPanel.width(inputPanel.width());
      resultPanel.height(inputPanel.height());
      //unhide the panel
      $("div#result-panel").css("visibility", "visible");
    });
});
