# Icon Fonts for Sublime Text

[![GitHub release](https://img.shields.io/github/release/idleberg/Icon-Fonts-Sublime-Text.svg?style=flat-square)](https://github.com/idleberg/Icon-Fonts-Sublime-Text/releases)
[![Travis](https://img.shields.io/travis/idleberg/Icon-Fonts-Sublime-Text.svg?style=flat-square)](https://travis-ci.org/idleberg/Icon-Fonts-Sublime-Text)

Sublime Text snippets for several popular icon fonts.

* [Android Icons](http://www.androidicons.com/)
* [Bootstrap Glyphicons](http://getbootstrap.com/components/#glyphicons)
* [Brandico Font](https://github.com/fontello/brandico.font)
* [Creative Commons Icon Font](http://cc-icons.github.io/)
* [Elusive Icons](http://shoestrap.org/downloads/elusive-icons-webfont/)
* [Font Awesome](http://fontawesome.io/)
* [Foundation Icons](http://zurb.com/playground/foundation-icons)
* [GitHub Octicons](https://octicons.github.com/)
* [MFG Labs Iconset](http://mfglabs.github.io/mfglabs-iconset/)
* [Open Iconic](https://useiconic.com/open/)
* [OpenWeb Icons](http://pfefferle.github.io/openwebicons/)
* [PaymentFont](http://paymentfont.io/)
* [Ratchicons](http://goratchet.com/components/#ratchicons)
* [Stack Icons](http://stackicons.com/)
* [Typicons](http://typicons.com/)
* [Elegant Theme Line Icons](http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-fonts-on-your-website)

## Installation

### Package Control

1. Make sure you already have [Package Control](http://wbond.net/sublime_packages/package_control/) installed
2. Choose *Install Package* from the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `⇧⌘P on OS X`)
3. Select *Icon Fonts* and press `Enter`

### GitHub

1. Change to your Sublime Text `Packages` directory
2. Clone repository `git clone https://github.com/idleberg/Icon-Fonts-Sublime-Text`

## Usage

Snippets are limited to the `text.html` scope, which might or not be activated in your `auto_complete_selector` user preferences. Otherwise, you can still force the completion tab to show by pressing `Ctrl+Space`.

Typing the class name of an icon, prefixed with either `brandico`, `cc`, `el-icon`, `fa`, `glyphicon`, `line`, `mfg`, `octicon`, `openwebicons`, `pf`, `ratchicon`, `oi` `str` or `typicon` will be completed to a tag containing the icon class. Exceptions are `fa-stack` (`<span`>) and `fa-ul` (`<ul>`).

Examples:

* `fa-check`+`Tab` completes to `<i class="fa fa-check"></i>`
* `glyphicon-check`+`Tab` completes to `<span class="glyphicon glyphicon-check"></span>`
* `octicon-check`+`Tab` completes to `<span class="octicon octicon-check"></span>`
* well, you get the idea

## License

The MIT License (MIT)

Copyright (c) 2014 Jan T. Sott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/Icon-Fonts-Sublime-Text) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
