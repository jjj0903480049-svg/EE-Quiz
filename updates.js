async function setupUpdates(){
 const status=document.getElementById('updateStatus'), apply=document.getElementById('applyUpdate'), check=document.getElementById('checkUpdate');
 let reg; let hadController=!!navigator.serviceWorker.controller;
 const ready=()=>{document.getElementById('offline-status').textContent='✓ 離線快取完成，可以離線刷題';};
 const offer=()=>{status.textContent='新版已下載，完成本題後可套用。';apply.hidden=false;};
 navigator.serviceWorker.addEventListener('controllerchange',()=>{if(hadController){status.textContent='新版已啟用，重新開啟即可使用。';apply.hidden=false;apply.onclick=()=>location.reload();}else { hadController=true; ready(); }});
 reg=await navigator.serviceWorker.register('sw.js',{updateViaCache:'none'});
 apply.onclick=()=>{if(reg.waiting)reg.waiting.postMessage({type:'ACTIVATE'});else location.reload();};
 function watch(w){if(!w)return;w.addEventListener('statechange',()=>{if(w.state==='installed'){if(navigator.serviceWorker.controller)offer();else ready();}if(w.state==='redundant')status.textContent='更新未完成，保留原版本；請稍後重試。';});}
 reg.addEventListener('updatefound',()=>watch(reg.installing));watch(reg.installing);if(reg.waiting)offer();
 if(reg.active)ready();
 async function refresh(){if(!navigator.onLine){status.textContent='目前離線，使用已下載版本。';return;}try{await reg.update();if(reg.waiting)offer();else if(!reg.installing)status.textContent='已檢查更新。';}catch{status.textContent='無法檢查更新，保留目前版本。';}}
 check.onclick=refresh;window.addEventListener('online',refresh);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});setInterval(refresh,300000);
 // Display the version of the worker actually controlling this page.
 navigator.serviceWorker.addEventListener('message',e=>{if(e.data?.type==='VERSION')document.getElementById('version').textContent='版本 '+e.data.version+' · '+e.data.date;});
 navigator.serviceWorker.controller?.postMessage({type:'VERSION'});refresh();
}
