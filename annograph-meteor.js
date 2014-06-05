Categories = new Meteor.Collection('Categories');

if (Meteor.isClient) {
  Template.category.listCategories = function () {
    return Categories.find();
  };

  Template.category.events({

    'click #addCategory': function (evt, templ) {
      var category = templ.find("#nameOfCategory").value;
      Categories.insert({
        category: category
      });

      }
  });
}
