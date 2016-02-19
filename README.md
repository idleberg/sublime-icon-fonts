# Icon Fonts for Sublime Text

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Package Control](https://packagecontrol.herokuapp.com/downloads/Icon%20Fonts.svg?style=flat-square)](https://packagecontrol.io/packages/Icon%20Fonts)
[![GitHub release](https://img.shields.io/github/release/idleberg/sublime-icon-fonts.svg?style=flat-square)](https://github.com/idleberg/sublime-icon-fonts/releases)
[![Travis](https://img.shields.io/travis/idleberg/sublime-icon-fonts.svg?style=flat-square)](https://travis-ci.org/idleberg/sublime-icon-fonts)

Sublime Text snippets for several popular icon fonts ([see details](#prefixes)).

Also [available](https://github.com/idleberg/atom-icon-fonts) for GitHub's Atom editor.

![Screenshot](https://raw.github.com/idleberg/sublime-icon-fonts/master/screenshot.gif)

*Screenshot using the [Hopscotch](https://github.com/idleberg/Hopscotch) color scheme*

## Installation

### Package Control

1. Make sure you already have [Package Control](https://packagecontrol.io/) installed
2. Choose *“Install Package”* from the Command Palette (<kbd>Super</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>)
3. Select *“Icon Fonts”* and press <kbd>Enter</kbd>

### GitHub

1. Change to your Sublime Text `Packages` directory
2. Clone repository `git clone https://github.com/idleberg/sublime-icon-fonts`

## Usage

Snippets are limited to the `text.html` scope, which might not be activated in your `auto_complete_selector` user preferences by default. However, you can still force the completion popup to show by pressing <kbd>Ctrl</kbd>+<kbd>Space</kbd>.

Typing the class name of an icon will complete to a tag containing the icon's class — exceptions are `fa-stack` (completes to `<span>`) and `fa-ul` (completes to `<ul>`). Press <kbd>Tab</kbd> to jump between tag name, classes and the space between tags.

### Prefixes

Prefix         | Icon Font                           | Version | cdnjs | jsDelivr
---------------|-------------------------------------|---------|-------|---------
`ai`           | [Android Icons][ai]                 | 1.0.0   | 🚫    | 🚫
`brandico`     | [Brandico Font][brandico]           | –       | 🚫    | 🚫
`cc`           | [Creative Commons Icon Font][cc]    | 1.2.1   | ✅    | ✅
`dashicons`    | [WordPress Dashicons][dashicons]    | –       | 🚫    | 🚫
`devicons`     | [Devicons][devicons]                | 1.8.0   | ✅    | ✅
`ei`           | [Evil Icons][ei]                    | 1.8.0   | 🚫    | 🚫
`el-icon`      | [Elusive Icons][el-icon]            | ?       | 🚫    | 🚫
`fa`           | [Font Awesome][fa]                  | 4.5.0   | ✅    | ✅
`fi`           | [Foundation Icons][fi]              | 3.0     | ✅    | ✅
`filetypes`    | [Glyphicons Filetypes][filetypes]   | 1.9.0   | 🚫    | 🚫
`foundico`     | [Foundation Icons][foundico]        | 1.0     | 🚫    | 🚫
`geomicon`     | [Geomicons Open][geomicon]          | 2.0.0   | 🚫    | ✅
`glyphicons`   | [Glyphicons Pro][glyphicons]*       | 1.9.0   | 🚫    | 🚫
`halflings`    | [Glyphicons Halflings][halflings]   | 1.9.0   | 🚫    | 🚫
`icono`        | [Icono][icono]                      | 1.3.0   | ✅    | 🚫
`ion`          | [Ionicons][ion]                     | 2.0.1   | 🚫    | 🚫
`line`         | [Elegant Theme Line Icons][line]    | –       | 🚫    | 🚫
`mfg`          | [MFG Labs Iconset][mfg]             | –       | 🚫    | 🚫
`octicon`      | [GitHub Octicons][octicon]          | 3.5.0   | 🚫    | 🚫
`oi`           | [Open Iconic][oi]                   | 1.1.0   | 🚫    | ✅
`openwebicons` | [OpenWeb Icons][openwebicons]       | 1.3.3   | 🚫    | ✅
`pf`           | [PaymentFont][pf]                   | 1.1.2   | ✅    | 🚫
`ratchicon`    | [Ratchicons][ratchicon]             | 2.0.2   | ✅    | ✅
`social`       | [Glyphicons Social][social]         | 1.9.0   | 🚫    | 🚫
`st`           | [Stack Icons][st]                   | 1.0.0   | 🚫    | 🚫
`typcn`        | [Typicons][typcn]                   | 2.0.7   | 🚫    | 🚫
`ui`           | [Semantic UI Icons][ui]             | 2.0.7   | ✅    | ✅
`wi`           | [Weather Icons][wi]                 | 2.0.10  | ✅    | 🚫
`zmdi`         | [Material Design Iconic Font][zmdi] | 2.2.0   | ✅    | 🚫

\* Vanilla Glyphicons and Bootstrap Glyphicons use different class-names, the former adding a plural-s to its classes. On completion, a tab-stop is added to support both options. Future versions will deprecate this distinction, since [Bootstrap 4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) will ship without any icons.

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

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/sublime-icon-fonts) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[ai]: http://www.androidicons.com
[brandico]: https://github.com/fontello/brandico.font
[cc]: https://github.com/cc-icons/cc-icons
[dashicons]: https://github.com/WordPress/dashicons
[devicons]: https://github.com/vorillaz/devicons
[ei]: https://github.com/outpunk/evil-icons
[el-icon]: http://shoestrap.org/downloads/elusive-icons-webfont
[fa]: https://github.com/FortAwesome/Font-Awesome
[fi]: http://zurb.com/playground/foundation-icons
[filetypes]: http://glyphicons.com
[foundico]: https://github.com/zurb/foundation-icons/tree/original-implementation
[geomicon]: https://github.com/jxnblk/geomicons-open
[glyphicons]: http://glyphicons.com
[halflings]: http://glyphicons.com
[icono]: https://github.com/saeedalipoor/icono
[ion]: https://github.com/driftyco/ionicons
[line]: http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website
[mfg]: https://github.com/MfgLabs/mfglabs-iconset
[octicon]: https://github.com/github/octicons
[oi]: https://github.com/iconic/open-iconic
[openwebicons]: https://github.com/pfefferle/openwebicons
[pf]: https://github.com/vendocrat/PaymentFont
[ratchicon]: http://goratchet.com/components/#ratchicons
[social]: http://glyphicons.com
[st]: https://github.com/parkerbennett/stackicons
[typcn]: https://github.com/stephenhutchings/typicons.font
[ui]: http://semantic-ui.com/elements/icon.html
[wi]: https://github.com/erikflowers/weather-icons
[zmdi]: https://github.com/zavoloklom/material-design-iconic-font
