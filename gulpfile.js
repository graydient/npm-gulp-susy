var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('sass/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
})

// Gulp Sass Function
gulp.task('sass', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sass({
          //outputStyle: 'compressed',
          includePaths: ['node_modules/susy/sass', 'node_modules/normalize-scss/sass']
      }).on('error', sass.logError))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})