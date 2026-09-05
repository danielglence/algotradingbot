import type {Stock} from '@/lib/data';
export interface MarketDataProvider {searchStocks(query:string):Promise<Stock[]>;getQuote(symbol:string):Promise<Stock|null>;getQuotes(symbols:string[]):Promise<Stock[]>;getHistoricalData(symbol:string,timeframe:string):Promise<{time:string,value:number}[]>;}
