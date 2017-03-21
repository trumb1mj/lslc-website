import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    Ember.$.getScript('https://www.yelp.com/embed/widgets.js');
  }
});
