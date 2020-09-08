const sqlite = require('sqlite3').verbose();
module.exports = function() {
    this.connect =  function() {
        let db = new sqlite.Database('database.db', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.log("Connected to Sqlite");
          });
          return db;
    }

    this.close = function(db) {
        db.close((err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('Close the database connection.');
          });
    }

    this.createTable = function(db) {
        db.run('CREATE TABLE IF NOT EXISTS challenges(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Query OK.')
        }, )  
    }

    this.insertChal = function(db, value) {
        db.run('INSERT INTO challenges(name) VALUES ("'+value+'")', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Query OK.')
    }  
    )}

    this.getAll = function(db) {
        db.all('SELECT id, name FROM challenges',[], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {
              console.log(row);
            });
          })
    }

}



