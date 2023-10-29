"use client";
import React, { useEffect, useState } from "react";
import ExportNotion from "./exportNotion";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function SQLTable(props) {
    const { user } = useUser();
    console.log("props data",props.data)
    if (props.data) {
        return (
            <table>
                <thead className="rounded-xl">
                <tr className="text-black">
                    <th className="border border-black p-2">Query</th>
                    <th className="border border-black p-2">Download Link</th>
                    <th className="border border-black p-2">Export</th>
                </tr>
                </thead>
                <tbody className="rounded-xl">
                {props.data.filter((item) => item.user_id == user.email).map((row) => (
                    <tr key={row.time}>
                    <td className="text-black border border-black p-2">{row.query_text}</td>
                    <td className="text-cyan-500 underline-offset-1 underline border border-black p-2"><a href={row.fileurl}>{row.fileurl}</a></td>
                      <ExportNotion className="border border-black p-2" data={row}/>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    } else {
        return (<></>)
    }

}
            
            