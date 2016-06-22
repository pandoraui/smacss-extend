'use strict';

// require('require-global')('~/webcoding/gulp-tasks/node_modules');
var gulp = require('gulp');
var tasks = require('gulp-tasks-build');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var fs = require('fs');
var del = require('del');
var markJSON = require('markit-json');
var yaml = require('js-yaml');
var _ = require('lodash');
var docUtil = require('amazeui-doc-util');
var markdownToc = require('markdown-toc');
var through = require('through2');

var pkg = require('../amazeui/package.json');
var docsNavbar = {};

docsNavbar = require('./docs/docs')['page-header'];

var tplPath = 'template';
var tplName = 'docs';

// 项目配置
var projectConfig = {
  projectName: 'samcss',   //项目名称，可用于打 zip 包
  srcRoot: 'src',          //项目源目录
  distRoot: 'dist'         //编译输出目录
};

var mdDoc = '**/*';
// var mdDoc = 'test';


var getTplFile = function(tplName) {
  // extname = extname || '.hbs';
  return fs.readFileSync(tplName, { encoding: 'utf8' });
};
var getYaml = function(fileName) {
  return yaml.safeLoad(fs.readFileSync(tplPath + '/_data/' + fileName + '.yml'));
};

var hbs = {
  meta: getTplFile(tplPath + '/_hbs/meta.html'),
  navhome: getTplFile(tplPath + '/_hbs/navhome.html'),
  pageheader: getTplFile(tplPath + '/_hbs/pageheader.html'),
  navdocs: getTplFile(tplPath + '/_hbs/navdocs.html'),
  footer: getTplFile(tplPath + '/_hbs/footer.html')
};

var yamlList = {
  browserBugs: getYaml('browser-bugs'),
  coreTeam: getYaml('core-team'),
  nav: getYaml('nav'),
  showcase: getYaml('showcase'),
  translations: getYaml('translations')
};

var tplFiles = {
  "docs": getTplFile(tplPath + '/docs.hbs')
};
var paths = {
  tpl: tplFiles.docs,
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

  clean: [
    projectConfig.distRoot,
    ('!' + projectConfig.distRoot + '/asstes'),
  ],

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
var tempJSON = {};

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

    var reg = new RegExp(data.group);
    tempJSON = {
      "title": data.title || "",
      "titleEn": data.titleEn || "",
      "layout": data.layout || "docs",
      "group": data.group || "",
      "href": '/' + relative + '.html',
      "basename": relative.replace(reg, '').replace('/', '')
    };

    jsonArr.push(tempJSON);
    // console.log(data);
    //更新当前模板
    if(!tplFiles[tempJSON.layout]){
      tplFiles[tempJSON.layout] = getTplFile(tplPath + '/' + tempJSON.layout + '.hbs');
    }

    data = _.extend(data, hbs);

    paths.tpl = tplFiles[tempJSON.layout];

    data.assets = assets;
    //设置标题
    var header = '<h1>' + data.title + ' <small>' + data.titleEn + '</small></h1><hr/>';


    data.body = header + data.body;

    input.contents = new Buffer(JSON.stringify(data));
    this.push(input);
    callback();
  });
};

var makeToc = function(cb) {
  return through.obj(function(input, enc, callback) {
    // var relative = input.relative.replace('.json', '');
    // var data = JSON.parse(input.contents.toString());

    var data = input.contents.toString();

    var toc = markdownToc(data).content;
    console.log(toc.toString());

    input.contents = new Buffer(toc + data);
    this.push(input);
    callback();
  });
};

gulp.task('nav', function(callback) {
  var output = 'dist/';
  var jsonArrTemp = _.indexBy(jsonArr, 'basename');
  // console.log(jsonArr);
  for(var key in docsNavbar){
    var sort = docsNavbar[key].sort || [];
    // console.log(key);
    docsNavbar[key].list = [];
    var temp = [];
    // console.log(JSON.stringify(jsonArrTemp, null, 2));
    // console.log()
    sort.forEach(function(item){
      if (jsonArrTemp[item]) {
        temp.push(jsonArrTemp[item]);
      }
    });
    docsNavbar[key].list = temp;
  }

  var jsonNav = JSON.stringify(docsNavbar, null, 2);
  // console.log(jsonNav);
  fs.writeFile(output + 'docsNav.json', jsonNav, {
    encoding: 'utf8',
  }, function (err) {
    if (err) throw err;
    console.log('json: docsNav saved!');
    callback();
  });
});

// gulp.task('docs:nav', function() {
//   var aa = markdownToc(paths.mdDocs).json;
//   // var aa = JSON.stringify(aa);
//   console.log(aa)
// });



gulp.task('docs:md', function() {
  // console.log(markdownToc(paths.mdDocs).content);
  return gulp.src([
    paths.mdDocs,
    // '!amazeui/docs/en/**/*',
  ])
    //生成 marked-toc 目录
    // .pipe(makeToc())
    .pipe(markJSON(docUtil.markedOptions))
    //.pipe($.if(docsType === 'docset', setAsserts() ) )
    .pipe(setAsserts())//这里生成 docs 时，报 unable to open database file
    .pipe(docUtil.applyTemplate(paths.tpl))
    .pipe($.rename(function(file) {
      file.extname = '.html';
      // var dirname = '/';
      // if ( !/^\.$/.test(file.dirname )) {
      //   dirname = '/' + file.dirname + '/';
      // }
      // var pathHref =  dirname + file.basename +  '.html';
      // tempJSON.basename = file.basename;
      // tempJSON.href = pathHref;
      // console.log(tempJSON);
      // jsonArr.push(tempJSON);
      if (file.basename === 'test') {
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
  // console.log(yamlList);
  runSequence('build', 'nav', 'server', cb);
});






gulp.task('test', function(cb) {
  console.log(hbs);
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
