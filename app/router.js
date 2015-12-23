import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('services');
  this.route('new-clients');
  this.route('contact');
  this.route('team');
});

export default Router;
