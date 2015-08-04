import Ember from 'ember';
import FormMixin from 'ember-easy-form-extensions/mixins/controllers/form';

export default Ember.Controller.extend(FormMixin, {
	validations: {
		'model.title': {
			presence: true
		},
		'model.body': {
			presence: true
		}
	},
	actions: {
		cancel: function() {
			this.transitionToRoute('posts');
		},
		save: function() {
			var self = this;
			this.get('content').save().then(function() {
				self.transitionToRoute('posts');
			}, null);
		}
	}
});
