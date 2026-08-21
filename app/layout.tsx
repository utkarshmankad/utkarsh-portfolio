import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
export async function generateMetadata():Promise<Metadata>{
 const h=await headers();const host=h.get("x-forwarded-host")??h.get("host")??"localhost:3000";const protocol=h.get("x-forwarded-proto")??(host.startsWith("localhost")?"http":"https");const image=`${protocol}://${host}/og-techno.png`;
 return {title:"Utkarsh Mankad · Engineering Leader",description:"Engineering leader building teams, enterprise platforms, AI products, and open-source systems.",openGraph:{title:"Utkarsh Mankad · Engineering Leader",description:"Building teams. Engineering impact.",images:[image],type:"website"},twitter:{card:"summary_large_image",title:"Utkarsh Mankad · Engineering Leader",description:"Building teams. Engineering impact.",images:[image]}};
}
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
