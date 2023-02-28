/*
This function highlights (provides a box around) the selected compound member item.

It checks to see if compound_member_node_id is in the url, if so
selects the member block specified in the url
else, loads the first member block.
*/

(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {

      var current_url = String(window.location);

      if (current_url.indexOf("compound_member_node_id") > 0) {
        var selected_link = $('#block-views-block-compound-object-members-block-1').find("a[href='" + current_url + "']");
        var selected_block = selected_link.closest('.views-view-grid__item');
        selected_block.addClass("compound_member_selected");
      } else {
        var selected_block = $('#block-views-block-compound-object-members-block-1').find(".views-view-grid__item").first();
        selected_block.addClass("compound_member_selected");
      }

    }
  };
  })(jQuery);
