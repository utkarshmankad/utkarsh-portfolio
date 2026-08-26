import assert from "node:assert/strict";
import {spawn} from "node:child_process";

const port=3187;
const server=spawn("npm",["run","start","--","-p",String(port)],{detached:true,stdio:["ignore","pipe","pipe"]});
let logs="";server.stdout.on("data",d=>logs+=d);server.stderr.on("data",d=>logs+=d);
const wait=ms=>new Promise(r=>setTimeout(r,ms));
try{
 let response;
 for(let i=0;i<30;i++){try{response=await fetch(`http://localhost:${port}`);break}catch{await wait(250)}}
 assert.ok(response,`Next.js server did not start: ${logs}`);assert.equal(response.status,200);
 const html=await response.text();
 assert.match(html,/Utkarsh Mankad/);assert.match(html,/Engineering/);assert.match(html,/Isha/);assert.match(html,/AutoMQ/);assert.match(html,/RisingWave/);assert.match(html,/Oracle 23ai/);assert.match(html,/Debezium/);assert.match(html,/Android SDK/);assert.match(html,/leading 12 engineers across IoT and AR/);assert.match(html,/public systems spanning smart water infrastructure/);assert.match(html,/Executive stakeholder management/);assert.match(html,/Budget &amp; portfolio ownership/);assert.match(html,/Cross-functional programme delivery/);assert.match(html,/JobSnob: Building Fast AI and RAG JD Screening Pipelines/);assert.match(html,/Aug 25, 2026/);assert.match(html,/Automated Canary Deployments/);assert.match(html,/Architecture of Spark Connectors/);assert.match(html,/GitHub/);assert.match(html,/LinkedIn/);assert.doesNotMatch(html,/CORE_CAPABILITIES|Chandy–Misra–Haas|Inverted Index Search|Suzuki–Kasami Broadcast|codex-preview|SkeletonPreview|UTKARSH\.JPG/);
 assert.match(html,/Skip to content/);assert.match(html,/Open section navigation/);assert.match(html,/Download résumé/);assert.match(html,/utkarsh-mankad-resume\.pdf/);assert.match(html,/Senior engineering leader building AI, data, and distributed platforms/);
 assert.match(html,/data-analytics-event="resume_download"/);assert.match(html,/data-analytics-event="project_click"/);assert.match(html,/data-analytics-event="article_click"/);
 assert.match(html,/og:image/);assert.match(html,/og-techno\.jpg/);assert.match(html,/summary_large_image/);assert.match(html,/application\/ld\+json/);assert.match(html,/SoftwareSourceCode/);assert.match(html,/schema\.org/);
 for(const [path,pattern] of [["/robots.txt",/sitemap\.xml/],["/sitemap.xml",/utkarsh-portfolio-five-delta\.vercel\.app/],["/manifest.webmanifest",/Utkarsh Mankad/]]){const asset=await fetch(`http://localhost:${port}${path}`);assert.equal(asset.status,200);assert.match(await asset.text(),pattern)}
 console.log("Integration checks passed");
}finally{
 try{process.kill(-server.pid,"SIGTERM")}catch{server.kill("SIGTERM")}
}
