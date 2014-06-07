if (Meteor.isClient) {

  Template.article.events({

    'mouseup .article': function (evt, templ) {
      var selection = Meteor.annoUI.grabMousedSelection();
      console.log(selection);
    }

  });
}
