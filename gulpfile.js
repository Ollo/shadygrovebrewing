const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('css', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(gulp.dest('./src/_includes'))
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'))
})

gulp.task('build', function () {
  gulp.parallel(
    'css'
  )
})