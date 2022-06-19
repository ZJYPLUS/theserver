//引入express
const express = require('express')
//用于解决路由模式为history造成刷新服务端404的问题
const history = require('connect-history-api-fallback');

const app = express()
//应用connect-history-api-fallback
app.use(history())

// 用于指定静态资源
app.use(express.static(__dirname+'/static'))

app.get('/person',(req,res)=>{
    //指定返回值
    res.send({
        name:'Tom',
        age:18
    })
})

//监听5005端口
app.listen(5005,(err)=>{
    if (!err) console.log('服务器启动成功了！')
})
