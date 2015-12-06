/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'lslc-website',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      facebookLink: "http://facebook.com/lakeviewspeechclinic",
      yelpLink: "http://www.yelp.com/biz/lakeview-speech-and-language-clinic-chicago",
      pinterestLink: "https://www.pinterest.com/lakeviewspeech/"
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {

    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.liveReload = false;
  }

  ENV.contentSecurityPolicy = {
    'default-src': "*",
    'script-src': "'self' liveReloadPort 'unsafe-eval' *.olark.com 'unsafe-inline' *.googleapis.com",
    'font-src': "'self' data: use.typekit.net fonts.gstatic.com",
    'connect-src': "'self' liveReloadPort *.olark.com lakeviewspeech.com",
    'img-src': "'self' *.olark.com app.getsentry.com csi.gstatic.com *.gstatic.com data: *.googleapis.com",
    'style-src': "'self' 'unsafe-inline' *.olark.com use.typekit.net *.googleapis.com",
    'media-src': "'self' *.olark.com",
    'report-uri': "http://localhost:4200"
  };




  return ENV;
};
