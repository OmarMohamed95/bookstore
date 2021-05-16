export const defaultGroup = {
    prefix: '',
    routes: [
        {
            url: '/',
            httpMethod: 'get',
            controller: 'DefaultController',
            method: 'index',
            name: 'default_index',
        }
    ]
}