const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('requests.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the requests database.');
});

// Insert the request information into the table
db.run(`INSERT INTO requests (request_type, request_data) VALUES (?, ?)`, ['message', 'Hello, world!'], function(err) {
  if (err) {
    console.error(err.message);
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
})