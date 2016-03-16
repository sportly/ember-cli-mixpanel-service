import Config from '../config/environment';

export function initialize(instance) {
  if (Config.mixpanel.enabled) {
    var router = instance.container.lookup('router:main');
    if (Config.mixpanel.autoPageviewTracking == undefined || Config.mixpanel.autoPageviewTracking) {
      router.on('didTransition', function() {
        var attributeOverrides = Config.mixpanel.attributeOverrides || {};
        instance.container.lookup('service:mixpanel').trackPageView(this.get(Config.mixpanel.pageViewAttribute), attributeOverrides);
      });
    }
  }
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
