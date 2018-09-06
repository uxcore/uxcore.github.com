const gulp = require('gulp');
const ghPages = require('./tools/gulp-gh-pages');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const fs = require('fs-extra');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const LessPluginInlineUrls = require('less-plugin-inline-urls');
const inquirer = require('inquirer');
const to = require('to-case');

const autoprefix = new LessPluginAutoPrefix({
  browsers: ['last 2 versions', 'not ie < 8'],
});

gulp.task('deploy', () => gulp.src('./_site/**/*')
  .pipe(ghPages({
    branch: 'master',
  })));

gulp.task('coding', () => gulp.src('./_site/**/*')
  .pipe(ghPages({
    origin: 'coding',
    branch: 'master',
  })));

gulp.task('less_index', () => gulp.src(['./style/index.less'])
  .pipe(less({
    plugins: [autoprefix, LessPluginInlineUrls],
  }))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('./theme/static/style/')));

gulp.task('less_theme', () => gulp.src(['./style/theme/*.less'])
  .pipe(less({
    plugins: [autoprefix, LessPluginInlineUrls],
  }))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('./theme/static/style/')));

gulp.task('less_builder', () => gulp.src(['./style/builder/index.less'])
  .pipe(less({
    plugins: [autoprefix, LessPluginInlineUrls],
  }))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('./theme/static/style/builder/')));

gulp.task('less', ['less_index', 'less_theme', 'less_builder'], () => {});

gulp.task('watch', [], () => {
  gulp.watch('./style/**/*.less', ['less']);
});

gulp.task('create_demo', (done) => {
  const questions = [
    {
      type: 'input',
      name: 'component_name',
      message: '请输入想要添加 demo 的组件',
      validate: (input) => {
        if (!input) {
          return '必填';
        }
        const isCompExists = fs.pathExistsSync(`./site/components/${input}`);
        if (!isCompExists) {
          return '组件不存在';
        }

        return true;
      },
    },
    {
      type: 'input',
      name: 'demo_name',
      message: '请输入 demo 文件名称',
      validate: (input) => {
        if (!input) {
          return '必填';
        }
        return true;
      },
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    const demoPath = `./site/components/${answers.component_name}/demo`;
    fs.ensureDirSync(demoPath);
    const demos = fs.readdirSync(demoPath);
    gulp.src('./tools/templates/demo.md')
      .pipe(ejs({
        ...answers,
        ComponentName: to.pascal(answers.component_name),
        DemoName: to.pascal(answers.demo_name),
        order: demos.length,
      }))
      .pipe(rename(`${answers.demo_name}.md`))
      .pipe(gulp.dest(demoPath));
    done();
  });
});

gulp.task('demo-rename', () => {
  const rootPath = './site/components';
  const comps = fs.readdirSync(rootPath);
  comps.forEach((comp) => {
    try {
      const compPath = `${rootPath}/${comp}/demo`;
      const mds = fs.readdirSync(compPath);
      mds.forEach((md) => {
        const mdPath = `${compPath}/${md}`;
        const file = fs.readFileSync(mdPath, 'utf-8');
        const newFile = file.replace(/const (.+) = require\((.+)\)/g, (match, s1, s2) =>
          // if (s1.indexOf('{') !== -1) {
          //   return match;
          // }
          `import ${s1} from ${s2};`
        );
        fs.writeFileSync(mdPath, newFile);
      });
    } catch (e) {
      // console.log(e);
    }
  });
});

