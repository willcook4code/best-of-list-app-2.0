import Backbone from 'backbone';

const voteModel = Backbone.Model.extend({
	defaults: {
		up_vote: '',
		down_vote: '',
		aggregate_vote: '',
		user_id: '',
		list_id: ''
	},
	urlRoot: 'https://wolfpack-lists.herokuapp.com/api/votes',
	idAttribute: 'id'
});

export default voteModel;