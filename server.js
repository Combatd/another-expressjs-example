const express = require('express');
const app = express();

const PORT = 3030;

app.get('/', (req, res) => {
    res.send('You hit the HOME route!');
});

app.listen(PORT, (err) => {
    if (err) { 
        console.log(err); 
    }
    else { 
    console.log(`Server listening on ${PORT}}`);
    }
});