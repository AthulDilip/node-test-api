var express = require('express');
var app = express();

app.use(express.json())

app.get('/items', (req, res) => {
    res.json(['item1', 'item2', 'item3']);
});

app.post('/items', (req, res) => {

    console.log('Items API called');
    console.log('Body = ' + JSON.stringify(req.body));
    console.log('Params = ' + JSON.stringify(req.query));
    console.log('Headers = ' + JSON.stringify(req.headers));
    
    res.send('');
});

app.listen(3000, () => {
    console.log('Server running in port 3000');
});