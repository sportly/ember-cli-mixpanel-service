import Ember from 'ember';
import Configuration from 'ember-cli-mixpanel-service/configuration';

export default Ember.Service.extend({
    pageHasAnalytics: function() {
        return window.mixpanel && typeof window.mixpanel === "object" && Configuration.enabled;
    },

    logTrackingEnabled: function() {
        return !!Configuration && !! Configuration.LOG_EVENT_TRACKING;
    },

    logTracking: function() {
        Ember.Logger.info('[Mixpanel] ', arguments);
    },

    trackPageView: function(page, overrides = {}) {
        if (this.pageHasAnalytics()) {
            if (!page) {
                var loc = window.location;
                page = loc.hash ? loc.hash.substring(1) : loc.pathname + loc.search;
            }

            window.mixpanel.track("visit", Ember.merge({pageName: page}, overrides));
        }

        if (this.logTrackingEnabled()) {
            this.logTracking('page view', page);
        }
    },

    trackEvent: function(event, properties, options, callback) {
        if (this.pageHasAnalytics()) {
            window.mixpanel.track(event, properties, options, callback);
        }

        if (this.logTrackingEnabled()) {
            this.logTracking(event, properties, options);
        }
    },

    identify: function(userId, traits, options, callback) {
        if (this.pageHasAnalytics()) {
            window.mixpanel.identify(userId, traits, options, callback);
        }

        if (this.logTrackingEnabled()) {
            this.logTracking('identify user', userId, traits, options);
        }
    },

    alias: function(userId, previousId, options, callback) {
        if (this.pageHasAnalytics()) {
            window.mixpanel.alias(userId, previousId, options, callback);
        }

        if (this.logTrackingEnabled()) {
            this.logTracking('alias user', userId, previousId, options);
        }
    },

  register: function(traits, options, callback) {
        if (this.pageHasAnalytics()) {
            window.mixpanel.register(traits, options, callback);
        }

        if (this.logTrackingEnabled()) {
            this.logTracking('register user', traits, options);
        }
    },

    peopleSet: function(attributes) {

        if (this.pageHasAnalytics()) {
            window.mixpanel.people.set(attributes);
        }

        if (this.logTrackingEnabled()) {
            this.logTracking('people.set', attributes);
        }
    }
});
