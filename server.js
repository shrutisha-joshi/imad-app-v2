var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
        title: 'Shrutisha | Article one',
        heading: 'Article one',
        date: 'Feb 26 2017',
        content: `        
            <p>
                hi, this is my first webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>
            <p>
                hi, this is my first webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>
            <p>
                hi, this is my first webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>`
},
    'article-two': {
        title: 'Shrutisha | Article two',
        heading: 'Article two',
        date: 'Feb 27 2017',
        content: `        
            <p>
                hi, this is my second webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>
            <p>
                hi, this is my second webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>
            <p>
                hi, this is my second webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>`},
    'article-three': {
        title: 'Shrutisha | Article Three',
        heading: 'Article Three',
        date: 'Feb 28 2017',
        content: `        
            <p>
                hi, this is my three webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>
            <p>
                hi, this is my three webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>
            <p>
                hi, this is my three webpage and im so excitef]d that im writing anything and also nervous that will i be able to learn anything.<br>
                but i know myself, i will definely learn and apply everything since <b>I am the best</b>.
            </p>`
    }
};

function createTemplate(data){
     var title = data.title;
     var date = data.date;
     var heading = data.heading;
     var content = data.content;
     var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
              ${content}
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req,res){
    counter=counter+1;
    res.send(counter.toString()); 
});
app.get('/:articleName', function (req, res){
  //articleName === article-one
  //articles[articleName] == {} content object for article-one
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
