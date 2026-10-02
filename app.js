/* 英文從零開始 — 主程式 */
(function(){
'use strict';
const D = window.APP_DATA;
const app = document.getElementById('app');
const esc = s => String(s==null?'':s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rows = t => t.trim().split('\n').map(l => l.split('|').map(x => x.trim()));
const rnd = a => a[Math.floor(Math.random()*a.length)];
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
function chunk(arr, max){ const n=arr.length, k=Math.ceil(n/max), out=[]; let i=0; for(let j=0;j<k;j++){ const s=Math.ceil((n-i)/(k-j)); out.push(arr.slice(i,i+s)); i+=s; } return out; }
const pad = n => String(n).padStart(2,'0');
function dayStr(d){ d = d||new Date(); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
function addDays(n){ const d=new Date(); d.setDate(d.getDate()+n); return dayStr(d); }

/* ---------- 建立課程 ---------- */
const ITEMS = {};
const LESSONS = [];
const STAGES = [
  {key:'1', name:'字母 A–Z', icon:'🔤', desc:'認識 26 個字母：大小寫、唸法、發音、拼音對照、寫法'},
  {key:'r', name:'英文的原理', icon:'🧠', desc:'英文是怎麼組成的：拼字規則、單字積木、句子骨架（會一步步解鎖）'},
  {key:'2', name:'自然發音', icon:'🗣️', desc:'看到字就會唸：用拼音對照母音、組合音、拼拼看'},
  {key:'3', name:'基礎單字', icon:'🍎', desc:'約 300 個最常用的單字，每課只學 5 個'},
  {key:'p', name:'句型套用', icon:'🔁', desc:'21 個萬用句型：換一個字，就是一句新句子'},
  {key:'4', name:'常用句子', icon:'💬', desc:'150 句生活會話，每課 3–4 句'},
  {key:'5', name:'基礎文法', icon:'🧩', desc:'中英對比＋容易搞混的地方，用最簡單的中文說明'},
  {key:'6', name:'簡單對話', icon:'👫', desc:'15 段生活對話，一次聽完整段'}
];
const SI = k => STAGES.findIndex(s => s.key===k);
function addItem(it){ if(!ITEMS[it.id]) ITEMS[it.id]=it; return it.id; }
function addLesson(key, o){ const st=STAGES[SI(key)]; o.stage=SI(key); st.count=(st.count||0)+1; o.id='s'+key+'-'+st.count; o.n=st.count; LESSONS.push(o); return o; }
const strip = m => m.replace(/\[(\w+):([^\]]*)\]/g, '$2');
const chunks = m => [...m.matchAll(/\[(\w+):([^\]]*)\]/g)].map(x => ({r:x[1], t:x[2]}));
const colorize = m => esc(m).replace(/\[(\w+):([^\]]*)\]/g, (_, r, t) => '<span class="k k-'+r+'">'+t+'</span>');
// 1 letters
chunk(D.letters, 3).forEach(g => {
  const ids = g.map(r => { const lp=(D.letterPy||{})[r[0]]||[]; return addItem({id:'let-'+r[0], type:'letter', en:r[0]+' '+r[0].toLowerCase(), say:r[1], zh:'字母 '+r[0], hint:r[2], emoji:r[6],
    sound:r[3], word:r[4], wordZh:r[5], wordHint:r[7], write:r[8], U:r[0], py:lp[0], mouth:lp[1], err:lp[2], nocn:lp[3]}); });
  addLesson('1', {kind:'letter', title:'字母 '+g.map(r=>r[0]).join(' '), items:ids});
});
// r principles
(D.principles||[]).forEach((pr,pi) => {
  const ids = rows(pr.e).map((r,j) => addItem({id:'r-'+pi+'-'+j, type:'ex', mk:r[0], en:strip(r[0]), zh:r[1], emoji:r[2], hint:'', say:strip(r[0])}));
  addLesson('r', {kind:'prin', title:pr.t, req:pr.r, explain:pr.x, drills:pr.d, items:ids});
});
// 2 phonics
D.phonics.forEach((p,pi) => {
  const parts = {}; const pp=(D.phonicsPy||[])[pi]||[];
  const ids = rows(p.w).map(r => { const w=r[0].replace(/-/g,''); const id=addItem({id:'w-'+w.toLowerCase(), type:'word', en:w, zh:r[1], emoji:r[2], hint:r[3], say:w}); if(r[0].includes('-')) parts[id]=r[0].split('-'); return id; });
  addLesson('2', {kind:'phon', title:p.t, rule:p.r, focus:p.f, parts, items:ids, py:pp[0], mouth:pp[1], err:pp[2], nocn:pp[3]});
});
// 3 words
D.words.forEach(t => {
  const all = rows(t.w).map(r => addItem({id:'w-'+r[0].toLowerCase(), type:'word', en:r[0], zh:r[1], emoji:r[2], hint:r[3], say:r[0]}));
  const groups = chunk(all, 5);
  groups.forEach((g,i) => addLesson('3', {kind:'word', title:t.t+(groups.length>1?' '+(i+1):''), items:g}));
});
// p patterns
(D.patterns||[]).forEach((pt,pi) => {
  const fs = rows(pt.f);
  const ids = fs.map((f,j) => addItem({id:'pt-'+pi+'-'+j, type:'sent', en:pt.p.replace('___', f[0]), zh:pt.z.replace('___', f[1]), emoji:f[2],
    hint:pt.h.replace('___', f[3]||f[0]), say:pt.p.replace('___', f[0]), fill:f[0], fillZh:f[1]}));
  addLesson('p', {kind:'pat', title:pt.p.replace('___','＿＿'), pat:pt, items:ids.slice(0,3), drillIds:ids});
});
// 4 sentences
let sc=0;
D.sentences.forEach(t => {
  const all = rows(t.w).map(r => addItem({id:'s-'+(++sc), type:'sent', en:r[0], zh:r[1], emoji:r[2], hint:r[3], say:r[0]}));
  const groups = chunk(all, 4);
  groups.forEach((g,i) => addLesson('4', {kind:'sent', title:t.t+(groups.length>1?' '+(i+1):''), items:g}));
});
// 5 grammar
D.grammar.forEach((g,gi) => {
  const ids = rows(g.e).map((r,j) => addItem({id:'g-'+gi+'-'+j, type:'sent', en:r[0], zh:r[1], emoji:r[2], hint:'', say:r[0]}));
  const cn=(D.grammarCn||[])[gi]||{};
  addLesson('5', {kind:'gram', title:g.t, explain:g.x, quiz:g.q, cn:cn.cn||[], err:cn.err||[], items:ids});
});
// 6 dialogues
D.dialogues.forEach((d,di) => {
  const ids = rows(d.l).map((r,j) => addItem({id:'d-'+di+'-'+j, type:'line', spk:r[0], en:r[1], zh:r[2], emoji:r[0]==='A'?'🧑':'👩', hint:'', say:r[1]}));
  addLesson('6', {kind:'dlg', title:d.t, items:ids});
});
LESSONS.sort((a,b) => a.stage-b.stage || a.n-b.n);
LESSONS.forEach((l,i) => l.idx=i);
const byId = id => LESSONS.find(l => l.id===id);

/* ---------- 進度儲存 ---------- */
const KEY='eng-zero-v1';
const DEF = {done:{}, cards:{}, days:{}, streak:0, lastDay:'', reviewDay:'', ck:{last:'', streak:0, days:{}}, ckTask:null, s:{rate:0.8, voice:'', hint:true, hm:'py', auto:true, trate:0.75, tauto:true, tvoice:'', tpitch:1.1}};
let P;
try { P = Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY)||'{}')); P.s = Object.assign({}, DEF.s, P.s||{}); P.ck = Object.assign({last:'', streak:0, days:{}}, P.ck||{}); P.bl = P.bl||{}; } catch(e){ P = JSON.parse(JSON.stringify(DEF)); }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(P)); }catch(e){} }
function markStudy(){ const t=dayStr(); if(P.lastDay!==t){ P.streak = (P.lastDay===addDays(-1)) ? P.streak+1 : 1; P.lastDay=t; } save(); }
const INTERVAL = {1:1, 2:2, 3:4, 4:7, 5:14};
function cardable(id){ const it=ITEMS[id]; return it && it.type!=='line' && it.type!=='ex'; }
function learnCard(id){ if(cardable(id) && !P.cards[id]) P.cards[id]={b:1, due:addDays(1)}; }
function gradeCard(id, ok){ const c=P.cards[id]||{b:1}; c.b = ok ? Math.min(5,c.b+1) : 1; c.due = addDays(ok?INTERVAL[c.b]:1); P.cards[id]=c; save(); }
function dueIds(){ const t=dayStr(); return Object.keys(P.cards).filter(id => ITEMS[id] && P.cards[id].due<=t); }
const locked = l => !!(l.req && !P.done[l.req]);
function nextLesson(){ return LESSONS.find(l => !P.done[l.id] && !locked(l)) || null; }
function learnOrder(){ const done=new Set(), out=[]; while(out.length<LESSONS.length){ const l=LESSONS.find(x=>!done.has(x.id) && (!x.req || done.has(x.req))); if(!l) break; done.add(l.id); out.push(l); } LESSONS.forEach(l=>{ if(!done.has(l.id)) out.push(l); }); return out; }
let lastAct = Date.now(), active=false;
['pointerdown','keydown'].forEach(e => document.addEventListener(e, () => { lastAct=Date.now(); }, {passive:true}));
setInterval(() => { if(active && !document.hidden && Date.now()-lastAct<90000){ const t=dayStr(); P.days[t]=(P.days[t]||0)+10; save(); } }, 10000);
const todayMin = () => Math.floor((P.days[dayStr()]||0)/60);

/* ---------- 語音 ---------- */
const synth = window.speechSynthesis;
let voices=[], zhVoices=[], curUtt=null;
const BAD = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Ralph|Grandma|Grandpa|Rocko|Shelley|Eddy|Flo|Reed|Sandy/i;
const nl = l => String(l||'').replace(/_/g,'-'); /* Android 有時用 en_US 這種寫法 */
function loadVoices(){ if(!synth) return; const all=synth.getVoices(); voices = all.filter(v => /^en[-_]/i.test(v.lang) || v.lang==='en');
  zhVoices = all.filter(v => /^(zh|cmn)/i.test(v.lang) && !/yue|HK|MO/i.test(v.lang)).sort((a,b)=>zs(b)-zs(a)); }
/* 老師的中文聲音：台灣女聲優先 → 其他台灣聲音 → 大陸女聲 → 其他 */
const ZF = /Mei-?Jia|美佳|Hsiao ?Chen|曉臻|Hsiao ?Yu|曉雨|Yating|雅婷|Hanhan|涵涵|Ting-?Ting|婷婷|Xiao ?xiao|曉曉|Xiao ?yi|曉伊|Huihui|慧慧|Yaoyao|瑤瑤|Yu-?shu|語舒|Lili|莉莉|Shan-?Shan|珊珊|Lanlan|female|女|x-ctc|x-ssa/i;
const ZM = /Li-?Mu|李牧|Zhiwei|志偉|Yun ?Jhe|雲哲|Yun ?xi|Yun ?yang|Yun ?jian|Yun ?xia|Kangkang|康康|Han\b|male|男|x-ctd|x-cte|x-ctg/i;
const zTW = v => /TW|Hant/i.test(v.lang);
const zFem = v => ZF.test(v.name) && !/\bmale|男/i.test(v.name) ? 1 : (ZM.test(v.name) ? -1 : 0);
function zs(v){ let s=0; if(zTW(v)) s+=100; else if(/CN|Hans/i.test(v.lang)) s+=40; const g=zFem(v); if(g>0) s+=30; else if(g<0) s-=20;
  if(/Mei-?Jia|美佳/i.test(v.name)) s+=10; if(/Enhanced|Premium|Natural|增強|高音質/i.test(v.name)) s+=8; if(v.localService) s+=2; return s; }
function teacherVoice(){ if(!zhVoices.length) loadVoices(); if(P.s.tvoice){ const v=zhVoices.find(v=>v.voiceURI===P.s.tvoice); if(v) return v; } return zhVoices[0]||null; }
const zDesc = v => (zTW(v)?'台灣':'中國')+(zFem(v)>0?'女聲':zFem(v)<0?'男聲':'');
if(synth){ loadVoices(); if('onvoiceschanged' in synth) synth.onvoiceschanged = () => { loadVoices(); if(route().v==='settings') render(); }; }
function scoreVoice(v){ let s=0; if(/en[-_]US/i.test(v.lang)) s+=50; if(v.localService) s+=5; if(/en-us-x-|English United States/i.test(v.name)) s+=25; else if(/en[-_](GB|AU|CA|IE)/i.test(v.lang)) s+=20;
  if(/Samantha|Ava|Allison|Susan|Zoe|Nicky|Joelle|Evan|Nathan|Tom/i.test(v.name)) s+=30; if(/Google US English|Aria|Jenny|Guy|Natural/i.test(v.name)) s+=35;
  if(/Enhanced|Premium|Neural|Natural/i.test(v.name)) s+=15; if(BAD.test(v.name)) s-=100; return s; }
function mainVoice(){ if(!voices.length) loadVoices(); if(P.s.voice){ const v=voices.find(v=>v.voiceURI===P.s.voice); if(v) return v; } return voices.slice().sort((a,b)=>scoreVoice(b)-scoreVoice(a))[0]||null; }
function altVoice(){ const m=mainVoice(); const c=voices.filter(v=>v!==m && !BAD.test(v.name) && /en[-_]US/i.test(v.lang)).sort((a,b)=>scoreVoice(b)-scoreVoice(a)); return c[0]||null; }
function speak(text, o){ o=o||{}; if(!synth){ toast('這台裝置不支援語音 😢'); o.onend&&o.onend(); return; }
  const go = () => { const u=new SpeechSynthesisUtterance(text); u.lang='en-US'; const v=o.voice||mainVoice(); if(v){u.voice=v; u.lang=nl(v.lang);} u.rate=o.rate||P.s.rate; u.pitch=o.pitch||1;
    u.onend = () => { o.onend && o.onend(); }; u.onerror = () => { o.onend && o.onend(); }; curUtt=u; synth.speak(u); };
  if(synth.speaking || synth.pending){ synth.cancel(); setTimeout(go, 80); } else go(); }
