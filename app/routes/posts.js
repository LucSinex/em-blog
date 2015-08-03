import Ember from 'ember';

export default Ember.Route.extend({
	model: function() { return this.store.findAll('post'); },
	actions: {
		destroy: function(post) {
			post.destroyRecord().then(this.controller.transitionToRoute('posts'), null);
		}
	}
});