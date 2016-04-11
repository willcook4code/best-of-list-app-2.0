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


$('.submit_list_page_btn').on('click', function() {
	let urlString = 'https://wolfpack-lists.herokuapp.com/api/van';
	let urlConcat = urlString + '?list_title='+ $('#list_title').val() +'$list_desc='+$('#list_desc').val()+'&list_url='+$('#list_url').val()+'&list_winner='+$('.list_item_1').val()+'&item[one]='+$('.list_item_1').val()+'&item[two]='+$('.list_item_2').val()+'&item[three]='+$('.list_item_3').val()+'&item[four]='+$('.list_item_4').val()+'&item[five]='+$('.list_item_5').val()+'&item[six]='+$('.list_item_6').val()+'&item[seven]='+$('.list_item_7').val()+'&item[eight]='+$('.list_item_8').val()+'&item[nine]='+$('.list_item_9').val()+'&item[ten]='+$('.list_item_10').val();
	let submission = {
        // list_winner: $('#list_winner').val(),
		list_title: $('#list_title').val(),
		list_desc: $('#list_desc').val(),
		list_url: $('#list_url').val()
		// one: $('.list_item_1').val(),
		// two: $('.list_item_2').val(), 
		// three: $('.list_item_3').val(),
		// four: $('.list_item_4').val(),
		// five: $('.list_item_5').val(),
		// six: $('.list_item_6').val(),
		// seven: $('.list_item_7').val(), 
		// eight: $('.list_item_8').val(),
		// nine: $('.list_item_9').val(),
		// ten: $('.list_item_10').val()
    };
    debugger;
	$.post(urlConcat);   
	$('.submit_list_page_input').val('');
    $('.user_added').append(newListView.el);
    compiledLists.fetch(settings);
});
