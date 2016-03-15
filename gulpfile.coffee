gulp = require 'gulp'
browserSync = require('browser-sync').create()

# Load all gulp plugins listed in package.json
gulpPlugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*']
  replaceString: /\bgulp[\-.]/
})

paths =
  fonts: [
    'bower_components/font-awesome/fonts/**'
  ]
  scripts: ['src/**/*.coffee']
  stylesheets: ['src/**/*.styl']
  vendorScripts: [
    'bower_components/sugar/release/sugar-full.development.js'
    'bower_components/angular/angular.js'
    'bower_components/angular-route/angular-route.js'
    'bower_components/angular-animate/angular-animate.js'
    'bower_components/angular-touch/angular-touch.js'
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
    'bower_components/angular-ui-mask/dist/mask.js'
    'bower_components/ng-fastclick/dist/index.js'
    'bower_components/moment/moment.js'
  ]
  vendorStylesheets: [
    'bower_components/bootstrap/dist/css/bootstrap.css'
    'bower_components/font-awesome/css/font-awesome.css'
  ]
  public: 'public'
  templates: ['src/**/*.jade']
  index: 'public/index.jade'
  dist: 'dist'
  cssDist: 'dist/stylesheets'
  jsDist: 'dist/javascripts'
  fontsDist: 'dist/fonts'

gulp.task 'lint', ->
  gulp.src(paths.scripts)
    .pipe(gulpPlugins.coffeelint())
    .pipe(gulpPlugins.coffeelint.reporter())
    .pipe(gulpPlugins.coffeelint.reporter('fail'))

gulp.task 'scripts', ['lint'], ->
  gulp.src(paths.scripts)
    .pipe(gulpPlugins.coffee())
    .pipe(gulpPlugins.concat('app.min.js'))
    .pipe(gulpPlugins.ngAnnotate())
    .pipe(gulpPlugins.uglify())
    .pipe(gulp.dest(paths.jsDist))

gulp.task 'vendorScripts', ->
  gulp.src(paths.vendorScripts)
    .pipe(gulpPlugins.concat('vendor.min.js'))
    .pipe(gulpPlugins.ngAnnotate())
    .pipe(gulpPlugins.uglify())
    .pipe(gulp.dest(paths.jsDist))

gulp.task 'templates', ->
  gulp.src(paths.templates)
    .pipe(gulpPlugins.jade())
    .pipe(gulpPlugins.angularTemplatecache('app-templates.js', (module: 'app.templates', standalone: true, root:'/')))
    .pipe(gulp.dest(paths.jsDist))

gulp.task 'stylesheets', ->
  gulp.src(paths.stylesheets)
    .pipe(gulpPlugins.stylus())
    .pipe(gulpPlugins.concat('app.css'))
    .pipe(gulp.dest(paths.cssDist))

gulp.task 'vendorStylesheets', ->
  gulp.src(paths.vendorStylesheets)
    .pipe(gulpPlugins.concat('vendor.css'))
    .pipe(gulp.dest(paths.cssDist))

gulp.task 'build-index', ->
  gulp.src(paths.index)
    .pipe(gulpPlugins.jade())
    .pipe(gulp.dest(paths.dist))

gulp.task 'fonts', ->
  gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.fontsDist))

gulp.task 'build', ['scripts', 'templates', 'vendorScripts', 'build-index', 'stylesheets', 'vendorStylesheets', 'fonts']

gulp.task 'watch', ->
  gulp.watch paths.scripts, ['scripts']
  gulp.watch paths.stylesheets, ['stylesheets']
  gulp.watch paths.templates, ['templates']
  gulp.watch paths.index, ['build-index']
  gulp.watch(paths.jsDist + '**/*.js').on('change', browserSync.reload )
  gulp.watch(paths.cssDist + '**/*.css').on('change', browserSync.reload )
  gulp.watch('public/index.html').on('change', browserSync.reload )

gulp.task 'serve', ['build', 'watch'], ->
  browserSync.init (
    server:
      baseDir: './dist'
      index: 'index.html'
    host: 'localhost'
    open: 'external'
  )
