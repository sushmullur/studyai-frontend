// pages/api/db.js
import { Client } from "pg";
import { json } from "next";

export async function GET(req) {
  const client = new Client(process.env.DATABASE_URL);

  try {
    await client.connect();
    const results = await client.query('SELECT * FROM your_table_name ORDER BY time DESC');
    return new Response(JSON.stringify(results.rows), { status: 200});
  } catch (err) {
    console.error("Error executing query:", err);
    return new Response(err.toString(), { status: 500 });
  } finally {
    client.end();
  }
}
async function getJSONFromStream(stream) {
  const reader = stream.getReader();
  let result = '';

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      // Assuming value is of type Uint8Array, convert it to a string
      const chunk = new TextDecoder().decode(value);
      result += chunk;
    }

    // Parse the accumulated string as JSON
    return JSON.parse(result);
  } catch (error) {
    console.error('Error parsing JSON from stream:', error);
    throw error;
  }
}

export async function POST(req) {
  const client = new Client(process.env.DATABASE_URL);
  try {
    await client.connect();
    const { body } = req;
    const data = await getJSONFromStream(body);

    var { user_id, fileurl, query_text, time } = data; // Assuming these keys are in the request body

    const parseFileURL = (url) => {
      if (!url) return null; // If the URL is null, return null (or handle the error as needed
      url = url.s3_uri;
      // Use a regular expression to match the entire URL (including "https://")
      const regex = /(https:\/\/[^/]+\/[^/]+)/;
      const match = url.match(regex);
    
      if (match && match[0]) {
        // If a match is found and the first capturing group exists
        return match[0]; // Return the full URL
      } else {
        // If no match is found or the capturing group is empty
        return null; // Return null or handle the error as needed
      }
    };

    fileurl = parseFileURL(fileurl);
    const insertQuery = {
      text: "INSERT INTO your_table_name (user_id, fileurl, query_text, time) VALUES ($1, $2, $3, $4)",
      values: [user_id, fileurl, query_text, time],
    };

    await client.query(insertQuery);

    return new Response("Data inserted successfully", { status: 200 });
  } catch (err) {
    console.error("Error inserting data:", err);
    return new Response(err.toString(), { status: 500 });
  } finally {
    client.end();
  }
}
