/* jshint node: true, strict: true */
'use strict';
/*=====================================
=        Default Configuration        =
=====================================*/
// Please use config.js to override these selectively:
// var config = {
//   dest: 'www',
//   cordova: false,
//   less: {
//     src: [
//       './src/less/app.less'
//     ],
//     paths: [
//       './src/less', './bower_components'
//     ]
//   },
//   vendor: {
//     js: [
//       // './bower_components/jquery/dist/jquery.js',
//       // './bower_components/rangetouch/dist/rangetouch.js',
//       './bower_components/angular/angular.js',
//       './bower_components/angular-route/angular-route.js',
//       './bower_components/angular-cookies/angular-cookies.js',
//       './bower_components/angular-sanitize/angular-sanitize.js',
//       './bower_components/angular-websocket/dist/angular-websocket.js',
//       './bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.js',
//       // './bower_components/nouislider/distribute/nouislider.js',
//       // './bower_components/angular-nouislider/src/nouislider.js',
//       // './bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.components.js',
//       // './bower_components/rangetouch/dist/rangetouch.js',
//       // './bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.gestures.min.js',
//       './bower_components/underscore/underscore-min.js',
//       './bower_components/angular-underscore-module/angular-underscore-module.js',
//     ],
//     css: {
//       prepend: [      ],
//       append: [ ],
//     },
//     fonts: [
//       './src/fonts/*'
//     ]
//   },
//
//   server: {
//     host: '0.0.0.0',
//     port: '8000'
//   },
//   //
//   // weinre: {
//   //   httpPort:     8001,
//   //   boundHost:    '10.0.1.99',
//   //   verbose:      false,
//   //   debug:        false,
//   //   readTimeout:  5,
//   //   deathTimeout: 15
//   // }
// };
// if (require('fs').existsSync('./config.js')) {
//   var configFn = require('./config');
//   configFn(config);
// }
// /*-----  End of Configuration  ------*/
// /*========================================
// =            Requiring stuffs            =
// ========================================*/
// var gulp           = require('gulp'),
//     seq            = require('run-sequence'),
//     connect        = require('gulp-connect'),
//     less           = require('gulp-less'),
//     uglify         = require('gulp-uglify'),
//     sourcemaps     = require('gulp-sourcemaps'),
//     cssmin         = require('gulp-cssmin'),
//     order          = require('gulp-order'),
//     concat         = require('gulp-concat'),
//     ignore         = require('gulp-ignore'),
//     rimraf         = require('gulp-rimraf'),
//     templateCache  = require('gulp-angular-templatecache'),
//     mobilizer      = require('gulp-mobilizer'),
//     ngAnnotate     = require('gulp-ng-annotate'),
//     replace        = require('gulp-replace'),
//     ngFilesort     = require('gulp-angular-filesort'),
//     streamqueue    = require('streamqueue'),
//     rename         = require('gulp-rename'),
//     cssBase64      = require('gulp-css-base64'),
//     historyApiFallback = require('connect-history-api-fallback'),
//     babel          = require('gulp-babel'),
//     babelify       = require('babelify'),
//     ts             = require('gulp-typescript'),
//     path           = require('path');
//
// var source          = require('vinyl-source-stream');
// var buffer          = require('vinyl-buffer');
// var browserify      = require('browserify');
// var tsify           = require('tsify');
// var gulpif          = require('gulp-if');
// var debowerify      = require('debowerify');
// var watchify        = require('watchify');
// var ngHtml2Js       = require('browserify-ng-html2js');
// var environments    = require('gulp-environments');
// var development     = environments.development;
// var production      = environments.production;
// // var _cordova        = environments.make("cordova");
// // var _esp            = environments.make("esp");
//
// /*================================================
// =            Report Errors to Console            =
// ================================================*/
// gulp.on('error', function(e) {
//   throw(e);
// });
// /*=========================================
// =            Clean dest folder            =
// =========================================*/
// gulp.task('clean', function (cb) {
//   return gulp.src([
//         path.join(config.dest, 'index.html'),
//         path.join(config.dest, 'images'),
//         path.join(config.dest, 'css'),
//         path.join(config.dest, 'js'),
//         path.join(config.dest, 'fonts')
//       ], { read: false })
//      .pipe(rimraf());
// });
// /*==========================================
// =            Start a web server            =
// ==========================================*/
// gulp.task('connect', function() {
//   if (typeof config.server === 'object') {
//     connect.server({
//       root: config.dest,
//       host: config.server.host,
//       port: config.server.port,
//       livereload: true
//     });
//   } else {
//     throw new Error('Connect is not configured');
//   }
// });
// /*==============================================================
// =            Setup live reloading on source changes            =
// ==============================================================*/
// gulp.task('livereload', function () {
//   gulp.src(path.join(config.dest, '*.html'))
//     .pipe(connect.reload());
// });
// /*=====================================
// =            Minify images            =
// =====================================*/
// gulp.task('images', function () {
//   return gulp.src('src/images/**/*')
//         .pipe(gulp.dest(path.join(config.dest, 'images')));
// });
// /*==================================
// =            Copy fonts            =
// ==================================*/
// gulp.task('fonts', function() {
//   return gulp.src(config.vendor.fonts)
//   .pipe(gulp.dest(path.join(config.dest, 'fonts')));
// });
// /*=================================================
// =            Copy html files to dest              =
// =================================================*/
// gulp.task('html', function() {
//   var inject = [];
//   if (typeof config.weinre === 'object') {
//     inject.push('<script src="http://'+config.weinre.boundHost+':'+config.weinre.httpPort+'/target/target-script-min.js#anonymous"></script>');
//   }
//   if (config.cordova) {
//     inject.push('<script src="cordova.js"></script>');
//   }
//   gulp.src(['src/html/**/*.html'])
//   .pipe(replace('<!-- inject:js -->', inject.join('\n    ')))
//   .pipe(gulp.dest(config.dest));
// });
// gulp.task('inject-js', function() {
//   var headInject = [];
//   // if (typeof config.weinre === 'object') {
//   //   inject.push('<script src="http://'+config.weinre.boundHost+':'+config.weinre.httpPort+'/target/target-script-min.js#anonymous"></script>');
//   // }
//   // if (headInject) {
//   //   headInject.push('<script src="cordova.js"></script>');
//   // }
//   headInject.push('<script src="cordova.js"></script>');
//
//   gulp.src(['src/html/**/*.html'])
//   // .pipe(_cordova(replace('<!-- inject:js -->', headInject.join('\n    '))))
//   // .pipe(_esp(replace('<!-- inject:baseHref -->', '<base href="/">')))
//   .pipe(gulp.dest(config.dest));
// });
// /*======================================================================
// =            Compile, minify, mobilize less                            =
// ======================================================================*/
// gulp.task('less', function () {
//     return gulp.src(config.less.src)
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(less({
//       paths: config.less.paths.map(function(p){
//         return path.resolve(__dirname, p);
//       })
//     }))
//     // .pipe(mobilizer('app.css', {
//     //   'app.css': {
//     //     hover: 'exclude',
//     //     screens: ['0px']
//     //   },
//     //   'hover.css': {
//     //     hover: 'only',
//     //     screens: ['0px']
//     //   }
//     // }))
//     .pipe(cssBase64())
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest(path.join(config.dest, 'css')));
// });
// /*====================================================================
// =            Compile and minify js generating source maps            =
// ====================================================================*/
// // - Orders ng deps automatically
// // - Precompile templates to ng templateCache
// gulp.task('js', function() {
//     streamqueue({ objectMode: true },
//       gulp.src(config.vendor.js),
//       gulp.src('./src/js/**/*.js').pipe(ngFilesort()),//.pipe(sourcemaps.init({loadMaps:true})),//.pipe(browserify()),
//       gulp.src(['src/templates/**/*.html']).pipe(templateCache({ module: 'Q912' }))
//     )
//     .pipe(sourcemaps.init())
//     // .pipe(sourcemaps.init({loadMaps:true}))
//     //.pipe(babel())
//     .pipe(concat('app.js'))
//     .pipe(ngAnnotate())
//     .pipe(uglify())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest(path.join(config.dest, 'js')));
// });
// gulp.task('js-watch', ['js'], function (done) {
//     browserSync.reload();
//     done();
// });
// gulp.task('ts', function () {
//   var bundler = browserify({
//         basedir: 'src/ts/',
//         debug: 'true',
//         exclude: 'node_modules',
//       })
// 		.add('app.ts')
// 		.plugin(tsify)
//     .transform(debowerify);
//
//     return bundler.bundle()
// 		.pipe(source('bundle.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(uglify())
//     .pipe(sourcemaps.write())
// 		.pipe(gulp.dest(path.join(config.dest, 'js')));
//     // return gulp.src('src/**/*.ts')
//     //     .pipe(ts({
//     //         target: 'es5',
//     //         noImplicitAny: true,
//     //         //outFile: 'bundle.js'
//     //     }))
//     //     .pipe(browserify())
//     //     .pipe(gulp.dest(path.join(config.dest, 'js')));
// });
//
// function compile(watch) {
//   // var bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babel));
//   var bundler = browserify('./src/index.js', {
//         // basedir: 'src',
//         debug: 'true',
//         // exclude: 'node_modules',
//       })
//       .transform(babelify, {presets: ["es2015"]})
//       // .transform(ngHtml2Js({
//       //     module: 'Q912', // optional module name
//       //     // extension: 'html', // optionally specify what file types to look for
//       //     baseDir: "./src/templates", // optionally specify base directory for filename
//       //     stripPathBefore: '/templates', // optionally specify the part of the path that should be the starting point as a string or RegExp
//       //     // prefix: '' // optionally specify a prefix to be added to the filename,
//       //     requireAngular: false, // (default: false) optionally include `var angular = require('angular');`
//       //                           // Supported in Angular 1.3.14 and above if you bundle angular with browserify
//       //   }));
//       .add("./www/js/templates.js");
//   function rebundle() {
//     bundler.bundle()
//       .on('error', function(err) { console.error(err); this.emit('end'); })
//       .pipe(source('build.js'))
//       .pipe(buffer())
//       .pipe(sourcemaps.init({ loadMaps: true }))
//       .pipe(ngAnnotate())
//       .pipe(uglify())
//       .pipe(sourcemaps.write('./'))
//       .pipe(gulp.dest(path.join(config.dest, 'js')));
//   }
//
//   if (watch) {
//     bundler.on('update', function() {
//       console.log('-> bundling...');
//       rebundle();
//     });
//   }
//
//   rebundle();
// }
//
// function watch() {
//   return compile(true);
// };
// function addTemplateCache() {
//   return gulp.src(['src/templates/**/*.html'])
//              .pipe(templateCache({ module: 'Q912' }))
//              .pipe(gulp.dest(path.join(config.dest, 'js')));
// }
//
// gulp.task('build-js', ['templateCache'], function() { return compile(); });
// gulp.task('watch-js', function() { return watch(); });
// gulp.task('templateCache', function() { return addTemplateCache(); });
// /*===================================================================
// =            Watch for source changes and rebuild/reload            =
// ===================================================================*/
// gulp.task('watch', function () {
//   // if (typeof config.server === 'object') {
//   //   gulp.watch([config.dest + '/**/*'], ['livereload']);
//   // }
//   browserSync.init({
//       server: {
//         baseDir: path.join(config.dest),
//         middleware: historyApiFallback(),
//       }
//   });
//   gulp.watch(['./src/html/**/*'], ['html', 'acss']).on('change', browserSync.reload);
//   gulp.watch(['./src/less/**/*'], ['less']);
//   // gulp.watch(['./src/**/*.ts'], ['ts']);
//   gulp.watch(['./src/js/**/*', './src/templates/**/*', config.vendor.js], ['js-watch']);
//   gulp.watch(['./src/templates/**/*', './src/html/*'], ['acss']);
//   gulp.watch(['./src/less/images/**/*'], ['images']);
// });
// /*===================================================
// =            Starts a Weinre Server                 =
// ===================================================*/
// gulp.task('weinre', function() {
//   if (typeof config.weinre === 'object') {
//     var weinre = require('./node_modules/weinre/lib/weinre');
//     weinre.run(config.weinre);
//   } else {
//     throw new Error('Weinre is not configured');
//   }
// });
// /*======================================
// =            Build Sequence            =
// ======================================*/
// gulp.task('build', function(done) {
//   var tasks = ['html', 'fonts', 'images', 'acss', 'less', 'js'];
//   seq('clean', tasks, done);
// });
// /*====================================
// =            Default Task            =
// ====================================*/
// gulp.task('default', function(done){
//   var tasks = [];
//
//   if (typeof config.weinre === 'object') {
//     tasks.push('weinre');
//   }
//
//   // if (typeof config.server === 'object') {
//   //   tasks.push('connect');
//   // }
//   tasks.push('acss');
//   tasks.push('watch');
//   // tasks.push('watch-js');
//
//   seq('build', tasks, done);
// });
// /*======================================================================
// =            Compile, minify, mobilize less                            =
// ======================================================================*/
// var acss = require('gulp-atomizer');
// gulp.task('acss', function() {
//   return gulp.src(['./src/**/*.html', './src/html/*.html'])
//     .pipe(acss())
//     .pipe(gulp.dest(path.join('src', 'less')));
// });
// /*======================================================================
// =            Compile, minify, mobilize less                            =
// ======================================================================*/
// var gzip = require('gulp-gzip');
// gulp.task('compress', function() {
//     gulp.src([
//       './www/*.*',
//       './www/js/*.js',
//       './www/css/*.css',
//       './www/fonts/*.woff',
//     ],  {base: "./www"})
//     .pipe(gzip())
//     .pipe(gulp.dest('../data'));
// });
/*======================================================================
=            Compile, minify, mobilize less                            =
======================================================================*/
var gulp           = require('gulp');
var ghPages = require('gulp-gh-pages');
gulp.task('deploy', function() {
  return gulp.src(['./out/*', './out/**'])
    .pipe(ghPages({
        remoteUrl: 'git@github.com:alt-f13/cm-spb.ru.git',
        //origin: 'github',
    }));
});
/*======================================================================
=            typescript                                                =
======================================================================*/

/*======================================================================
=            Compile, minify, mobilize less                            =
======================================================================*/
// var browserSync = require('browser-sync').create();
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: path.join(config.dest)
//     });
// });
