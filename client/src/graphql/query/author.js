import gql from 'graphql-tag'

export const getAuthor = gql`
    query author($id: ID!) {
        author(id: $id) {
            id,
            name,
            books {
                id,
                name,
                price,
                genre {
                    id,
                    name
                }
            }
        }
    }
`
