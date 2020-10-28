# sublime-icon-fonts

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Package Control](https://packagecontrol.herokuapp.com/downloads/Icon%20Fonts.svg?style=flat-square)](https://packagecontrol.io/packages/Icon%20Fonts)
[![GitHub release](https://img.shields.io/github/release/idleberg/sublime-icon-fonts.svg?style=flat-square)](https://github.com/idleberg/sublime-icon-fonts/releases)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/sublime-icon-fonts)](https://circleci.com/gh/idleberg/sublime-icon-fonts/)

Sublime Text snippets for several popular icon fonts ([see details](https://github.com/idleberg/sublime-icon-fonts#prefixes)).

This package is also available for [Atom](https://github.com/idleberg/atom-icon-fonts) and [Visual Studio Code](https://github.com/idleberg/vscode-icon-fonts).

![Screenshot](https://raw.github.com/idleberg/sublime-icon-fonts/master/screenshot.gif)

*Screenshot using the [Hopscotch](https://github.com/idleberg/Hopscotch) color scheme*

## Installation

### Package Control

1. Make sure you already have [Package Control](https://packagecontrol.io/) installed
2. Choose *“Install Package”* from the Command Palette (<kbd>Super</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>)
3. Select *“Icon Fonts”* and press <kbd>Enter</kbd>

### GitHub

1. Change to your Sublime Text `Packages` directory
2. Clone repository `git clone https://github.com/idleberg/sublime-icon-fonts "Icon Fonts"`

## Usage

Snippets are limited to the `html` and `css|less|sass|scss|stylus` scopes, which might not be activated in your `auto_complete_selector` user preferences by default. However, you can still force the completion popup to show by pressing <kbd>Ctrl</kbd>+<kbd>Space</kbd>.

Typing the class name of an icon using the designated prefix will complete to a tag containing the icon class. Exceptions are `fa-layers`, `fa-layers-counter`, `fa-layers-text` and `fa-layers` (`<span>`).

### Prefixes

| Prefix            | Icon Font                               | Version |
|-------------------|-----------------------------------------|---------|
| `ai`              | [Android Icons][ai]                     | 1.0.0   |
| `cc`              | [Creative Commons Icon Font][cc]        | 1.2.1   |
| `bx`              | [BoxIcons][bx]                          | -       |
| `dashicons`       | [WordPress Dashicons][dashicons]        | –       |
| `devicons`        | [Devicons][devicons]                    | 1.8.0   |
| `el`              | [Elusive Icons][el]                     | 2.0.0   |
| `fas`,`far`,`fab` | [Font Awesome Pro][fa]                  | 5.14.0  |
| `fi`              | [Foundation Icons][fi]                  | 3.0     |
| `fl`              | [Font Logos][fl]                        | 0.12    |
| `geomicon`        | [Geomicons Open][geomicon]              | 2.0.0   |
| `glyphicon`       | [Bootstrap Glyphicons][glyphicon]       | 3.3.7   |
| `icono`           | [Icono][icono]                          | 1.3.0   |
| `ion`             | [Ionicons][ion]                         | 2.0.1   |
| `mdi`             | [Material Design Icons][mdi]            | 5.5.55  |
| `mfg`             | [MFG Labs Iconset][mfg]                 | –       |
| `mfizz`           | [Font Mfizz][mfizz]                     | 2.4.1   |
| `mio`             | [Material Design Icons (Official)][mio] | 3.0.1   |
| `octicon`         | [GitHub Octicons][octicon]              | 4.1.0   |
| `oi`              | [Open Iconic][oi]                       | 1.1.0   |
| `openwebicons`    | [OpenWeb Icons][openwebicons]           | 1.6.2   |
| `pf`              | [PaymentFont][pf]                       | 1.2.5   |
| `ri`              | [RemixIcon][ri]                         | 2.5.0   |
| `st`              | [Stack Icons][st]                       | 1.0.0   |
| `typcn`           | [Typicons][typcn]                       | 2.0.7   |
| `wi`              | [Weather Icons][wi]                     | 2.0.10  |
| `zmdi`            | [Material Design Iconic Font][zmdi]     | 2.2.0   |

⚠️ Several previously supported fonts have been removed and are now available in the [SVG Icon Snippets](https://github.com/idleberg/sublime-svg-icons) package or the icon fonts [legacy package](https://github.com/idleberg/sublime-icon-fonts-legacy).

**Examples**:

* `fa-check`+<kbd>Tab</kbd> completes to `<i class="fa fa-check"></i>`
* `glyphicon-check`+<kbd>Tab</kbd> completes to `<span class="glyphicon glyphicons-check"></span>`
* well, you get the idea

Snippets also work in the `text.css` scope, where they complete to the Unicode value of an icon.

**Example**:

* `fa-check`+<kbd>Tab</kbd> completes to `'\f00c'`

These snippets also work for Less, SCSS and Stylus files!

## License

This work is licensed under the [The MIT License](LICENSE).

[ai]: https://github.com/opoloo/androidicons
[bx]: https://github.com/atisawd/boxicons
[cc]: https://github.com/cc-icons/cc-icons
[dashicons]: https://github.com/WordPress/dashicons
[devicons]: https://github.com/vorillaz/devicons
[el]: https://github.com/reduxframework/Elusive-Icons
[fa]: https://github.com/FortAwesome/Font-Awesome-Pro
[fi]: https://github.com/zurb/foundation-icons
[fl]: https://github.com/Lukas-W/font-linux
[geomicon]: https://github.com/jxnblk/geomicons-open
[glyphicon]: https://github.com/twbs/bootstrap/tree/v3.3.7
[icono]: https://github.com/saeedalipoor/icono
[ion]: https://github.com/driftyco/ionicons
[mdi]: https://github.com/Templarian/MaterialDesign-Webfont
[mfg]: https://github.com/MfgLabs/mfglabs-iconset
[mfizz]: https://github.com/fizzed/font-mfizz
[mio]: https://github.com/google/material-design-icons
[octicon]: https://github.com/primer/octicons/tree/v4.1.0
[oi]: https://github.com/iconic/open-iconic
[openwebicons]: https://github.com/pfefferle/openwebicons
[pf]: https://github.com/vendocrat/PaymentFont
[ri]: https://github.com/Remix-Design/RemixIcon
[st]: https://github.com/parkerbennett/stackicons
[typcn]: https://github.com/stephenhutchings/typicons.font
[wi]: https://github.com/erikflowers/weather-icons
[zmdi]: https://github.com/zavoloklom/material-design-iconic-font
