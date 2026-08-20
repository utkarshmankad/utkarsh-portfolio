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
 assert.match(html,/Utkarsh Mankad/);assert.match(html,/systems that matter/);assert.match(html,/Oracle/);assert.match(html,/Fynd/);assert.match(html,/CDAC/);assert.match(html,/GitHub/);assert.match(html,/LinkedIn/);assert.doesNotMatch(html,/codex-preview|SkeletonPreview/);
 assert.match(html,/og:image/);assert.match(html,/og\.png/);assert.match(html,/summary_large_image/);
 console.log("Integration checks passed");
}finally{
 try{process.kill(-server.pid,"SIGTERM")}catch{server.kill("SIGTERM")}
}
