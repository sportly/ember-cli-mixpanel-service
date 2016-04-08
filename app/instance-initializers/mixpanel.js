import Configuration from 'ember-cli-mixpanel-service/configuration';

export function initialize(instance) {
  if (Configuration.enabled) {
    let router;
    if (typeof instance.lookup === 'function') {
      router = instance.lookup('router:main');
    } else {
      router = instance.container.lookup('router:main');
    }

    if (Configuration.autoPageviewTracking == undefined || Configuration.autoPageviewTracking) {
      router.on('didTransition', function() {
        var attributeOverrides = Configuration.attributeOverrides;
        let mixpanelService;
        if (typeof instance.lookup === 'function') {
          mixpanelService = instance.lookup('service:mixpanel');
        } else {
          mixpanelService = instance.container.lookup('service:mixpanel');
        }
        let pageViewAttribute = Configuration.pageViewAttribute;
        mixpanelService.trackPageView(this.get(pageViewAttribute), attributeOverrides);
      });
    }
  }
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
