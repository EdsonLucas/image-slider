;(function($) {

  'use strict'

  var imagesCube = function() {
      $('.wprt-images-grid').each(function() {
          var
          $this = $(this),
          layout = $this.data("layout"),
          item = $this.data("column"),
          item2 = $this.data("column2"),
          item3 = $this.data("column3"),
          item4 = $this.data("column4"),
          layout = $this.data("layout"),
          gapH = Number($this.data("gaph")),
          gapV = Number($this.data("gapv"));

          $(this).find('#images-wrap').cubeportfolio({
              layoutMode: layout,
              defaultFilter: '*',
              animationType: 'quicksand',
              gapHorizontal: gapH,
              gapVertical: gapV,
              showNavigation: true,
              showPagination: true,
              gridAdjustment: 'responsive',
              rewindNav: false,
              auto: false,
              mediaQueries: [{
                  width: 1500,
                  cols: item
              }, {
                  width: 1100,
                  cols: item
              }, {
                  width: 800,
                  cols: item2
              }, {
                  width: 550,
                  cols: item3
              }, {
                  width: 320,
                  cols: item4
              }],
              caption: ' ',
              displayType: 'bottomToTop',
              displayTypeSpeed: 100
          });
      });
  };

  // Dom Ready
  $(function() {
      imagesCube();
  });

})(jQuery);
