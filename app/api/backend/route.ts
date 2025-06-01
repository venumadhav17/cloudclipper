import { NextResponse } from "next/server";

import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();
  const { url } = body;
  console.log(url);
  const options = {
    method: "POST",
    url: "https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink",
    headers: {
      "x-rapidapi-key": "0568a9d9admsh5052e32a61292d0p1a63f4jsnfa692b00bef6",
      "x-rapidapi-host": "social-download-all-in-one.p.rapidapi.com",
      "Content-Type": "application/json"
    },
    data: {
      url
    }
  };

  try {
    const response = await axios.request(options);
    return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
