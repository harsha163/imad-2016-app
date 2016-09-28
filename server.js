var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();



var article1={
    title:'harsha163 | article-1',
    heading:'article-1',
    date:'sept 28, 2016',
    content:`<p>
                The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.
            </p>
            <p>
                The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.
            </p>
            <p>
                The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.The content.
            </p>`
};

function createTemplate(data){
    var title=data.title;
    var heading = data.heading;
    var date = data.date;
    var content=data.content;
    var htmlTemplate=`
        <!DOCTYPE html>
           <head>
               <title>${title}
               </title>
               <meta name = "viewport" content="width=device-width , initial-scale=1" />
               <link href="/ui/style.css" rel="stylesheet" />
               <style>
                   .container {
                    max-width: 800px;
                    margin: 0 auto;
                    color: #5d5959;
                    font-family: sans-serif;
                    padding-left: 20px;
                    padding-right: 20px;
        }
               </style>
           </head> 
            <body>
                <div class = "container">
                <div>
                    <a href = '/'>Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                ${content}
                </div>
                </div>
                
            </body>
            
            
            
        </html>
        
        `;
        return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-1', function(req, res){
   res.send(createTemplate(article1));
});

app.get('/article-2', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));
});

app.get('/article-3', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-3.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
