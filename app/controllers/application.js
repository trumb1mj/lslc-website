import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  ENV: ENV,
  currentYear: function(){
    var d = new Date();
    return d.getFullYear();
  }.property(),
  actions: {
    toggleMobileNav: function(){
      if (this.get("mobileNavClass") === "in"){
        this.set("mobileNavClass", "");
      } else{
        this.set("mobileNavClass", "in");
      }
    }
  }
});
