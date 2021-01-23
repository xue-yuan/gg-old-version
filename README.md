Gitignore Generator
==

The EZ way to generates .gitignore🍿.
> You can find those templates in [github/gitignore]([https://](https://github.com/github/gitignore))

***This is demo version. Stay tuned for more information 🍻.***


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gg.svg)](https://npmjs.org/package/gg)
[![Downloads/week](https://img.shields.io/npm/dw/gg.svg)](https://npmjs.org/package/gg)
[![License](https://img.shields.io/npm/l/gg.svg)](https://github.com/xue-yuan/gg/blob/master/package.json)

<!-- toc -->
- [Gitignore Generator](#gitignore-generator)
- [Usage](#usage)
- [Commands](#commands)
- [TODO](#todo)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ yarn add -g gg
$ gg COMMAND                  running command...
$ gg (-v|--version|version)   gg/0.0.1 darwin-x64 node-v14.15.3
$ gg --help [COMMAND]         USAGE
```
<!-- usagestop -->
# Commands
<!-- commands -->
```
USAGE
  $ gg [TYPE]

ARGUMENTS
  TYPE  input your expected template(s). split them using a comma(,).

OPTIONS
  -a, --append             append to the end of the file.
  -f, --filename=filename  [default: .gitignore] specify the output file.
  -h, --help               show CLI help
  -l, --list               show all available template
  -v, --version            show CLI version
```
<!-- commandsstop -->

# TODO

* global/community template
* customize template
* remove gh api(It's too complicated to setup before start using this command)
