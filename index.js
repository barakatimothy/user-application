const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

const app = express();

// Use CORS middleware
app.use(cors());

// Dynamically load route files from the 'routes' folder
readdirSync('./routes')
  .filter((file) => file.endsWith('.js')) // Only pick `.js` files
  .map((file) => {
    // Dynamically require the route file and attach it to the `/api` route
    const route = require(`./routes/${file}`);
    // Use the file name without the `.js` extension as the route prefix
    const routePath = `/${file.replace('.js', '')}`;
    app.use(routePath, route);  // Example: /api/phone
  });

// Default route for testing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Read the port from environment variables or default to 8000
const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
