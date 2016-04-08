import Backbone from 'backbone';
import listModel from '../models/listModel';

const listCollection = Backbone.Collection.extend({
	model: listModel,
	url: ''
});

export default listCollection;