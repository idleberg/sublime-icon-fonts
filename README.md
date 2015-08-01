# Icon Fonts for Sublime Text

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/idleberg/Icon-Fonts-Sublime-Text.svg?style=flat-square)](https://github.com/idleberg/Icon-Fonts-Sublime-Text/releases)
[![Travis](https://img.shields.io/travis/idleberg/Icon-Fonts-Sublime-Text.svg?style=flat-square)](https://travis-ci.org/idleberg/Icon-Fonts-Sublime-Text)

Sublime Text snippets for several popular icon fonts ([see details](#prefixes))

![Screenshot](https://raw.github.com/idleberg/Icon-Fonts-Sublime-Text/master/screenshot.gif)

*Screenshot using the [Hopscotch](https://github.com/idleberg/Hopscotch) color scheme*

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

Typing the class name of an icon using the designated prefix will complet to a tag containing the icon class. Exceptions are `fa-stack` (`<span>`) and `fa-ul` (`<ul>`).

### Prefixes

Prefix         | Icon Font | Version
---------------|-----------|--------
`ai`           | [Android Icons](http://www.androidicons.com/) | 1.0.0
`brandico`     | [Brandico Font](https://github.com/fontello/brandico.font) | –
`cc`           | [Creative Commons Icon Font](http://cc-icons.github.io/) | 1.2.1
`el-icon`      | [Elusive Icons](http://shoestrap.org/downloads/elusive-icons-webfont/) | ?
`fa`           | [Font Awesome](http://fontawesome.io/) | 4.4.0
`foundico`     | [Foundation Icons](http://zurb.com/playground/foundation-icons) | 1.0 / 3.0
`glyphicon`    | [Bootstrap Glyphicons](http://getbootstrap.com/components/#glyphicons) | 3.3.5
`line`         | [Elegant Theme Line Icons](http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website) | –
`mfg`          | [MFG Labs Iconset](http://mfglabs.github.io/mfglabs-iconset/) | –
`octicon`      | [GitHub Octicons](https://octicons.github.com/) | 2.4.1
`openwebicons` | [OpenWeb Icons](http://pfefferle.github.io/openwebicons/) | ?
`pf`           | [PaymentFont](http://paymentfont.io/) | 1.1.2 
`ratchicon`    | [Ratchicons](http://goratchet.com/components/#ratchicons) | 2.0.2
`oi`           | [Open Iconic](https://useiconic.com/open/) | 1.1.0
`st`           | [Stack Icons](http://stackicons.com/) | ?
`typicon`      | [Typicons](http://typicons.com/) | 2.0.7
`ui`           | [Semantic UI Icons](http://semantic-ui.com/elements/icon.html) | 0.5.x

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
