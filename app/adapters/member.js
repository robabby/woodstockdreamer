import DS from 'ember-data';

const PORT = process.env.PORT || 3000;

export default DS.RESTAdapter.extend({
  host: `https://localhost:${PORT}`
});
