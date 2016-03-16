import Config from '../config/environment';

export function initialize(instance) {
  if (Config.mixpanel.enabled) {
    var router = instance.container.lookup('router:main');
    if (Config.mixpanel.autoPageviewTracking == undefined || Config.mixpanel.autoPageviewTracking) {
      router.on('didTransition', function() {
        instance.container.lookup('service:mixpanel').trackPageView(this.get(Config.mixpanel.pageViewAttribute));
      });
    }
  }
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
