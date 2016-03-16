# ember-cli-mixpanel-service

[![npm version](https://badge.fury.io/js/ember-cli-mixpanel-service.svg)](http://badge.fury.io/js/ember-cli-mixpanel-service)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-mixpanel-service.svg)](http://emberobserver.com/addons/ember-cli-mixpanel-service)
[![Code Climate](https://codeclimate.com/github/sportly/ember-cli-mixpanel-service/badges/gpa.svg)](https://codeclimate.com/github/sportly/ember-cli-mixpanel-service)

This ember-cli addon injects mixpanel into your ember app.

The mixpanel js is injected into the app's index.html. Pageview tracking is by default automatic, no mixins required. The mixpanel service is injected into your apps controllers and routes and is available as `this.mixpanel`.

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

    ENV.mixpanel = {
      enabled: false,
      LOG_EVENT_TRACKING: false,
      token: 'abcd123456789'
    }

```

## Configuration Parameters

* `enabled` (Default: `true`): Enable mixpanel tracking
* `autoPageviewTracking` (Default: `true`): Enable automatic pageview tracking
* `pageViewAttribute` (Default: `url`): Use some other attribute available to the router instead of `url` for pageview tracking
* `attributeOverrides` (Default: `{}`): Configure overrides, if any, for any of the attributes [mixpanel stores by default](https://mixpanel.com/help/questions/articles/what-properties-do-mixpanels-libraries-store-by-default)
* `LOG_EVENT_TRACKING` (Default: `false`): Output logging to the console.
* `token` (Default: `null`): Mandatory mixpanel api token


## CORS Content Security Policy

You should add the Mixpanel API to your app's content security policy. To do this add api.mixpanel.com to the 'connect-src' key in the ENV.contentSecurityPolicy hash as below:

```
// environment.js
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' api.mixpanel.com ..."
      ...
    }
```


## Mixpanel API

### pageviews

`trackPageView: function(page, overrides = {})`

Note: Pageviews are tracked automatically, no mixins required. You can override [any properties mixpanel stores by default](https://mixpanel.com/help/questions/articles/what-properties-do-mixpanels-libraries-store-by-default) by providing an optional `overrides` object.

### events

`trackEvent: function(event, properties, options, callback)`

Alias of the mixpanel `track` function

### identify

`identify: function(userId, traits, options, callback)`

Alias of the mixpanel `identify` function

### alias

`alias: function(userId, previousId, options, callback)`

Alias of the mixpanel `alias` function

### register

`register: function(traits, options, callback)`

Alias of the mixpanel `register` function

### peopleSet

`peopleSet: function(attributes)`

Alias of the mixpanel `people.set` function
