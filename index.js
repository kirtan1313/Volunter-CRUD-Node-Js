const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv');
env.config();
const PORT = process.env.PORT || 3000;
const myPath = path.join(__dirname,'view');
const bodyParser = require('body-parser');
const router = require('./routers/router')

app.set('view engine','ejs');
app.set('views',myPath);

app.use(express.static(myPath));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',router)

app.listen(PORT,(err)=>{
    if(!err){
        console.log(`surver running on http://localhost${PORT}`); 
    }
})