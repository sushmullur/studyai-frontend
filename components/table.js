"use client";
import React, { useEffect, useState } from "react";

export default function SQLTable(props) {
    console.log("props data",props.data)
    if (props.data) {
        return (
            <table className="text-black">
                <thead>
                <tr>
                    <th>Query</th>
                    <th>Download Link</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map((row) => (
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
            
            