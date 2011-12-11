A few popcorn plugins of mine.

JQuery UI Accordion
===================

The [popcorn.accordion.js](http://pike.github.com/popcorn-plugins/popcorn.accordion.js) plugin let's you synchronize a [JQuery UI Accordion](http://jqueryui.com/demos/accordion/) widget to a video.

Example:

     var p = Popcorn('#video')
     .accordion({
     start: 5, // seconds
     end: 15, // seconds
     pane: 0, // 0-based index
     target: 'accordiondiv'
     } )
