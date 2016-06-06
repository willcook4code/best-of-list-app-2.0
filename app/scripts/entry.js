import '../styles/main.scss';
import $ from 'jquery';
import listCollection from './collections/listCollection';
import listView from './views/listView';
import voteCollection from './collections/voteCollection';
import voteView from './views/listView';
import userCollection from './collections/userCollection';
import displayListCollection from './collections/displayListCollection';
import ReactDOM from 'react-dom';
import React from 'react';

const Stuff = React.createClass({
	render: function() {
		return <div>Hi</div>;
		}
	});

ReactDOM.render(<Stuff/>, document.querySelector(".most_rated"));

let newUserSubmission = new voteCollection();

let topLists = new listCollection();
var settings = {
	success: function() {
		topLists.forEach((list) => {
			let newListView = new listView(list.get('image_ref'), list.get('source_ref'), list.get('list_desc'), list.get('list_title'), list.get('aggregate_votes'), list.get('id'));
			$('.most_rated').append(newListView.el);
		});
	}
};
topLists.fetch(settings);

let worstLists = new displayListCollection();
var settings = {
	success: function() {
		worstLists.forEach((list) => {
			let newListView = new listView(list.get('image_ref'), list.get('source_ref'), list.get('list_desc'), list.get('list_title'), list.get('aggregate_votes'), list.get('id'));
			$('.least_rated').append(newListView.el);
		});
	}
};
worstLists.fetch(settings);

let newestLists = new userCollection();
var settings = {
	success: function() {
		newestLists.forEach((list) => {
			let newListView = new listView(list.get('image_ref'), list.get('source_ref'), list.get('list_desc'), list.get('list_title'), list.get('aggregate_votes'), list.get('id'));
			$('.user_added').append(newListView.el);
		});
	}
};
newestLists.fetch(settings);
// JANINA'S CODE
$(document).ready(function(){
		$('.most_rated_tab').click(function(){
			$('.least_rated').hide();
			$('.least_rated_tab').removeClass('current_tab');
			$('.user_added').hide();
			$('.user_added_tab').removeClass('current_tab');

			$('.most_rated').show();
			$('.most_rated_tab').addClass('current_tab');
		});

		$('.least_rated_tab').click(function(){
			$('.most_rated').hide();
			$('.most_rated_tab').removeClass('current_tab');
			$('.user_added').hide();
			$('.user_added_tab').removeClass('current_tab');

			$('.least_rated').show();
			$('.least_rated_tab').addClass('current_tab');
		});

		$('.user_added_tab').click(function(){
			$('.most_rated').hide();
			$('.most_rated_tab').removeClass('current_tab');
			$('.least_rated').hide();
			$('.least_rated_tab').removeClass('current_tab');

			$('.user_added').show();
			$('.user_added_tab').addClass('current_tab');
		});
		$('.submit_list_btn').click((e) => {
			$('.home_page_full_container').hide();
			$('.submit_page_full_container').show();
		});
		$('.back_home_btn').click((e) => {
			$('.home_page_full_container').show();
			$('.submit_page_full_container').hide();
		});
		$('.submit_list_page_btn').click((e) => {
	       e.preventDefault();
	       let list_title = $('#list_title').val();
	       let image_ref = 'asdf';
	       let source_ref = $('#list_url').val();
	       let list_desc = $('#list_desc').val();
	       let user_id = 1;
	       let list_type = 'asdf';
	       let item = {
			one: $('.list_item_1').val(),
			two: $('.list_item_2').val(),
			three: $('.list_item_3').val(),
			four: $('.list_item_4').val(),
			five: $('.list_item_5').val(),
			six: $('.list_item_6').val(),
			seven: $('.list_item_7').val(),
			eight: $('.list_item_8').val(),
			nine: $('.list_item_9').val(),
			ten: $('.list_item_10').val()
		   };
	       $.post("https://wolfpack-lists.herokuapp.com/api/lists", 
				{list_title: list_title, image_ref: image_ref, source_ref: source_ref, list_desc: list_desc, user_id: user_id, list_type: list_type, item: item});
		});
});

// let largeViews = new listCollection();
// 	var settings = {
// 	success: function() {
// 		largeViews.forEach((list) => {
// 			let newSingleListView = new singleListView(list.get('image_ref'), list.get('source_ref'), list.get('list_desc'), list.get('list_title'), list.get('id'));
// 			$('.list_page').append(newSingleListView.el);
// 		});
// 	}
// };		

// largeViews.fetch(settings);

