import Backbone from 'backbone';

const voteModel = Backbone.Model.extend({
	defaults: {
		up_vote: '',
		down_vote: '',
		aggregate_vote: '',
		user_id: 1,
		list_id: 1
	},
	urlRoot: 'https://wolfpack-lists.herokuapp.com/api/votes',
	idAttribute: 'id'
});

export default voteModel;