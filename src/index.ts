import {Command, flags} from '@oclif/command'
import * as chalk from 'chalk'
import {generator} from './utils'
import {AVAILABLE} from './utils'

const fs = require('fs')

class Gg extends Command {
  static description = 'gitignore generator(gg).'

  static strict = false

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    append: flags.boolean({
      char: 'a',
      description: 'append to the end of the file.',
      default: false,
      required: false,
      hidden: false,
    }),
    filename: flags.string({
      char: 'f',
      description: 'specify the output file.',
      default: '.gitignore',
      required: false,
      hidden: false,
    }),
    list: flags.boolean({
      char: 'l',
      description: 'show all available template',
      default: false,
      required: false,
      exclusive: [
        'version',
        'help',
        'append',
        'filename',
      ],
    }),
  }

  static args = [
    {
      name: 'type',
      required: false,
      description: 'input your expected template(s). split them using a comma(,).',
    },
  ]

  static symbols = ['✨', '⚡️', '🍷', '🔥', '🍺', '🎲', '🧊']

  async run() {
    let content = []
    const {args, flags} = this.parse(Gg)
    const filename = flags.filename
    const types = args.type ? args.type.split(',').filter((e: any) => e) : []
    this.log(`${chalk.yellow.bold('Gitignore Generator v' + this.config.version)} ⛄️`)
    if (types !== []) {
      this.log(`├─ ${chalk.blue('Selected Template: ')}${chalk.bold(types.join(', '))}`)
      this.log(`├─ ${chalk.blue('Selected File: ')}${chalk.bold(filename)}`)
      this.log(`└─ ${chalk.blue('Append Mode: ')}${chalk.bold(flags.append)}`)
      this.log('\n[🍭] Generating .gitignore\n')
      const promiseResults = []
      for (const type of types) {
        const symbol = Gg.symbols[Math.floor(Math.random() * Gg.symbols.length)]
        this.log(`[${symbol}] appending ${type}.gitignore ...`)
        promiseResults.push(generator(type))
      }
      content = await Promise.all(promiseResults)
      if (flags.append) {
        fs.appendFile(filename, content.join(), (err: any) => {
          if (err) throw err
        })
      } else {
        fs.writeFile('.gitignore', content.join(), (err: any) => {
          if (err) throw err
        })
      }
      this.log('\n[🍻] Done.')
    }

    if (flags.list) {
      this.log(`└─ ${chalk.bold('The following options are available templates')}`)
      AVAILABLE.forEach((element: any) => {
        this.log(`- ${element}`)
      })
    }
  }
}

export = Gg
