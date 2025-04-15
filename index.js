import { Command } from "commander"
import fs from 'fs'
import { convertToJson } from "./convertToJson.js"

const program = new Command()

program
    .argument('<csv>')
    .action((csv) => {
        fs.readFile(csv, 'utf8', (err, data) => {
            if(err){
                console.error(`Error reading file ${err}`)
            }
            convertToJson(data)
        })
    })


program.parse()