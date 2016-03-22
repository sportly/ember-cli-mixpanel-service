import Config from '../config/environment';

export function initialize(instance) {
  if (Config.mixpanel.enabled) {
    let router;
    if (typeof instance.lookup === 'function') {
      router = instance.lookup('router:main');
    } else {
      router = instance.container.lookup('router:main');
    }

    if (Config.mixpanel.autoPageviewTracking == undefined || Config.mixpanel.autoPageviewTracking) {
      router.on('didTransition', function() {
        var attributeOverrides = Config.mixpanel.attributeOverrides || {};
        let mixpanelService;
        if (typeof instance.lookup === 'function') {
          mixpanelService = instance.lookup('service:mixpanel');
        } else {
          mixpanelService = instance.container.lookup('service:mixpanel');
        }
        mixpanelService.trackPageView(this.get(Config.mixpanel.pageViewAttribute), attributeOverrides);
      });
    }
  }
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
