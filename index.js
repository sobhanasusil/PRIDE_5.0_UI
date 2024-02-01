const express = require('express');
const pug = require('pug');
const http = require('http');
const path = require('path');

const app = express();

// Sample profile data
const profileData = [
  { name: "susil", Designation: "developer", email: "aashi.com" }
];

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

// Compile the Pug templates
const compiledFunction = pug.compileFile('./views/home.pug');
const compiledDoc = pug.compileFile('./views/Doc.pug');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Render the home template with data
app.get('/', (req, res) => {
  const html = compiledFunction({ title: 'My Pug Template', profileData: profileData });
  res.send(html);
});

// Render the documentation template
app.get('/Doc', (req, res) => {
  const html = compiledDoc({ title: 'Documentation Page' });
  res.send(html);
});

const port = 4000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
