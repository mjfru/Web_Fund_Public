var userLikes = [9, 12, 9]
// Neil [0], Nichole [1], Jim [2]
var users = [document.querySelector("#postOneLikes"), document.querySelector("#postTwoLikes"), document.querySelector("#postThreeLikes") ]

function increase(id) {
    userLikes[id]++
    users[id].innerText = userLikes[id] + " Like(s)"
}

/* function increase(?) {
    counter++;
    likeCounters.innerText = counter + " Like(s)"
}

*/ 