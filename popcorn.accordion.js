(function (Popcorn) {
  Popcorn.plugin( "accordion" , {
    /**
     * Footnote accordion plug-in
     * Selects a pane in a jquery.ui accordion widget.
     * Options parameter will need a start, end, target and pane.
     * Start is the time that you want this plug-in to execute
     * End is the time that you want this plug-in to stop executing
     * Pane is the index of the accordion pane you want to activate.
     * Target is the id of the document element that the text needs to be
     * attached to, this target element must exist on the DOM, 
     * and be initialized as a jquery.ui accordion widget.
     *
     * @param {Object} options
     *
     * Example:
     var p = Popcorn('#video')
     .accordion({
     start: 5, // seconds
     end: 15, // seconds
     pane: 0, // 0-based index
     target: 'accordiondiv'
     } )
     *
     */
    manifest: {
      about:{
        name: "Popcorn JQuery.UI Accordion Plugin",
        version: "0.1",
        author: "@axelhecht"
      },
      options:{
        start : {elem:'input', type:'text', label:'In'},
        end : {elem:'input', type:'text', label:'Out'},
        target : 'accordion-container',
        pane : {elem:'input', type:'number', label:'Pane'}
      }
    },
    /**
     * @member accordion
     * The start function will be executed when the currentTime
     * of the video reaches the start time provided by the
     * options variable
     */
  start: function(event, options){
    $('#' + options.target).accordion('activate', options.pane);
  },
  /**
   * @member accordion
   * The end function will be executed when the currentTime
   * of the video reaches the end time provided by the
   * options variable
   */
  end: function(event, options){
    // make sure we're still on the pane for this event.
    var target = $('#' + options.target);
    if (target.data('accordion').headers[options.pane].getAttribute('aria-selected') == 'true') {
        target.accordion('activate', false);
    }
  }
});

})( Popcorn );