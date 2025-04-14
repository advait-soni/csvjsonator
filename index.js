import { Command } from "commander"
import fs from 'fs'

const program = new Command()

program
    .argument('<csv>')
    .action((csv) => {
        fs.readFile(csv, 'utf8', (err, data) => {
            if(err){
                console.error(`Error reading file ${err}`)
            }
            console.log('csv content' , data)
        })
    })


program.parse()