import Backbone from 'backbone';
import userModel from '../models/userModel';

const userCollection = Backbone.Collection.extend({
	model: userModel,
	url: 'https://wolfpack-lists.herokuapp.com/api?specific=newest'
});

export default userCollection;