import React from 'react';
import ListCollection from '../../collections/listCollection.js';
import VoteCollection from '../../collections/voteCollection.js';
import UserCollection from '../../collections/userCollection.js';
import DisplayListCollection from '../../collections/displayListCollection.js';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			ListCollection: ListCollection,
			UserCollection: UserCollection,
			DisplayListCollection: DisplayListCollection
		};
	},
	componentDidMount: function() {
		ListCollection.fetch();
		UserCollection.fetch();
		DisplayListCollection.fetch();
	},
	upVote: function() {
		let newVote = {
			up_vote: 1,
			down_vote: 0,
			user_id: 1,
			list_id: this.props.id
		};
		$.post('https://wolfpack-lists.herokuapp.com/api/votes', {newVote});
		ListCollection.set(ListCollection.fetch());
		UserCollection.set(UserCollection.fetch());
		DisplayListCollection.set(DisplayListCollection.fetch());
	},
	downVote: function() {
		let newVote = {
			up_vote: 0,
			down_vote: 1,
			user_id: 1,
			list_id: this.props.id
		};
		$.post('https://wolfpack-lists.herokuapp.com/api/votes', {newVote});
		ListCollection.set(ListCollection.fetch());
		UserCollection.set(UserCollection.fetch());
		DisplayListCollection.set(DisplayListCollection.fetch());
	},
	render: function() {
		return (
		<div className="voting_container">
			<div className="list_poster"> 
				<a target="_blank" href={this.props.source_ref}><img className="list_poster_img" src={this.props.image_ref}/></a>
			</div>
			
			<div className="list_title_container">
				<a target="_blank" href={this.props.source_ref}><h3>{this.props.list_title}</h3></a>
			</div>

			<div className="vote_btn_container">
				<div className="up_vote" onClick={this.upVote}> <i className="fa fa-arrow-up fa-3x"></i> </div>
				<div className="down_vote" onClick={this.downVote}> <i className="fa fa-arrow-down fa-3x"></i> </div>
				<div className="up_vote" onClick={this.upVote}> <i className="fa fa-arrow-up fa-2x"></i> </div>
				<div className="down_vote" onClick={this.downVote}> <i className="fa fa-arrow-down fa-2x"></i> </div>
			</div>
			<div className="aggro">{this.props.aggregate_votes} votes </div>
		</div>);
	}
});