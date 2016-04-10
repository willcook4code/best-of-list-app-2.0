import Backbone from 'backbone';
import $ from 'jquery';
import submitFormCollection from '../collections/voteCollection';

const listView = Backbone.View.extend({
	className: 'voting_container',
	events: {
        // 'click .up_vote': 'upVote',
        // 'click .down_vote': 'downVote'

    },
	initialize: function(list_winner, list_title, list_desc, list_url, one, two, three, four, five, six, seven, eight, nine, ten) {
		this.list_winner = list_winner;
		this.list_title = list_title;
		this.list_desc = list_desc;
		this.list_url = list_url;
		this.one = one;
		this.two = two;
		this.three = three;
		this.four = four;
		this.five = five;
		this.six = six;
		this.seven = seven;
		this.eight = eight;
		this.nine = nine;
		this.ten = ten;
		this.render();
	},
	template: function() {
		return `
			<div class="list_poster"> <img src="${this.image_ref}"> </div>
			<h3> ${this.list_title} </h3>
			<div class="up_vote"> </div>
			<div class="down_vote"> </div>
		`
	},
	render: function() {
		this.$el.html(this.template());
		console.log(this.id);
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

export default listView;