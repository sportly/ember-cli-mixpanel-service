import ENV from '../config/environment';
import Configuration from 'ember-cli-mixpanel-service/configuration';

export default {
    name: 'mixpanel',
    initialize: function() {
        const config = ENV['mixpanel'] || {};
        Configuration.load(config);

        let application = arguments[1] || arguments[0];
        application.inject('route', 'mixpanel', 'service:mixpanel');
        application.inject('router:main', 'mixpanel', 'service:mixpanel');
        application.inject('controller', 'mixpanel', 'service:mixpanel');
        application.inject('component', 'mixpanel', 'service:mixpanel');
    }
};
