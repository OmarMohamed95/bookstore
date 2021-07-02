export const graphqlGroup = {
    prefix: '',
    middleware: 'graphqlMiddleware',
    routes: [
        {
            url: '/graphql',
            httpMethod: 'get',
            name: 'default_index',
        }
    ]
}

// export const defaultGroup = {
//     prefix: '',
//     routes: [
//         {
//             url: '/',
//             httpMethod: 'get',
//             controller: 'DefaultController',
//             method: 'index',
//             name: 'default_index',
//         }
//     ]
// }