import Ember from 'ember';

export default Ember.Controller.extend({
  rotateCarousel: function(){
    var self = this;
    // Ember.run.later((function() {
    //   self.rotateCarousel()
    //   self.get("carousel.swiper")._slideNext()
    // }), 8000);
  },
  init: function(){
    this.rotateCarousel();
  }
});
