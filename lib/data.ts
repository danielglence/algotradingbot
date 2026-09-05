export type Stock={symbol:string,name:string,price:number,change:number,sector:string,volume:string,high:number,low:number};
export const stocks:Stock[]=[
{symbol:'RELIANCE',name:'Reliance Industries',price:1427.6,change:1.84,sector:'Energy',volume:'8.4M',high:1442,low:1398},
{symbol:'TCS',name:'Tata Consultancy Services',price:3228.4,change:-0.62,sector:'IT',volume:'2.1M',high:3275,low:3204},
{symbol:'HDFCBANK',name:'HDFC Bank',price:1964.2,change:0.91,sector:'Banking',volume:'6.7M',high:1978,low:1935},
{symbol:'INFY',name:'Infosys',price:1482.9,change:2.16,sector:'IT',volume:'5.3M',high:1496,low:1447},
{symbol:'SBIN',name:'State Bank of India',price:812.35,change:-1.12,sector:'PSU Bank',volume:'11.2M',high:826,low:807},
{symbol:'BHARTIARTL',name:'Bharti Airtel',price:1948.7,change:1.27,sector:'Telecom',volume:'3.8M',high:1962,low:1910},
];
export const indices=[['NIFTY 50','24,741.00',0.73],['SENSEX','80,710.76',0.69],['BANK NIFTY','54,114.20',0.42],['NIFTY IT','35,684.80',1.31],['NIFTY MIDCAP','57,932.35',-0.18],['INDIA VIX','12.84',-2.14]] as const;
export const sectors=[['IT',2.18],['Energy',1.42],['Auto',.94],['Banking',.58],['FMCG',.21],['Pharma',-.14],['Metal',-.73],['Realty',-1.12]] as const;
export const news=[
['Markets extend gains as IT and energy stocks lead','Market Desk','12 min ago'],['Rupee trades in a narrow range against the US dollar','Economy Wire','38 min ago'],['Domestic institutions remain net buyers this week','Capital Brief','1 hr ago']];
export const formatINR=(n:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(n);
