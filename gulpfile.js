  /*
  * sublime-gulpfile.js
  *
  * Copyright (c) 2017 Jan T. Sott
  * Licensed under the MIT license.
  */

  // Dependencies
 const gulp = require('gulp');
 const debug = require('gulp-debug');
 const jsonLint = require('gulp-jsonlint');
 const xmlVal = require('gulp-xml-validator');
 const ymlVal = require('gulp-yaml-validate');

 // Supported files
 const jsFiles = [
   'lib/*.js',
   'src/*.js',
 ];

 const jsonFiles = [
   '!node_modules/**/*',
   '**/*.JSON-sublime-syntax',
   '**/*.JSON-tmLanguage',
   '**/*.JSON-tmTheme',
   '**/*.sublime-build',
   '**/*.sublime-commands',
   '**/*.sublime-completions',
   '**/*.sublime-keymap',
   '**/*.sublime-macro',
   '**/*.sublime-menu',
   '**/*.sublime-settings',
   '**/*.sublime-theme',
   'messages.json'
 ];

 const xmlFiles = [
   '!node_modules/**/*',
   '**/*.plist',
   '**/*.PLIST-sublime-syntax',
   '**/*.PLIST-tmLanguage',
   '**/*.PLIST-tmTheme',
   '**/*.sublime-snippet',
   '**/*.tmCommand',
   '**/*.tmLanguage',
   '**/*.tmPreferences',
   '**/*.tmSnippet',
   '**/*.tmTheme',
   '**/*.xml'
 ];

 const ymlFiles = [
   '!node_modules/**/*',
   '**/*.sublime-syntax',
   '**/*.YAML-tmLanguage',
   '**/*.YAML-tmTheme'
 ];

// Available tasks
gulp.task('lint', ['lint:json', 'lint:xml', 'lint:yml']);

// Lint JSON
gulp.task('lint:json', function(){
  return gulp.src(jsonFiles)
    .pipe(debug({title: 'json-lint'}))
    .pipe(jsonLint())
    .pipe(jsonLint.failAfterError())
    .pipe(jsonLint.reporter());
});

// Validate XML
gulp.task('lint:xml', function() {
  return gulp.src(xmlFiles)
    .pipe(debug({title: 'xml-validator'}))
    .pipe(xmlVal());
});

// Validate YAML
gulp.task('lint:yml', function() {
  return gulp.src(ymlFiles)
    .pipe(debug({title: 'yml-validator'}))
    .pipe(ymlVal());
});