function stopSpeak(){ TQ++; if(synth) synth.cancel(); }
/* 老師說話：中文用中文聲音、英文用英文聲音，慢慢說 */
let TQ=0;
function speakT(text, slow, onend){ if(!synth){ onend&&onend(); return; } const my=++TQ; const rate=slow?Math.max(0.5,P.s.trate-0.2):P.s.trate;
  const clean=String(text).replace(/[\u{1F000}-\u{1FFFF}\u2600-\u27BF\uFE0F\u200D→←＋]/gu,' ');
  const segs=clean.split(/([A-Za-z][A-Za-z'’\- ,.?!]*[A-Za-z.?!]|[A-Za-z])/).map(x=>x.trim()).filter(x=>x && /[A-Za-z\u4e00-\u9fff]/.test(x));
  let i=0; const zv=teacherVoice();
  const next=()=>{ if(my!==TQ) return; if(i>=segs.length){ onend&&onend(); return; } const t=segs[i++]; const en=/^[A-Za-z]/.test(t);
    const u=new SpeechSynthesisUtterance(t); if(en){ const v=mainVoice(); if(v){u.voice=v;} u.lang=v?nl(v.lang):'en-US'; u.rate=Math.min(rate, P.s.rate); } else { if(zv){u.voice=zv; u.lang=nl(zv.lang);} else u.lang='zh-TW'; u.rate=rate; u.pitch=P.s.tpitch||1.1; }
    u.onend=()=>setTimeout(next,150); u.onerror=()=>setTimeout(next,50); curUtt=u; synth.speak(u); };
  if(synth.speaking||synth.pending){ synth.cancel(); setTimeout(next,80); } else next(); }
function tbub(text, cls){ return '<div class="tbub '+(cls||'')+'"><div class="tav">👩‍🏫</div><div class="tb"><div class="tt">'+esc(text)+'</div><div class="tbtn"><button data-tsay="'+esc(text)+'">🔁 再講一次</button><button data-tsay="'+esc(text)+'" data-tslow="1">🐢 講慢一點</button></div></div></div>'; }
function autoT(lines){ if(!P.s.tauto) return; let i=0; const go=()=>{ if(i<lines.length) speakT(lines[i++], false, ()=>setTimeout(go,300)); }; setTimeout(go,250); }
const RECAP = L => { const ord=learnOrder(); const i=ord.indexOf(L); const pv=i>0?ord[i-1]:null; if(!pv) return '第一課耶！我們慢慢來喔 😊'; let t=pv.title; if(t.length>10) t=t.slice(0,9)+'…'; return '上次學了「'+t+'」喔 👍'; };
const PRAISE = ['你超棒的耶！今天又進步囉 🌟','老師好開心喔，你做完了！🎉','慢慢來就好，你一直在進步喔 🌱','好厲害喔！給你拍拍手 👏'];
const LINE_T = ['慢慢看喔，看懂就好啦 😊','這個蠻重要的喔 ⭐','我們跟中文比一比好不好 🀄','不用背啦，看懂就好 👍'];
let unlocked=false;
function unlock(){ if(unlocked||!synth) return; unlocked=true; try{ const u=new SpeechSynthesisUtterance(' '); u.volume=0; synth.speak(u); }catch(e){} loadVoices(); }
document.addEventListener('touchend', unlock, {passive:true}); document.addEventListener('click', unlock);
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const norm = s => s.toLowerCase().replace(/[^a-z0-9' ]/g,' ').replace(/\s+/g,' ').trim();
function lev(a,b){ const m=[]; for(let i=0;i<=a.length;i++){m[i]=[i];} for(let j=1;j<=b.length;j++) m[0][j]=j; for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++) m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1)); return m[a.length][b.length]; }
function similar(target, heard){ const t=norm(target), h=norm(heard); if(!t||!h) return 0; const tw=t.split(' ');
  if(tw.length===1) return Math.max(...h.split(' ').concat([h]).map(x => 1-lev(t,x)/Math.max(t.length,x.length)));
  const hw=new Set(h.split(' ')); return tw.filter(w=>hw.has(w)).length/tw.length; }
function repeatAfterMe(it, box){
  const target = it.say;
  if(!SR){ // 沒有語音辨識：先播放，再請使用者自己唸
    box.innerHTML='<div class="rec">👂 先聽…</div>';
    speak(target, {onend: () => { box.innerHTML='<div class="rec big">🗣️ 換你唸唸看！<br><small>大聲唸一次，唸完按「下一個」</small></div>'; }});
    return; }
  stopSpeak();
  let rec; try { rec = new SR(); } catch(e){ box.innerHTML='<div class="rec">🗣️ 大聲跟著唸一次就好 😊</div>'; return; }
  rec.lang='en-US'; rec.interimResults=false; rec.maxAlternatives=3;
  box.innerHTML='<div class="rec on">🎤 請說：<b>'+esc(it.type==='letter'?it.U:it.en)+'</b></div>';
  let got=false;
  rec.onresult = e => { got=true; const alts=[...e.results[0]].map(a=>a.transcript); const best=Math.max(...alts.map(a=>similar(target,a)));
    const heard=alts[0]||''; if(it.type==='letter' || best>=0.6) box.innerHTML='<div class="rec ok">🎉 唸得很棒耶！<br><small>我聽到：'+esc(heard)+'</small></div>';
    else box.innerHTML='<div class="rec">😊 我聽到「'+esc(heard)+'」<br><small>很接近了喔！我們再來一次就更棒了</small></div>'; };
  rec.onerror = () => { if(!got) box.innerHTML='<div class="rec">🙂 沒聽清楚，沒關係啦！<br><small>大聲唸一次，然後按「下一個」</small></div>'; got=true; };
  rec.onend = () => { if(!got) box.innerHTML='<div class="rec">🙂 沒聽到聲音，沒關係啦！<br><small>可以再按一次 🎤，或直接下一個</small></div>'; };
  try{ rec.start(); }catch(e){ box.innerHTML='<div class="rec">🗣️ 大聲跟著唸一次就好 😊</div>'; }
}

/* ---------- 小工具 ---------- */
function toast(msg){ let t=document.getElementById('toast'); if(!t){ t=document.createElement('div'); t.id='toast'; document.body.appendChild(t);} t.textContent=msg; t.className='show'; clearTimeout(t._h); t._h=setTimeout(()=>t.className='',1800); }
function hl(word, focus){ if(!focus) return esc(word);
  if(focus.includes('_e')){ const v=focus.replace('_e',''); const m=word.match(new RegExp('^(.*?)('+v+')([^aeiou]+)(e)$','i')); if(m) return esc(m[1])+'<b class="hl">'+esc(m[2])+'</b>'+esc(m[3])+'<b class="hl">'+esc(m[4])+'</b>'; return esc(word); }
  const m = word.match(new RegExp(focus,'i')); if(!m) return esc(word); const i=m.index; return esc(word.slice(0,i))+'<b class="hl">'+esc(m[0])+'</b>'+esc(word.slice(i+m[0].length)); }
const PYM = window.PY || {};
const toPy = h => String(h||'').trim().split(/\s+/).map(t => PYM[t] || t).join(' ');
function hintHTML(h, label){ if(!h || P.s.hm==='off') return ''; const py=toPy(h), m=P.s.hm;
  let o=''; if(m==='py'||m==='both') o+='<div class="hint py">'+(label||'拼音')+'：'+esc(py)+'</div>'; if(m==='xy'||m==='both') o+='<div class="hint">'+(label?label+'（諧音）':'諧音')+'：'+esc(h)+'</div>'; return o; }
function pyBox(o){ if(!o || !o.py) return ''; return '<div class="card pybox'+(o.nocn?' nocn':'')+'">'+(o.nocn?'<div class="nocn-tag">❗ 中文沒有這個音，要特別練習</div>':'')+
  '<div><b>🅿️ 拼音對照：</b>'+esc(o.py)+'</div><div><b>👄 嘴型：</b>'+esc(o.mouth)+'</div><div class="warn"><b>⚠️ 小心這裡：</b>'+esc(o.err)+'</div></div>'; }
function speakBtns(text, cls){ return '<div class="sbtns '+(cls||'')+'"><button class="btn sound" data-say="'+esc(text)+'">🔊 聽</button><button class="btn sound slow" data-say="'+esc(text)+'" data-rate="0.55">🐢 慢慢聽</button></div>'; }
app.addEventListener('click', e => { const tb=e.target.closest('[data-tsay]'); if(tb){ e.preventDefault(); speakT(tb.dataset.tsay, !!tb.dataset.tslow); return; } const b=e.target.closest('[data-say]'); if(b){ e.preventDefault(); speak(b.dataset.say, {rate: b.dataset.rate?parseFloat(b.dataset.rate):undefined}); } });

/* ---------- 路由 ---------- */
function route(){ const h=(location.hash||'#/home').slice(2).split('/'); return {v:h[0]||'home', a:h[1]}; }
function go(h){ if(location.hash==='#/'+h) render(); else location.hash='#/'+h; }
window.addEventListener('hashchange', render);
function nav(cur){ const tabs=[['home','🏠','首頁'],['course','📚','課程'],['cards','🃏','複習'],['plan','🗓️','計畫'],['settings','⚙️','設定']];
  return '<nav class="tabs">'+tabs.map(t=>'<a href="#/'+t[0]+'" class="'+(cur===t[0]?'on':'')+'"><span>'+t[1]+'</span>'+t[2]+'</a>').join('')+'</nav>'; }
function page(cur, html){ active=false; stopSpeak(); app.innerHTML='<main class="page">'+html+'</main>'+nav(cur); window.scrollTo(0,0); }
function render(){ const r=route();
  if(r.v==='lesson') return startLesson(byId(r.a));
  if(r.v==='review') return startReview(r.a==='free');
  if(r.v==='checkin') return startCheckin();
  if(r.v==='blend') return (r.a!=null && r.a!=='') ? startBlend(r.a) : viewBlend();
  ({home:viewHome, course:viewCourse, stage:viewStage, cards:viewCards, plan:viewPlan, settings:viewSettings}[r.v]||viewHome)(r.a); }

/* ---------- 首頁 ---------- */
function viewHome(){
  const nl=nextLesson(), due=dueIds().length, doneN=Object.keys(P.done).length, mins=todayMin(), t=dayStr();
  const h=new Date().getHours(); const greet = h<11?'早安 ☀️':h<18?'午安 🌤️':'晚安 🌙';
  const reviewFirst = due>0 && P.reviewDay!==t;
  const ckOK = ckAvailable(), ckNeed = ckOK && P.ck.last!==t;
  const plan=[]; if(reviewFirst) plan.push('🃏 複習 '+Math.min(due,15)+' 張'); if(ckNeed) plan.push('✅ 每日打卡'); if(nl) plan.push('📘 新課');
  const tip = rnd(['每天 20 分鐘，比一週一次 3 小時更有效 ⏰','先聽、再唸，不用急著寫 👂','忘記很正常！複習就是在幫大腦記住 🧠','唸出聲音，記得更快 🗣️','一次只學幾個，學得少但記得牢 🌱','用拼音去對照英文的音，會學得更快 🅿️','th、v、r 是中文沒有的音，多聽多唸就會 👄']);
  const week=[...Array(7)].map((_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); const k=dayStr(d); return '<span class="'+(P.ck.days[k]?'on':'')+(k===t?' today':'')+'">'+'日一二三四五六'[d.getDay()]+'</span>'; }).join('');
  const ckStreak = (P.ck.last===t||P.ck.last===addDays(-1)) ? P.ck.streak : 0;
  page('home', `
  <h1 class="greet">${greet}</h1>
  <p class="lead">${rnd(['今天也一起慢慢學吧 😊','每天一點點，就會越來越好 🌱','不用急，你已經在進步了 💪','按下面的大按鈕就好，其他交給我 👇'])}</p>
  <div class="card ckcard ${P.ck.last===t?'done':''}" id="ckcard"><div class="ck-top"><b>✅ 連續打卡 ${ckStreak} 天</b><span>${P.ck.last===t?'今天已打卡 🎉':ckOK?'今天還沒打卡':'學完第一個單字課就能打卡'}</span></div><div class="week">${week}</div></div>
  <div class="stats">
    <div><b>🔥 ${P.streak||0}</b><span>連續學習天數</span></div>
    <div><b>⏱️ ${mins}</b><span>今天分鐘</span></div>
    <div><b>📘 ${doneN}</b><span>/ ${LESSONS.length} 課</span></div>
  </div>
  <div class="bar"><i style="width:${Math.min(100,mins/20*100)}%"></i></div>
  <p class="small center">${mins>=20?'今天的目標完成了！再多學一點也很棒 🎉':'今天目標：20 分鐘（還差 '+(20-mins)+' 分鐘）'}</p>
  ${plan.length ? `<button class="btn primary huge" id="goToday">▶ 開始今天的學習</button>
  <p class="center next-info">${plan.map((x,i)=>'①②③'[i]+' '+x).join(' → ')}${nl?'<br><b>'+esc(STAGES[nl.stage].icon+' '+nl.title)+'</b>':''}</p>` :
  `<div class="card center"><div class="emoji-big">🏆</div><h2>今天的任務都完成了！</h2><p>${nl?'':'全部課程都學完了！'}每天繼續複習和打卡，讓英文越來越熟 💪</p></div>`}
  <button class="btn blendbtn huge" id="goBlend">🔤 拼讀練習：看字母怎麼變成字</button>
  ${due>0 && !reviewFirst ? `<button class="btn soft" onclick="location.hash='#/review'">🃏 還有 ${due} 張卡片可以複習</button>`:''}
  <div class="card tip">💡 ${tip}</div>`);
  const b=document.getElementById('goToday'); if(b) b.onclick = () => { unlock(); FLOW=true; if(reviewFirst) go('review'); else if(ckNeed) go('checkin'); else if(nl) go('lesson/'+nl.id); };
  document.getElementById('goBlend').onclick=()=>{ unlock(); acx(); go('blend'); };
  document.getElementById('ckcard').onclick=()=>{ if(ckOK) go('checkin'); else toast('先學完「自然發音」第一課，就會有單字可以打卡 😊'); };
}
let FLOW=false;

/* ---------- 每日背誦打卡 ---------- */
function ckAvailable(){ return Object.keys(P.cards).filter(id=>ITEMS[id] && ITEMS[id].type==='word').length>=3; }
function ckTask(){ const t=dayStr(); if(P.ckTask && P.ckTask.day===t && P.ckTask.ids.every(id=>ITEMS[id])) return P.ckTask;
  const pick=(f,n)=>shuffle(Object.keys(P.cards).filter(id=>ITEMS[id] && f(ITEMS[id]))).sort((a,b)=>P.cards[a].b-P.cards[b].b).slice(0,n);
  const w=pick(it=>it.type==='word', 5); let st=pick(it=>it.type==='sent' && it.en.split(' ').length<=6, 1);
  P.ckTask={day:t, ids:w.concat(st)}; save(); return P.ckTask; }
let CK=null;
function startCheckin(){
  if(!ckAvailable()){ page('home', `<div class="center intro"><div class="emoji-big">🌱</div><h1>還不能打卡</h1><p class="lead">先學完第一個單字課（自然發音第 1 課），就有單字可以背誦打卡了。</p><button class="btn primary huge" onclick="location.hash='#/home'">回首頁</button></div>`); return; }
  active=true; const T=ckTask(); CK={ids:T.ids.slice(), q:[], i:0, tries:0};
  const its=CK.ids.map(id=>ITEMS[id]); const nw=its.filter(x=>x.type==='word').length, ns=its.length-nw;
  app.innerHTML=`<main class="page run"><div class="runtop"><button class="x" id="quit">✕</button><div class="bar"><i style="width:5%"></i></div></div>
   <h1>✅ 每日背誦打卡</h1><p class="lead">今天背 <b>${nw} 個單字${ns?' ＋ '+ns+' 句':''}</b>。<br>先聽、先唸幾次，背好了再測驗。全部答對就打卡成功！</p>
   <button class="btn sound" id="playall">🔊 全部播一次</button>
   ${its.map(it=>`<div class="card ckrow" data-say="${esc(it.say)}"><span class="emoji-mid">${it.emoji}</span><div><div class="en-mid">${esc(it.en)}</div>${hintHTML(it.hint)}<div class="zh">${esc(it.zh)}</div></div><span class="play">🔊</span></div>`).join('')}
   <div class="actions"><button class="btn primary" id="nx">我背好了，開始測驗 ▶</button></div></main>`;
  document.getElementById('quit').onclick=()=>{ stopSpeak(); CK=null; FLOW=false; go('home'); };
  document.getElementById('playall').onclick=()=>{ let i=0; const step=()=>{ if(!CK||CK.q.length||i>=its.length) return; speak(its[i].say,{onend:()=>{ i++; setTimeout(step,600); }}); }; step(); };
  document.getElementById('nx').onclick=()=>{ stopSpeak(); CK.q=shuffle(CK.ids); CK.i=0; ckQ(); };
}
function ckQ(){
  if(CK.i>=CK.q.length) return ckDone();
  const it=ITEMS[CK.q[CK.i]]; CK.tries=0; const sent=it.type==='sent';
  const pct=Math.round(10+CK.i/CK.q.length*90);
  app.innerHTML=`<main class="page run"><div class="runtop"><button class="x" id="quit">✕</button><div class="bar"><i style="width:${pct}%"></i></div></div>
   <p class="small center">背誦測驗 ${CK.i+1} / ${CK.q.length}</p>
   <div class="card flash"><div class="emoji-big">${it.emoji}</div><div class="zh big">${esc(it.zh)}</div><p class="small">${sent?'把英文句子排出來，或直接說出來 🗣️':'用英文打出來，或直接說出來 🗣️'}</p></div>
   ${sent ? `<div class="built" id="built"></div><div class="tiles">${shuffle(it.en.split(' ').map((w,i)=>({w,i}))).map((o,k)=>`<button class="tile wtile" data-w="${esc(o.w)}">${esc(o.w)}</button>`).join('')}</div><div class="row-c"><button class="btn tiny" id="undo">↩ 退回</button></div>`
     : `<input id="ans" class="ans" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="在這裡打英文"><button class="btn primary" id="ok">✔ 確定</button>`}
   <div class="row-c">${SR?'<button class="btn soft" id="say">🎤 說說看</button>':''}<button class="btn soft" id="hintb">💡 提示</button><button class="btn soft" id="show">👀 看答案</button></div>
   <div id="fb"></div></main>`;
  document.getElementById('quit').onclick=()=>{ stopSpeak(); CK=null; FLOW=false; go('home'); };
  const fb=document.getElementById('fb');
  const pass=()=>{ fb.innerHTML='<div class="fb ok">'+rnd(D.cheers)+'<br><b>'+esc(it.en)+'</b></div>'; speak(it.say); gradeCard(it.id, CK.tries===0); CK.i++; setTimeout(()=>{ if(CK) ckQ(); }, 1500); };
  const miss=msg=>{ CK.tries++; fb.innerHTML='<div class="fb soft">'+(msg||rnd(D.soft))+'</div>'; };
  document.getElementById('show').onclick=()=>{ CK.tries++; fb.innerHTML='<div class="fb soft">答案是：<b>'+esc(it.en)+'</b><br><small>記住了嗎？等一下會再考一次喔 😊</small></div><button class="btn primary" id="cont">我記住了 ▶</button>'; speak(it.say);
    document.getElementById('cont').onclick=()=>{ CK.q.push(it.id); CK.i++; ckQ(); }; };
  if(SR) document.getElementById('say').onclick=()=>{ stopSpeak(); let rec; try{ rec=new SR(); }catch(e){ return; } rec.lang='en-US'; rec.maxAlternatives=3; fb.innerHTML='<div class="rec on">🎤 請說英文…</div>'; let got=false;
    rec.onresult=e=>{ got=true; const alts=[...e.results[0]].map(a=>a.transcript); const best=Math.max(...alts.map(a=>similar(it.en,a))); if(best>=(sent?0.6:0.7)) pass(); else miss('我聽到「'+esc(alts[0]||'')+'」，再試一次，或用打字 😊'); };
    rec.onerror=()=>{ if(!got){ got=true; miss('沒聽清楚，沒關係啦！再說一次，或用打字 😊'); } }; rec.onend=()=>{ if(!got) miss('沒聽到聲音，再試一次 😊'); };
    try{ rec.start(); }catch(e){ miss('麥克風無法使用，請用打字 😊'); } };
  if(sent){
    const tb=[...app.querySelectorAll('.tile')], built=document.getElementById('built'); let cur=[];
    const draw=()=>built.innerHTML=cur.map(t=>'<span>'+esc(t.dataset.w)+'</span>').join(' ');
    tb.forEach(t=>t.onclick=()=>{ if(t.classList.contains('used')) return; t.classList.add('used'); cur.push(t); draw();
      if(cur.length===tb.length){ if(cur.map(t=>t.dataset.w).join(' ')===it.en) pass(); else { miss('順序還不太對，再排一次 😊'); setTimeout(()=>{ cur.forEach(t=>t.classList.remove('used')); cur=[]; draw(); }, 900); } } });
    document.getElementById('undo').onclick=()=>{ const t=cur.pop(); if(t) t.classList.remove('used'); draw(); };
    document.getElementById('hintb').onclick=()=>{ const w=it.en.split(' ')[cur.length]; const t=tb.find(x=>!x.classList.contains('used')&&x.dataset.w===w); if(t && cur.map(x=>x.dataset.w).join(' ')===it.en.split(' ').slice(0,cur.length).join(' ')) t.click(); else { cur.forEach(t=>t.classList.remove('used')); cur=[]; draw(); } };
  } else {
    const inp=document.getElementById('ans'); let hintN=0;
    const check=()=>{ const v=norm(inp.value), tg=norm(it.en); if(!v) return; if(v===tg) pass(); else if(tg.length>=5 && lev(v,tg)<=1){ fb.innerHTML=''; pass(); fb.insertAdjacentHTML('afterbegin','<small>差一個字母，算你過！</small>'); } else miss(); };
    document.getElementById('ok').onclick=check; inp.addEventListener('keydown', e=>{ if(e.key==='Enter') check(); });
    document.getElementById('hintb').onclick=()=>{ hintN=Math.min(it.en.length, hintN+1); CK.tries++; inp.value=it.en.slice(0,hintN); inp.focus(); speak(it.say); };
  }
}
function ckDone(){
  const t=dayStr(); if(P.ck.last!==t){ P.ck.streak = (P.ck.last===addDays(-1)) ? P.ck.streak+1 : 1; P.ck.last=t; P.ck.days[t]=true; }
  markStudy(); save(); CK=null; const nl=nextLesson(); const chain=FLOW; FLOW=false;
  app.innerHTML=`<main class="page run"><div class="center intro"><div class="emoji-big bounce">🏅</div><h1>今日打卡成功！</h1><div class="stars">✅ 連續打卡 ${P.ck.streak} 天</div>
   <p class="lead">${P.ck.streak>=7?'一整個星期都沒斷，太厲害了！🌟':P.ck.streak>=3?'連續好幾天了，習慣正在養成 💪':'好的開始！明天再來打卡 😊'}</p>
   ${nl?'<button class="btn primary huge" id="nxl">▶ '+(chain?'接著學新課：':'學新課：')+esc(nl.title)+'</button>':''}<button class="btn soft" id="home">🏠 回首頁</button></div></main>`;
  if(nl) document.getElementById('nxl').onclick=()=>go('lesson/'+nl.id);
  document.getElementById('home').onclick=()=>go('home');
}

/* ---------- 課程 ---------- */
function viewCourse(){
  const nl=nextLesson();
  page('course', '<h1>📚 課程</h1><p class="lead">從上到下依序學最輕鬆。每課只有 3–5 個新東西。</p>'+STAGES.map((s,i)=>{
    const ls=LESSONS.filter(l=>l.stage===i), d=ls.filter(l=>P.done[l.id]).length;
    return `<a class="card stage" href="#/stage/${i}"><div class="st-icon">${s.icon}</div><div class="st-body"><b>第 ${i+1} 階段：${s.name}</b><small>${s.desc}</small>
    <div class="bar thin"><i style="width:${d/ls.length*100}%"></i></div><small>${d} / ${ls.length} 課 ${nl&&nl.stage===i?'· 👉 目前在這裡':''}</small></div></a>`; }).join(''));
}
function viewStage(i){ i=+i||0; const s=STAGES[i], nl=nextLesson();
  page('course', `<a class="back" href="#/course">‹ 回課程</a><h1>${s.icon} ${s.name}</h1><p class="lead">${s.desc}</p>${s.key==='2'?'<a class="btn blendbtn" href="#/blend">🔤 拼讀練習：看字母怎麼變成字</a>':''}${vidHTML(STAGE_VID[s.key])}`+
  LESSONS.filter(l=>l.stage===i).map(l=>{ const st=P.done[l.id]; const prev=l.items.slice(0,5).map(id=>ITEMS[id].type==='letter'?ITEMS[id].U:ITEMS[id].en).join('、');
    const lk=locked(l); const rq=lk?byId(l.req):null;
    if(lk) return `<div class="card lesson locked" data-lock="${esc(rq?rq.title:'')}"><div class="ln">🔒</div><div class="lb"><b>${esc(l.title)}</b><small>完成「${esc(STAGES[rq.stage].name+'：'+rq.title)}」後解鎖 🔓</small></div></div>`;
    return `<a class="card lesson ${nl===l?'nextup':''}" href="#/lesson/${l.id}"><div class="ln">${st?'✅':(l.idx+1)}</div><div class="lb"><b>${esc(l.title)}</b><small>${esc(l.kind==='dlg'||l.kind==='gram'?l.items.length+' 句':l.kind==='pat'?l.pat.z:l.kind==='prin'?'原理＋小練習':prev)}</small>${st?'<small>'+'⭐'.repeat(st)+'</small>':''}${nl===l?'<small class="tag">👉 建議下一課</small>':''}</div></a>`; }).join(''));
  app.querySelectorAll('[data-lock]').forEach(d=>d.onclick=()=>toast('先完成「'+d.dataset.lock+'」就會打開 🔓'));
}

/* ---------- 課程進行 ---------- */
let R=null;
function startLesson(L){
  if(!L){ return go('home'); }
  if(locked(L)){ const rq=byId(L.req); page('course', `<div class="center intro"><div class="emoji-big">🔒</div><h1>這一課還沒打開</h1><p class="lead">先完成「${esc(rq.title)}」，這一課就會自動解鎖。<br>一步一步來，學得最穩 😊</p><button class="btn primary huge" onclick="location.hash='#/home'">回首頁</button></div>`); return; }
  stopSpeak(); active=true;
  const steps=[{k:'intro'}];
  if(L.kind==='dlg'){ steps.push({k:'dlg'}); }
  else { if(L.kind==='gram'||L.kind==='prin'){ const T=(L.kind==='gram'?D.teachG:D.teachP)||[]; const t=T[L.n-1];
      if(t){ steps.push({k:'story', t}); steps.push({k:'pic', t}); steps.push({k:'try', t}); }
      const lines = L.kind==='gram' ? L.explain.split('\n') : L.explain; lines.forEach((x,j)=>steps.push({k:'line', x, j, of:lines.length}));
      if(L.kind==='gram'){ if(L.cn.length) steps.push({k:'cn'}); if(L.err.length) steps.push({k:'err'}); } } if(L.kind==='pat') steps.push({k:'patIntro'}); if(L.kind==='phon' && (D.phonWhy||[])[L.n-1]) steps.push({k:'why'}); L.items.forEach(id=>steps.push({k:'learn', id})); if(L.kind==='pat') steps.push({k:'drill'}); if(L.kind==='letter') steps.push({k:'chant'}); }
  steps.push({k:'qintro'});
  buildQuiz(L).forEach(q=>steps.push(q));
  steps.push({k:'done'});
  R={L, steps, i:0, right:0, total:0, requeued:new Set()};
  showStep();
}
function poolFor(L, type){ return Object.values(ITEMS).filter(it => it.type===type && (L.stage<2 ? it.id.startsWith(type==='letter'?'let':'w-') : true)); }
function opts(correct, others, n){ const o=[correct]; shuffle(others).forEach(x=>{ if(o.length<n && !o.some(y=>y.en.toLowerCase()===x.en.toLowerCase()||y.zh===x.zh)) o.push(x); }); return shuffle(o); }
function buildQuiz(L){
  const its=L.items.map(id=>ITEMS[id]); const qs=[];
  if(L.kind==='letter'){
    const pool=poolFor(L,'letter');
    its.forEach(it=>qs.push({k:'q', t:'listenLetter', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}));
    shuffle(its).forEach(it=>qs.push({k:'q', t:'case', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}));
    shuffle(its).forEach(it=>qs.push({k:'q', t:'letterWord', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}));
  } else if(L.kind==='word'||L.kind==='phon'){
    const pool=poolFor(L,'word');
    its.forEach(it=>qs.push({k:'q', t:'listen', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}));
    shuffle(its).forEach(it=>qs.push({k:'q', t:'zh', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}));
    shuffle(its).filter(it=>/^[a-z]{2,6}$/i.test(it.en)).slice(0,3).forEach(it=>qs.push({k:'q', t:'spell', it}));
  } else if(L.kind==='prin'){
    L.drills.forEach(d=>qs.push({k:'q', t:d.b?'build':'orderc', d}));
  } else if(L.kind==='pat'){
    const di=L.drillIds.map(id=>ITEMS[id]);
    shuffle(di).slice(0,3).forEach(it=>qs.push({k:'q', t:'zh', it, o:opts(it, di.filter(x=>x!==it), 3)}));
    shuffle(di).filter(it=>it.en.split(' ').length<=7).slice(0,2).forEach(it=>qs.push({k:'q', t:'order', it}));
  } else if(L.kind==='gram'){
    L.quiz.forEach(q=>qs.push({k:'q', t:'fill', q:q[0], o:q[1].split('|'), a:q[2]}));
    L.err.slice(0,2).forEach(e=>{ const o=shuffle([e[0],e[1]]); qs.push({k:'q', t:'fill', q:'哪一句是對的？', o, a:o.indexOf(e[1]), note:e[2]}); });
    const pool=Object.values(ITEMS).filter(x=>x.type==='sent');
    shuffle(its).slice(0,2).forEach(it=>qs.push({k:'q', t:'meaning', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}));
  } else { // sent / dlg
    const pool=Object.values(ITEMS).filter(x=>x.type===(L.kind==='dlg'?'line':'sent'));
    const sel = L.kind==='dlg' ? shuffle(its).slice(0,4) : its;
    sel.forEach(it=>qs.push({k:'q', t:'meaning', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}));
    shuffle(sel).forEach(it=>{ const w=it.en.split(' '); if(w.length>=2 && w.length<=6) qs.push({k:'q', t:'order', it}); else qs.push({k:'q', t:'zh', it, o:opts(it, its.filter(x=>x!==it).concat(pool), 3)}); });
  }
  return qs;
}
function frame(inner, opt){ opt=opt||{}; const pct=Math.round(R.i/(R.steps.length-1)*100);
  app.innerHTML = `<main class="page run"><div class="runtop"><button class="x" id="quit" aria-label="離開">✕</button><div class="bar"><i style="width:${pct}%"></i></div></div>${inner}</main>`;
  document.getElementById('quit').onclick = () => { stopSpeak(); if(R && R.steps[R.i].k!=='done' && R.i>1 && !confirm('要先休息嗎？這一課的進度不會儲存喔。')) return; R=null; FLOW=false; go('home'); };
  window.scrollTo(0,0); }
function nextStep(){ stopSpeak(); R.i++; showStep(); }
function showStep(){
  const s=R.steps[R.i], L=R.L;
  if(s.k==='intro'){
    const n=L.items.length;
    const b1=RECAP(L), b2=L.kind==='dlg'?'今天我們來聽一段小對話喔 👂':'今天只學 '+n+' 個喔，慢慢來就好 😊';
    frame(`<div class="center intro"><p class="small">第 ${L.stage+1} 階段 · 第 ${L.idx+1} 課</p><h1>${STAGES[L.stage].icon} ${esc(L.title)}</h1>
      ${tbub(b1)}${tbub(b2)}
      ${L.kind==='phon'?'<div class="card rule">📌 '+esc(L.rule)+'</div>'+pyBox(L):''}
      ${L.kind==='pat'?'<div class="card rule">🔁 學會一個句型，換一個字就是新句子！</div>':''}
      ${L.kind==='prin'?'<div class="card rule">🧠 這一課不用背，只要「看懂」英文是怎麼組成的</div>':''}
      ${vidHTML(STAGE_VID[STAGES[L.stage].key])}
      <div class="card steps"><div>① 👂 先聽</div><div>② 🗣️ 跟著唸</div><div>③ 🎯 小遊戲</div></div>
      <button class="btn primary huge" id="nx">開始 ▶</button></div>`);
    document.getElementById('nx').onclick = () => { unlock(); nextStep(); };
    autoT([b1,b2]);
  }
  else if(s.k==='story'){ const lines=s.t.s; let shown=1;
    frame(`<p class="small center">📖 先聽老師講個小故事</p><div id="bubs">${tbub(lines[0])}</div><div class="actions"><button class="btn primary" id="nx">${lines.length>1?'下一句 ▶':'我懂了 ▶'}</button></div>`);
    autoT([lines[0]]);
    document.getElementById('nx').onclick=()=>{ if(shown<lines.length){ document.getElementById('bubs').insertAdjacentHTML('beforeend', tbub(lines[shown])); autoT([lines[shown]]); shown++; if(shown>=lines.length) document.getElementById('nx').textContent='我懂了 ▶'; window.scrollTo(0,document.body.scrollHeight); } else nextStep(); };
  }
  else if(s.k==='pic'){ const b='我們來看圖記一記喔 👀';
    frame(`<p class="small center">🖼️ 看圖片</p>${tbub(b)}<div class="card pic center"><div class="pic-big">${esc(s.t.p[0])}</div><div class="zh big">${esc(s.t.p[1])}</div></div><div class="actions"><button class="btn primary" id="nx">記住了 ▶</button></div>`);
    autoT([b, s.t.p[1]]); document.getElementById('nx').onclick=nextStep;
  }
  else if(s.k==='try'){ const b='換你來試試看囉 ✋'; const o=s.t.t[1].split('|');
    frame(`<p class="small center">✋ 試試看</p>${tbub(b)}<div class="q"><h2>${esc(s.t.t[0])}</h2><div class="opts">${o.map((x,i)=>`<button class="opt big" data-i="${i}">${esc(x)}</button>`).join('')}</div><div id="fb"></div></div>`);
    autoT([b]);
    app.querySelectorAll('.opt').forEach(btn=>btn.onclick=()=>{ const ok=+btn.dataset.i===s.t.t[2]; const fb=document.getElementById('fb');
      if(ok){ app.querySelectorAll('.opt').forEach(x=>x.disabled=true); btn.classList.add('right'); const m=rnd(D.cheers); fb.innerHTML=tbub(m,'happy')+'<button class="btn primary" id="cont">繼續 ▶</button>'; speakT(m.replace(/[!！]/g,'')); document.getElementById('cont').onclick=nextStep; }
      else { btn.classList.add('soft-miss'); btn.disabled=true; fb.innerHTML=tbub('差一點點耶，我們再來一次喔 😊'); speakT('差一點點耶，我們再來一次喔'); } });
  }
  else if(s.k==='line'){ const b=LINE_T[s.j%LINE_T.length];
    frame(`<p class="small center">重點 ${s.j+1} / ${s.of}</p>${tbub(b)}<div class="card explain prin one">${colorize(s.x)}</div>${L.kind==='prin'?legend({explain:[s.x],items:[]}):''}<div class="actions"><button class="btn primary" id="nx">${s.j+1<s.of?'下一個重點 ▶':'懂了 ▶'}</button></div>`);
    autoT([b]); document.getElementById('nx').onclick=nextStep;
  }
  else if(s.k==='cn'){ const b='中文跟英文，我們比一比喔 🀄';
    frame(`${tbub(b)}<div class="card cmp"><h3>🀄 中文這樣說 → 🔤 英文要這樣說</h3>${L.cn.map(c=>'<div class="cmp-row"><div class="cz">'+esc(c[0])+'</div><div class="arr">→</div><div class="ce" data-say="'+esc(c[1].replace(/（.*?）/g,''))+'">'+esc(c[1])+' 🔊</div></div>').join('')}</div><div class="actions"><button class="btn primary" id="nx">懂了 ▶</button></div>`);
    autoT([b]); document.getElementById('nx').onclick=nextStep;
  }
  else if(s.k==='err'){ const b='這裡大家蠻常搞混的啦 🤗';
    frame(`${tbub(b)}<div class="card errbox"><h3>🤗 容易搞混的地方</h3>${L.err.map(e=>'<div class="err-row"><div class="bad">🤔 容易說成：'+esc(e[0])+'</div><div class="good" data-say="'+esc(e[1])+'">😊 要這樣說：'+esc(e[1])+' 🔊</div><small>'+esc(e[2])+'</small></div>').join('')}</div><div class="actions"><button class="btn primary" id="nx">懂了，聽例句 ▶</button></div>`);
    autoT([b]); document.getElementById('nx').onclick=nextStep;
  }
  else if(s.k==='gram'){
    frame(`<h1>🧩 ${esc(L.title)}</h1><div class="card explain">${esc(L.explain).replace(/\n/g,'<br>')}</div>
      ${L.cn.length?'<div class="card cmp"><h3>🀄 中文這樣說 → 🔤 英文要這樣說</h3>'+L.cn.map(c=>'<div class="cmp-row"><div class="cz">'+esc(c[0])+'</div><div class="arr">→</div><div class="ce" data-say="'+esc(c[1].replace(/（.*?）/g,''))+'">'+esc(c[1])+' 🔊</div></div>').join('')+'</div>':''}
      ${L.err.length?'<div class="card errbox"><h3>🤗 容易搞混的地方</h3>'+L.err.map(e=>'<div class="err-row"><div class="bad">❌ '+esc(e[0])+'</div><div class="good" data-say="'+esc(e[1])+'">✅ '+esc(e[1])+' 🔊</div><small>'+esc(e[2])+'</small></div>').join('')+'</div>':''}
      <p class="small">接下來會一句一句聽例句 👂</p><button class="btn primary huge" id="nx">懂了，聽例句 ▶</button>`);
    document.getElementById('nx').onclick = nextStep;
  }
  else if(s.k==='prin'){
    frame(`<h1>🧠 ${esc(L.title)}</h1><div class="card explain prin">${L.explain.map(x=>'<p>'+colorize(x)+'</p>').join('')}</div>${legend(L)}
      <p class="small">接下來看例子、聽聲音 👂</p><button class="btn primary huge" id="nx">懂了，看例子 ▶</button>`);
    document.getElementById('nx').onclick = nextStep;
  }
  else if(s.k==='patIntro'){ const pt=L.pat;
    frame(`<h1>🔁 句型：${esc(pt.p)}</h1><div class="card pat-frame"><div class="en-sent">${esc(pt.p).replace('___','<span class="slot">＿＿</span>')}</div><div class="zh big">${esc(pt.z).replace('___','<span class="slot">＿＿</span>')}</div>${hintHTML(pt.h)}
      <button class="btn sound" data-say="${esc(pt.p.replace('___',''))}">🔊 聽句型</button></div>
      <div class="card explain">💡 ${esc(pt.n)}</div><p class="small">先聽 3 個例句，再自己換字造句 ✨</p><button class="btn primary huge" id="nx">聽例句 ▶</button>`);
    document.getElementById('nx').onclick = nextStep;
  }
  else if(s.k==='why'){ const lines=D.phonWhy[L.n-1]; let shown=1;
    frame(`<p class="small center">🤔 為什麼這樣唸？</p><div class="card rule">📌 ${esc(L.rule)}</div><div id="bubs">${tbub(lines[0])}</div><div class="actions"><button class="btn primary" id="nx">${lines.length>1?'老師再說 ▶':'我懂了 ▶'}</button></div>`);
    autoT([lines[0]]);
    document.getElementById('nx').onclick=()=>{ if(shown<lines.length){ document.getElementById('bubs').insertAdjacentHTML('beforeend', tbub(lines[shown])); autoT([lines[shown]]); shown++; if(shown>=lines.length) document.getElementById('nx').textContent='我懂了，聽例字 ▶'; window.scrollTo(0,document.body.scrollHeight); } else nextStep(); };
  }
  else if(s.k==='chant'){ const ls=L.items.map(id=>ITEMS[id].U.toLowerCase()); const AZ='abcdefghijklmnopqrstuvwxyz'; const last=Math.max(...ls.map(l=>AZ.indexOf(l))); const cum=AZ.slice(0,last+1);
    const b1=cum.length>ls.length?'從 A 開始，從頭唸一遍喔 🎵':'我們把今天的字母唸一遍 🎵', b2='字母、字母、聲音、聲音';
    frame(`${tbub(b1)}${tbub(b2)}${chantHTML(cum, ls.join(''), '周老師的方法：每次都從頭唸')}<div class="actions"><button class="btn primary" id="nx">唸好了 ▶</button></div>`);
    bindChant(app); autoT([b1,b2]); document.getElementById('nx').onclick=()=>{ BT++; nextStep(); };
  }
  else if(s.k==='drill'){ showDrill(L); }
  else if(s.k==='dlg'){ showDialogue(L); }
  else if(s.k==='learn'){ showLearn(ITEMS[s.id], L); }
  else if(s.k==='qintro'){
    frame(`<div class="center intro"><div class="emoji-big">🎯</div><h1>小遊戲時間</h1>${tbub('來玩小遊戲囉！不會也沒關係啦 😊')}${tbub('不會的沒關係，等一下會再出現喔 🌱')}<button class="btn primary huge" id="nx">來玩 ▶</button></div>`);
    document.getElementById('nx').onclick = nextStep; autoT(['來玩小遊戲！不會也沒關係']);
  }
  else if(s.k==='q'){ showQ(s); }
  else if(s.k==='done'){ finishLesson(); }
}
function showLearn(it, L){
  const num = L.items.indexOf(it.id)+1;
  let body='';
  if(it.type==='letter'){
    body = `<div class="letter-big">${esc(it.U)}<span>${esc(it.U.toLowerCase())}</span></div>
    <div class="row-c"><button class="btn sound" data-say="${esc(it.say)}">🔊 字母名稱</button></div>
    <div class="center">${hintHTML(it.hint,'字母名稱唸法')}</div>
    <div class="card mini"><b>發音：</b>${esc(it.sound)}<br><small>在單字裡通常發這個音</small></div>
    ${chantHTML(it.U.toLowerCase(), '', '周育如老師的唸法')}
    ${pyBox(it)}
    <div class="card ex" data-say="${esc(it.word)}"><span class="emoji-mid">${it.emoji}</span><div><div class="en-mid">${hl(it.word, it.U)}</div>${hintHTML(it.wordHint)}<div class="zh">${esc(it.wordZh)}</div></div><span class="play">🔊</span></div>
    <div class="card mini">✍️ ${esc(it.write)}</div>
    <div class="trace"><canvas id="cv" width="600" height="300"></canvas><button class="btn tiny" id="clr">擦掉重寫</button><small>用手指描描看 ☝️</small></div>`;
  } else {
    const parts = L.parts && L.parts[it.id];
    body = `<div class="emoji-big">${it.emoji}</div>
    ${it.type==='line'?'<div class="spk">'+(it.spk==='A'?'🧑 A 說：':'👩 B 說：')+'</div>':''}
    ${parts?'<div class="parts">'+parts.map(p=>'<span>'+esc(p)+'</span>').join('<i>+</i>')+'<i>=</i></div>':''}
    <div class="${it.type==='word'||(it.type==='ex'&&!it.en.includes(' '))?'en-big':'en-sent'}">${it.type==='ex'?colorize(it.mk):L.kind==='phon'?hl(it.en,L.focus):(it.type==='sent'||it.type==='line')?glossHTML(it.en,'big'):esc(it.en)}</div>${(it.type==='sent'||it.type==='line')?'<p class="small center glnote">小字是每個字的中文（大概的意思）</p>':''}
    ${hintHTML(it.hint)}<div class="zh big">${esc(it.zh)}</div>${speakBtns(it.say)}
    ${L.kind==='phon'&&L.py?'<div class="card mini pyline">🅿️ '+esc(L.py)+(L.nocn?' <b class="nocn-mini">❗中文沒有</b>':'')+'<br><small>⚠️ '+esc(L.err)+'</small></div>':''}`;
  }
  frame(`<p class="small center">新東西 ${num} / ${L.items.length}</p>${tbub(num===1?'先聽老師唸喔 👂 再跟著唸 🗣️':rnd(['再聽一個喔 👂 慢慢來','聽兩次也可以喔 😊','跟著唸，大聲一點點喔 🗣️']),'mini')}<div class="learn">${body}</div>
    <div id="recbox"></div>
    <div class="actions"><button class="btn soft" id="rep">🎤 跟我唸</button><button class="btn primary" id="nx">下一個 ▶</button></div>`);
  document.getElementById('nx').onclick = () => { learnCard(it.id); nextStep(); };
  document.getElementById('rep').onclick = () => repeatAfterMe(it, document.getElementById('recbox'));
  const ex=app.querySelector('.card.ex'); if(ex) ex.onclick=()=>speak(it.word);
  if(it.type==='letter'){ setupTrace(it); bindChant(app); }
  if(P.s.auto){ if(it.type==='letter') speak(it.say, {onend:()=>setTimeout(()=>speak(it.word),250)}); else speak(it.say); }
}
function setupTrace(it){ const cv=document.getElementById('cv'); const c=cv.getContext('2d');
  const bg=()=>{ c.clearRect(0,0,600,300); c.fillStyle='#eef2f7'; c.fillRect(0,0,600,300); c.strokeStyle='#c9d6e8'; c.lineWidth=2; [70,150,230].forEach(y=>{c.beginPath();c.moveTo(0,y);c.lineTo(600,y);c.stroke();});
    c.fillStyle='rgba(80,110,160,.22)'; c.font='bold 190px Arial, Helvetica, sans-serif'; c.textBaseline='alphabetic'; c.fillText(it.U, 60, 230); c.fillText(it.U.toLowerCase(), 350, 230); };
  bg(); let drawing=false;
  const pos=e=>{ const r=cv.getBoundingClientRect(); return [(e.clientX-r.left)/r.width*600, (e.clientY-r.top)/r.height*300]; };
  cv.addEventListener('pointerdown', e=>{ drawing=true; cv.setPointerCapture(e.pointerId); const [x,y]=pos(e); c.beginPath(); c.moveTo(x,y); });
  cv.addEventListener('pointermove', e=>{ if(!drawing) return; const [x,y]=pos(e); c.lineTo(x,y); c.strokeStyle='#ff6b4a'; c.lineWidth=14; c.lineCap='round'; c.lineJoin='round'; c.stroke(); });
  ['pointerup','pointercancel'].forEach(ev=>cv.addEventListener(ev, ()=>drawing=false));
  document.getElementById('clr').onclick=bg; }
function showDialogue(L){
  const its=L.items.map(id=>ITEMS[id]);
  frame(`<h1>👫 ${esc(L.title)}</h1>${tbub('先聽整段喔，不用全懂啦 👂')}<p class="small">點任何一句，可以單獨聽。</p>
    <div class="row-c"><button class="btn primary" id="all">▶ 播放整段</button><button class="btn soft" id="allslow">🐢 慢速整段</button></div>
    <div class="dlg">${its.map((it,i)=>`<div class="bubble ${it.spk==='A'?'a':'b'}" data-i="${i}"><div class="who">${it.spk==='A'?'🧑 A':'👩 B'}</div><div class="en-line">${glossHTML(it.en,'sm')}</div><div class="zh">${esc(it.zh)}</div></div>`).join('')}</div>
    <div class="actions"><button class="btn primary" id="nx">聽好了 ▶</button></div>`);
  const bs=[...app.querySelectorAll('.bubble')]; const alt=altVoice();
  const vo = it => it.spk==='A' ? {} : (alt?{voice:alt}:{pitch:1.35});
  bs.forEach(b=>b.onclick=()=>{ const it=its[+b.dataset.i]; mark(+b.dataset.i); speak(it.say, vo(it)); });
  function mark(i){ bs.forEach((b,j)=>b.classList.toggle('now', j===i)); if(bs[i]) bs[i].scrollIntoView({block:'nearest', behavior:'smooth'}); }
  let token=0;
  function playAll(rate){ const my=++token; let i=0; const step=()=>{ if(my!==token||!R) return; if(i>=its.length){ mark(-1); return; } mark(i); const it=its[i]; speak(it.say, Object.assign({rate, onend:()=>{ i++; setTimeout(step, 500); }}, vo(it))); }; step(); }
  document.getElementById('all').onclick=()=>playAll();
  document.getElementById('allslow').onclick=()=>playAll(0.6);
  document.getElementById('nx').onclick=()=>{ token++; nextStep(); };
}
function showQ(s){
  const it=s.it; let head='', choices='';
  const label = x => x.type==='letter' ? x.U+' '+x.U.toLowerCase() : x.en;
  switch(s.t){
    case 'listenLetter': head=`<h2>👂 聽聽看，是哪一個字母？</h2><button class="btn sound huge" data-say="${esc(it.say)}">🔊 再聽一次</button>`; choices=s.o.map(o=>`<button class="opt big" data-id="${o.id}">${esc(label(o))}</button>`).join(''); break;
    case 'case': head=`<h2>小寫 <span class="q-big">${esc(it.U.toLowerCase())}</span> 的大寫是？</h2>`; choices=s.o.map(o=>`<button class="opt big" data-id="${o.id}">${esc(o.U)}</button>`).join(''); break;
    case 'letterWord': head=`<h2>${it.emoji} ${esc(it.wordZh)}</h2><p class="lead">「${esc(it.word)}」是哪個字母開頭？</p><button class="btn sound" data-say="${esc(it.word)}">🔊 聽</button>`; choices=s.o.map(o=>`<button class="opt big" data-id="${o.id}">${esc(label(o))}</button>`).join(''); break;
    case 'listen': head=`<h2>👂 聽聽看，是哪一個？</h2><button class="btn sound huge" data-say="${esc(it.say)}">🔊 再聽一次</button>`; choices=s.o.map(o=>`<button class="opt" data-id="${o.id}"><span class="oe">${o.emoji}</span>${esc(o.en)}</button>`).join(''); break;
    case 'zh': head=`<h2>「${esc(it.zh)}」的英文是？</h2>${it.type==='word'?'<div class="emoji-mid center">'+it.emoji+'</div>':''}`; choices=s.o.map(o=>`<button class="opt" data-id="${o.id}">${esc(o.en)}</button>`).join(''); break;
    case 'meaning': head=`<h2>👂 這句是什麼意思？</h2><div class="en-sent">${esc(it.en)}</div><button class="btn sound huge" data-say="${esc(it.say)}">🔊 聽</button>`; choices=s.o.map(o=>`<button class="opt" data-id="${o.id}">${esc(o.zh)}</button>`).join(''); break;
    case 'fill': head=`<h2>選一個填進空格</h2><div class="en-sent">${esc(s.q)}</div>`; choices=s.o.map((o,i)=>`<button class="opt big" data-i="${i}">${esc(o)}</button>`).join(''); break;
    case 'spell': return showSpell(s);
    case 'build': return showBuild(s);
    case 'orderc': return showOrderC(s);
    case 'order': return showOrder(s);
  }
  frame(`<div class="q">${head}<div class="opts">${choices}</div><div id="fb"></div></div>`);
  if(['listenLetter','listen','meaning'].includes(s.t)) speak(it.say);
  app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
    const ok = s.t==='fill' ? (+b.dataset.i===s.a) : (b.dataset.id===it.id);
    app.querySelectorAll('.opt').forEach(x=>{ x.disabled=true; const good = s.t==='fill' ? (+x.dataset.i===s.a) : (x.dataset.id===it.id); if(good) x.classList.add('right'); });
    if(!ok) b.classList.add('wrong');
    if(s.note) document.getElementById('fb').insertAdjacentHTML('beforebegin','<div class="card mini">💡 '+esc(s.note)+'</div>');
    answer(s, ok, s.t==='fill' ? ((t=>/[a-z]/i.test(t)?t:s.o[s.a])(s.q.replace(/_+/, s.o[s.a]).replace(/[^\x00-\x7F]+/g,' ').trim())) : (it.type==='letter' ? (s.t==='letterWord'?it.word:it.say) : it.say));
  });
}
function answer(s, ok, sayText){
  const fb=document.getElementById('fb');
  if(!R.requeued.has(s)) { R.total++; if(ok) R.right++; }
  if(ok){ fb.innerHTML='<div class="fb ok">'+rnd(D.cheers)+'</div>'; speak(sayText); if(s.it) gradeLight(s.it.id, true); setTimeout(()=>{ if(R && R.steps[R.i]===s) nextStep(); }, 1300); }
  else {
    if(!R.requeued.has(s)){ R.requeued.add(s); const again=Object.assign({}, s); R.requeued.add(again); R.steps.splice(R.steps.length-1, 0, again); }
    fb.innerHTML=tbub(rnd(D.soft))+'<div class="fb soft">看一下綠色的答案 👀</div><button class="btn primary" id="cont">繼續 ▶</button>'; speak(sayText);
    document.getElementById('cont').onclick=nextStep; }
}
function gradeLight(){ /* 課堂中的答題不改變卡片盒子，只在複習時調整 */ }
function showSpell(s){
  const it=s.it, target=it.en.toLowerCase(); const letters=shuffle(target.split(''));
  frame(`<div class="q"><h2>✏️ 拼拼看</h2><div class="emoji-mid center">${it.emoji}</div><p class="lead center">${esc(it.zh)}</p><button class="btn sound" data-say="${esc(it.say)}">🔊 聽</button>
   <div class="slots">${target.split('').map(()=>'<span></span>').join('')}</div><div class="tiles">${letters.map((l,i)=>`<button class="tile" data-i="${i}">${esc(l)}</button>`).join('')}</div>
   <div class="row-c"><button class="btn tiny" id="undo">↩ 退回</button><button class="btn tiny" id="hintb">💡 提示</button></div><div id="fb"></div></div>`);
  speak(it.say);
  const slots=[...app.querySelectorAll('.slots span')], tiles=[...app.querySelectorAll('.tile')]; let cur=[];
  const draw=()=>slots.forEach((sp,i)=>sp.textContent=cur[i]?cur[i].textContent:'');
  const check=()=>{ if(cur.length<target.length) return; const w=cur.map(t=>t.textContent).join(''); tiles.forEach(t=>t.disabled=true);
    slots.forEach(sp=>sp.classList.add(w===target?'right':'wrong')); if(w!==target){ slots.forEach((sp,i)=>sp.textContent=target[i]); } answer(s, w===target, it.say); };
  tiles.forEach(t=>t.onclick=()=>{ if(t.classList.contains('used')) return; t.classList.add('used'); cur.push(t); draw(); check(); });
  document.getElementById('undo').onclick=()=>{ const t=cur.pop(); if(t) t.classList.remove('used'); draw(); };
  document.getElementById('hintb').onclick=()=>{ const k=cur.length; if(k>=target.length) return; if(cur.map(t=>t.textContent).join('')!==target.slice(0,k)){ cur.forEach(t=>t.classList.remove('used')); cur=[]; }
    const t=tiles.find(t=>!t.classList.contains('used') && t.textContent===target[cur.length]); if(t) t.click(); };
}
function showOrder(s){
  const it=s.it, words=it.en.split(' '); const sh=shuffle(words.map((w,i)=>({w,i})));
  frame(`<div class="q"><h2>🧩 排排看</h2><p class="lead center">「${esc(it.zh)}」</p><button class="btn sound" data-say="${esc(it.say)}">🔊 聽</button>
   <div class="built" id="built"></div><div class="tiles">${sh.map((o,k)=>`<button class="tile wtile" data-k="${k}">${esc(o.w)}</button>`).join('')}</div>
   <div class="row-c"><button class="btn tiny" id="undo">↩ 退回</button></div><div id="fb"></div></div>`);
  speak(it.say);
  const tiles=[...app.querySelectorAll('.tile')], built=document.getElementById('built'); let cur=[];
  const draw=()=>built.innerHTML=cur.map(t=>'<span>'+esc(t.textContent)+'</span>').join(' ');
  tiles.forEach(t=>t.onclick=()=>{ if(t.classList.contains('used')) return; t.classList.add('used'); cur.push(t); draw();
    if(cur.length===words.length){ const ans=cur.map(t=>t.textContent).join(' '); const ok=ans===it.en; tiles.forEach(x=>x.disabled=true); built.classList.add(ok?'right':'wrong'); if(!ok) built.innerHTML+='<div class="correct">'+esc(it.en)+'</div>'; answer(s, ok, it.say); } });
  document.getElementById('undo').onclick=()=>{ const t=cur.pop(); if(t) t.classList.remove('used'); draw(); };
}
function legend(L){ const all=L.explain.join(' ')+L.items.map(id=>ITEMS[id].mk).join(' '); const names={L:'字母的音',x:'不發音',p:'字首',r:'字根',s:'字尾',S:'主詞（誰）',V:'動詞（做）',O:'受詞（什麼）',C:'補語（怎樣）',T:'時間',P:'地點',Q:'問句詞'};
  const used=Object.keys(names).filter(k=>all.includes('['+k+':')); if(!used.length) return '';
  return '<div class="legend">'+used.map(k=>'<span class="k k-'+k+'">'+names[k]+'</span>').join('')+'</div>'; }
function showDrill(L){
  const its=L.drillIds.map(id=>ITEMS[id]); const pt=L.pat; const tried=new Set();
  frame(`<h1>✨ 換字造句</h1>${tbub('換一個字，就是新句子耶 ✨')}<p class="small center">點下面的字放進空格（至少試 3 個）</p>
   <div class="card pat-frame" id="pf"><div class="en-sent" id="pen">${esc(pt.p).replace('___','<span class="slot">＿＿</span>')}</div><div class="zh big" id="pzh">${esc(pt.z).replace('___','<span class="slot">＿＿</span>')}</div><div id="phint"></div>
   <button class="btn sound" id="psay" disabled>🔊 再聽一次</button></div>
   <div class="fillers">${its.map((it,i)=>`<button class="filler" data-i="${i}"><span>${it.emoji}</span>${esc(it.fill)}<small>${esc(it.fillZh)}</small></button>`).join('')}</div>
   <div class="actions"><button class="btn primary" id="nx" disabled>我會了 ▶</button></div>`);
  let cur=null;
  app.querySelectorAll('.filler').forEach(b=>b.onclick=()=>{ const it=its[+b.dataset.i]; cur=it; tried.add(it.id); b.classList.add('done');
    app.querySelectorAll('.filler').forEach(x=>x.classList.toggle('on', x===b));
    document.getElementById('pen').innerHTML=esc(pt.p).replace('___','<span class="slot filled">'+esc(it.fill)+'</span>');
    document.getElementById('pzh').innerHTML=esc(pt.z).replace('___','<span class="slot filled">'+esc(it.fillZh)+'</span>');
    document.getElementById('phint').innerHTML=glossHTML(it.en)+hintHTML(it.hint);
    const ps=document.getElementById('psay'); ps.disabled=false; speak(it.say);
    if(tried.size>=Math.min(3,its.length)) document.getElementById('nx').disabled=false; });
  document.getElementById('psay').onclick=()=>{ if(cur) speak(cur.say); };
  document.getElementById('nx').onclick=()=>{ its.forEach(it=>learnCard(it.id)); nextStep(); };
}
function showBuild(s){
  const d=s.d, parts=chunks(d.b), word=parts.map(p=>p.t).join('');
  const others=[].concat(...R.L.drills.filter(x=>x!==d&&x.b).map(x=>chunks(x.b))).filter(p=>!parts.some(q=>q.t===p.t));
  const tiles=shuffle(parts.concat(shuffle(others).slice(0,1)));
  frame(`<div class="q"><h2>🧱 用積木組出這個字</h2><div class="emoji-mid center">${d.e}</div><p class="lead center">${esc(d.z)}</p>
   <div class="built word" id="built"></div><div class="tiles">${tiles.map((p,i)=>`<button class="tile k k-${p.r}" data-i="${i}">${esc(p.t)}</button>`).join('')}</div>
   <div class="row-c"><button class="btn tiny" id="undo">↩ 退回</button><button class="btn tiny" data-say="${esc(word)}">🔊 聽答案</button></div><div id="fb"></div></div>`);
  const tb=[...app.querySelectorAll('.tile')], built=document.getElementById('built'); let cur=[];
  const draw=()=>built.innerHTML=cur.map(i=>'<span class="k k-'+tiles[i].r+'">'+esc(tiles[i].t)+'</span>').join('');
  tb.forEach(t=>t.onclick=()=>{ if(t.classList.contains('used')) return; t.classList.add('used'); cur.push(+t.dataset.i); draw();
    const w=cur.map(i=>tiles[i].t).join('');
    if(w.length>=word.length){ const ok=w===word; tb.forEach(x=>x.disabled=true); built.classList.add(ok?'right':'wrong'); if(!ok) built.insertAdjacentHTML('beforeend','<div class="correct">'+colorize(d.b)+'</div>'); answer(s, ok, word); } });
  document.getElementById('undo').onclick=()=>{ const i=cur.pop(); if(i!=null) tb[i].classList.remove('used'); draw(); };
}
function showOrderC(s){
  const d=s.d, parts=chunks(d.o), plain=strip(d.o), end=(plain.match(/[.?!]$/)||[''])[0];
  const tiles=shuffle(parts.map((p,i)=>Object.assign({i},p)));
  frame(`<div class="q"><h2>🧩 把積木排成句子</h2><p class="lead center">「${esc(d.z)}」</p>${legend({explain:[d.o],items:[]})}
   <div class="built" id="built"></div><div class="tiles">${tiles.map((p,k)=>`<button class="tile wtile k k-${p.r}" data-k="${k}">${esc(p.t)}</button>`).join('')}</div>
   <div class="row-c"><button class="btn tiny" id="undo">↩ 退回</button><button class="btn tiny" data-say="${esc(plain)}">🔊 聽答案</button></div><div id="fb"></div></div>`);
  const tb=[...app.querySelectorAll('.tile')], built=document.getElementById('built'); let cur=[];
  const draw=()=>built.innerHTML=cur.map(k=>'<span class="k k-'+tiles[k].r+'">'+esc(tiles[k].t)+'</span>').join(' ');
  tb.forEach(t=>t.onclick=()=>{ if(t.classList.contains('used')) return; t.classList.add('used'); cur.push(+t.dataset.k); draw();
    if(cur.length===parts.length){ const ok=cur.map(k=>tiles[k].t).join(' ')===parts.map(p=>p.t).join(' '); tb.forEach(x=>x.disabled=true); built.classList.add(ok?'right':'wrong'); built.insertAdjacentHTML('beforeend', ok?end:'<div class="correct">'+colorize(d.o)+'</div>'); answer(s, ok, plain); } });
  document.getElementById('undo').onclick=()=>{ const k=cur.pop(); if(k!=null) tb[k].classList.remove('used'); draw(); };
}
function finishLesson(){
  const L=R.L; const acc=R.total?R.right/R.total:1; const stars=acc>=0.9?3:acc>=0.6?2:1;
  P.done[L.id]=Math.max(P.done[L.id]||0, stars); L.items.forEach(learnCard); markStudy(); save();
  const nl=nextLesson();
  frame(`<div class="center intro"><div class="emoji-big bounce">🎉</div><h1>完成了！</h1><div class="stars">${'⭐'.repeat(stars)}</div>${tbub(rnd(PRAISE),'happy')}
    <p class="lead">${rnd(D.cheers)}<br>你學會了 ${L.items.length} 個新東西。</p>
    <p class="small">${todayMin()>=20?'今天已經學了 '+todayMin()+' 分鐘，非常棒！想休息就休息吧 😊':'今天已學 '+todayMin()+' 分鐘，目標 20 分鐘'}</p>
    ${nl?'<button class="btn primary huge" id="nxl">▶ 下一課：'+esc(nl.title)+'</button>':''}
    <button class="btn soft" id="again">🔁 再做一次這一課</button><button class="btn soft" id="home">🏠 回首頁（今天就到這裡）</button></div>`);
  if(nl) document.getElementById('nxl').onclick=()=>go('lesson/'+nl.id);
  document.getElementById('again').onclick=()=>startLesson(L);
  document.getElementById('home').onclick=()=>{ R=null; go('home'); };
}

