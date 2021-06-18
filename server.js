// Install Express Server
const express = require('express');
const path = require('path');
const app = express();

// Server only our static files from the dist directory
app.use(express.static('./dist/first-heroku-app'));
// app.get('/*', (req, res) =>
// res.sendFile('index.html', {root: "dist/first-heroku-app"})
// );

// // Tell the app how to start on Heroku
// app.listen(process.env.PORT || 8080);


app.get('/*', (req,res)=>{
  res.sendFile(path.join(__dirname,'/dist/first-heroku-app/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server started')
})
