const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('requests.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the requests database.');
});

// Create the table to store request information
db.run(`CREATE TABLE requests (id INTEGER PRIMARY KEY, request_type TEXT, request_data TEXT)`, (err) => {
  if (err) {
    console.error(err.message);
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});
