import DS from 'ember-data';
import Ember from "ember";

export default DS.RESTAdapter.extend({
  namespace:'mailchimp',
  host: 'https://us17.api.mailchimp.com/3.0',
  headers: {
    "authorization": "Basic YW55c3RyaW5nOmU0ODk2ZGZkMDVlYzRmNzA4MjVlMmYxMzk1ZDdiNjdhLXVzMTc=",
  },
  urlForQuery (query) {
    const LIST_ID = '91cf58cb85';
    Ember.Logger.info(query);

    return `${this.get('host')}/lists/${LIST_ID}/members/`;
  }
});
