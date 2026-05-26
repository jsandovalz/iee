export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env('DATABASE_SSL', 'true') === 'true' ? { rejectUnauthorized: false } : false,
    },
    pool: { min: 2, max: 10 },
  },
});