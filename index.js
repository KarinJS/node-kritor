import path from 'path'
import { fileURLToPath } from 'url'
import protobufjs from 'protobufjs'

const filePath = fileURLToPath(import.meta.url)
const proto = path.dirname(filePath) + '/kritor/protos'

export { protobufjs, proto }
export * from './protos/compiled.js'