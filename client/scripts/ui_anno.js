Meteor.annoUI = {
  grabMousedSelection: function() {
    highlight = "";
    if (window.getSelection) {
      var choicecut = window.getSelection();
      if (choicecut.rangeCount) {
        var container = document.createElement("div");
        for (var i = 0, len = choicecut.rangeCount; i < len; ++i) {
          container.appendChild(choicecut.getRangeAt(i).cloneContents());
        }
        highlight = container.innerHTML;
      }
    } else if (document.selection) {
      if (document.selection.type == "Text") {
        highlight = document.selection.createRange().htmlText;
      }
    }
    return highlight;
  }
}