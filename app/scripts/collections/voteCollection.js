import Backbone from 'backbone';
import voteModel from '../models/voteModel';

const voteCollection = Backbone.Collection.extend({
	model: voteModel,
	url: ''
});

export default voteCollection;