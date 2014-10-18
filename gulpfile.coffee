path       = require 'path'

browserify = require 'browserify'
CSSmin     = require 'gulp-minify-css'
gulp       = require 'gulp'
gutil      = require 'gulp-util'
jade       = require 'gulp-jade'
nib        = require 'nib'
prefix     = require 'gulp-autoprefixer'
rename     = require 'gulp-rename'
source     = require 'vinyl-source-stream'
streamify  = require 'gulp-streamify'
stylus     = require 'gulp-stylus'
uglify     = require 'gulp-uglify'


production = process.env.NODE_ENV is 'production'


paths =
  scripts:
    destination: './infokala/static/infokala/'
    filename: 'infokala.js'
    source: './infokala/static_src/infokala/infokala.coffee'
    watch: './infokala/static_src/infokala/*.coffee'
  index:
    destination: './infokala/static/infokala/'
    source: './infokala/static_src/infokala/infokala.jade'
    watch: './infokala/static_src/infokala/*.jade'
  styles:
    destination: './infokala/static/infokala/'
    filename: 'infokala.html'
    source: './infokala/static_src/infokala/infokala.stylus'
    watch: './infokala/static_Src/infokala/*.stylus'


handleError = (err) ->
  gutil.log err
  gutil.beep()
  this.emit 'end'


gulp.task 'index', ->
  gulp
    .src paths.index.source
    .pipe jade pretty: not production
    .pipe rename paths.styles.filename
    .on 'error', handleError
    .pipe gulp.dest paths.index.destination


gulp.task 'scripts', ->
  bundle = browserify
    entries: [paths.scripts.source]
    debug: not production    
    extensions: ['.coffee']

  build = bundle.bundle()
    .on 'error', handleError
    .pipe source paths.scripts.filename

  build = build.pipe(streamify(uglify())) if production

  build
    .pipe gulp.dest paths.scripts.destination


gulp.task 'styles', ->
  styles = gulp
    .src paths.styles.source
    .pipe(stylus(set: ['include css'], filename: paths.styles.source, use: nib()))
    .on 'error', handleError
    .pipe prefix 'last 2 versions', 'Chrome 34', 'Firefox 28', 'iOS 7'

  styles = styles.pipe(CSSmin()) if production

  styles.pipe gulp.dest paths.styles.destination


gulp.task 'watch', ->
  gulp.watch paths.index.source, ['index']
  gulp.watch paths.scripts.watch, ['scripts']
  gulp.watch paths.styles.watch, ['styles']


gulp.task 'server', ->
  {spawn} = require('child_process')
  server = spawn '/usr/bin/env', ['python', 'manage.py', 'runserver'], 
    stdio: [null, process.stdout, process.stderr]


gulp.task 'build', ['scripts', 'index', 'styles']
gulp.task 'default', ['build', 'watch', 'server']
