import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://mapdb_owner:LXjoC68lxHdV@ep-wispy-rice-a5ypl4so.us-east-2.aws.neon.tech/mapdb?sslmode=require"
);
export const db = drizzle(sql, { schema });
