import Backbone from 'backbone';
import voteModel from '../models/voteModel';

const voteCollection = Backbone.Collection.extend({
	model: voteModel,
	url: 'https://wolfpack-lists.herokuapp.com/api/votes'
});

export default new voteCollection();