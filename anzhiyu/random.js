var posts=["posts/hello-world.html","posts/这是一篇新的博文.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };