import Ember from 'ember';

const { getWithDefault } = Ember;

const DEFAULTS = {
    enabled: true,
    autoPageviewTracking: true,
    pageViewAttribute: 'url',
    attributeOverrides: {},
    LOG_EVENT_TRACKING: false,
    token: null
};

/**
    ember-cli-mixpanel-service's configuration object.

    To change any of these values, set them on the application's environment
    object, e.g.:

    ```js
    // config/environment.js
    ENV['mixpanel'] = {
      token: 'abcd123456789'
    };
    ```

    @class Configuration
    @extends Object
    @module ember-cli-mixpanel-service/configuration
    @public
*/
export default {
    /**
      Enable mixpanel tracking.

      @property enabled
      @readOnly
      @static
      @type boolean
      @default true
      @public
    */
    enabled: DEFAULTS.enabled,

    /**
      Enable automatic pageview tracking

      @property autoPageviewTracking
      @readOnly
      @static
      @type boolean
      @default false
      @public
    */
    autoPageviewTracking: DEFAULTS.autoPageviewTracking,

    /**
      Use some other attribute available to the router instead of url for pageview tracking

      @property pageViewAttribute
      @readOnly
      @static
      @type String
      @default 'url'
      @public
    */

    pageViewAttribute: DEFAULTS.pageViewAttribute,


    /**
      Configure overrides, if any, for any of the attributes mixpanel stores by default

      @property attributeOverrides
      @readOnly
      @static
      @type Object
      @default {}
      @public
    */

    attributeOverrides: DEFAULTS.attributeOverrides,

    /**
      Output logging to the console.

      @property LOG_EVENT_TRACKING
      @readOnly
      @static
      @type boolean
      @default false
      @public
    */
    LOG_EVENT_TRACKING: DEFAULTS.LOG_EVENT_TRACKING,

    load(config) {
        for (let property in this) {
            if (this.hasOwnProperty(property) && Ember.typeOf(this[property]) !== 'function') {
                this[property] = getWithDefault(config, property, DEFAULTS[property]);
              }
        }
    }
};
