import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    // If you don't need slugs, do this instead.
    // return this.store.findRecord('post', params.id);

    // Support for slugs.
    return this.store.query('post', {
      slug: params.post_slug
    }).then(models => models.get('firstObject'));
  }
});
