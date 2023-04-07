const express = require('express');
const app = express();
const getRoutes = require('./routes/getRoutes');
const PORT = 3001;
//const ngrok = require('ngrok'); 

//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false})); 

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

app.use('/', getRoutes);

// (async function() { //self calling function
//     const url = await ngrok.connect({
//         proto: 'http',
//         addr: PORT,
//         authtoken: ""
//     })
//     console.log(url);
// }) ()