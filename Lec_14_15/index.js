const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('server started');
    });
    
app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.get('/about', (req, res) => {
    res.json({ name     : 'Emaan',})
    });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
app.post('/login', (req, res) => {
    //Body is not being parsed by default in express
 
    console.log(req.body);
    res.send("User logged in successfully");
    });

// app.use((req, res,next) => {
//     console.log('I am Middleware');
//     next();
//     });

app.use((req, res,next) => {
    res.send(req.method);
    res.send(req.protocol);
    res.send(req.get('host'));
    res.send(req.originalUrl);
    next();
    }
    );  