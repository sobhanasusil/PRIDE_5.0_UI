/**
 * Version Control Block
 * Project name: Sample_Wizad_of_PRIDE 5.0
 * Version: 0.1V
 * Revised on: 20-Oct-2023
 *
 * IMPORTANT NOTICE:
 *
 * If you are not authorized, Do not modify the content of this file.
 * Any unauthorized use or reproduction of this code is strictly prohibited.
 *
 * For inquiries or permissions, please contact the original author(s)
 * Developer(s): S. Sobhana susil <aashiksusil@planystech.com>
 * 
 */
const express = require('express');
const pug = require('pug');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Sample profile data
  const profileData = [
    { name: "susil", Designation: "developer", email: "aashi.com" }
  ];

  // Compile the Pug template
  const compiledFunction = pug.compileFile('./views/home.pug');

  // Render the template with data
  const html = compiledFunction({ title: 'My Pug Template', profileData: profileData });

  res.end(html);
});

// Serve static files
app.use(express.static(path.join(__dirname, '/image')));

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
