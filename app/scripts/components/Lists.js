import React from 'react';
import $ from 'jquery';
import ListCollection from '../collections/listCollection.js';
import VoteCollection from '../collections/voteCollection.js';
import UserCollection from '../collections/userCollection.js';
import DisplayListCollection from '../collections/displayListCollection.js';
import ListRow from './subcomponents/listRow.js';

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
		ListCollection.on('update change', this.updateListCollection);
		VoteCollection.on('update change', this.updateVoteCollection);
		UserCollection.on('update change', this.updateUserCollection);
		DisplayListCollection.on('update change', this.updateDisplayListCollection);
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
	runCollection: function() {
		this.updateUserCollection;
		this.updateListCollection;
		this.updateDisplayListCollection
	},
	render: function() {
		const worst = this.state.DisplayListCollection.map((list, i, array) => {
			return (
				<ListRow
				key = {i}
				source_ref = {list.get('source_ref')}
				image_ref = {list.get('image_ref')}
				list_title = {list.get('list_title')}
				aggregate_votes = {list.get('aggregate_votes')}
				id = {list.get('id')}
				/>
			);
		});
		const best = this.state.ListCollection.map((list, i, array) => {
			return (
				<ListRow
				key = {i}
				source_ref = {list.get('source_ref')}
				image_ref = {list.get('image_ref')}
				list_title = {list.get('list_title')}
				aggregate_votes = {list.get('aggregate_votes')}
				id = {list.get('id')}
				runCollection = {this.runCollection}
				/>
			);
		});
		const user = this.state.UserCollection.map((list, i, array) => {
			return (
				<ListRow
				key = {i}
				source_ref = {list.get('source_ref')}
				image_ref = {list.get('image_ref')}
				list_title = {list.get('list_title')}
				aggregate_votes = {list.get('aggregate_votes')}
				id = {list.get('id')}
				/>
			);
		});
		return 	(
			<div className="all_rows">
				<div className="list_row most_rated">
					<h2> Best Of The Best </h2>
					{best}
				</div>
				<div className="list_row least_rated">
					<h2> Worst Of The Best </h2>
					{worst}
				</div>
				<div className="list_row user_added">
					<h2> New From Users </h2>
					{user}
				</div>
			</div>
		);
	}
});