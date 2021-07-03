import gql from 'graphql-tag'

export const getGenre = gql`
    query genre($id: ID!) {
        genre(id: $id) {
            name,
            books {
                id,
                name,
                price,
                author {
                    id,
                    name
                }
            }
        }
    }
`

export const getGenres = gql`
    query genres($limit: Int!) {
        genres(limit: $limit) {
            id,
            name
        }
    }
`
