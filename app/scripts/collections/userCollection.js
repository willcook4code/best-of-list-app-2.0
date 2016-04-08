import Backbone from 'backbone';
import userModel from '../models/userModel';

const userCollection = Backbone.Collection.extend({
	model: userModel,
	url: ''
});

export default userCollection;