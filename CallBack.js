

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

let intervalId = 0;
function getPosts(){
    clearInterval(intervalId)
    intervalId = setInterval(()=>{
        let output = '';
    setTimeout(()=>{
        posts.forEach((post)=>{
            output += `<li>${post.title} - last updates ${Math.floor((new Date().getTime() - post.createdAt)/1000)} seconds ago</li>`
        })
        document.body.innerHTML = output
    },1000)
    } , 1000)
}




function createPost(post , callBack){
    setTimeout(()=>{posts.push({...post , createdAt : new Date().getTime()})
    callBack();

},2000);
   
}



function create4thPost(post , callBack){
    setTimeout(()=>
        {
            posts.push({...post , createdAt : new Date().getTime()})
         callBack()
    
    },6000)
    
}
createPost({title : 'Post Three' , body : 'This is post three'} , getPosts)
create4thPost({title:'Post Four' , body : 'This is post four'}, getPosts)

