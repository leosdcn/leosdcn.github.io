var posts=["posts/hello-world.html","posts/这是一篇新的博文.html","posts/主题搜索框表单验证报错修复指南.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };