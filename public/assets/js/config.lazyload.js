// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that are required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '../../public/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.js'],
      sparkline:      [   '../../public/bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '../../public/bower_components/flot/jquery.flot.js',
                          '../../public/bower_components/flot/jquery.flot.pie.js', 
                          '../../public/bower_components/flot/jquery.flot.resize.js',
                          '../../public/bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
                          '../../public/bower_components/flot.orderbars/js/jquery.flot.orderBars.js',
                          '../../public/bower_components/flot-spline/js/jquery.flot.spline.js'],
      moment:         [   '../../public/bower_components/moment/moment.js'],
      screenfull:     [   '../../public/bower_components/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '../../public/bower_components/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '../../public/bower_components/html5sortable/jquery.sortable.js'],
      nestable:       [   '../../public/bower_components/nestable/jquery.nestable.js',
                          '../../public/bower_components/nestable/jquery.nestable.css'],
      filestyle:      [   '../../public/bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '../../public/bower_components/bootstrap-slider/bootstrap-slider.js',
                          '../../public/bower_components/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '../../public/bower_components/chosen/chosen.jquery.min.js',
                          '../../public/bower_components/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '../../public/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '../../public/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '../../public/bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../../public/bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '../../public/bower_components/datatables/media/js/jquery.dataTables.min.js',
                          '../../public/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../../public/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '../../public/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../../public/bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../../public/bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../../public/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   '../../public/bower_components/footable/dist/footable.all.min.js',
                          '../../public/bower_components/footable/css/footable.core.css'],
      fullcalendar:   [   '../../public/bower_components/moment/moment.js',
                          '../../public/bower_components/fullcalendar/dist/fullcalendar.min.js',
                          '../../public/bower_components/fullcalendar/dist/fullcalendar.css',
                          '../../public/bower_components/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '../../public/bower_components/moment/moment.js',
                          '../../public/bower_components/bootstrap-daterangepicker/daterangepicker.js',
                          '../../public/bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '../../public/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../../public/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'pascalprecht.translate',
                  files: [
                      '../../public/bower_components/angular-translate/angular-translate.min.js',
                      '../../public/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
                      '../../public/bower_components/angular-translate-loader-url/angular-translate-loader-url.min.js',
                      '../../public/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
                      '../../public/bower_components/angular-translate-storage-local/angular-translate-storage-local.min.js'
                  ]
              },
              {
                  name: 'ngGrid',
                  files: [
                      '../../public/bower_components/ng-grid/build/ng-grid.min.js',
                      '../../public/bower_components/ng-grid/ng-grid.min.css',
                      '../../public/bower_components/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '../../public/bower_components/angular-ui-grid/ui-grid.min.js',
                      '../../public/bower_components/angular-ui-grid/ui-grid.min.css',
                      '../../public/bower_components/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      '../../public/bower_components/angular-ui-select/dist/select.min.js',
                      '../../public/bower_components/angular-ui-select/dist/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    '../../public/bower_components/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['../../public/bower_components/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '../../public/bower_components/ngImgCrop/compile/minified/ng-img-crop.js',
                      '../../public/bower_components/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      '../../public/bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      '../../public/bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      '../../public/bower_components/angularjs-toaster/toaster.js',
                      '../../public/bower_components/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      '../../public/bower_components/textAngular/dist/textAngular-sanitize.min.js',
                      '../../public/bower_components/textAngular/dist/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      '../../public/bower_components/venturocket-angular-slider/build/angular-slider.min.js',
                      '../../public/bower_components/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '../../public/bower_components/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '../../public/bower_components/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '../../public/bower_components/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '../../public/bower_components/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '../../public/bower_components/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '../../public/bower_components/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      '../../public/bower_components/angular-xeditable/dist/js/xeditable.min.js',
                      '../../public/bower_components/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '../../public/bower_components/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;
