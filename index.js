const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const biodata = [{
    nim: "V3922009",
    name: "Azzahra Kareena"
}]

const data = [{
        "id": "clj2k4u62021l0872l5005sgr",
        "name": "M. Asror",
        "nim": "M010001",
        "address": "Madiun"
    },
    {
        "id": "clj2kasoz028b0872zqir86qr",
        "name": "M. Farhan",
        "nim": "M010002",
        "address": "Jambi"
    },
    {
        "id": "clj2k7jq4025r0872ka031aam",
        "name": "Laili AR",
        "nim": "M010003",
        "address": "Magetan"
    },
    {
        "id": "ckacmayji9qmx33jmns1",
        "name": "Azzahra Kareena",
        "nim": "M010004",
        "address": "Madiun"

}]

app.get('/v1', (req, res) => {

    const address = req.query.address;
    const name = req.query.name
    // res.send("Hello World from express")

    // res.sendFile('./index.html', {root: __dirname})
    res.render('index', {name, address})
}) 

app.get('/v1/profile', (req, res) => {

    // res.send("Hello World from express")

    // res.sendFile('./profile.html', {root: __dirname})
    res.render('profile', { biodata })
})

app.get('/v1/ListMahasiswa', (req, res) => {

    // res.send("Hello World from express")

    // res.sendFile('./profile.html', {root: __dirname})
    res.render('list', { data })
})

app.listen(3000, () => {
    console.log("Halloo, im listening to port 3000")
})