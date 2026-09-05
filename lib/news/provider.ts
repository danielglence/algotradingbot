import type {MarketNewsItem} from './types';
export async function fetchLicensedMarketNews():Promise<MarketNewsItem[]>{
 const endpoint=process.env.NEWS_API_URL,key=process.env.NEWS_API_KEY;if(!endpoint||!key)throw new Error('Licensed news provider is not configured');
 const response=await fetch(endpoint,{headers:{Authorization:`Bearer ${key}`,'Accept':'application/json'},cache:'no-store'});if(!response.ok)throw new Error(`News provider returned ${response.status}`);const payload=await response.json();
 if(!Array.isArray(payload.articles))throw new Error('Unexpected news-provider response');
 return payload.articles.slice(0,100).map((a:Record<string,unknown>,i:number)=>({id:String(a.id||`${Date.now()}-${i}`),headline:String(a.title||''),source:String(a.source||'Unknown'),publishedAt:String(a.publishedAt||new Date().toISOString()),summary:String(a.summary||a.description||''),url:String(a.url||''),category:String(a.category||'Market'),relatedStocks:Array.isArray(a.relatedStocks)?a.relatedStocks.map(String):[]})).filter((a:MarketNewsItem)=>a.headline&&a.url);
}
