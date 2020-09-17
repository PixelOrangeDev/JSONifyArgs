let jsonArgs = {}
let argsArray = []

function process(args) {
  args.forEach((arg, index) => {
    if(arg.startsWith('--')) {
      arg = arg.substring(2)

      let name = arg.split('=')[0]
      let value = arg.split('=')[1] == 'true' ? true : arg.split('=')[1]

      if(arg.includes('=')) jsonArgs[name] = value
      else jsonArgs[name] = true

      argsArray.push({name: name, value: value})
    }
  })
  return jsonArgs
}

module.exports = process
module.exports.argsArray = argsArray
