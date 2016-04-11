import Backbone from 'backbone';
import submitFormModel from '../models/listModel';

const submitFormCollection = Backbone.Collection.extend({
	model: submitFormModel,
	url: 'https://wolfpack-lists.herokuapp.com/api/lists'
});

export default submitFormCollection;