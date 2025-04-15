
export function convertToJson(csv){
    const arr = csv.split(/\r?\n/)
    const keys = arr[0].split(',')

    const res = arr.slice(1).map( (ele) => {
        let ob = {}
        const x = ele.split(',')
        for(let i = 0; i < x.length; i++){
            ob[keys[i]] = x[i]
        }
        return ob
    })
    console.log(res)
}   