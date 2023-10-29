const express = require('express');
const cors = require('cors');
const axios = require('axios')
const myParser = require("body-parser");
require('dotenv').config();

//const {Translate} = require('@google-cloud/translate').v2;

const projectKey = 'vandyhacks-403511';
//const translate = new Translate(projectKey);

  
// async function quickStart() {
//     // The text to translate
//     const text = 'Hello, world!';
  
//     // The target language
//     const target = 'ru';
  
//     // Translates some text into Russian
//     const [translation] = await translate.translate(text, target);
//     console.log(`Text: ${text}`);
//     console.log(`Translation: ${translation}`);
//   }
  
//   quickStart();
  
const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json())
app.use(myParser.urlencoded({extended : true}));


let count = 2;
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

let notes2 = 
    {"1": {
    "name" : "test",
    "date" : "2020-10-10",
    "text" : "xdlol"
    },
    "2": {
    "name" : "test2",
    "date" : "2021-10-11",
    "text" : "xdlollmao"
    }};


let word;
app.get('/hello', (req, res) => {
    res.send('hello world!');
});

app.post('/post', (req, res) =>{
    console.log(notes2);
    //notes = [...notes, req.body]
    count++;
    notes2[count] = req.body;
    

    console.log(notes2);
    res.status(200).send("lol")
});

app.get('/notes', (req, res) => {
    let name = req.query.name;
    let date = req.query.date;
    // if(name != '')
    // {
    //     res.status(200).send(JSON.stringify(notes));

    // }
    console.log(notes2)
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(notes2));
})

app.get('/note', (req, res) =>{
    
    const entry = notes2[req.query.index] 
    
    res.status(200).send(entry);
})

app.get('/translate', (req,res) =>{
    let response =  axios.post(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
    {
        "q" : "hello", "target" : "tr"
    }.catch(err => console.log(err)))
        
    let translation = response.data.data.translations[0].translatedText;
    response.status(200).send({translation})
      
    
})
app.patch('/score', (req, res) => {
    score = Math.max((req.query.val), score);
    res.status(200).send(`${score}`);
})

// // First finds a random number within the bounds of the length
// // Then sends a get request
// // There's definitely a more efficient way to do this
// app.get('/getWord', (req, res) => {
//     let len = req.query.length
//     let left, right;
//     switch (len){
//       case "extreme":
//         left = 12;
//         right = 15;
//         break;
//       case "long":
//         left = 9;
//         right = 11;
//         break;
//       case "medium":
//         left = 6;
//         right = 8;
//         break;
//       default:
//         left = 3;
//         right = 5;
//     }
  
//     let length = Math.floor(Math.random() * (right - left + 1) + left);
//     axios.get(`https://random-word-api.herokuapp.com/word?length=${length}`)
//          .then(function(response){
//             res.send(response.data[0])
//             word = response.data[0]
//          })
// })


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