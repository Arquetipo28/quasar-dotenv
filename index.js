const fs = require('fs')
const path = require('path')
const { config, parse } = require('dotenv')

const defaultOptions = {
    encoding: 'utf8',
    examplePath: process.cwd()
}

const evaluateObject = (object, stringifyValue = true) => {
  const objectKeys = object.keys || []
  objectKeys.forEach((key) => Object.assign(object, evaluateProperty(object, key, stringifyValue)))

  return object
}

const evaluateProperty = (object, property, stringify) => {
  if (!object.hasOwnProperty(key)) return {}

  return { [key]: stringify ? JSON.stringify(object[key]) : object[key] }
}

module.exports = {
  config: function (options = {}) {
    const configOptions = { ...defaultOptions, ...options }
    const parsedEnv = config(configOptions).parsed || {}
    const quasarEnv = evaluateObject(parsedEnv)
    const encoding = configOptions.encoding
    const baseEnvPath = path.resolve(configOptions.examplePath, '.env.example')
    const baseEnvBuffer = fs.readFileSync(baseEnvPath, { encoding })
    const baseEnv = evaluateObject(parse(baseEnvBuffer))

    return { ...baseEnv, ...quasarEnv }
  }
}
