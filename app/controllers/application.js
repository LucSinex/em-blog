import Ember from 'ember';

export default Ember.Controller.extend({
	currentRoute: 'Welcome!',
	actions: {
		transitionTo: function(route, title) {
			this.set('currentRoute', title);
			this.transitionTo(route);
		}
	}
});
