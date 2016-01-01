import Ember from 'ember';
import { default as mixpanel, initialize } from '../../../initializers/mixpanel';
import { module, test } from 'qunit';

var container, application;

module('MixpanelInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

test('defaults', function (assert) {
  assert.equal(mixpanel.name, 'mixpanel', 'initializer is named mixpanel');
  assert.equal(mixpanel.initialize, initialize, 'initialize function is set');
});

test('initialize', function (assert) {
  const spy = Edgar.createSpy(application, 'inject');

  initialize(null, application);
  assert.equal(spy.called(), 4, 'inject was called 4 times');
});

test('initialize route injection', function (assert) {
  const spy = Edgar.createSpy(application, 'inject');

  initialize(null, application);

  let args = spy.calledWith(0);
  assert.equal(args[0], 'route', 'injected into routes');
  assert.equal(args[1], 'mixpanel', 'correct name');
  assert.equal(args[2], 'service:mixpanel', 'correct registration');
});

test('initialize router injection', function (assert) {
  const spy = Edgar.createSpy(application, 'inject');

  initialize(null, application);

  let args = spy.calledWith(1);
  assert.equal(args[0], 'router:main', 'injected into main router');
  assert.equal(args[1], 'mixpanel', 'correct name');
  assert.equal(args[2], 'service:mixpanel', 'correct registration');
});

test('initialize controller injection', function (assert) {
  const spy = Edgar.createSpy(application, 'inject');

  initialize(null, application);

  let args = spy.calledWith(2);
  assert.equal(args[0], 'controller', 'injected into controllers');
  assert.equal(args[1], 'mixpanel', 'correct name');
  assert.equal(args[2], 'service:mixpanel', 'correct registration');
});

test('initialize component injection', function (assert) {
  const spy = Edgar.createSpy(application, 'inject');

  initialize(null, application);

  let args = spy.calledWith(3);
  assert.equal(args[0], 'component', 'injected into controllers');
  assert.equal(args[1], 'mixpanel', 'correct name');
  assert.equal(args[2], 'service:mixpanel', 'correct registration');
});
