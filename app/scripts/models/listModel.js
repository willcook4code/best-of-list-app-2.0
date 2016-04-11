import Backbone from 'backbone';

const listModel = Backbone.Model.extend({
	defaults: {
		image_ref: '',
		source_ref: '',
		list_desc: 'Description not entered.',
		list_title: 'Title not available.',
		aggregate_vote: 1,
		user_id: ''
	},
	urlRoot: 'https://wolfpack-lists.herokuapp.com/api/lists',
	idAttribute: 'id'
});

export default listModel;