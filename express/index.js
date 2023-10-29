const express = require('express');
const cors = require('cors');
const axios = require('axios')
const myParser = require("body-parser");
const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json())
app.use(myParser.urlencoded({extended : true}));


let score = 0;
let notes = [
    {
    "name" : "test",
    "date" : "2020-10-10",
    "text" : "xdlol"
    },
    {
    "name" : "test2",
    "date" : "2021-10-11",
    "text" : "xdlollmao"
    }
];
let word;
app.get('/hello', (req, res) => {
    res.send('hello world!');
});

app.post('/post', (req, res) =>{
    console.log(notes);
    notes = [...notes, req.body]
    console.log(notes);
    res.status(200).send("lol")
});

app.get('/notes', (req, res) => {
    let name = req.query.name;
    let date = req.query.date;
    // if(name != '')
    // {
    //     res.status(200).send(JSON.stringify(notes));

    // }
    console.log(notes)
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(notes));
})

app.get('/score', (req, res) => {
    res.send(`${score}`);
});

app.patch('/score', (req, res) => {
    score = Math.max((req.query.val), score);
    res.status(200).send(`${score}`);
})

// First finds a random number within the bounds of the length
// Then sends a get request
// There's definitely a more efficient way to do this
app.get('/getWord', (req, res) => {
    let len = req.query.length
    let left, right;
    switch (len){
      case "extreme":
        left = 12;
        right = 15;
        break;
      case "long":
        left = 9;
        right = 11;
        break;
      case "medium":
        left = 6;
        right = 8;
        break;
      default:
        left = 3;
        right = 5;
    }
  
    let length = Math.floor(Math.random() * (right - left + 1) + left);
    axios.get(`https://random-word-api.herokuapp.com/word?length=${length}`)
         .then(function(response){
            res.send(response.data[0])
            word = response.data[0]
         })
})


// I felt it would be better to this in the frontend
// Apologies for not following guidelines
app.patch('/guessWord', (req, res) => {
    if(req.query.word === 'world') {
        res.status(200).send('true');
    } else {
        res.status(200).send('false');
    }
})

app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});