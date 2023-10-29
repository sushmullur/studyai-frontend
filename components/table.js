import React from "react";
import ExportNotion from "./exportNotion";
import { useUser } from '@auth0/nextjs-auth0/client';

// Function to parse and format the URL
const formatURL = (url) => {
  if (!url) return null; // If the URL is null, return null (or handle the error as needed)
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

export default function SQLTable(props) {
  const { user } = useUser();

  if (!props.data) {
    return null; // Return null if there is no data to display
  }

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-200 via-gray-300 p-4 rounded-md shadow-md">
      <table className="w-full border border-collapse table-fixed rounded-md">
        <thead className="bg-black text-white rounded-md">
          <tr>
            <th className="w-1/3 py-2 px-4 border">Topic</th>
            <th className="w-1/3 py-2 px-4 border">Download Link</th>
            <th className="w-1/3 py-2 px-4 border">Export</th>
          </tr>
        </thead>
        <tbody>
          {props.data
            .filter((item) => item.user_id === user.email)
            .map((row) => (
              <tr key={row.time} className="text-black">
                <td className="py-2 px-4 border text-center">{row.query_text}</td>
                <td className="py-2 px-4 border text-center">
                  <a
                    className="font-medium text-blue-600 hover:underline"
                    href={formatURL(row.fileurl)}
                  >
                    View your notesheet
                  </a>
                </td>
                <td className="py-2 px-4 border">
                    <div className="flex justify-center">
                        <ExportNotion data={row} />
                    </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
