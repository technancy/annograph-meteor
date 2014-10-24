Highlights = new Meteor.Collection('Highlights');

if (Meteor.isClient) {

  Template.article.events({
    'mouseup .article': function (evt, templ) {
      var selection = Meteor.annoUI.grabMousedSelection();
      console.log(selection);
      Meteor.annoUI.generateToolTip(evt);
    },
    'mousedown .article': function (evt) {
      var option = Meteor.annoUI.anticipateOption();
      console.log(option);
      Meteor.annoUI.toggleToolTip();
    }

  });
}
