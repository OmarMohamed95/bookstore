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

export const getBook = gql`
    query book($id: ID!) {
        book(id: $id) {
            id,
            name,
            price
            author {
                id,
                name
            },
            genre {
                id,
                name
            }
        }
    }
`
