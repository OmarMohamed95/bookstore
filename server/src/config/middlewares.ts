import bodyParser from 'body-parser'
const cors = require('cors')

export default [
    bodyParser.json(),
    cors()
]