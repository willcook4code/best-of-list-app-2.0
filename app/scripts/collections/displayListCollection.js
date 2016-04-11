import Backbone from 'backbone';
import listModel from '../models/listModel';

const displayListCollection = Backbone.Collection.extend({
	model: listModel,
	url: 'https://wolfpack-lists.herokuapp.com/api?specific=least'
});

export default displayListCollection;