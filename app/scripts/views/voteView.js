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
			user_id: '',
			list_id: $(this.el).id;
		};
		userVote.create(newVote);
		// let newVoteView = new VoteView(
		// 	newVote.up_vote;
		// 	newVote.down_vote;
		// 	newVote.user_id;
		// 	newVote.list_id;
		// 	);
		console.log(newVote);
        
    },
    downVote: function() {
        $(this.$el).
    }
});


export default voteView;