var posts=["2026/06/07/这是一篇新的博文/","2026/06/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };