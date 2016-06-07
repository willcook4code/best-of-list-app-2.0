import React from 'react';
import $ from 'jquery';
import ListCollection from '../collections/listCollection.js';
import VoteCollection from '../collections/voteCollection.js';
import UserCollection from '../collections/userCollection.js';
import DisplayListCollection from '../collections/displayListCollection.js';
import WorstRow from './subcomponents/worstRow.js';

export default React.createClass({
	getInitialState: function() {
		return {
			ListCollection: ListCollection,
			VoteCollection: VoteCollection,
			UserCollection: UserCollection,
			DisplayListCollection: DisplayListCollection
		}
	},
	componentDidMount: function() {
		ListCollection.on('update', this.updateListCollection);
		VoteCollection.on('update', this.updateVoteCollection);
		UserCollection.on('update', this.updateUserCollection);
		DisplayListCollection.on('updateVoteCollection', this.updateDisplayListCollection);
		ListCollection.fetch();
		VoteCollection.fetch();
		UserCollection.fetch();
		DisplayListCollection.fetch();
	},
	updateListCollection: function() {
		this.setState({
			ListCollection: ListCollection.models
		})
	},
	updateVoteCollection: function() {
		this.setState({
			VoteCollection: VoteCollection.models
		})
	},
	updateUserCollection: function() {
		this.setState({
			UserCollection: UserCollection.models
		})
	},
	updateDisplayListCollection: function() {
		this.setState({
			DisplayListCollection: DisplayListCollection.models
		})
	},
	render: function() {
		const worst = this.state.ListCollection.map((list, i, array) => {
			console.log(list.get('source_ref'));
			console.log(list.get('image_ref'));
			console.log(list.get('list_title'));
			console.log(list.get('aggregate_votes'));
			return (
				<WorstRow
				key = {i}
				source_ref = {list.get('source_ref')}
				image_ref = {list.get('image_ref')}
				list_title = {list.get('list_title')}
				aggregate_votes = {list.get('aggregate_votes')}
				/>
			);
		});
		return 	(
				<div class="list_row least_rated">
					<h2> Worst Of The Best </h2>
					{worst}
				</div>
				);
	}
});