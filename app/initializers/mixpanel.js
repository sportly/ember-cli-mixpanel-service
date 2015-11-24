export function initialize() {
  let application = arguments[1] || arguments[0];
  application.inject('route', 'mixpanel', 'service:mixpanel');
  application.inject('router:main', 'mixpanel', 'service:mixpanel');
  application.inject('controller', 'mixpanel', 'service:mixpanel');
  application.inject('component', 'mixpanel', 'service:mixpanel');
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
