import Backbone from 'backbone';

const userModel = Backbone.Model.extend({
	defaults: {
		username: '',
		password: ''
	},
	urlRoot: 'https://wolfpack-lists.herokuapp.com/api/users',
	idAttribute: 'id'
});

export default userModel;