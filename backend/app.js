const express = require('express');
const app=express();
const port = process.env.PORT || 80
const API_KEY='23dc71aa3f384611a9bc741c4cdbb122'
app.post('/getheadlines',(req,res)=>{
    const reqData=fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}&pageSize=5`)
    res.send('hello world')
})

app.listen(port)