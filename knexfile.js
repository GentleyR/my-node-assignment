module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'gentley',
      password: '1234', 
      database: 'av_tracker', 
      charset: 'utf8'
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  }
};
