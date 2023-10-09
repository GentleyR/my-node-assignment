const express = require('express');
const app = express();
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);


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

app.post('/api/users', async (req, res) => {
    const { username, email } = req.body;
    try {
      const [id] = await knex('users').insert({ username, email });
      const newUser = await knex('users').where({ id }).first();
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to insert user' });
    }
});

app.get('/api/users', async (req, res) => {
    const { username } = req.query;
    try {
      const users = await knex('users').where('username', 'like', `%${username}%`);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    try {
      await knex('users').where({ id }).update({ email });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await knex('users').where({ id }).del();
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
});
  
  
  