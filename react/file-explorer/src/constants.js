export const explorer = {
    name: 'root',
    isFolder: true,
    childItems : [
     {
        name: 'public',
        isFolder: true,
        childItems: [
            {
                name: 'index.html',
                isFolder: false,
            },
            {
                name: 'robots.txt',
                isFolder: false,
            }
        ]
     },
     {
        name: 'src',
        isFolder: true,
        childItems: [
            {
                name: 'App.css',
                isFolder: false,
            },
            {
                name: 'App.js',
                isFolder: false,
            },
            {
                name: 'index.js',
                isFolder: false,
            },
        ]
     }

    ]
}