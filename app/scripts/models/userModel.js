import Backbone from 'backbone';

const userModel = Backbone.Model.extend({
	defaults: {
		
	},
	urlRoot: '',
	idAttribute: ''
});

export default userModel;