/* ---------- 複習（萊特納盒子閃卡） ---------- */
let RV=null;
function startReview(free){
  let ids = free ? shuffle(Object.keys(P.cards).filter(id=>ITEMS[id])).slice(0,10) : shuffle(dueIds()).sort((a,b)=>P.cards[a].b-P.cards[b].b).slice(0,15);
  if(!ids.length){ page('cards', `<div class="center intro"><div class="emoji-big">😌</div><h1>${free?'還沒有卡片':'今天沒有要複習的'}</h1><p class="lead">${free?'先學一課，學過的東西會自動變成卡片。':'太棒了！所有卡片都記得。'}</p><button class="btn primary huge" onclick="location.hash='#/home'">回首頁</button></div>`); return; }
  active=true; RV={ids, i:0, ok:0, free, again:new Set()}; showCard(false);
}
function cardFront(it){ if(it.type==='letter') return `<div class="letter-big">${esc(it.U)}<span>${esc(it.U.toLowerCase())}</span></div>`;
  return `<div class="emoji-big">${it.emoji}</div><div class="${it.type==='word'?'en-big':'en-sent'}">${esc(it.en)}</div>`; }
function showCard(flipped){
  const id=RV.ids[RV.i], it=ITEMS[id], c=P.cards[id]||{b:1};
  const pct=Math.round(RV.i/RV.ids.length*100);
  const back = it.type==='letter' ? `<div class="zh big">唸「${esc(it.hint)}」</div><div class="small">${it.emoji} ${esc(it.word)} ＝ ${esc(it.wordZh)}</div>` : `${hintHTML(it.hint)}<div class="zh big">${esc(it.zh)}</div>`;
  app.innerHTML=`<main class="page run"><div class="runtop"><button class="x" id="quit">✕</button><div class="bar"><i style="width:${pct}%"></i></div></div>
   <p class="small center">🃏 複習 ${RV.i+1} / ${RV.ids.length} · 盒子 ${c.b}</p>
   <div class="card flash ${flipped?'flipped':''}">${cardFront(it)}${flipped?back:'<p class="small">先想想看是什麼意思 🤔</p>'}
   <div class="row-c"><button class="btn sound" data-say="${esc(it.say)}">🔊 聽</button><button class="btn sound slow" data-say="${esc(it.say)}" data-rate="0.55">🐢 慢</button></div></div>
   ${flipped?'<div class="actions"><button class="btn soft" id="no">🤔 還不熟</button><button class="btn primary" id="yes">😊 記得</button></div>':'<button class="btn primary huge" id="flip">看答案</button>'}</main>`;
  document.getElementById('quit').onclick=()=>{ stopSpeak(); RV=null; FLOW=false; go('home'); };
  if(!flipped){ speak(it.say); document.getElementById('flip').onclick=()=>showCard(true); return; }
  const done=ok=>{ if(!RV.free && !RV.again.has(id)) gradeCard(id, ok); if(ok) RV.ok++; else if(!RV.again.has(id)){ RV.again.add(id); RV.ids.push(id); }
    RV.i++; if(RV.i<RV.ids.length) showCard(false); else finishReview(); };
  document.getElementById('yes').onclick=()=>done(true);
  document.getElementById('no').onclick=()=>{ speak(it.say); done(false); };
}
function finishReview(){
  if(!RV.free) P.reviewDay=dayStr(); markStudy(); save(); const nl=nextLesson(); const chain=FLOW; const ck=chain && ckAvailable() && P.ck.last!==dayStr();
  app.innerHTML=`<main class="page run"><div class="center intro"><div class="emoji-big bounce">🌟</div><h1>複習完成！</h1><p class="lead">記得 ${RV.ok} 張。忘記的明天會再出現，<br>多看幾次就會記住 😊</p>
   ${ck?'<button class="btn primary huge" id="nxl">▶ 接著每日打卡</button>':nl?'<button class="btn primary huge" id="nxl">▶ '+(chain?'接著學新課：':'學新課：')+esc(nl.title)+'</button>':''}<button class="btn soft" id="home">🏠 回首頁</button></div></main>`;
  RV=null; if(!ck) FLOW=false;
  if(ck) document.getElementById('nxl').onclick=()=>go('checkin'); else if(nl) document.getElementById('nxl').onclick=()=>go('lesson/'+nl.id);
  document.getElementById('home').onclick=()=>go('home');
}
function viewCards(){
  const boxes=[0,0,0,0,0]; Object.keys(P.cards).forEach(id=>{ if(ITEMS[id]) boxes[P.cards[id].b-1]++; }); const due=dueIds().length, tot=boxes.reduce((a,b)=>a+b,0);
  page('cards', `<h1>🃏 複習卡片</h1><p class="lead">學過的東西會變成卡片。記得的卡片會放到下一個盒子，越後面的盒子越久才複習一次。</p>
   <div class="boxes">${boxes.map((n,i)=>`<div><b>${n}</b><span>盒子${i+1}</span><small>${INTERVAL[i+1]} 天</small></div>`).join('')}</div>
   <button class="btn primary huge" onclick="location.hash='#/review'" ${due?'':'disabled'}>${due?'▶ 複習今天到期的 '+due+' 張':'今天沒有到期的卡片 😌'}</button>
   <button class="btn soft" onclick="location.hash='#/review/free'" ${tot?'':'disabled'}>🎲 隨便抽 10 張練習（不影響盒子）</button>
   <div class="card small">共 ${tot} 張卡片。忘記的卡片會回到盒子 1，明天再複習。每天先複習、再學新的，記得最牢！</div>`);
}

