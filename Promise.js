let posts = [
    {
        title : 'Post One',
        body : 'This is post one',
        createdAt : new Date().getTime()
    },
    {
        title : 'Post Two',
        body : 'This is post two',
        createdAt : new Date().getTime()

    }
]

function getPosts(){
    
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title} - last updates ${Math.floor((new Date().getTime() - post.createdAt)/1000)} seconds ago</li>`
        })
        document.body.innerHTML = output
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{posts.push({...post , createdAt : new Date().getTime()})
            const error = false ;
        if(!error){
            resolve(posts)
        }
        else{
            reject('Something went wrong')
        }
        },2000);
        
    })
}


function deletePost(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                resolve(posts.pop())
            }
            else{
                reject('Array is empty now.')
            }
        },1000)
        })
}

// createPost({title : 'Post Three' , body : 'This is post three'}).then(
//     ()=>{
//         getPosts()
//         deletePost().then((ele)=>{
//             console.log(ele)
//         getPosts()
//         deletePost().then((ele)=>{
//             console.log(ele)
//             getPosts()
//             deletePost().then((ele)=>{
//                 console.log(ele)
//                 getPosts()
//                 deletePost().then((ele)=>{
//                     console.log(ele)
//                     getPosts()
//                 }).catch(err=>console.log(err))
//             }
//         )})
//     })}
//     )


//Promise.all
// const promise1 = Promise.resolve('Hello')
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//    setTimeout(resolve , 2000 , 'OK')
// })

const user = {
    name : 'Yash',
    lastActivityTime : new Date().getTime()
}

const updateLastUserActivityTime = ()=>{
    return new Promise((resolve ,reject)=>{
       setTimeout( ()=>{user.lastActivityTime = new Date().getTime()
        resolve(user.lastActivityTime)}

       ,1000)
    })
}

function userUpdatePost(){
    Promise.all([createPost({title : 'Post Three' , body : 'This is post three'}) ,updateLastUserActivityTime()]).then(([createPostResolve,updateLastUserActivityTimeResolve])=>{
        console.log(createPostResolve)
        console.log(updateLastUserActivityTimeResolve)
    }).catch(err=> console.log(err))
}

userUpdatePost()




