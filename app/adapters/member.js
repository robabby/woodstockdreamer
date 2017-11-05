import DS from 'ember-data';
import Ember from "ember";
import config from "woodstockdreamer/config/environment";

export default DS.RESTAdapter.extend({
  host: `https://us17.api.mailchimp.com/3.0`,
  headers: {
    withCredentials: true,
    "content-type": "application/x-www-form-urlencoded",
    "authorization": "Basic YW55c3RyaW5nOmU0ODk2ZGZkMDVlYzRmNzA4MjVlMmYxMzk1ZDdiNjdhLXVzMTc=",
    "cache-control": "no-cache",
  },
  pathForType(modelName) {
    Ember.Logger.info('/modelName/', modelName);
  },
  buildURL(modelName, id, snapshot, requestType, query) {

    const LIST_ID = '91cf58cb85';
    const requestUrl = `${this.get('host')}/lists/${LIST_ID}/members/`;
    Ember.Logger.info('/requestUrl/', requestUrl);
    Ember.Logger.info('/query/', query);

    return `${this.get('host')}/lists/${LIST_ID}/members/`;
  }
});
