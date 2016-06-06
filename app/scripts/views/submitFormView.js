import Backbone from 'backbone';
import $ from 'jquery';

let newUserSubmission = new submitFormCollection();

const submitFormView = Backbone.View.extend({
	tagName: 'div',
	className: 'submit_form',
	events: {
        'click .submit_list_page_btn': 'submitForm',
    },
	initialize: function(list_winner, list_title, list_desc, list_url) {
		this.list_winner = list_winner;
		this.list_title = list_title;
		this.list_desc = list_desc;
		this.list_url = list_url;
		this.render();
	},
	template: function() {
		return `
			
		`
	},
	render: function() {
		this.$el.html(this.template());
	},
	submitForm: function(e) {
		e.preventDefault();
		let submission = {
		list_winner: $('#list_winner').val(),
		list_title: $('#list_title').val(),
		list_desc: $('#list_desc').val(),
		list_url: $('#list_url').val()
		};
		newUserSubmission = $.post('https://wolfpack-lists.herokuapp.com/api/lists', {submission});
	}
});

export default submitVoteView;