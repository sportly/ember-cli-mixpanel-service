export function initialize(instance) {
  var router = instance.container.lookup('router:main');
  router.on('didTransition', function() {
      this.mixpanel.trackPageView(this.get('url'));
 });
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
