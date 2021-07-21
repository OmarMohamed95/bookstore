import bodyParser from 'body-parser'
import authMiddleware from '../middlewares/authMiddleware'
const cors = require('cors')

export default [
    bodyParser.json(),
    cors(),
    authMiddleware
]