"use client";
import React, { useEffect, useState } from "react";
import ExportNotion from "./exportNotion";

export default function SQLTable(props) {
    console.log("props data",props.data)
    if (props.data) {
        return (
            <table className="text-black">
                <thead>
                <tr>
                    <th className="border border-black p-2">Query</th>
                    <th className="border border-black p-2">Download Link</th>
                    <th className="border border-black p-2">Export</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map((row) => (
                    <tr key={row.user_id}>
                    <td className="border border-black p-2">{row.query_text}</td>
                    <td className="border border-black p-2">{row.fileurl}</td>

                    <div className="border border-black p-2">
                      <ExportNotion data={row}/>
                    </div>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    } else {
        return (<></>)
    }

}
            
            