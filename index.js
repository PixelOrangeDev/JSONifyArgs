function sortArg(arg) {
  if(arg.startsWith('--')) {
    arg = arg.substring(2, arg.length)
    let name = arg.split('=')[0]
    let value = arg.split('=')[1]

    if(!value) value = true

    return {name: name, value: value}
  }else return false
}

module.exports = (args) => {
  if(args == undefined) args = process.argv
  let jsonArgs = {}
  args.forEach((val, index) => {
    let sortedArg = sortArg(val)

    if(!sortedArg == false) {
      jsonArgs[`${sortedArg.name}`] = `${sortedArg.value}`
    }
  })
  return jsonArgs
}
