# Icon Fonts for Sublime Text [![Build Status](https://secure.travis-ci.org/idleberg/Icon-Fonts-Sublime-Text.svg)](http://travis-ci.org/idleberg/Icon-Fonts-Sublime-Text)

Sublime Text completions for several icon fonts, including [Bootstrap Glyphicons](http://getbootstrap.com/components/#glyphicons), [Font Awesome](http://fontawesome.io/), [Octicon](https://octicons.github.com/), [Typicons](http://typicons.com/) and Elegant Theme's [Line Icons](http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-fonts-on-your-website).

## Installation

### Package Control

1. Make sure you already have [Package Control](http://wbond.net/sublime_packages/package_control/) installed
2. Choose *Install Package* from the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `⇧⌘P on OS X`)
3. Select *Icon Fonts* and press `Enter`}

### GitHub

1. Change to your Sublime Text `Packages` directory
2. Clone repository `git clone https://github.com/idleberg/Icon-Fonts-Sublime-Text`

## Usage

Completions are limited to the `text.html` scope, which might or not be activated in your `auto_complete_selector` user preferences. Otherwise, you can still force the completion tab to show by pressing `Ctrl+Space`.

Typing the class name of an icon,prefixed with either `fa`, `glyphicon`, `line`, `octicon` or `typicon`or  will be completed to a tag containing the icon class. Exceptions are `fa-stack` (`<span`>) and `fa-ul` (`<ul>`).

Examples:

* `fa-check`+`Tab` completes to `<i class="fa fa-check"></i>`
* `glyphicon-check`+`Tab` completes to `<span class="glyphicon glyphicon-check"></span>`
* `octicon-check`+`Tab` completes to `<span class="octicon octicon-check"></span>`
* well, you get the idea

Font Awesome icons have some extra features:

* `fa-font4`+`Tab` completes to `<i class="fa fa-font fa-4x"></i>`
* `font4x`+`Tab` *also* completes to `<i class="fa fa-font fa-4x"></i>`
* `fa-repeatspin`+`Tab` completes to `<i class="fa fa-repeat fa-spin"></i>`


## License

The MIT License (MIT)

Copyright (c) 2014 Jan T. Sott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/Icon-Fonts-Sublime-Text) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
