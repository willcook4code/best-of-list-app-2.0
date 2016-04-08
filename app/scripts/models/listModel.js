import Backbone from 'backbone';

const listModel = Backbone.Model.extend({
	defaults: {
		
	},
	urlRoot: '',
	idAttribute: ''
});

export default listModel;