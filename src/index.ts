import chalk from 'chalk'

export default class Log {
    constructor() {

    }

    static error(str: string): void {
        console.log(chalk.red.bold('[Error]: ') + str)
    }

    static info(str: string): void {
        console.log(chalk.gray.bold('[Info]: ') + str)
    }

    static success(str: string): void {
        console.log(chalk.green.bold('[Success]: ') + str)
    }

    static warn(str: string): void {
        console.log(chalk.yellow.bold('[Warn]: ') + str)
    }
}