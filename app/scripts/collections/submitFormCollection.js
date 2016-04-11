import Backbone from 'backbone';
import submitFormModel from '../models/voteModel';

const submitFormCollection = Backbone.Collection.extend({
	model: submitFormModel,
	url: 'https://wolfpack-lists.herokuapp.com/api/lists'
});

export default submitFormCollection;