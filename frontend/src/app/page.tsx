"use client";

import { useEffect, useState } from "react";
import { fetchHomePage } from "@/services/pageService";
import { DynamicContent } from "@/components/hoc/DynamicContent";
import { log } from "console";



export default function Home() {
  const [content, setContent] = useState<any>(null); // Tipove moram srediti

  useEffect(() => {
    if (!content) {
      getHomePageData();
    }
  }, [content]);

  async function getHomePageData() {
    try {
      const data = await fetchHomePage();
      setContent(data);
    } catch (error) {
      setContent({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
  }

  if (!content) {
    return <div>Loading...</div>;
  }


  if (content.error) {
    return <div>Error: {content.error}</div>;
  }


  console.log("Home page content:", content);
  return (
    <div>
      
      <DynamicContent pageData={content} />
      {/* trebamo dodati ZA SEO i ovde bi dodao HEADER I FOOTER */}
      

      <details>
        <summary>Debug JSON</summary>
        <pre><code>{JSON.stringify(content, null, 2)}</code></pre>
      </details>
    </div>
  );
}