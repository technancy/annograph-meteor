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
  },
  generateToolTip: function(e) {
      //console.log("I am " + e.type);
      var toolTip, clr;
      var self = this;
        var focus =  self.grabMousedSelection();
        if(focus && (focus = new String(focus).replace(/^\s+|\s+$/g,''))) {

        if(!toolTip) {
          toolTip = $('<span>').attr({
              id: 'labeller'
          }).html(self.markupCategories()).hide();
          $(document.body).append(toolTip);
        }

        toolTip.css({
          top: e.pageY + 5, //offsets
          left: e.pageX + 10 //offsets
        }).fadeIn();

      };
  },
  markupCategories: function() {
    var what = Categories.find();
    var count = 0;
    var markup;

    what.forEach(function (category) {
      markup += "<div class='option'>" + category.category +"</div>";
      count += 1;
    });

    return markup;
  }
}