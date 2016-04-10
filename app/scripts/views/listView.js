import Backbone from 'backbone';
import $ from 'jquery';
import voteCollection from '../collections/voteCollection';

let userVote = new voteCollection();

const listView = Backbone.View.extend({
	className: 'voting_container',
	events: {
        'click .up_vote': 'upVote',
    },
	initialize: function(image_ref, source_ref, list_desc, list_title, id) {
		this.image_ref = image_ref;
		this.source_ref = source_ref;
		this.list_desc = list_desc;
		this.list_title = list_title;
		this.id = id;
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
	}
 
	// $(".input-form" ).submit( (e) => {
 //        e.preventDefault();
 //        let title = $(".burgerTitle").val();
 //        let location = $('.burgerLoc').val();
 //        let desc = $('.burgerDesc').val();
 //        let pic = $('.burgerPic').val();
 //       $.post( "https://bba-app.herokuapp.com/api/posts", 
 //           {post: {title: title , description: desc, location: location, pic: pic} });

});

export default listView;