const express = require('express')
const app = express();

const port = 3003;
const bottles = "bottles of beer on the wall";
const takeDown = "Take one down and pass it around";

app.get('/', (req, res)=>{
    res.send(`<h1> 99 ${bottles} </h1>
    <a href="http://localhost:3003/98">${takeDown}</a>` )
})

app.get("/:number_of_bottles", (req, res) => {
    const remainingBottles = req.params.number_of_bottles

    if (remainingBottles >=1) {
        res.send(`<h1>${remainingBottles} ${bottles} </h1>
        <a href="http://localhost:3003?${remainingBottles - 1}">${takeDown}</a>`)
    } else {
        res.send(`<h1 0 ${bottles} </h1>`)
    } 
})

app.listen(3003, function(req, res){
        console.log('listening on port 3003')
})
