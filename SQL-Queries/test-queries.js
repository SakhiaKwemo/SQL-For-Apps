const { Client } = require('pg')
 
const testSQL = async () => {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Sakhia',
    port: 5432,
  })
 
  await client.connect()
 
  const comedieMovies = await client.query(`SELECT * FROM movies WHERE moviegenre = 'Comedy'`)
  await client.end()
  return comedieMovies.rows
}

// const test2 = async () => {
//   const ans = await testSQL()
//   console.log(ans)
// }

// test2()

// testSQL()
// .then(e => {
//   console.log(e)
// })
// .catch(err => {
//   console.log(err)
// })
