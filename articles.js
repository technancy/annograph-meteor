Articles = new Meteor.Collection('Articles');

if (Meteor.isClient) {
  Template.article.lockArticle = function () {
    console.log('locked');
  };

  Template.article.events({

    'click #lockArticle': function (evt, templ) {
     console.log('locked');

      }
  });
}
