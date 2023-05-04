let data = [
    'https://cdn.pixabay.com/photo/2020/03/03/01/59/dog-4897327_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/11/08/10/25/dog-5723334_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/05/28/05/47/puppy-4234435_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/09/58/dog-1868871_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/11/08/10/25/dog-5723334_960_720.jpg'

]
let container = document.getElementById('container');

for (let i = 0; i < data.length; i++){
    let puppyDive = document.createElement('div');
    let img = document.createElement('img');
    let buttonLike = document.createElement('button');
    let buttonDislike = document.createElement('button');
    img.setAttribute('src', data[i])  
    buttonLike.innerText = "Like"
    buttonDislike.innerText = "Dislike"
    puppyDive.append(img,buttonLike,buttonDislike);
    container.append(puppyDive)

   
   
}

console.log(container)

