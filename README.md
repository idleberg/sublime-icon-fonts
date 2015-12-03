# Icon Fonts for Sublime Text

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Package Control](https://packagecontrol.herokuapp.com/downloads/Icon%20Fonts.svg?style=flat-square)](https://packagecontrol.io/packages/Icon%20Fonts)
[![GitHub release](https://img.shields.io/github/release/idleberg/Icon-Fonts-Sublime-Text.svg?style=flat-square)](https://github.com/idleberg/Icon-Fonts-Sublime-Text/releases)
[![Travis](https://img.shields.io/travis/idleberg/Icon-Fonts-Sublime-Text.svg?style=flat-square)](https://travis-ci.org/idleberg/Icon-Fonts-Sublime-Text)

Sublime Text snippets for several popular icon fonts ([see details](#prefixes))

![Screenshot](https://raw.github.com/idleberg/Icon-Fonts-Sublime-Text/master/screenshot.gif)

*Screenshot using the [Hopscotch](https://github.com/idleberg/Hopscotch) color scheme*

## Installation

### Package Control

1. Make sure you already have [Package Control](https://packagecontrol.io/) installed
2. Choose *“Install Package”* from the Command Palette (<kbd>Super</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>)
3. Select *“Icon Fonts”* and press <kbd>Enter</kbd>

### GitHub

1. Change to your Sublime Text `Packages` directory
2. Clone repository `git clone https://github.com/idleberg/Icon-Fonts-Sublime-Text`

## Usage

Snippets are limited to the `text.html` scope, which might not be activated in your `auto_complete_selector` user preferences by default. However, you can still force the completion popup to show by pressing <kbd>Ctrl</kbd>+<kbd>Space</kbd>.

Typing the class name of an icon will complete to a tag containing the icon's class — exceptions are `fa-stack` (completes to `<span>`) and `fa-ul` (completes to `<ul>`). Press <kbd>Tab</kbd> to jump between tag name, classes and the space between tags.

### Prefixes

Prefix         | Icon Font | Version | cdnjs | jsDelivr
---------------|-----------|---------|-------|---------
`ai`           | [Android Icons](http://www.androidicons.com/) | 1.0.0 | 🚫 | 🚫
`brandico`     | [Brandico Font](https://github.com/fontello/brandico.font) | – | 🚫 | 🚫
`cc`           | [Creative Commons Icon Font](http://cc-icons.github.io/) | 1.2.1 | ✅ | ✅
`dashicons`    | [Wordpress Dashicons](https://github.com/WordPress/dashicons) | – | 🚫 | 🚫
`devicons`     | [Devicons](https://github.com/vorillaz/devicons) | 1.8.0 | ✅ | ✅
`el-icon`      | [Elusive Icons](http://shoestrap.org/downloads/elusive-icons-webfont/) | ? | 🚫 | 🚫
`fa`           | [Font Awesome](http://fontawesome.io/) | 4.5.0 | ✅ | ✅
`fi`           | [Foundation Icons](http://zurb.com/playground/foundation-icons) | 3.0 | ✅ | ✅
`filetypes`    | [Glyphicons Filetypes](http://glyphicons.com/) | 1.9.0 | 🚫 | 🚫
`foundico`     | [Foundation Icons](https://github.com/zurb/foundation-icons/tree/original-implementation) | 1.0 | 🚫 | 🚫
`geomicon`     | [Geomicons Open](https://github.com/jxnblk/geomicons-open/) | 2.0.0 | 🚫 | ✅
`glyphicons`   | [Glyphicons Pro](http://glyphicons.com/)* | 1.9.0 | 🚫 | 🚫
`halflings`    | [Glyphicons Halflings](http://glyphicons.com/) | 1.9.0 | 🚫 | 🚫
`ion`          | [Ionicons](https://github.com/driftyco/ionicons) | 2.0.1 | 🚫 | 🚫
`line`         | [Elegant Theme Line Icons](http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website) | – | 🚫 | 🚫
`mfg`          | [MFG Labs Iconset](http://mfglabs.github.io/mfglabs-iconset/) | – | 🚫 | 🚫
`octicon`      | [GitHub Octicons](https://octicons.github.com/) | 3.3.0 | 🚫 | 🚫
`oi`           | [Open Iconic](https://useiconic.com/open/) | 1.1.0 | 🚫 | ✅
`openwebicons` | [OpenWeb Icons](http://pfefferle.github.io/openwebicons/) | 1.3.2| 🚫 | 🚫
`pf`           | [PaymentFont](http://paymentfont.io/) | 1.1.2 | ✅ | 🚫
`ratchicon`    | [Ratchicons](http://goratchet.com/components/#ratchicons) | 2.0.2 | ✅ | ✅
`social`       | [Glyphicons Social](http://glyphicons.com/) | 1.9.0 | 🚫 | 🚫
`st`           | [Stack Icons](http://stackicons.com/) | 1.0.0 | 🚫 | 🚫
`typicon`      | [Typicons](http://typicons.com/) | 2.0.7 | 🚫 | 🚫
`ui`           | [Semantic UI Icons](http://semantic-ui.com/elements/icon.html) | 2.0.7 | ✅ | ✅
`zmdi`         | [Material Design Iconic Font](https://github.com/zavoloklom/material-design-iconic-font) | 2.2.0 | ✅ | 🚫

\* Vanilla Glyphicons and Bootstrap Glyphicons use different class-names, the former adding a plural-s to its classes. On completion, a tab-stop is added to support both options. Future versions will deprecate this distinction, since [Bootstrap 4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) is likely to ship without (glyph)icons.

Examples:

* `fa-check`+<kbd>Tab</kbd> completes to `<i class="fa fa-check"></i>`
* `glyphicons-check`+<kbd>Tab</kbd> completes to `<span class="glyphicons glyphicons-check"></span>`
* `octicon-check`+<kbd>Tab</kbd> completes to `<span class="octicon octicon-check"></span>`
* well, you get the idea

### CDNs

If a supported CDN is indicated in the [table](#prefixes) above, you can use the prefixes `cdnjs`, `jsdelivr`, `maxcdn` to quickly insert a link to the CDN-hosted asset:

Examples:

* `cdnjs-fa`+<kbd>Tab</kbd> completes to a `<link>` tag to the Font Awesome style-sheet
* `jsdelivr-fa`+<kbd>Tab</kbd> completes to a `<link>` tag to the Font Awesome style-sheet
* `jsdelivr-geomicon`+<kbd>Tab</kbd> completes to a `<script>` tag to the Geomicons script
* `maxcdn-fa`+<kbd>Tab</kbd> completes to a `<link>` tag to the Font Awesome style-sheet

## License

This work is licensed under the [The MIT License](LICENSE).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/Icon-Fonts-Sublime-Text) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
