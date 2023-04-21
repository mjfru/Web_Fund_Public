var counter = 3
var likes = document.querySelector(".likeCounter");
console.log(likes);


function increase() {
    counter++;
    likes.innerText = counter + " Like(s)"
    // console.log(counter)
}