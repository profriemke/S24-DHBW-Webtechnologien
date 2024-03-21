const Database = require('better-sqlite3');
const db = new Database('database.db')

const ort = 'Stuttgart'


const alleKunden = db.prepare("SELECT * FROM kunde WHERE ort=?")
const result = alleKunden.all(ort)


console.log(result)
console.log(result[0].vorname)

for (let i = 0; i < result.length; i++) {
    console.log(result[i].vorname)
}