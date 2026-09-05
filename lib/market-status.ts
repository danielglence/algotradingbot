export type MarketPhase='Pre-open'|'Market open'|'Market closed'|'Weekend';
export function getIndianMarketStatus(now=new Date()):{phase:MarketPhase;label:string;isOpen:boolean;updated:string}{
 const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',weekday:'short',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(now);const part=(t:string)=>parts.find(p=>p.type===t)?.value||'';const day=part('weekday'),mins=Number(part('hour'))*60+Number(part('minute')),updated=`${part('hour')}:${part('minute')}:${part('second')} IST`;
 if(day==='Sat'||day==='Sun')return{phase:'Weekend',label:'Market closed · Weekend',isOpen:false,updated};
 if(mins>=540&&mins<555)return{phase:'Pre-open',label:'Pre-open session',isOpen:false,updated};
 if(mins>=555&&mins<930)return{phase:'Market open',label:'Market open',isOpen:true,updated};
 return{phase:'Market closed',label:'Market closed',isOpen:false,updated};
}
