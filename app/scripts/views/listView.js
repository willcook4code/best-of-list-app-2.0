import Backbone from 'backbone';
import $ from 'jquery';
import voteCollection from '../collections/voteCollection';
import displayListCollection from '../collections/displayListCollection';
import singleListView from '../views/singleListView';
import listCollection from '../collections/listCollection';

let userVote = new voteCollection();

const listView = Backbone.View.extend({
	className: 'voting_container',
	events: {
        'click .up_vote': 'upVote',
        'click .down_vote': 'downVote',
        // 'click .list_poster': 'showList'
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
	},
	// showList: function(e) {
	// 	e.preventDefault();
	// 	let largeViews = new listCollection();
	// 	var settings = {
	// 		success: function() {
	// 			largeViews.forEach((list) => {
	// 				let newSingleListView = new singleListView(list.get('image_ref'), list.get('source_ref'), list.get('list_desc'), list.get('list_title'), list.get('id'), list.get('items'));
	// 				console.log(list.id);
	// 				console.log(list.items);
	// 				console.log(newSingleListView);
	// 				$('.list_page').append(newSingleListView.el);
	// 				// window.location = 'list_page_default.html';
	// 			});
	// 		}
	// 	};
	// 	largeViews.fetch(settings);
		
	// 	console.log('yo');
	// }
});

export default listView;