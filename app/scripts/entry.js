import '../styles/main.scss';
import $ from 'jquery';
import listCollection from './collections/listCollection';
import listView from './views/listView';
import voteCollection from './collections/voteCollection';
import voteView from './views/listView';
import userCollection from './collections/userCollection';
import displayListCollection from './collections/displayListCollection';


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

