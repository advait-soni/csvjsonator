import { Command } from "commander"
import fs from 'fs'
import { convertToJson } from "./convertToJson.js"
import path from 'path'
const program = new Command()

program
    .argument('<csv>')
    .action((csv) => {
        fs.readFile(csv, 'utf8', (err, data) => {
            if(err){
                console.error(`Error reading file ${err}`)
            }
            let result = convertToJson(data)

            const outputFileName = path.basename(csv, '.csv') + '.json'

            fs.writeFile(outputFileName, JSON.stringify(result,null, 2), (err)=> {
                if(err){
                    console.error(`Error ${err}`)
                }
                else{
                    console.log('successfully saved json file')
                }
            })
        })
    })


program.parse()