/* ---------- 計畫 ---------- */
function viewPlan(){
  const N=LESSONS.length, ORD=learnOrder(), days=[]; for(let d=0; d<60; d++) days.push(ORD.slice(Math.floor(d*N/60), Math.floor((d+1)*N/60)));
  const cur=days.findIndex(ls=>ls.some(l=>!P.done[l.id]));
  page('plan', `<h1>🗓️ 每日計畫</h1>
  <div class="card"><b>建議每天 20–30 分鐘：</b><ol class="plan-list"><li>🃏 先複習舊卡片（約 5 分鐘）</li><li>✅ 每日背誦打卡：5 個單字＋1 句（約 5 分鐘）</li><li>📘 學 2–3 課新課（約 15 分鐘）</li><li>🗣️ 大聲跟著唸、聽一段對話（約 5 分鐘）</li></ol>
  <small>首頁的「開始今天的學習」會自動幫你照這個順序安排，不用自己決定 😊<br>跟不上也沒關係，慢一點、每天做，比快更重要。</small></div>
  <h2>60 天路線圖</h2><p class="small">全部 ${N} 課，平均每天約 ${(N/60).toFixed(1)} 課。</p>
  <div class="road">${days.map((ls,d)=>{ const all=ls.every(l=>P.done[l.id]); const st=ls.length?STAGES[ls[0].stage]:null;
    return `<div class="day ${all?'ok':''} ${d===cur?'cur':''}"><div class="dn">${all?'✅':'第 '+(d+1)+' 天'}</div><div class="dl">${st?st.icon:''} ${ls.map(l=>`<a href="#/lesson/${l.id}">${esc(l.title)}</a>`).join('、')}${d===cur?' <b class="tag">👈 今天</b>':''}</div></div>`; }).join('')}</div>`);
  const c=app.querySelector('.day.cur'); if(c) setTimeout(()=>c.scrollIntoView({block:'center'}),50);
}

