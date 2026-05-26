const config = ({ env }) => {
  const dbUrl = env('DATABASE_URL');

  if (!dbUrl) {
    throw new Error('DATABASE_URL environment variable is required in production');
  }

  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: dbUrl,
        ssl: { rejectUnauthorized: false },
      },
      pool: { min: 2, max: 10 },
    },
  };
};

export default config;