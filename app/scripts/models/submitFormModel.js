import Backbone from 'backbone';

const submitFormModel = Backbone.Model.extend({
	defaults: {
		list_winner: '',
		list_title: '',
		list_desc: '',
		list_url: '',
		one: '',
		two: '', 
		three: '',
		four: '',
		five: '',
		six: '',
		seven: '', 
		eight: '',
		nine: '',
		ten: ''
	},
	urlRoot: 'https://wolfpack-lists.herokuapp.com/api/lists',
	idAttribute: 'id'
});

export default submitFormModel;