export function initialize(container, application) {
  application.inject('route', 'mixpanel', 'service:mixpanel');
  application.inject('router:main', 'mixpanel', 'service:mixpanel');
  application.inject('controller', 'mixpanel', 'service:mixpanel');

  var router = container.lookup('router:main');
  router.on('didTransition', function() {
      this.mixpanel.trackPageView(this.get('url'));
 });
}

export default {
  name: 'mixpanel',
  initialize: initialize
};