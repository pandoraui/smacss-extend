'use strict';

// require('require-global')('~/webcoding/gulp-tasks/node_modules');
var gulp = require('gulp');
var tasks = require('gulp-tasks-build');
var runSequence = require('run-sequence');

// 项目配置
var projectConfig = {
  projectName: 'samcss',   //项目名称，可用于打 zip 包
  srcRoot: 'src/styles',          //项目源目录
  distRoot: 'dist'         //编译输出目录
};

// Task配置
var config = {
  projectName: projectConfig.projectName,
  srcRoot: projectConfig.srcRoot,
  distRoot: projectConfig.distRoot,

  styles: {
    type: 'sass', //编译类型 less sass 或 stylus
    src: projectConfig.srcRoot + '/themes/bootstrap/bootstrap.scss', //也可以是数组
    autoPrefixer: [],  //autoPrefixer 配置，如果为空，则按项目内部默认值设定
    dist: projectConfig.distRoot + '/css',
    watches: projectConfig.srcRoot + '/**/*.scss',
    banner: false
  },
};

tasks(gulp, config);

gulp.task('build', function(cb) {
  //根据你的需求，选择需要的 tasks 任务，别忘了配置
  runSequence('clean', ['html', 'styles'], cb);
});

// 不要直接使用 gulp.task('dev', ['build', 'server']);
// build 和 server 没有先后执行顺序，可能时序错乱，建议如下使用
gulp.task('dev', function(cb) {
  runSequence('build', 'server', cb);
});
