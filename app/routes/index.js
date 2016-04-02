import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    this.transitionTo('home');
  },
  actions: {
    testAction: function(){
      alert(10)
    }    
  }
});
