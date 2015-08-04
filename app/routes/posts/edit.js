import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', params.post_id);
	},
	actions: {
		save: function(post) {
			var self = this;
			post.setProperties({ title: self.controller.get('model.title'), 
				body: self.controller.get('model.body')});
			if (session.isAuthenticated) { post.save(); }
			self.controller.transitionToRoute('posts');
		}
	}
});
