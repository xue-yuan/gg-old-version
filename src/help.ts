import {HelpBase} from '@oclif/plugin-help'
import {Command} from '@oclif/config'

export default class CustomHelp extends HelpBase {
  showHelp(args: string[]) {
    console.log(args)
  }

  showCommandHelp(command: Command) {
    console.log(command)
  }
}
