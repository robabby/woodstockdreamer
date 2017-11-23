import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // By default the WP-API returns a maximum of 10 items.
    // return this.store.findAll('post');

    // To get more we can query with `per_page`.
    return this.store.query('post', {per_page: 99});
  }
});
