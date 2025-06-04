"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<object | null>(null);

  useEffect(() => {
    if (!content) {
      fetchHomePageData();
    }
  }, [content]);

  async function fetchHomePageData() {
    console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
    console.log("NEXT_PUBLIC_API_TOKEN:", process.env.NEXT_PUBLIC_API_TOKEN);

    try {
      const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/home-page`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${ process.env.NEXT_PUBLIC_API_TOKEN }`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setContent(data);
    } catch (error) {
      setContent({ error: error.message });
    }
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        <pre><code>{ JSON.stringify(content, null, 2) }</code></pre>
      </div>
  );
}
