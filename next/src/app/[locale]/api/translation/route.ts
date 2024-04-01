import { NextRequest, NextResponse } from "next/server";
import enMessages from "./(messages)/en.json";
import trMessages from "./(messages)/tr.json";

const url = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: NextRequest, response: NextResponse) {
  const { pathname } = new URL(request.url);
  const lang = pathname.split("/")[1];

  const messagesData = { en: enMessages, tr: trMessages };

  const data = messagesData[lang as keyof typeof messagesData] ?? enMessages;

  try {
    /* ------------------------------ Api Fetching ------------------------------ */
    const res = await fetch(url);
    await res.json();

    /* ----------------------------- Artifical delay ---------------------------- */
    // await new Promise((resolve) => setTimeout(resolve, 2500));

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    // return error;
  }
}
