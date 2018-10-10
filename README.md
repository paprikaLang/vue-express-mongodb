
1. 前后端分离之后要解决跨域的问题: 在 vue.config.js 中设置 proxy .

2. 为了避免 express 去查找路由的同名文件夹或文件, 需要给 express 指定 Vue-client 打包好的 public 文件夹作为静态文件夹, 并且所有的路由都指向 public 中的 index.html .

```JavaScript
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
```

 https://damp-earth-73647.herokuapp.com