const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Enable parsing of request bodies
app.use(express.urlencoded({ extended: true }));

// Dummy data for demonstration purposes
let resources = [
  { id: 1, name: 'Resource 1' },
  { id: 2, name: 'Resource 2' },
  { id: 3, name: 'Resource 3' }
];

// Home route
app.get('/', (req, res) => {
  res.render('index', { resources });
});

// Create a resource
app.post('/resources', (req, res) => {
  const { name } = req.body;
  const id = resources.length + 1;
  const newResource = { id, name };
  resources.push(newResource);
  res.redirect('/');
});

// Read a resource
app.get('/resources/:id', (req, res) => {
  const { id } = req.params;
  const resource = resources.find(r => r.id === parseInt(id));
  res.render('resource', { resource });
});

// Update a resource
app.post('/resources/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const resource = resources.find(r => r.id === parseInt(id));
  resource.name = name;
  res.redirect('/');
});

// Delete a resource
app.post('/resources/:id/delete', (req, res) => {
  const { id } = req.params;
  resources = resources.filter(r => r.id !== parseInt(id));
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
