import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["id"],
  activePost: function(){
    let id = this.get("id");
    if (id){
      return this.get("model").findBy("id", id);
    } else {
      return this.get("model.firstObject");
    }
  }.property("model", "id"),
  otherPosts: function(){
    return this.get("model").rejectBy("id", this.get("activePost.id"));
  }.property("model", "activePost"),
});
