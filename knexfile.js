// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      // add pg account information, but don't want the world to see, so add your info into an env file
      database: process.env.DB_DEV_DATABASE,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASSWORD 
    },
    migrations: {
      directory: '/data/migrations'
    },
    seeds: {
      directory: '/data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL, // environment variable on heroku
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '/data/migrations'
    },
    seeds: {
      directory: '/data/seeds'
    }
  }

};
