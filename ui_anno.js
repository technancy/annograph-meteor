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
    var label = Categories.find();
    var count = 0;
    var markupForLabel = "";

    label.forEach(function (category) {
      markupForLabel += "<div class='option'>" + category.category +"</div>";
      count += 1;
    });
    return markupForLabel;
  },
  anticipateOption: function() {
    var self = this;
      console.log("What will you choose now?");

      document.body.onmousedown = function(e){
        e = window.event? event.srcElement: e.target;
        console.log(e);
        if(e.className && e.className.indexOf('option')!=-1){
          var opts = document.getElementsByClassName("option"),
          optsLength = opts.length, i;
            for(i=0; i < optsLength; i++) {
              (function(i) {
                opts[i].onclick = function() {
                  self.pickColour(i);
                  self.tallyUp(i);
                };
              })(i);
            };
        }
        else {
          console.log("you've pressed something other than a tooltip option");
        };
      };
  },
  pickColour: function(num) {
    var self = this;
    console.log('PICKing Colour ' + num);
    if(num == 0){clr = 'green';}
    else if(num == 1){clr = 'yellow';}
    else if(num == 2){clr = 'red';}
    self.applyHighlight(clr);
  },
  tallyUp: function(num){
    n = parseInt(num,0);
    var which = "tally_" + n;
    var trump = document.getElementById("tally_"+n).innerHTML;
    document.getElementById("tally_"+n).innerHTML = parseInt(trump) + 1;
  },
  applyHighlight: function(classColour) {
    var self = this;
      console.log("APPLYing HIGHlight COLOR " + "#"+this._id + classColour);
      var saved = document.getElementById("uCsdpoWq8XyZKZsmn").innerHTML;

      var revision = saved.replace(highlight, "<span class='"+ classColour + "'>" + highlight + "</span>");
      document.getElementById("uCsdpoWq8XyZKZsmn").innerHTML = revision;
      self.toggleToolTip();
  },
  toggleToolTip: function(){
    if($('#labeller')) {
      $('#labeller').fadeOut();
      $('#labeller').remove();
    }
  }
}