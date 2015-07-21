export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    Ember.$('head base').remove();
  }
}

export default {
  name: 'detect-firefox',
  initialize: initialize
};
