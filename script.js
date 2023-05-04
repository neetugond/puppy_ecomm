let data = [
    {
        url:'https://cdn.pixabay.com/photo/2020/03/03/01/59/dog-4897327_960_720.jpg',
        like: 0,
        dislike: 0
    },
    {
        url:'https://cdn.pixabay.com/photo/2020/11/08/10/25/dog-5723334_960_720.jpg',
        like: 0,
        dislike: 0
        
    },
    {
        url:'https://cdn.pixabay.com/photo/2019/05/28/05/47/puppy-4234435_960_720.jpg',
        like: 0,
        dislike: 0

    },
    {
        url:'https://cdn.pixabay.com/photo/2016/11/29/09/58/dog-1868871_960_720.jpg',
        like: 0,
        dislike: 0 
    },
    {
        url:'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg',
        like: 0,
        dislike: 0
        
    }
]
let globalData = []
let container = document.getElementById('container');
let likeCounter = 0;
let dislikeCounter = 0;
for (let i = 0; i < data.length; i++){
    let puppyDive = document.createElement('div');
    let img = document.createElement('img');
    let buttonLike = document.createElement('button');
    let buttonDislike = document.createElement('button');
    let likeNum = document.createElement('h3');
    let DislikeNum = document.createElement('h3');
    buttonLike.innerText = "Like"
    buttonDislike.innerText = "Dislike"
    img.setAttribute('src', data[i].url);
    likeNum.innerText = data[i].like;
    DislikeNum.innerText = data[i].dislike;
   
    
    
   buttonLike.addEventListener('click', function (e) {
        e.preventDefault()
       likeNum.innerText = data[i].like;
       data[i].like++
        // console.log(likeNum)

    })

    buttonDislike.addEventListener('click', function (e) {
        e.preventDefault()
        DislikeNum.innerText = data[i].dislike;
        data[i].dislike++
        // console.log(DislikeNum)

    })
    buttonLike.append(likeNum)

    
    buttonDislike.append(DislikeNum)
    puppyDive.append(img,buttonLike,buttonDislike);
    container.append(puppyDive)
   
}

localStorage.setItem('container',JSON.stringify(data))

console.log(data)

