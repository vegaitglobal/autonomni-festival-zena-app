// services/pageService.ts
// import { api } from "@/libs/axios";

// const ALL_COMPONENTS = [
//   'Hero',
// ];

// export const fetchPageData = async (pageName: string) => {
//   try {
//     const populateQuery = ALL_COMPONENTS.map(component => 
//       `populate[${component}][populate]=*`
//     ).join('&');
    
//     const response = await api.get(`/${pageName}?${populateQuery}`);

    
//     return response.data;
//   } catch (error) {
//     console.warn('Advanced populate failed, falling back to basic populate');
//     const response = await api.get(`/${pageName}?populate=*`);
//     return response.data;
//   }
// };


// export const fetchHomePage = () => fetchPageData('home-page');
// export const fetchAboutPage = () => fetchPageData('about-page'); 


//Mislim da cemo morati ovako jer razlicite komponente mogu da idu na razlicite strane i mozda je ovako bolji pristup jer se sve dinamicki ucitava mozemo se cuti da ti pokazem sta je problem mozda ima i bolje resenje

import { api } from "@/libs/axios";

export const fetchPageData = async (pageName: string) => {
  try {
    const basicResponse = await api.get(`/${pageName}?populate=*`);
    const basicData = basicResponse.data;
    
    if (!basicData?.data) {
      return basicData;
    }
    const componentKeys = Object.keys(basicData.data).filter(key => {
      const value = basicData.data[key];
      return (
        typeof value === 'object' && 
        value !== null &&
        !['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt', 'Title'].includes(key)
      );
    });
    if (componentKeys.length === 0) {
      return basicData;
    }
    
    const populateQuery = componentKeys.map(component => 
      `populate[${component}][populate]=*`
    ).join('&');
    
    const fullUrl = `/${pageName}?${populateQuery}`;
    

    const fullResponse = await api.get(fullUrl);
    
    return fullResponse.data;
    
  } catch (error) {
    const response = await api.get(`/${pageName}?populate=*`);
    return response.data;
  }
};

export const fetchHomePage = () => fetchPageData('home-page');
export const fetchAboutPage = () => fetchPageData('about-page');