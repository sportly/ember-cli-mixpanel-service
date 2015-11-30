import Config from '../config/environment';

export function initialize(instance) {
  if (Config.mixpanel.enabled) {
    var router = instance.lookup('router:main');
    router.on('didTransition', function() {
      instance.lookup('service:mixpanel').trackPageView(this.get('url'));
    });
  }
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
