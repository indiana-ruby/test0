var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var files = {
    style: {
        src: path.join(__dirname, 'less/*.less'),
        dest: path.join(__dirname, 'css')
    },
    script: {
        src: path.join(__dirname, 'src/*.{js}'),
        dest: path.join(__dirname, 'lib')
    }
};

gulp.task('less', function(cb) {
  gulp.src('less/*.less')
    .pipe(less({
      paths: [
        path.join(__dirname, 'less')
      ]
    }))
    .on('error', console.error)
    .pipe(gulp.dest('css/')).on("end",function(){
      cb();
    });
});

var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
gulp.task("webpack", function(callback) {
  // run webpack
      return gulp.src(files.script.src)
        .pipe(  
          webpack({
            entry: {
              r: './src/r.js',
              btn: './src/btn.js',
              six: './src/six.js'
            },
            output: {
              path: __dirname,
              filename: '[name].js'
            },
            resolve: {
              extensions: ['', '.js', '.jsx']
            },
            module: {
              loaders: [{
                  test: /\.js$/,
                  loader: 'babel-loader',
              }, {
                  test: /\.jsx$/,
                  loader: 'babel-loader!jsx-loader?harmony'
              }]
            }
          })
        )
        .pipe(gulp.dest(files.script.dest));
}).on('task_start',function(){
    console.log('start');
}).on('task_err',function(err){
    console.log('error');
}).on('task_stop',function(){
    console.log('stop');
});

gulp.task('default', ['webpack','less']);