import DS from 'ember-data';
import config from './config/environment';

export default DS.RESTAdapter.extend({
  host: `https://localhost:${config.PORT}`
});
