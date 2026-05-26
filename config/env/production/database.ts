const config = ({ env }) => {
  const dbUrl = env('DATABASE_URL', '');

  if (!dbUrl) {
    return {
      connection: {
        client: 'sqlite',
        connection: { filename: '.tmp/build.db' },
        useNullAsDefault: true,
      },
    };
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
