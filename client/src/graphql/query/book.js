import gql from 'graphql-tag'

export const getBooks = gql`
    query books($limit: Int!) {
        books(limit: $limit) {
            id,
            name,
            price
            author {
                name
            },
            genre {
                name
            }
        }
    }
`
