import '../styles/main.scss';
import $ from 'jquery';
import listCollection from './collections/listCollection';
import listView from './views/listView';
import voteCollection from './collections/voteCollection';
import voteView from './views/listView';
import userCollection from './collections/userCollection';

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

$('.submit_page_form').submit(function() {
    let submission = {
        list_winner: $('#list_winner').val(),
		list_title: $('#list_title').val(),
		list_desc: $('#list_desc').val(),
		list_url: $('#list_url').val(),
		one: $('.list_item_1').val(),
		two: $('.list_item_2').val(), 
		three: $('.list_item_3').val(),
		four: $('.list_item_4').val(),
		five: $('.list_item_5').val(),
		six: $('.list_item_6').val(),
		seven: $('.list_item_7').val(), 
		eight: $('.list_item_8').val(),
		nine: $('.list_item_9').val(),
		ten: $('.list_item_10').val(), 
    };
newUserSubmission = $.post('https://wolfpack-lists.herokuapp.com/api/lists', {submision});   
	$('.submit_list_page_input').val('');
    $('.user_added').append(newListView.el);
    compiledLists.fetch(settings);
});
