import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', params.post_id);
	},
	actions: {
		save: function(post) {
			var self = this;
			post.setProperties({ title: self.controller.get('model.title'), 
				body: self.controller.get('model.body')}).save().then(
					self.controller.transitionToRoute('posts'),
					function() {
						console.log(post.errors);
						self.controller.transitionToRoute('posts.edit', post);
					});
		}
	}
});
