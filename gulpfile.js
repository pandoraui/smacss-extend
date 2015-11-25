'use strict';

// require('require-global')('~/webcoding/gulp-tasks/node_modules');
var gulp = require('gulp');
var tasks = require('gulp-tasks-build');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var fs = require('fs');
var del = require('del');
var markJSON = require('markit-json');
var docUtil = require('amazeui-doc-util');
var through = require('through2');

var pkg = require('../amazeui/package.json');

// 项目配置
var projectConfig = {
  projectName: 'samcss',   //项目名称，可用于打 zip 包
  srcRoot: 'src',          //项目源目录
  distRoot: 'dist'         //编译输出目录
};

var mdDoc = 'test';
var tplPath = 'template';
var tplName = 'docs';

var getTplFile = function(tplName) {
  return fs.readFileSync(tplPath + '/' + tplName + '.hbs', { encoding: 'utf8' })
}

var tplFiles = {
  "docs": getTplFile('docs')
};
var paths = {
  tpl: tplFiles['docs'],
  tplStyle: tplPath + '/assets/scss/docs.scss',
  mdDocs: './docs/' + mdDoc + '.md',  //测试那个文档，就写哪个
  dist: {
    html: './dist',
    assets: 'dist/assets'
  }
};

// Task配置
var config = {
  projectName: projectConfig.projectName,
  srcRoot: projectConfig.srcRoot,
  distRoot: projectConfig.distRoot,

  copy: {
    src: [
      tplPath + '/assets/js/docs.js'
      // 'app/**/*',
      // '!app/*.html',
      // '!app/js/**/*',
      // // '!app/venders',
      // // '!app/i',
      // 'bower_components/pure/pure-min.css'
    ],
    base: projectConfig.distRoot + '/assets/js',
    venders: {
      src:[tplPath + '/assets/js/vendor/*.js'],
      dist: paths.dist.assets + '/js/vendor'
    },

  },

  styles: {
    type: 'sass', //编译类型 less sass 或 stylus
    src: [
      projectConfig.srcRoot + '/styles/app.scss',
      paths.tplStyle,
    ], //string or array
    autoPrefixer: [],  //autoPrefixer 配置，如果为空，则按项目内部默认值设定
    dist: projectConfig.distRoot + '/assets/css',
    watches: [
      projectConfig.srcRoot + '/styles/**/*.scss',
      tplPath + '/assets/scss/*.scss',
    ],
    banner: false
  },
  //预览服务器
  browserSync: {
    port: 5000, //默认3000
    ui: {    //更改默认端口weinre 3001
        port: 5001,
        weinre: {
            port: 9090
        }
    },
    // server: {
    //   baseDir: 'dist/docs'
    // },
    open: "local", //external
    notify: true,
    logPrefix: 'happyCoding',
    server: './dist'
  },
};

tasks(gulp, config);




var jsonArr = [];

var setAsserts = function(cb) {
  return through.obj(function(input, enc, callback) {
    var relative = input.relative.replace('.json', '');
    var data = JSON.parse(input.contents.toString());
    var assets = 'assets/';
    var type = 'Guide';
    if (relative.indexOf('/') > -1 ) {
      assets = '../' + assets;
    }

    if (relative.indexOf('styleguide') > -1) {
      type = 'Section';
    } else if (relative.indexOf('javascript') > -1) {
      type = 'Plugin';
    } else if (relative.indexOf('css') > -1) {
      type = 'Style';
    }

    var temp = {
      "title": data.title || "",
      "titleEn": data.titleEn || "",
      "layout": data.layout || "docs",
      "group": data.group || "",
      "href": data.href || ""
    };
    jsonArr.push(temp);
    // console.log(data);

    //更新当前模板
    if(!tplFiles[temp.layout]){
      tplFiles[temp.layout] = getTplFile(temp.layout);
    }
    paths.tpl = tplFiles[temp.layout];

    data.assets = assets;
    input.contents = new Buffer(JSON.stringify(data));
    this.push(input);
    callback();
  });
};


gulp.task('docs:md', function() {
  return gulp.src([
    paths.mdDocs,
    // '!amazeui/docs/en/**/*',
  ])
    .pipe(markJSON(docUtil.markedOptions))
    //.pipe($.if(docsType === 'docset', setAsserts() ) )
    .pipe(setAsserts())//这里生成 docs 时，报 unable to open database file
    .pipe(docUtil.applyTemplate(paths.tpl))
    .pipe($.rename(function(file) {
      file.extname = '.html';
      if (file.basename === mdDoc) {
        file.basename = 'index';
      }
    }))
    .pipe(gulp.dest(paths.dist.html));
});

gulp.task('docs:watch', function() {
  return gulp.watch(paths.mdDocs, ['docs:md']);
});

gulp.task('docs', ['docs:md', 'docs:watch']);

gulp.task('build', function(cb) {
  //根据你的需求，选择需要的 tasks 任务，别忘了修改配置 config
  // runSequence('clean', ['html', 'styles'], cb);
  runSequence('clean', ['copy', 'docs', 'styles'], cb);
});

// 不要直接使用 gulp.task('dev', ['build', 'server']);
// build 和 server 没有先后执行顺序，可能时序错乱，建议如下使用
gulp.task('dev', function(cb) {
  runSequence('build', 'server', cb);
});













    // 这里要生成一个 JSON 数据，方便模板中生成 nav 导航使用
    // 数据结构
    //  [
    //    {
    //      "title": "",        //标题
    //      "titleEn": "",      //英文标题
    //      "layout": "docs",   //模板
    //      "group": "layout",  //分组
    //      "href": ""          //页面链接
    //    }
    //  ]
    // console.log(relative)
    // if (docsType === 'docs') {
    //   switch(type){
    //     case 'Guide':
    //       // paths.tpl = generatorTpl(data.layout);
    //       break;
    //     case 'Section':
    //       ;
    //       break;
    //     case 'Plugin':
    //       ;
    //       break;
    //     case 'Style':
    //       ;
    //       break;
    //     default:
    //       ;
    //       break;
    //   }
    // }
