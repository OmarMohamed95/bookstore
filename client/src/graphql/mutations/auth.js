import gql from 'graphql-tag'

export const register = gql`
    mutation register($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password) {
            user {
                id,
                username,
                email
            },
            token,
            ttl
        }
    }
`
