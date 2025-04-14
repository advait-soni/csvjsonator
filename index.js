import { Command } from "commander"

const program = new Command()

program
    .argument('<csv>')
    .action((csv) => {
        console.log('csv = ', csv)
    })


program.parse()