"use server";

import {headers} from "next/headers"

async function getVerse(baseUrl?: string) {
    if (!baseUrl) return "云去山如画。"
    const res = await fetch(`${baseUrl}api`, {})
    const data = await res.json();
    return data?.single ?? "云去山如画。"
}

export default async function Home() {

    const headerList = await headers()
    const verse = await getVerse(headerList.get("x-request-url") as string)

    return (
        <p className="my-1 text-center">{verse}</p>
    );
}
