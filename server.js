var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles={
'content':{
title:'Bairava',
heading:'Audio launch',
content:'Varalam va varalam va '
},
'content1':{
title:' gilli',
heading:'Audio launch',
content:'Varalam va varalam va '
}};

function createtemp(data)
{
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
var htmltem=
    `<html>
   <title>
   ${title}
   </title>
   
    <body>
        <h3>${heading}</h3>
        <div>
         ${content}
        
        </div>
        </body>
</html>`;
return htmltem;
}    

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:art',function(req,res) {
    var art=req.params.art;
res.send(createtemp(articles[art]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
