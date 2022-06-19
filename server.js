//引入express
const express = require('express')

const app = express()
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
