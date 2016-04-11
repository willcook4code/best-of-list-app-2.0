import Backbone from 'backbone';
import $ from 'jquery';

const voteView = Backbone.View.extend({
	tagName: 'div',
	className: 'vote',
	events: {
        'click .up_vote': 'upVote',
        'click .down_vote': 'downVote'
    },
	initialize: function(up_vote, down_vote, aggregate_vote, list_id) {
		this.up_vote = up_vote;
		this.down_vote = down_vote;
		this.aggregate_vote = aggregate_vote;
		this.list_id = list_id;
		this.render();
	},
	template: function() {
		return `
			
		`
	},
	render: function() {
		this.$el.html(this.template());
	},
	upVote: function() {
		let newVote = {
			up_vote: 1,
			down_vote: 0,
			user_id: 1,
			list_id: this.id
		};
		userVote = $.post('https://wolfpack-lists.herokuapp.com/api/votes', {newVote});
	},
	downVote: function() {
		let newVote = {
			up_vote: 0,
			down_vote: 1,
			user_id: 1,
			list_id: this.id
		};
		userVote = $.post('https://wolfpack-lists.herokuapp.com/api/votes', {newVote});
	}
});

export default voteView;