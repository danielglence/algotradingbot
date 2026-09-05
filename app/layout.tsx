import './globals.css';import {Shell} from '@/components/shell';
export const metadata={title:'MarketLens India — Market Intelligence',description:'Indian stock market analysis and portfolio tracking dashboard'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
