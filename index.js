const express = require('express');
const app = express();

// Serve the main index.htm file when someone goes to /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.htm');
});

// Serve static files from the public directory
app.use('/static', express.static('public'));

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.htm');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.htm');
});

app.get('/api/number/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    res.json({ originalNumber: num, doubledNumber: num * 2 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
