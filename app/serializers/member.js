import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // payload = {
    //   cats: payload.data
    // };

    Ember.Logger.info('/payload/', payload)

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
