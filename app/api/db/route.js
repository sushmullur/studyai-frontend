// pages/api/db.js
import { Client } from "pg";
import { NextApiRequest } from "next";

export async function GET(req) {
  const client = new Client(process.env.DATABASE_URL);

  try {
    await client.connect();
    const results = await client.query("SELECT * FROM your_table_name");
    return new Response(JSON.stringify(results.rows));
  } catch (err) {
    console.error("Error executing query:", err);
    return new Response(err.toString(), { status: 500 });
  } finally {
    client.end();
  }
}
