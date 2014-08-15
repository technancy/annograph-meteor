Articles = new Meteor.Collection('Articles');

if (Meteor.isClient) {
  Template.article.listArticles = function () {
    return Articles.find();
  };

  Template.article.events({

    'click #addArticle': function (evt, templ) {
      Articles.insert({
        content: '<PRE><b>Enter your</b> text here, and begin highlighting.</PRE>'
      });
    },

    'click .edit': function (evt, templ) {
      var article = document.getElementById(this._id);
      Meteor.annoPlease.setEndOfContenteditable(article);
    },

    'click .delete': function (evt, templ) {
      var article = templ.find("#"+this._id).value;
      Articles.remove(this._id);
    },

    'click .save': function (evt, templ) {
      var innerArticle = document.getElementById(this._id).innerHTML;
      Articles.update(this._id, {
        $set: {content: innerArticle}
      });
    }
  });
}
