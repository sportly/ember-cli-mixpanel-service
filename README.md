# ember-cli-mixpanel-service

This ember-cli addon injects mixpanel into your ember app.

The mixpanel js is injected into the app's index.html. Pageview tracking is automatic, no mixins required. The mixpanel service is injected into your apps controllers and routes and is available as `this.mixpanel`.

This is close port of https://github.com/remerge/ember-cli-mixpanel but refactored as a service.

More on mixpanel at http://www.mixpanel.com

## Installation

```
ember install:addon ember-cli-mixpanel-service
```

# Configuration

This plugin uses the ember-cli project's configuration as defined in `config/environment.js`.

Add your typekit kitId to `config/environment.js` and you're good to go. A couple more params below

```js
// environment.js

    ENV.mixpanel: {
      enabled: false,
      LOG_EVENT_TRACKING: false,
      token: 'abcd123456789'
    }

```

### Configuration Parameters

* `enabled` (Default: `true`): Enable mixpanel tracking
* `LOG_EVENT_TRACKING` (Default: `false`): Output logging to the console.
* `token` (Default: `null`): Mandatory mixpanel api token


## Mixpanel API

# pageviews

`trackPageView: function(page)`

Note: Pageviews are tracked automatically, no mixins required.

# events

`trackEvent: function(event, properties, options, callback)`

Alias of the mixpanel `track` function

# identify

`identify: function(userId, traits, options, callback)`

Alias of the mixpanel `identify` function

# alias

`alias: function(userId, previousId, options, callback)`

Alias of the mixpanel `alias` function

# peopleSet

`peopleSet: function(attributes)`

Alias of the mixpanel `people.set` function





