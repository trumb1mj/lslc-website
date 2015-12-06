import Ember from 'ember';

export default Ember.Route.extend({
  success: true,
  failure: false,
  setSuccessFailure: function(side){
    this.set("controller.success", false);
    this.set("controller.failure", false);
    if (side==="success"){
      this.set("controller.success", true);
    } else if(side==="failure"){
      this.set("controller.failure", true);
    }
  },
  clearForm: function(){
    this.set("controller.name", null);
    this.set("controller.childsName", null);
    this.set("controller.email", null);
    this.set("controller.phone", null);
    this.set("controller.message", null);
  },
  actions: {
    submitContactForm: function(){
      var url = './scripts/send_email.py?' + 'name=' + this.get("controller.name") + '&childs-name=' + this.get("controller.childsName") + '&email=' + this.get("controller.email") + '&phone=' + this.get("controller.phone") + '&message=' + this.get("controller.message");
      var self = this;
      Ember.$.ajax({
        url: url,
        type: "GET",
        contentType: "application/json"
      }).then(function(r){
        if (r.success){
          self.clearForm();
          self.setSuccessFailure("success");
        }
        else{
          self.setSuccessFailure("failure");
        }
      });
    }
  }
});
