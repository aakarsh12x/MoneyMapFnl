export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_4MHLwP9BuWGm@ep-mute-smoke-a41dr45k-pooler.us-east-1.aws.neon.tech/mapdb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:npg_4MHLwP9BuWGm@ep-mute-smoke-a41dr45k-pooler.us-east-1.aws.neon.tech/mapdb?sslmode=require",
  },
};
