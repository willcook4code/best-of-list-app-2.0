import Backbone from 'backbone';
import $ from 'jquery';
import listCollection from '../collections/listCollection';

let newSubmission = new listCollection();

const singleListView = Backbone.View.extend({

    className: 'list_page_container',
    initialize: function(image_ref, source_ref, list_desc, list_title, id, items) {
        this.image_ref = image_ref;
        this.source_ref = source_ref;
        this.list_desc = list_desc;
        this.list_title = list_title;
        this.id = id;
        this.items = items;
        this.render();
    },
    template: function() {
        return `
        <a href="index.html" class="back_home_btn"> Back to Home </a>
        <div class="list_winner_container col_sm_1 col_md_5 col_lg_5">    
            <div class="list_winner_img">    </div>
            <h2> I'm the winner of this list ;D </h2>
            <div class="list_info mobile_size">
                <h2> ${this.list_title} </h2>
                <p> ${this.list_desc} </p>
                <a href="#">  </a>
            </div>
            <a href="#" class="show_list_items"> Show List Items </a>
            <div class="list_items_container">
                <div class="list_item"> Item 1 </div>
                <div class="list_item"> Item 2 </div>
                <div class="list_item"> Item 3 </div>
                <div class="list_item"> Item 4 </div>
                <div class="list_item"> Item 5 </div>
                <div class="list_item"> Item 6 </div>
            </div>
        </div>
        <div class="list_voter_info col_sm_1 col_md_5 col_lg_5">
            <div class="vote_container">            
                <h2> Cast your vote! </h2>            
                <h3> Best of the Best </h3>
                <div class="vote_up_stats"> </div>            
                <h3> Least of the Best </h3>
                <div class="vote_down_stats"> </div>
                <div class="up_vote"> </div>
                <div class="down_vote"> </div>
            </div>
            <div class="list_info desktop_size">
                <h2> ${this.list_title} </h2>
                <p> ${this.list_desc} </p>
                <a href="${this.source_ref}"> ${this.source_ref} </a>
            </div>
        </div>
        `
    },
    render: function() {
        this.$el.html(this.template());
    }
});

export default singleListView;








