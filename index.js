const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },

  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function tiggerLoop() {
  let listContainer = "";

  for (let i = 0; i < posts.length; i++) {
    listContainer += `<li>

    <section class="container">

         <div class="user-info">

      <img class='vanGogh-img' src='${posts[i].avatar}' alt='image of ${posts[i].avatar}'>
    <h2 class='name'>${posts[i].name} <p class='location'>${posts[i].location}</p></h2>

        </div>

        <img class='post' src='${posts[i].post}' alt='post of ${posts[i].post}'>

        <div class="icon-box">
        
        <a href="#"><img src="images/icon-heart.png"/></a>

        <a href="#"><img src="images/icon-comment.png"/></a>

        <a href="#"><img src="images/icon-dm.png"/></a>

        </div>

        <h3 class='likes'>${posts[i].likes},492 likes</h3>
        <h4 class='username'>${posts[i].username} <span class='comment'>${posts[i].comment}</span></h4>
	</section>
</li>`;
  }

  document.getElementById("loopList").innerHTML = listContainer;
}
tiggerLoop();
