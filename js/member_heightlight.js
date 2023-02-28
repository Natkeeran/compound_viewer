


jQuery(document).ready(function(){
  var current_url = String(window.location);

  if (current_url.indexOf("compound_member_node_id") > 0) {
    var selected_link = jQuery('#block-views-block-compound-object-members-block-1').find("a[href='" + current_url + "']");
    var selected_block = selected_link.closest('.views-view-grid__item');
    selected_block.addClass("compound_member_selected");
  } else {
    var selected_block = jQuery('#block-views-block-compound-object-members-block-1').find(".views-view-grid__item").first();
    selected_block.addClass("compound_member_selected");
  }
});