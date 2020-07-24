function sortArgs(arg) {
  if(arg.startsWith('--')) {
    // Remove the preceding "--"
    arg = arg.substring(2, arg.length)

    // Set the name and value to their respective values
    let name = arg.split('=')[0]
    let value = arg.split('=')[1]

    // If no value is specified, assume it is boolean, and set it to true, ex: "--boolean" would be true
    if(!value) { value = true }

    // Return a json object with the name and value variables...
    return {name: name, value: value}
  }else { return false } // ...or false if it doesn't begin with "--"
}

// The main function "jsonifyArgs()"
module.exports = (args) => {
  let jsonArgs = {}

  // If no arguments are passed in, default to process.argv
  if(args == undefined) { args = process.argv }

  args.forEach((val, index) => {
    // Format the argument
    let sortedArg = sortArgs(val)

    // Check and jsonify the argument
    if(!sortedArg == false) { jsonArgs[`${sortedArg.name}`] = `${sortedArg.value}` }
  })
  return jsonArgs
}
