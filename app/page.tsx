"use server";

import {headers} from "next/headers"

async function getVerse(baseUrl?: string) {
    let verse = "云去山如画。"
    try {
        const res = await fetch(`${baseUrl}api/one`, {})
        const resp = await res.json();
        verse = resp?.data ?? "云去山如画。"
    } catch{
        /* loop */
    }
    return verse
}

export default async function Home() {

    const headerList = await headers()
    const verse = await getVerse(headerList.get("x-request-url") as string)

    return (
        <p className="my-1 text-center">{verse}</p>
    );
}
