Highlights = new Meteor.Collection('Highlights');

if (Meteor.isClient) {

  Template.article.events({
    'mouseup .article': function (evt, templ) {
      var selection = Meteor.annoUI.grabMousedSelection();
      console.log(selection + 'this is templ ' + templ);
      Meteor.annoUI.generateToolTip(evt);
    },
    'mousedown .article': function (evt, templ) {
      var option = Meteor.annoUI.anticipateOption();
      console.log(option);
      Meteor.annoUI.toggleToolTip();
    }

  });
}
