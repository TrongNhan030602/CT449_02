const app = require('./app');
const config = require('./app/config');

// Start server

const port = config.app.port;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});