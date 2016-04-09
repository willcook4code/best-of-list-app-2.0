import Backbone from 'backbone';
import $ from 'jquery';

const listView = Backbone.View.extend({
	tagName: 'div',
	className: 'list',
	// events: {
 //        'click .done': 'completeItems',
 //        'click .fa': 'removeItems'
 //    },
	initialize: function(image_ref, source_ref, list_desc, list_title) {
		this.image_ref = image_ref;
		this.source_ref = source_ref;
		this.list_desc = list_desc;
		this.list_title = list_title;
		this.render();
	},
	template: function() {
		return `
			<a href="${this.image_ref}">
			<a href="${this.source_ref}">
			<p>${this.list_title}</p>
			<p>${this.list_desc}</p>
		`
	},
	render: function() {
		this.$el.html(this.template());
	},
	// completeItems: function() {
 //        $(this.el).toggleClass('active');
 //    },
 //    removeItems: function() {
 //        $(this.$el).remove();
 //    }
});

export default listView