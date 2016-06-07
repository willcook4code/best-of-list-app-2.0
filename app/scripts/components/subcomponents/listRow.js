import React from 'react';

export default React.createClass({
	render: function() {
		return (
		<div className="list_box">
			<div className="list_poster"> 
				<a target="_blank" href={this.props.source_ref}><img className="list_poster_img" src={this.props.image_ref}/></a>
			</div>
			
			<div className="list_title_container">
				<a target="_blank" href={this.props.source_ref}><h3>{this.props.list_title}</h3></a>
			</div>

			<div className="vote_btn_container">
				<div className="up_vote"> <i className="fa fa-arrow-up fa-3x"></i> </div>
				<div className="down_vote"> <i className="fa fa-arrow-down fa-3x"></i> </div>
				<div className="up_vote"> <i className="fa fa-arrow-up fa-2x"></i> </div>
				<div className="down_vote"> <i className="fa fa-arrow-down fa-2x"></i> </div>
			</div>
			<div className="aggro">{this.props.aggregate_votes} votes </div>
		</div>);
	}
});