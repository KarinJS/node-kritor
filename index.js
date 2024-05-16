import path from 'path'
import protobufjs from 'protobufjs'

const filePath = import.meta.url.replace(/^file:(\/\/\/|\/\/)/, '') + '../'
const absolutePath = path.resolve(filePath)
const dirname = path.dirname(absolutePath)
const proto = dirname + '/kritor/protos'

export { protobufjs, proto }
export * from './protos/compiled.js'