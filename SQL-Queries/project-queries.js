const { Client } = require('pg')


const getResources = async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sakhia',
        port: 5432,
    })


  await client.connect()
  const res = await client.query(`SELECT * FROM resources`)
  console.log(res.rows)
  await client.end()
  return res.rows
}

const getResource = async (id) => {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sakhia',
        port: 5432,
    })


    await client.connect()
    const res = await client.query(`SELECT * FROM resources WHERE id = ${id}`)
    await client.end()
    return res.rows
  }

const createResource = async (name) => {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sakhia',
        port: 5432,
      })

    await client.connect()
    const res = await client.query(`SELECT * FROM resources`)
    const res2 = await client.query(`INSERT INTO resources (id, name) 
    VALUES (${res.rows.length + 1}, '${name}');`)

    await client.end()
    return res2
}

const deleteResource = async (id) => {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sakhia',
        port: 5432,
      })

    await client.connect()
    const res2 = await client.query(`DELETE FROM resources WHERE id = ${id}`)

    await client.end()
    return res2
}

const updateResource = async (id, name) => {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sakhia',
        port: 5432,
      })

    await client.connect()
    const res2 = await client.query(`UPDATE resources
    SET name = '${name}'
    WHERE id = ${id}`)

    await client.end()
    return res2
}

// updateResource(1, 'Sakhia456')

// deleteResource(5)

// createResource('Squidward')

module.exports = {getResources, getResource, createResource, deleteResource, updateResource}