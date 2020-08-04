const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;



app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('You hit the HOME route!');
});


app.listen(PORT, (err) => {
    if (err) { 
        console.log(err); 
    }
    else { 
    console.log(`Server listening on ${PORT}`);
    }
});