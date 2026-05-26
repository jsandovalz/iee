export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'kodama.proxy.rlwy.net',
      port: 26851,
      database: 'railway',
      user: 'postgres',
      password: env('DATABASE_PASSWORD'),
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 2, max: 10 },
  },
});