/* ---------- 設定 ---------- */
function viewSettings(){
  const vs=voices.filter(v=>!BAD.test(v.name)); const mv=mainVoice(), tv=teacherVoice();
  page('settings', `<h1>⚙️ 設定</h1>
  <div class="card"><b>👩‍🏫 老師說話速度（中文）</b><div class="seg">${[[0.6,'很慢 🐢'],[0.75,'慢（建議）'],[0.95,'正常']].map(r=>`<button class="${P.s.trate===r[0]?'on':''}" data-trate-set="${r[0]}">${r[1]}</button>`).join('')}</div>
  <label class="sw"><input type="checkbox" id="tauto" ${P.s.tauto?'checked':''}> 老師自動說話</label>
  <b>👩‍🏫 老師的聲音</b><select id="tvoice"><option value="">自動選擇（${tv?esc(tv.name)+'・'+zDesc(tv):'找不到中文聲音'}）</option>${zhVoices.map(v=>`<option value="${esc(v.voiceURI)}" ${P.s.tvoice===v.voiceURI?'selected':''}>${esc(v.name)} (${esc(v.lang)})${zDesc(v)?' · '+zDesc(v):''}</option>`).join('')}</select>
  <b>🎵 老師的音調</b><div class="seg">${[[1,'低一點'],[1.1,'剛好 ✨'],[1.2,'高一點']].map(r=>`<button class="${(P.s.tpitch||1.1)===r[0]?'on':''}" data-tpitch="${r[0]}">${r[1]}</button>`).join('')}</div>
  <button class="btn sound" data-tsay="哈囉！我們慢慢學喔，不用急啦 😊">🔊 聽老師說話</button>
  <small id="tvinfo">${tv?'現在用的聲音：'+esc(tv.name)+'（'+esc(tv.lang)+(zDesc(tv)?'・'+zDesc(tv):'')+'）':'找不到中文聲音，老師只會用文字說話。'}${tv&&!(zTW(tv)&&zFem(tv)>0)?'<br>想要台灣女生的聲音：':'<br>'}iPhone：「設定 → 輔助使用 → 朗讀內容 → 聲音 → 中文（台灣）」下載「美佳」。Android：「文字轉語音」裝 Google 中文（台灣）語音資料。</small></div>
  <div class="card"><b>🔊 英文說話速度</b><div class="seg">${[[0.6,'很慢 🐢'],[0.8,'慢（建議）'],[1,'正常']].map(r=>`<button class="${P.s.rate===r[0]?'on':''}" data-rate-set="${r[0]}">${r[1]}</button>`).join('')}</div>
  <b>🗣️ 英文聲音</b><select id="voice"><option value="">自動選擇（${mv?esc(mv.name):'預設'}）</option>${vs.map(v=>`<option value="${esc(v.voiceURI)}" ${P.s.voice===v.voiceURI?'selected':''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select>
  <button class="btn sound" data-say="Hello! Nice to meet you. Let's learn English together.">🔊 試聽</button>
  <small>${vs.length?'找到 '+vs.length+' 個英文聲音。':'聲音載入中或裝置沒有英文聲音。'}iPhone 可到「設定 → 輔助使用 → 朗讀內容 → 聲音 → 英文」下載「Samantha（增強版）」等更自然的聲音。</small></div>
  <div class="card"><b>🅿️ 發音提示</b><div class="seg">${[['py','拼音'],['xy','諧音'],['both','兩個都要'],['off','不顯示']].map(r=>`<button class="${P.s.hm===r[0]?'on':''}" data-hm="${r[0]}">${r[1]}</button>`).join('')}</div>
  <small>例：cat → 拼音「kai-te」、諧音「凱特」。只是大概的唸法，最準的還是聽 🔊</small>
  <label class="sw"><input type="checkbox" id="auto" ${P.s.auto?'checked':''}> 看到新東西時自動播放聲音</label>
  <small>🎤 跟我唸：${SR?'這台裝置支援語音辨識，會聽你唸得像不像。':'這台裝置不支援語音辨識，會改成「先播放，再請你自己唸」。'}</small></div>
  ${window.__BIP?'<button class="btn primary" id="inst">📲 安裝成 App（Android）</button>':''}
  <div class="card"><b>🤖 加到 Android 主畫面（Chrome）</b><ol class="plan-list"><li>用 Chrome 打開這個網頁</li><li>按右上角的「⋮」（三個點）</li><li>選「安裝應用程式」或「加到主畫面」</li><li>之後從主畫面的圖示打開，就像 App 一樣，沒有網路也能用</li></ol><small>沒聲音的話：到手機「設定 → 系統 → 語言 → 文字轉語音」，安裝 Google 語音的英文和中文語音資料。</small></div>
  <div class="card"><b>📲 加到 iPhone 主畫面</b><ol class="plan-list"><li>用 Safari 打開這個網頁</li><li>按下方的「分享」按鈕 <span class="ios">⬆️</span></li><li>選「加入主畫面」</li><li>之後從主畫面的圖示打開，就像 App 一樣，沒有網路也能用</li></ol></div>
  <div class="card"><b>📊 我的進度</b><p class="small">完成 ${Object.keys(P.done).length} / ${LESSONS.length} 課，卡片 ${Object.keys(P.cards).length} 張，連續 ${P.streak||0} 天。進度存在這台手機的瀏覽器裡。</p>
  <button class="btn danger" id="reset">清除所有進度</button></div>`);
  app.querySelectorAll('[data-trate-set]').forEach(b=>b.onclick=()=>{ P.s.trate=parseFloat(b.dataset.trateSet); save(); viewSettings(); speakT('這樣子的速度可以嗎？'); });
  document.getElementById('tvoice').onchange=e=>{ P.s.tvoice=e.target.value; save(); viewSettings(); speakT('哈囉，我是你的英文老師喔！'); };
  app.querySelectorAll('[data-tpitch]').forEach(b=>b.onclick=()=>{ P.s.tpitch=parseFloat(b.dataset.tpitch); save(); viewSettings(); speakT('這樣子聽起來可以嗎？'); });
  document.getElementById('tauto').onchange=e=>{ P.s.tauto=e.target.checked; save(); };
  app.querySelectorAll('[data-rate-set]').forEach(b=>b.onclick=()=>{ P.s.rate=parseFloat(b.dataset.rateSet); save(); viewSettings(); speak('Hello!'); });
  document.getElementById('voice').onchange=e=>{ P.s.voice=e.target.value; save(); speak('Hello! I am your English teacher.'); };
  app.querySelectorAll('[data-hm]').forEach(b=>b.onclick=()=>{ P.s.hm=b.dataset.hm; save(); viewSettings(); });
  document.getElementById('auto').onchange=e=>{ P.s.auto=e.target.checked; save(); };
  const ib=document.getElementById('inst'); if(ib) ib.onclick=()=>{ const e=window.__BIP; if(!e) return; e.prompt(); (e.userChoice||Promise.resolve()).then(()=>{ window.__BIP=null; viewSettings(); }); };
  document.getElementById('reset').onclick=()=>{ if(confirm('確定要清除所有進度嗎？這無法復原。')){ const s=P.s; P=JSON.parse(JSON.stringify(DEF)); P.s=s; save(); toast('已清除'); viewHome(); location.hash='#/home'; } };
}

/* ---------- 真實音檔（Web Audio：字母的「聲音」） ---------- */
let AC=null; const BUF={};
function acx(){ if(!AC){ const C=window.AudioContext||window.webkitAudioContext; if(C){ try{ AC=new C(); }catch(e){} } } if(AC && AC.state==='suspended'){ try{ AC.resume(); }catch(e){} } return AC; }
function b64buf(b){ const s=atob(b), u=new Uint8Array(s.length); for(let i=0;i<s.length;i++) u[i]=s.charCodeAt(i); return u.buffer; }
function loadPh(k){ if(BUF[k]) return BUF[k]; const ac=acx(); if(!ac) return Promise.resolve(null);
  const src = (window.SND_B64 && window.SND_B64[k]) ? Promise.resolve(b64buf(window.SND_B64[k])) : fetch('snd/'+k+'.mp3').then(r=>{ if(!r.ok) throw 0; return r.arrayBuffer(); });
  BUF[k]=src.then(b=>new Promise((res,rej)=>{ const p=ac.decodeAudioData(b,res,rej); if(p&&p.catch) p.catch(rej); })).catch(()=>null); return BUF[k]; }
const PHFB={a:'at',ah:'ah',e:'eh',i:'it',o:'ah',u:'uh',s:'sss',m:'mmm',n:'nnn',l:'lll',f:'fff',v:'vvv',z:'zzz',r:'rrr',h:'ha',w:'wuh',y:'yuh',x:'ks',q:'kw',j:'juh',c:'kuh',k:'kuh',b:'buh',p:'puh',t:'tuh',d:'duh',g:'guh'};
const wait = ms => new Promise(r=>setTimeout(r,ms));
let BT=0; /* 拼讀播放的序號，換畫面就作廢 */
function playPh(k, overlap){ return loadPh(k).then(b=>new Promise(res=>{
  if(!b || !AC){ speak(PHFB[k]||k, {rate:0.7, onend:res}); return; }
  const s=AC.createBufferSource(); s.buffer=b; s.connect(AC.destination); s.start();
  const ms=b.duration*1000*(overlap||1); setTimeout(res, Math.max(120, ms)); })); }
function capP(f, ms){ return new Promise(r=>{ let d=false; const k=()=>{ if(!d){ d=true; r(); } }; setTimeout(k, ms); f(k); }); } /* 語音沒回應時也不會卡住 */
function spP(text, o){ return capP(k=>speak(text, Object.assign({}, o||{}, {onend:k})), 1500+String(text).length*180); }
function sayT(text){ if(!P.s.tauto) return Promise.resolve(); return capP(k=>speakT(text, false, k), 2000+String(text).length*350); }
/* 周育如式：字母、字母、聲音、聲音 */
const ZH = D.zhou||{};
const zc = (l, end) => { const z=ZH[l]||{}; return (end && z.e) ? z.e : (z.c||l); };
function chantLine(l){ const z=ZH[l]||{}, U=l; return z.e ? `${U} ${U} ${z.c} ${z.c}（字前）／${U} ${U} ${z.e} ${z.e}（字後）` : `${U} ${U} ${z.c} ${z.c}`; }
function letterName(l){ const it=ITEMS['let-'+l.toUpperCase()]; return it ? it.say : l.toUpperCase(); }
async function chantOne(l, my){ const nm=letterName(l); for(let i=0;i<2;i++){ if(my!==BT) return; await spP(nm); }
  for(let i=0;i<2;i++){ if(my!==BT) return; await playPh(l); await wait(120); } }
function chantHTML(letters, fresh, title){ fresh=fresh||'';
  return `<div class="card chant"><h3>🎵 ${esc(title||'從頭一起唸')}</h3><p class="small">周育如老師的唸法：<b>字母、字母、聲音、聲音</b>。中文字只是借音，唸的時候不要把中文的母音唸出來。</p>
  <div class="ch-rows">${letters.split('').map(l=>`<button class="ch-row ${fresh.includes(l)?'new':''}" data-ch="${l}"><b>${l.toUpperCase()} ${l}</b><span>${esc(chantLine(l))}</span><small>[${esc((ZH[l]||{}).k||'')}]</small>${fresh.includes(l)?'<em class="newtag">新</em>':''}</button>`).join('')}</div>
  <div class="row-c"><button class="btn primary" data-chall="1">▶ 從頭一起唸</button><button class="btn soft" data-chall="-1">⏪ 倒著唸</button><button class="btn soft" data-chstop="1">⏹ 停</button></div></div>`; }
function bindChant(root){ const rows=[...root.querySelectorAll('.ch-row')];
  const mark=i=>rows.forEach((r,j)=>r.classList.toggle('now', j===i));
  rows.forEach((r,i)=>r.onclick=()=>{ unlock(); acx(); stopSpeak(); const my=++BT; mark(i); chantOne(r.dataset.ch, my).then(()=>{ if(my===BT) mark(-1); }); });
  root.querySelectorAll('[data-chall]').forEach(b=>b.onclick=async()=>{ unlock(); acx(); stopSpeak(); const my=++BT; const ord=rows.map((r,i)=>i); if(b.dataset.chall==='-1') ord.reverse();
    for(const i of ord){ if(my!==BT) return; mark(i); rows[i].scrollIntoView({block:'nearest'}); await chantOne(rows[i].dataset.ch, my); await wait(250); } mark(-1); });
  root.querySelectorAll('[data-chstop]').forEach(b=>b.onclick=()=>{ BT++; stopSpeak(); mark(-1); }); }
/* 影片連結 */
function vidHTML(kind){ const g=(D.vid||{})[kind]; if(!g) return '';
  return g.map(x=>`<div class="card vids"><b>${esc(x.label)}</b>${x.list.map(v=>`<a class="vlink" href="${esc(v.u)}" target="_blank" rel="noopener">▶ ${esc(v.t)}<small>${esc(v.c)}</small></a>`).join('')}<small class="vnote">免費影片，會開新分頁（需要網路）</small></div>`).join(''); }
const STAGE_VID = {'1':'letters','2':'phonics','p':'sentences','4':'sentences'};
/* 逐字中文 */
const GL = (()=>{ const g={}; Object.values(ITEMS).forEach(it=>{ if(it.type==='word' && !it.en.includes(' ')){ const z=String(it.zh).split(/[／/、，,]/)[0].replace(/（.*?）|\(.*?\)/g,'').trim(); if(z && !g[it.en.toLowerCase()]) g[it.en.toLowerCase()]=z; } }); return Object.assign(g, D.gloss||{}); })();
const gtok = t => t.toLowerCase().replace(/[’]/g,"'").replace(/^[^a-z0-9']+|[^a-z0-9'\-]+$/g,'');
function glossHTML(en, cls){ return '<div class="gl '+(cls||'')+'">'+String(en).split(/\s+/).filter(Boolean).map(t=>{ const g=GL[gtok(t)]||''; return '<span class="gw"><b>'+esc(t)+'</b><i>'+esc(g||'·')+'</i></span>'; }).join('')+'</div>'; }

/* ---------- 拼讀練習 ---------- */
const BS = (D.blendSets||[]).map((s,i)=>({i, t:s.t, n:s.n, cv:!!s.cv, L:s.L||'', items:rows(s.w).map(r=>({w:r[0], zh:r[1], emoji:r[2], life:r[3], ex:r[4]||'', gl:r[5]?r[5].split('/'):[], cv:!!s.cv}))}));
function cumLetters(si){ let s=''; for(let i=0;i<=si;i++) s+=BS[i].L||''; return s; }
function phKeys(it){ const ls=it.w.split(''); return it.cv ? [ls[0],'ah'] : ls; }
function tileSound(it, j){ const ls=it.w.split(''); if(it.cv && j===1) return '啊'; return zc(ls[j], j===ls.length-1 && j>0); }
function blendDone(){ P.bl=P.bl||{}; return P.bl; }
function nextSet(){ const d=blendDone(); const f=BS.find(s=>!d[s.i]); return f||null; }
function viewBlend(){ const d=blendDone(), ns=nextSet();
  const b1='英文跟拼音蠻像的喔 😊', b2='一個字母，一個聲音喔', b3='連起來就是一個字耶！';
  page('home', `<a class="back" href="#/home">‹ 回首頁</a><h1>🔤 拼讀練習</h1><p class="lead">看字母怎麼變成字：一個一個點、聽聲音，再連起來。</p>
   ${tbub(b1)}${tbub(b2)}${tbub(b3)}
   <div class="card rule">📌 字母有「名字」，也有「聲音」。<br>拼字的時候，唸的是<b>聲音</b>。<br>例：c 的名字是 see，聲音是「咳」。</div>
   ${ns?`<button class="btn primary huge" id="bgo">▶ ${d[0]?'繼續':'開始'}：${esc(ns.t)}</button>`:'<div class="card center"><div class="emoji-big">🏆</div><b>全部練完了！可以再挑一組複習。</b></div>'}
   ${BS.map(s=>`<a class="card lesson ${ns===s?'nextup':''}" href="#/blend/${s.i}"><div class="ln">${d[s.i]?'✅':(s.i+1)}</div><div class="lb"><b>${esc(s.t)}</b><small>${esc(s.items.map(x=>x.w).join('、'))}</small><small>${esc(s.n)}</small></div></a>`).join('')}
   ${vidHTML('blend')}`);
  autoT([b1,b2,b3]);
  const g=document.getElementById('bgo'); if(g) g.onclick=()=>{ unlock(); acx(); go('blend/'+ns.i); };
}
let B=null;
function startBlend(si){ si=+si; const S=BS[si]; if(!S) return go('blend'); stopSpeak(); BT++; active=true;
  const steps=[{k:'bintro'}]; S.items.forEach((it,j)=>{ steps.push({k:'btiles', it, j}); if(!it.cv) steps.push({k:'bsent', it, j}); });
  steps.push({k:'bqintro'}); shuffle(S.items).forEach(it=>steps.push({k:'bq', it})); steps.push({k:'bdone'});
  B={S, si, steps, i:0}; bStep(); }
function bframe(inner){ const pct=Math.round(B.i/(B.steps.length-1)*100);
  app.innerHTML=`<main class="page run"><div class="runtop"><button class="x" id="quit" aria-label="離開">✕</button><div class="bar"><i style="width:${pct}%"></i></div></div>${inner}</main>`;
  document.getElementById('quit').onclick=()=>{ BT++; stopSpeak(); B=null; go('blend'); }; window.scrollTo(0,0); }
function bNext(){ BT++; stopSpeak(); B.i++; bStep(); }
function bStep(){ const s=B.steps[B.i], S=B.S;
  if(s.k==='bintro'){ const fresh=S.L, cum=cumLetters(B.si);
    const vow=[...new Set(S.items.flatMap(it=>it.cv?[]:it.w.split('').filter(c=>'aeiou'.includes(c))))].filter(v=>!BS.slice(0,B.si).some(p=>!p.cv && p.items.some(x=>x.w.includes(v))));
    const b1 = S.cv ? '這些跟拼音一模一樣耶 😊' : '先把學過的字母唸一遍喔 🎵';
    const b2 = S.cv ? '還不是單字啦，先暖身一下' : '然後一個字一個字拼囉 🔤';
    bframe(`<div class="center intro"><p class="small">拼讀練習 · 第 ${B.si+1} 組</p><h1>🔤 ${esc(S.t)}</h1>${tbub(b1)}${tbub(b2)}
      ${S.cv?`<div class="card rule">📌 拼音裡 b＋a 唸 ba（爸）。<br>英文也一樣：<b>b 的聲音＋a 的聲音 → ba</b>。</div>`:''}
      ${vow.length?`<div class="card rule">📌 <b>為什麼這樣唸？</b><br>${vow.map(v=>esc(D.vowelWhy[v]||'')).join('<br>')}<br><small>夾在兩個子音中間的母音，唸短短的「聲音」，不是字母的名字。</small></div>`:''}
      </div>
      ${cum?chantHTML(cum, fresh, B.si>2?'從頭複習學過的字母':'今天的字母'):''}
      <div class="card mini">今天 5 個：${S.items.map(x=>'<b>'+esc(x.w)+'</b> '+x.emoji).join('　')}</div>
      <button class="btn primary huge" id="nx">開始拼 ▶</button>`);
    if(cum) bindChant(app); autoT([b1,b2]); document.getElementById('nx').onclick=()=>{ unlock(); acx(); bNext(); };
  }
  else if(s.k==='btiles') bTiles(s.it, s.j);
  else if(s.k==='bsent') bSent(s.it);
  else if(s.k==='bqintro'){ const b1='換你自己讀囉！👀', b2='看看字，選對的圖片喔';
    bframe(`<div class="center intro"><div class="emoji-big">👀</div><h1>你來讀</h1>${tbub(b1)}${tbub(b2)}${tbub('不會也沒關係啦，可以按提示喔 💡')}<button class="btn primary huge" id="nx">來讀 ▶</button></div>`);
    autoT([b1,b2]); document.getElementById('nx').onclick=bNext; }
  else if(s.k==='bq') bQuiz(s.it);
  else if(s.k==='bdone'){ blendDone()[B.si]=true; markStudy(); save(); const nx=BS[B.si+1]; const m=rnd(PRAISE);
    bframe(`<div class="center intro"><div class="emoji-big bounce">🎉</div><h1>這一組完成了！</h1>${tbub(m,'happy')}<div class="card mini">你自己拼出了：${B.S.items.map(x=>'<b>'+esc(x.w)+'</b> '+x.emoji).join('　')}</div>
      ${nx?`<button class="btn primary huge" id="nxs">▶ 下一組：${esc(nx.t)}</button>`:''}<button class="btn soft" id="bl">📋 回拼讀練習</button><button class="btn soft" id="hm">🏠 回首頁</button></div>`);
    speakT(m.replace(/[!！]/g,'')); if(nx) document.getElementById('nxs').onclick=()=>go('blend/'+nx.i);
    document.getElementById('bl').onclick=()=>go('blend'); document.getElementById('hm').onclick=()=>go('home'); }
}
/* 一個字：字母方塊一個一個出現 → 點一下聽聲音 → 兩個連起來 → 再加一個 → 整個字 */
function bTiles(it, j){ const ls=it.w.split(''), keys=phKeys(it), n=ls.length;
  bframe(`<p class="small center">第 ${j+1} / ${B.S.items.length} 個字 · 一步一步拼</p>
   <div id="tbw">${tbub('點第一個字母，聽聽看它的聲音喔 👆')}</div>
   <div class="btiles" id="bt">${ls.map((l,k)=>`<button class="btile c${k%4} ${k===0?'show':''}" data-k="${k}"><b>${esc(l)}</b><small class="bz"></small></button>`).join('')}</div>
   <div class="bmerge" id="bm"></div>
   <div id="bmean"></div>
   <div class="actions" id="bact"></div>`);
  const tiles=[...app.querySelectorAll('.btile')], tbw=document.getElementById('tbw'), act=document.getElementById('bact'), bm=document.getElementById('bm');
  let say=t=>{ tbw.innerHTML=tbub(t); return sayT(t); };
  let tapped=0, busy=false;
  const lit=(a,b,cls)=>tiles.forEach((t,k)=>{ t.classList.toggle('lit', k>=a && k<=b); t.classList.toggle('tight', !!cls && k>=a && k<=b); });
  async function merge(upto){ const my=++BT; busy=true; act.innerHTML=''; const part=ls.slice(0,upto+1).join(''), snd=ls.slice(0,upto+1).map((l,k)=>k===1&&it.cv?'啊':tileSound(it,k));
    const last=upto===n-1;
    const line = upto===1 ? `${snd[0]}＋${snd[1]}，連快一點喔 → ${part}` : `再加 ${ls[upto]}「${snd[upto]}」→ ${part}`;
    say(line);
    bm.innerHTML=`<div class="mg-row">${snd.map((x,k)=>`<span class="mg" data-m="${k}">${esc(ls[k])}<small>${esc(x)}</small></span>`).join('<i>＋</i>')}<i>→</i><span class="mg-out">${esc(part)}</span></div><div class="mg-lab" id="ml">🐢 慢慢唸</div>`;
    const mgs=[...bm.querySelectorAll('.mg')], out=bm.querySelector('.mg-out'), ml=document.getElementById('ml');
    await wait(700);
    /* 慢：一個一個亮起來 */
    for(let k=0;k<=upto;k++){ if(my!==BT) return; lit(0,k); mgs.forEach((m,q)=>m.classList.toggle('on', q<=k)); await playPh(keys[k]); await wait(450); }
    if(my!==BT) return; ml.textContent='🐇 快一點'; lit(0,upto,1); bm.classList.add('fast'); await wait(300);
    /* 快：聲音黏在一起 */
    for(let k=0;k<=upto;k++){ if(my!==BT) return; await playPh(keys[k], 0.72); }
    if(my!==BT) return; await wait(250); out.classList.add('on');
    if(last){ ml.textContent='🗣️ 整個字'; await spP(it.w, {rate:0.7}); if(my!==BT) return; await wait(200); await spP(it.w); }
    else { ml.textContent='👍 '+part+' 連好了'; }
    busy=false; if(my!==BT) return;
    if(last) showMeaning(); else { tiles[upto+1].classList.add('show'); say('再點下一個字母喔 👆'); act.innerHTML=`<button class="btn soft" id="again">🔁 再連一次</button>`; document.getElementById('again').onclick=()=>merge(upto); }
  }
  function showMeaning(){ const b1 = it.cv ? `${it.w} 就像拼音啦，是暖身` : `${it.w} 就是「${it.zh}」${it.emoji}`, b2 = it.cv ? `就像${it.life}` : `就像「${it.life}」`;
    document.getElementById('bmean').innerHTML=`<div class="card bmeaning center"><div class="emoji-big">${it.emoji}</div><div class="en-big">${esc(it.w)}</div><div class="zh big">${esc(it.zh)}</div><div class="life">👉 ${esc(it.life)}</div></div>${tbub(b1)}${tbub(b2)}`;
    act.innerHTML=`<button class="btn soft" id="again">🔁 再連一次</button><button class="btn primary" id="nx">${it.cv?'下一個 ▶':'用在句子裡 ▶'}</button>`;
    document.getElementById('again').onclick=()=>merge(n-1); document.getElementById('nx').onclick=bNext;
    autoT([b1,b2]); window.scrollTo(0, document.body.scrollHeight); }
  tiles.forEach((t,k)=>t.onclick=async()=>{ if(busy || !t.classList.contains('show')) return; unlock(); acx();
    const l=ls[k], z=tileSound(it,k), first=(k===tapped);
    t.querySelector('.bz').textContent=z; t.classList.add('heard'); lit(k,k); const my=++BT; stopSpeak();
    await playPh(keys[k]); if(my!==BT) return;
    let line = (it.cv && k===1) ? 'a 在這裡唸「啊」，像拼音 a' : `${l} 的聲音是「${z}」`;
    if(!it.cv && k===n-1 && ZH[l] && ZH[l].e) line = `${l} 在字後面，唸「${z}」`;
    await say(line); if(my!==BT) return; await playPh(keys[k]);
    if(first){ tapped++;
      if(k===0){ tiles[1].classList.add('show'); say('再點下一個字母喔 👆'); }
      else { act.innerHTML=`<button class="btn primary huge" id="mg">🔗 ${k===1?'連起來':'再連起來'}</button>`; document.getElementById('mg').onclick=()=>merge(k); } }
  });
  autoT(['點第一個字母，聽聽看它的聲音喔']);
}
/* 例句：每個英文字下面都有中文，老師一個字一個字講為什麼 */
function bSent(it){ const ws=it.ex.split(' '), whyOf=(w,k)=>{ const t=gtok(w); if(t===it.w) return `${it.w} ＝ ${it.zh} ${it.emoji}`; return (D.why||{})[t] || `${w.replace(/[.!?]/g,'')} ＝ ${it.gl[k]}`; };
  const full=it.gl.join(''); let k=-1;
  bframe(`<p class="small center">用在句子裡</p>${tbub('我們一個字一個字看喔 👀')}
    <div class="card bsent center"><div class="gl big">${ws.map((w,q)=>`<span class="gw" data-q="${q}"><b>${esc(w)}</b><i>${esc(it.gl[q]||'')}</i></span>`).join('')}</div>
    <div class="zh big">${esc(full)}</div>${speakBtns(it.ex)}</div>
    <div id="why"></div><div class="actions"><button class="btn primary" id="nx">老師講第一個字 ▶</button></div>`);
  const gws=[...app.querySelectorAll('.gw')], nx=document.getElementById('nx'), wy=document.getElementById('why');
  speak(it.ex, {rate:0.7});
  nx.onclick=()=>{ k++; if(k<ws.length){ gws.forEach((g,q)=>g.classList.toggle('now', q===k)); const t=whyOf(ws[k],k); wy.innerHTML=tbub(t); speakT(t); nx.textContent = k<ws.length-1 ? '下一個字 ▶' : '整句連起來 ▶'; }
    else if(k===ws.length){ gws.forEach(g=>g.classList.remove('now')); const t='意思是：'+full; wy.innerHTML=tbub(t,'happy'); speakT(t); speak(it.ex,{rate:0.7}); nx.textContent='我懂了，下一個 ▶'; }
    else bNext(); };
}
/* 你來讀：只看字，選圖 */
function bQuiz(it){ const others=shuffle(B.S.items.filter(x=>x!==it)).slice(0,2), o=shuffle([it].concat(others)); let miss=0;
  const lab=x=>x.cv?((x.life.match(/「(.)」/)||[])[1]||x.zh):x.zh;
  bframe(`<p class="small center">你來讀 👀</p>${tbub('這個字怎麼唸呢？是哪個意思？')}
   <div class="btiles quiz">${it.w.split('').map((l,k)=>`<span class="btile show c${k%4}"><b>${esc(l)}</b></span>`).join('')}</div>
   <div class="row-c"><button class="btn soft" id="hint">💡 提示：一個一個聲音</button></div>
   <div class="opts">${o.map((x,q)=>`<button class="opt" data-q="${q}"><span class="oe">${x.emoji}</span>${esc(lab(x))}</button>`).join('')}</div><div id="fb"></div>`);
  document.getElementById('hint').onclick=async()=>{ unlock(); acx(); const my=++BT; const ts=[...app.querySelectorAll('.btile')]; const ks=phKeys(it);
    for(let q=0;q<ks.length;q++){ if(my!==BT) return; ts.forEach((t,r)=>t.classList.toggle('lit', r===q)); await playPh(ks[q]); await wait(400); } ts.forEach(t=>t.classList.remove('lit')); };
  app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{ const x=o[+b.dataset.q], fb=document.getElementById('fb');
    if(x===it){ app.querySelectorAll('.opt').forEach(y=>y.disabled=true); b.classList.add('right'); const m=rnd(D.cheers); fb.innerHTML=tbub(m,'happy')+`<div class="card mini center"><b>${esc(it.w)}</b> ＝ ${esc(it.zh)} ${it.emoji}</div><button class="btn primary" id="cont">繼續 ▶</button>`;
      spP(it.w,{rate:0.75}).then(()=>speakT(m.replace(/[!！]/g,''))); document.getElementById('cont').onclick=bNext; }
    else { miss++; b.classList.add('soft-miss'); b.disabled=true; fb.innerHTML=tbub(miss>1?'按 💡 提示喔，我們一個一個聽':'差一點點耶，我們再來一次喔 😊'); speakT(miss>1?'按提示喔，我們一個一個聽':'差一點點耶，我們再來一次喔'); } });
}

/* ---------- 啟動 ---------- */
window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); window.__BIP=e; if(route().v==='settings') render(); });
window.__APP = {LESSONS, ITEMS, STAGES};
render();
if('serviceWorker' in navigator && /^https?:/.test(location.protocol) && !window.INLINE_BUILD){ window.addEventListener('load', ()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
  const had=!!navigator.serviceWorker.controller; let reloaded=false; navigator.serviceWorker.addEventListener('controllerchange', ()=>{ if(had && !reloaded){ reloaded=true; location.reload(); } }); }
})();
