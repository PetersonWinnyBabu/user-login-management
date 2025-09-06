const sqlite3 = require('sqlite3').verbose();
const dbSource = "users.db"

const db = new sqlite3.Database(dbSource,sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

const users = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  email_address TEXT NOT NULL,
  password TEXT NOT NULL
  );`
  
  db.run(users,[],(err)=>{
    if (err){
        console.log('error creating Table')
        return
    }
    console.log('Users Table Created')
  })
  

module.exports = db