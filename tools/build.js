#!/usr/bin/env node

const CSS = require('css');
const signale = require('signale');
const yaml = require('js-yaml');
const { join } = require('path');
const { mkdirSync, readFileSync, writeFile } = require('fs');

const readDB = () => {
    let db;

    try {
      db = yaml.safeLoad(readFileSync(join(__dirname, 'db.yml'), 'utf8'));
    } catch (e) {
      signale.fatal(new Error('Could not read db.yml'));
    }

    return db;
}

const readFile = (path, file) => {
    const filePath = join(__dirname, 'node_modules', `@local/${path}`, file);
    const fileContents = readFileSync(filePath, 'utf8');

    return fileContents;
}

const parseCSS = (font) => {
    let fileContents = '';
    if (typeof font.files === 'object') {
        font.files.forEach( file => {
            fileContents += readFile(font.directory, file)
        });
    } else {
        fileContents = readFile(font.directory, font.files);
    }

    let ast = CSS.parse(fileContents);
    let rules = ast.stylesheet.rules;

    let output = rules.map(item => {
        if (typeof item.selectors !== 'undefined' && item.selectors[0].startsWith(font.pattern.before) && item.selectors[0].endsWith(font.pattern.after)) {
            let output = {};

            output.selector = item.selectors[0]
            .replace(/^\./, '')
            .replace(/:before$/, '');

            item.declarations.forEach( declaration => {
                if (declaration.property === 'content') output.code = declaration.value.replace(/("|')*/g, '').replace(/\\/g, '');
            });

            return output;
        }

    });

    // Remove null keys
    output = output.filter(e => e);

    return output;
}

const writeCSS = (font, data) => {
    const scope = '.source.css .meta.property-list.css, .source.css.scss .meta.property-list.scss, .source.less .meta.property-list.less, .source.sass, .source.stylus .meta.property-list.stylus';
    const output = {
        scope: scope,
        completions: []
    };

    data.forEach( element => {
        const prefix = (typeof font.replace !== 'undefined') ? element.selector.replace(new RegExp(font.replace.from), font.replace.to) : element.selector;

        output.completions.push({
            contents: `content: '\\\\${element.code}';$0`,
            trigger: prefix
        });
    });


    const contents = JSON.stringify(output, null, 4);

    const outDir = join(__dirname, '..', 'snippets');
    writeFile(`${outDir}/${font.slug}--css.sublime-completions`, contents, (err) => {
        if (err) return signale.fatal(err);
        signale.success(`${font.slug}--css.sublime-completions`);
    });
}

const write = (font, data, type = 'html') => {
    const scope = (type === 'jsx') ? 'source.js.jsx' : 'source.js, text.html -text.html.markdown';
    const output = {
        scope: scope,
        completions: []
    };

    data.forEach( element => {
        const classProp = (type === 'jsx') ? 'className' : 'class';
        const classesBefore = (typeof font.classes !== 'undefined' && font.classes.before.trim() !== '') ? font.classes.before : '';
        const classesAfter = (typeof font.classes !== 'undefined' && font.classes.after.trim() !== '') ? font.classes.after : '';

        const classes = [classesBefore, element.selector, classesAfter].join(' ').trim();
        const options = (font.options === true) ? '$2' : '';

        const prefix = (typeof font.replace !== 'undefined') ? element.selector.replace(new RegExp(font.replace.from), font.replace.to): element.selector;

        output.completions.push({
            contents: `<$\{1:${font.tag}\} ${classProp}="${classes}${options}"></$\{1:${font.tag}\}>$0`,
            trigger: prefix
        });
    });

    const contents = JSON.stringify(output, null, 4);
    const outDir = join(__dirname, '..', 'snippets');

    writeFile(`${outDir}/${font.slug}--${type}.sublime-completions`, contents, (err) => {
        if (err) return signale.fatal(err);
        signale.success(`${font.slug}--${type}.sublime-completions`);
    });
}

try {
    mkdirSync(join(__dirname, '..', 'snippets'));
} catch (e) {
    // Don't panic
}

const db = readDB();

db.fonts.forEach( (font) => {
    try {
        let data = parseCSS(font);
        writeCSS(font, data);
        write(font, data, 'html');
        write(font, data, 'jsx');
    } catch(err) {
        if (err) signale.fatal(err);
    }
});
