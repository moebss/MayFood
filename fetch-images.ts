import fs from 'fs';

async function run() {
  try {
    const res = await fetch('https://wolt.com/de/deu/cologne/restaurant/may-food');
    const text = await res.text();
    
    // Split by horizontal-item-card-header
    const parts = text.split('data-test-id="horizontal-item-card-header"');
    
    const menuImages = {};
    
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      // Extract name
      const nameMatch = part.match(/^[^>]*>([^<]+)<\//);
      if (!nameMatch) continue;
      const name = nameMatch[1].trim();
      
      // Look backwards in the previous part for the nearest imageproxy.wolt.com URL
      const prevPart = parts[i-1];
      const imgMatches = Array.from(prevPart.matchAll(/https:\/\/imageproxy\.wolt\.com\/[a-zA-Z0-9\-\/\.]+/g));
      
      if (imgMatches.length > 0) {
        // The last image URL before the header is likely the one for this item
        const lastImgUrl = imgMatches[imgMatches.length - 1][0];
        
        // Let's filter out tiny thumbnails if possible, or just take it
        menuImages[name] = lastImgUrl;
      }
    }
    
    console.log(JSON.stringify(menuImages, null, 2));
    
  } catch (e) {
    console.error(e);
  }
}
run();
