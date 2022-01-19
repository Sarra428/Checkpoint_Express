

const express = require('express')
const { sendfile } = require('express/lib/response')
const app = express()
const port = 5002

// const middleware = (req, res, next) => {
//     // console.log(req.body)
//     let date = new Date()
//      if((date.getHours()<=9  || date.getHours()>=17) ||  ( date.getDay()==0 || date.getDay()==6 )   )
//      { return res.send('We are closed') }
//     next()
// }
// app.use(middleware)


app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/public/Home.html')
})
app.get('/service', (req,res)=> {
    res.sendFile(__dirname + '/public/service.html')
})

app.get('/contact', (req,res)=> {
    res.sendFile(__dirname + '/public/contact.html')
})

app.get('/style.css', (req,res)=> {
    res.sendFile(__dirname + '/public/style.css')
})





app.listen(port, ()=> {console.log(`port is running on Local Host  :  ${port}`)})