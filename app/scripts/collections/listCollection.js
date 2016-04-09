import Backbone from 'backbone';
import listModel from '../models/listModel';

const listCollection = Backbone.Collection.extend({
	model: listModel,
	url: 'https://wolfpack-lists.herokuapp.com/api/lists'
});

export default listCollection;