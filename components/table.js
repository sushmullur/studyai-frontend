"use client";
import React, { useEffect, useState } from "react";

export default function SQLTable(props) {
    const [data, setData] = useState(props.data);
    if (data) {
        console.log(data)
        return (
            <table>
                <thead>
                <tr>
                    <th>Query</th>
                    <th>Download Link</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.user_id}>
                    <td>{row.query_text}</td>
                    <td>{row.fileurl}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    } else {
        return (<></>)
    }

}
            
            