// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/conservator'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/conservator_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
