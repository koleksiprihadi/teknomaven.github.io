// Apps Script API Endpoints
export const API_ENDPOINTS = {
  // Homepage - content, services, portfolio, team
  homepage: 'https://script.google.com/macros/s/AKfycbwzosFTQ_VDq90H58osFFocg_wmYE4E-mJfbOtnYfV7a8UNd2dbRg0ugni8_3rmHESGYA/exec',
  
  // Invoice
  invoice: 'https://script.google.com/macros/s/AKfycbw-Srw9xyu7yVULhNB4ENVc1YxJY4udDPHfDBAHwjdXxJhsWoCTj6EusTzYa0r7IiTyiQ/exec',
  
  // Linktree
  linktree: 'https://script.google.com/macros/s/AKfycbwOHpMNSg2kc0ViOuyIrhgtcib69WF719xW3AO8D5oNEbm1bnyXzehZI1ldhcL71aMc/exec',
  
  // Artikel Premium
  artikelPremium: 'https://script.google.com/macros/s/AKfycbwe5IQhiY92BI6i1h4QbZTd9PHg9wENGEdTBG7_eeL1BQdwmQin1WVk7E7RANhWJT1LAA/exec',
  
  // Portofolio  
  portofolio: 'https://script.google.com/macros/s/AKfycbwzosFTQ_VDq90H58osFFocg_wmYE4E-mJfbOtnYfV7a8UNd2dbRg0ugni8_3rmHESGYA/exec',
  
  // Produk
  produk: 'https://script.google.com/macros/s/AKfycbxxzbZkt09ZWi-G06mHyICpdRaKsv5IK-rN-hSVtY7kKaG8Tltb3gABmhw4FfC8KgcUxw/exec',
  
  // Course Premium
  coursePremium: 'https://script.google.com/macros/s/AKfycbzc7q2yt3tgIPJ20AKL-qxXg0WsE03VW_tP8S89YynI6bF5RT-lxU8cyieZTIhB6pN8/exec'
};

// Helper function to fetch data
export async function fetchData(endpoint, action, params = {}) {
  try {
    const url = new URL(endpoint);
    url.searchParams.append('action', action);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
