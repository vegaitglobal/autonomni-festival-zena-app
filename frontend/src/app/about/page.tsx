"use client";

import { useEffect, useState } from "react";
import { fetchAboutPage } from "@/services/pageService";
import { DynamicContent } from "@/components/hoc/DynamicContent";

export default function AboutPage() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (!content) {
      getAboutPageData();
    }
  }, [content]);

  async function getAboutPageData() {
    try {
      const data = await fetchAboutPage();
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

  return (
    <div>
      <DynamicContent pageData={content.data} />

      <details>
        <summary>Debug JSON</summary>
        <pre><code>{JSON.stringify(content, null, 2)}</code></pre>
      </details>
    </div>
  );
}