const express = require('express');
const app = express();
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

// Middlewares
app.use(express.json());

// API Routes for the 'projects' table

// Create project
app.post('/api/projects', async (req, res) => {
    try {
        const { user_id, project_name, description } = req.body;
        const result = await knex('projects').insert({ user_id, project_name, description }).returning('*');
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Retrieve projects by name
app.get('/api/projects', async (req, res) => {
    try {
        const { project_name } = req.query;
        const result = await knex('projects').where('project_name', 'LIKE', `%${project_name}%`);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Update project by ID
app.put('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        await knex('projects').where({ id }).update(updatedData);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Delete project by ID
app.delete('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await knex('projects').where({ id }).del();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// General routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.htm');
});

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

// Static files serving
app.use('/static', express.static('public'));

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
