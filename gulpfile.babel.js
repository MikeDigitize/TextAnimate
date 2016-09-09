import 'babel-core/register';
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minimise from 'gulp-cssnano';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import { config as webpackConfigSrc } from './webpack.config.js';

let jsSource = './src/js/*.js';
let jsTestSource = './src/js/tests.js';
let jsDest = './build/js';

let htmlSource = './src/*.html';
let htmlDest = './build';

gulp.task('js', () => {
    let entry = {};
    entry['animate-text'] = 'js/animate-text.js';
    let config = Object.assign({}, webpackConfigSrc, { entry });
    return gulp.src(`./src/js/animate-text.js`)
        .pipe(plumber())
        .pipe(webpackStream(config))
        .pipe(gulp.dest(`${jsDest}`));
});

gulp.task('js-tests', () => {
    let entry = {};
    entry['animate-text-tests'] = 'js/tests.js';
    let config = Object.assign({}, webpackConfigSrc, { entry });
    return gulp.src(`${jsTestSource}`)
        .pipe(plumber())
        .pipe(webpackStream(config))
        .pipe(gulp.dest(`${jsDest}`));
});

gulp.task('html', () => {
    return gulp.src(htmlSource)
        .pipe(gulp.dest(htmlDest));
});

gulp.task('watch', function() {
    gulp.watch(htmlSource, ['html']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(jsTestSource, ['js-tests']);
});

gulp.task('default', ['html', 'js', 'js-tests', 'watch']);