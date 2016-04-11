import '../styles/main.scss';
import $ from 'jquery';
import listCollection from './collections/listCollection';
import listView from './views/listView';
import voteCollection from './collections/voteCollection';
import voteView from './views/listView';
import userCollection from './collections/userCollection';
import displayListCollection from './collections/displayListCollection';
import singleListView from './views/singleListView';

let newUserSubmission = new listCollection();


let compiledLists = new listCollection();
var settings = {
	success: function() {
		compiledLists.forEach((list) => {
			let newListView = new listView(list.get('image_ref'), list.get('source_ref'), list.get('list_desc'), list.get('list_title'), list.get('id'));
			$('.list_row').append(newListView.el);
		});
	}
};
compiledLists.fetch(settings);

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

let largeViews = new listCollection();
    var settings = {
    success: function() {
        largeViews.forEach((list) => {
            let newSingleListView = new singleListView(list.get('image_ref'), list.get('source_ref'), list.get('list_desc'), list.get('list_title'), list.get('id'));
            $('.list_page').append(newSingleListView.el);
        });
    }
};        

largeViews.fetch(settings);

