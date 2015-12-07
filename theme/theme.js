var fs = require('fs');
var path = require('path');
var marked = require('markit');
var renderer = new marked.Renderer();

var markdownConfig = {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    smartypants: false
};
marked.setOptions(markdownConfig);

function readFileFromNodeModules(fileName, module){
    var content;
    try {
        content = fs.readFileSync(path.join(process.cwd(), 'node_modules' , module, fileName), 'utf-8');
    } catch(e) {
        content = '';
        console.error('readFileFromNodeModulesError', fileName, module);
    }
    return content;
}

// refer to l268@post.js in https://github.com/lepture/nico;
function parseContent(content){
    var lines = content.split(/\r\n|\r|\n/);
    var body = [];
    var recording = true;
    lines.forEach(function(line) {
        if (recording && line.slice(0, 3) === '---') {
            recording = false;
        } else if (!recording) {
            body.push(line);
        }
    });
    return body.join('\n');
}

exports.reader = function(post){
    var filepath = post.meta.filepath.toLowerCase();
    if (filepath.indexOf('site/components') === 0) {
      post.template = post.meta.template = 'components';
    }
    if (filepath.indexOf('site/css') === 0) {
      post.template = post.meta.template = 'css';
    }
    if (filepath.indexOf('/demo/') > 0) {
        post.template = post.meta.template = 'demos';
    } 
    if (filepath.indexOf('site/scene') === 0) {
        post.template = post.meta.template = 'scene';
    } if (filepath.indexOf('site/start') === 0) {
        post.template = post.meta.template = 'start';
    } else {
        if (post.template === 'components') {
            var moduleName = 'uxcore-' + post.directory.replace(post.template, '');
            moduleName = moduleName.replace(/[/\\]/g, '');
            var pkg = readFileFromNodeModules('package.json', moduleName);
            if (pkg) {
                pkg = JSON.parse(pkg);
                if (pkg.repository && pkg.repository.url) {
                    pkg.repository.url = pkg.repository.url.replace('git+', '');
                }
                post.pkg = pkg;
                post.name = pkg.name;
                if (!post.title) {
                    post.title = pkg.name;
                }
                post.tags = {};
                if (pkg.author) {
                    post.tags.author = pkg.author;
                } else if (pkg.maintainers) {
                    post.tags.author = pkg.maintainers[0];
                }
            }
            if (!post.html) {
                var readme = readFileFromNodeModules('README.md', moduleName);
                if (readme) {
                    post.html = marked(parseContent(readme));
                }
            }
        }
    }
    post.meta.html = post.html;
    if (filepath === 'site/home.md') {
        post.filename = post.meta.filename = 'index';
        post.template = post.meta.template = 'home';
    }
    // console.log(post);
    return post;
};
