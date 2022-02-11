const getPosts= axios.get('https://jsonplaceholder.typicode.com/posts');
//getPosts.then((result)=>{
  //  console.log(result.data)
//}).catch();

const getComments= axios.get('https://jsonplaceholder.typicode.com/comments');
//getPosts.then((result)=>{
   // console.log(result.data)
//}).catch();
   
const getPhotos= axios.get('https://jsonplaceholder.typicode.com/photos');
//getPosts.then((result)=>{
  //  console.log(result.data)
//}).catch();
   //console.log('getPost',getPosts);
Promise.all([getPosts,getComments,getPhotos]).then((result)=>{
    //console.log("data is loaded ",result);
    const ex4Message =document.getElementById("ex4_message");
    ex4Message.style.display="inline";
    
}).catch(()=>{
    //display error
    console.log("hello");
})