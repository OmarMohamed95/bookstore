import { graphqlHTTP } from 'express-graphql'
import schema from '../graphql/schema/schema'

export default graphqlHTTP({
    schema,
    graphiql: true
});