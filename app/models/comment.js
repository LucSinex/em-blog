import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),

  post: DS.belongsTo('post')
});
