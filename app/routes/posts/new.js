import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('post');
	},
	actions: {
		create: function() {
			var self = this;
			this.controller.get('model').save().then(
				function() { self.transitionTo('posts.index'); }
			);
		},
		willTransition: function() {
			var model = this.controllerFor('posts.new').get('model');
			model.rollback();
		}
	}
});