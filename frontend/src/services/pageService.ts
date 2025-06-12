import { api } from "@/libs/axios";
import { HomePage } from "@/types/pages/homepage";

interface PageMap {
  'home-page': HomePage;
//   'about-page': AboutPage;
}



const fetchPageWithComponents = async <K extends keyof PageMap>(
  pageName: K, 
  populateConfig: string[]
): Promise<PageMap[K]> => {  
  try {
    const populateQuery = populateConfig.join('&');
    const fullUrl = `/${pageName}?${populateQuery}`;
    
    const response = await api.get<{ data: PageMap[K] }>(fullUrl);
    return response.data.data;
    
  } catch (error) {
    console.error(`Failed to fetch ${pageName} data:`, error);
    const fallbackResponse = await api.get<{ data: PageMap[K] }>(`/${pageName}?populate=*`);
    return fallbackResponse.data.data;
  }
};

export const fetchHomePage = (): Promise<HomePage> => {  
  const populateConfig = [
    'populate[Hero][populate]=*',
  ];
  return fetchPageWithComponents('home-page', populateConfig);
};