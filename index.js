import path from 'path'

const filePath = import.meta.url.replace(/^file:(\/\/\/|\/\/)/, '') + '../'
const absolutePath = path.resolve(filePath)
const dirname = path.dirname(absolutePath)
export const proto = dirname + '/kritor/protos'
export * from './protos/compiled.js'