let posts = [
    {
        title: 'Post One',
        body: 'This is post one',
        createdAt: new Date().getTime()
    },
    {
        title: 'Post Two',
        body: 'This is post two',
        createdAt: new Date().getTime()

    }
]

function getPosts() {
    
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title} - last updates ${Math.floor((new Date().getTime() - post.createdAt) / 1000)} seconds ago</li>`
            })
            document.body.innerHTML = output
        }, 1000)
    
}

let crud = async (post) => {
    let createPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() })
            const error = false;
            if (!error) {
                resolve(posts)
            }
            else {
                reject('Something went wrong')
            }
        }, 2000);

    })

    let createdPost = await createPost;
    getPosts();

    let deletePost = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject('Array is empty now.')
            }
        }, 1000)
    })

    let deletedPost = await deletePost;
    getPosts()
    console.log(deletedPost)
    let delete2Post = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject('Array is empty now.')
            }
        }, 1000)
    })
    let deleted2Post = await delete2Post;
    getPosts()
    console.log(deleted2Post)

    let delete3Post = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject('Array is empty now.')
            }
        }, 1000)
    })
    let deleted3Post = await delete3Post;
    getPosts()
    console.log(deleted2Post)

    let delete4Post = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject('Array is empty now.')
            }
        }, 1000)
    })
    let deleted4Post = await delete4Post;
    getPosts()
    console.log(deleted2Post)


}

crud({ title: 'Post three', body: 'this is post three' })
