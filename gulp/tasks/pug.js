'use strict';

// var rename = require("gulp-rename");
//
// module.exports = function() {
//     $.gulp.task('pug', function() {
//         return $.gulp.src('./source/template/pages/*.pug')
//             .pipe($.gp.pug({ pretty: true }))
//             .pipe(rename({ extname: ".php" }))
//             .on('error', $.gp.notify.onError(function(error) {
//                 return {
//                     title: 'Pug',
//                     message:  error.message
//                 }
//             }))
//             .pipe($.gulp.dest($.config.root));
//     });
// };


module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
