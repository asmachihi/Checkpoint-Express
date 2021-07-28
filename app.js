const express = require('express')
const app = express()
const d = new Date()
const heure = d.getHours()
const jour = d.getDay()

if (heure<12 || heure>17 || jour==0 || jour==6) {
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+"/test/horsservices.html")
    })
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/test/home.html")
})


app.get('/services',(req,res)=>{
    res.sendFile(__dirname+"/test/services.html")
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/test/contact.html")
})

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+"/test/style.css")
})





const port = 5000
app.listen(port,()=>{
    console.log(`serveur runnig port ${port}`)
})