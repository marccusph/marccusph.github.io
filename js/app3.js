let LANG=localStorage.getItem('mk_lang')||'en';
if(!LANGS.some(l=>l.code===LANG)) LANG='en';
Object.assign(I18N.en,{scroll:'Scroll',contact:'Contact',close:'Close',cats:'Categories',copied:'Email copied',onmove:'On the move'});
Object.assign(I18N.ptbr,{scroll:'Role',contact:'Contato',close:'Fechar',cats:'Categorias',copied:'E-mail copiado',onmove:'Na prática'});
const t=k=>(I18N[LANG]&&I18N[LANG][k])||I18N.en[k]||k;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const sectionById=id=>SECTIONS.find(s=>s.id===id);
const CATS=SECTIONS.filter(s=>s.id!=='home');
const EMAIL='marccusph@gmail.com';
const H1='Marketing & Branding Expert';
let ROUTE={sec:null,proj:null};
const A=(window.anime&&!matchMedia('(prefers-reduced-motion: reduce)').matches)?window.anime:null;
if(A) document.documentElement.classList.add('ajs');
function chars(str){return String(str).split(' ').map(w=>'<span class="w" aria-hidden="true">'+[...w].map(c=>'<span class="ch">'+esc(c)+'</span>').join('')+'</span>').join(' ');}

function themeText(th){return (LANG==='ptbr'&&window.THEME_PTBR&&window.THEME_PTBR[th])?window.THEME_PTBR[th]:th;}
function metaIcons(meta){
  if(!meta) return '';
  if(meta.icons) return '<span class="pc-icons">'+meta.icons.map(ic=>svg(ic)).join('')+'</span>';
  return svg(meta.icon);
}
function baseStory(cat,name){const S=window.PROJECT_STORIES||{};return S[cat+'|'+name]||S[name];}
const PROJECT_COVERS={'Nevata':'assets/nevata/cover.png','Musa':'assets/musa/cover.png','Tattool':'assets/tattool/cover.png','EL Jóias':'assets/eljoias/cover.png','Drummer':'assets/drummer/cover.jpg','Triathlete':'assets/triathlete/cover.jpg','Barista':'assets/barista/cover2.jpg','Motorcyclist':'assets/motorcyclist/cover.jpg'};
function coverFor(cat,name){
  if(PROJECT_COVERS[name]) return PROJECT_COVERS[name];
  const g=(window.PROJECT_GALLERIES||{})[name];
  if(g) return g.dir+(g.prefix||'page-')+String(1).padStart(g.pad||2,'0')+'.'+(g.ext||'jpg');
  const s=baseStory(cat,name); if(!s) return null;
  if(s.sidePhoto) return s.sidePhoto.src;
  if(s.photos&&s.photos.length) return s.photos[0].src;
  const tl=(s.timeline||[]).find(e=>e.img&&/\.jpe?g$/i.test(e.img));
  return tl?tl.img:null;
}
const href=(sec,proj)=>'#/'+sec+(proj?'/'+encodeURIComponent(proj):'');
function marks(cols,rows,cls){let h='';for(let i=0;i<=cols;i++)for(let j=0;j<=rows;j++)h+=`<i class="pl ${cls}" style="--x:${i/cols};--y:${j/rows}"></i>`;return h;}
function catIcon(s){return svg(s.icon||'heart');}

/* ---------- shared chrome ---------- */
function header(){
  const langs=LANGS.map(l=>`<button data-lang="${l.code}" class="${l.code===LANG?'on':''}">${l.code==='ptbr'?'PT':'EN'}</button>`).join('<i>/</i>');
  return `<header class="top"><div class="top-l"><a class="logo" href="#/">Marccus Alves</a><div class="lang">${langs}</div></div>
  <nav class="top-r"><a class="ul" href="https://www.linkedin.com/in/marccusph" target="_blank" rel="noopener">LinkedIn <span>↗</span></a><button class="pill" data-copy>${esc(t('contact'))} <span>→</span></button></nav></header>`;
}
function footer(){
  return `<footer class="foot"><div class="foot-l"><span class="logo">Marccus Alves</span><span>© 2026</span></div>
  <nav class="foot-r"><a href="https://www.linkedin.com/in/marccusph" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.instagram.com/marccusph" target="_blank" rel="noopener">Instagram ↗</a></nav></footer>`;
}

/* ---------- home ---------- */
function renderHome(){
  const lines=['Marketing &','Branding','Expert'].map((l,i)=>`<span class="ln l${i+1}">${chars(l)}</span>`).join('');
  const cells=CATS.map((s,i)=>`<a class="cell rv" style="--d:${i*70}ms" href="${href(s.id)}">${catIcon(s)}<span class="nm">${esc(t(s.id))}</span></a>`).join('')+
    `<button class="cell rv" style="--d:${CATS.length*70}ms" data-copy>${svg('mail')}<span class="nm">${esc(t('contact'))}</span></button>`;
  return header()+
  `<section class="hero"><h1 class="h1 sp" aria-label="${esc(H1)}">${lines}</h1>
    <button class="scroll" data-scroll>${esc(t('scroll'))} <span>↓</span></button></section>
  <section class="sec" id="work"><div class="sec-top"><h2 class="sec-h sp" aria-label="${esc(t('onmove'))}">${chars(t('onmove'))}</h2></div>
    <div class="cgrid gr">${cells}${marks(3,2,'pl-d')}${marks(2,3,'pl-m')}</div></section>`+footer();
}

/* ---------- category (featured work) ---------- */
function card(cat,name,i){
  const meta=(window.PROJECT_META||{})[name];
  const img=coverFor(cat,name), art=artFor(name);
  const info=`<div class="cmeta"><div class="cm-l"><h3 class="ct">${esc(name)}</h3>${meta&&meta.theme?`<span class="tag">${esc(themeText(meta.theme))}</span>`:''}</div><span class="arw" aria-hidden="true">→</span></div>`;
  const cover=img
    ?`<div class="cover"><img src="${img}" alt="" loading="lazy" draggable="false" onerror="this.parentNode.classList.add('art','${art}');this.remove()">${info}</div>`
    :`<div class="cover art ${art}"><span class="ico">${metaIcons(meta)}</span>${info}</div>`;
  return `<a class="card" href="${href(cat,name)}"><div class="rv" style="--d:${(i%2)*90}ms">${cover}</div></a>`;
}
function renderCategory(s){
  const title=s.titleKey?t(s.titleKey):t(s.id);
  const nav=CATS.map(c=>`<a class="cell${c.id===s.id?' on':''}" href="${href(c.id)}">${catIcon(c)}<span class="nm">${esc(t(c.id))}</span></a>`).join('');
  const list=s.projects||[];
  return header()+
  `<div class="cnav-wrap"><nav class="cnav">${nav}${marks(CATS.length,1,'pl-a')}</nav></div>
  <section class="fw fw-${s.id}"><div class="fw-head"><h1 class="fw-t sp${title.length>14?' long':''}" aria-label="${esc(title)}">${chars(title)}</h1><span class="fw-n rv" style="--d:120ms">${String(list.length).padStart(2,'0')}</span></div>
    ${s.id==='offtopic'?`<p class="fw-sub rv" style="--d:180ms">${esc(t('offtopic_sub'))}</p>`:''}
    <div class="cards">${list.map((p,i)=>card(s.id,p,i)).join('')}</div></section>`+footer();
}

/* ---------- drawer (case) ---------- */
function caseBody(cat,name){
  const gallery=(window.PROJECT_GALLERIES||{})[name];
  const story=locStory(cat,name);
  if(gallery) return (story&&story.intro?'<div class="ss-body"><p>'+fmt(story.intro)+'</p></div>':'')+'<div class="x-gallery" id="xGallery"></div>';
  if(!story) return '<p class="dr-lead">'+esc(t('d_soon'))+'</p><div class="ss-body"><p>'+esc(t('d_desc'))+'</p></div>';
  const lead=(story.title&&cat!=='offtopic')?'<p class="dr-lead">'+esc(story.title)+'</p>':'';
  const text='<div class="ss-body">'+story.paragraphs.map(p=>'<p>'+fmt(p)+'</p>').join('')+'</div>';
  if(story.sidePhoto) return lead+'<div class="story-split">'+text+'<figure class="story-split-photo"><img src="'+story.sidePhoto.src+'" alt="'+esc(story.sidePhoto.label||'')+'" loading="lazy" draggable="false" oncontextmenu="return false"></figure></div>'+renderTimeline(story)+renderCollage(story)+renderLinks(story);
  return lead+text+renderTimeline(story)+renderPhotos(story)+renderCollage(story)+renderLinks(story);
}
function renderDrawer(){
  const dr=document.getElementById('drawer'), sc=document.getElementById('scrim');
  const s=sectionById(ROUTE.sec), name=ROUTE.proj;
  if(!name||!s||!(s.projects||[]).includes(name)){dr.classList.remove('on');sc.classList.remove('on');document.body.classList.remove('lock');return;}
  const cat=s.id, story=locStory(cat,name), meta=(window.PROJECT_META||{})[name], credit=(window.PROJECT_CREDITS||{})[name];
  const m=[];
  if(story&&story.period&&cat!=='offtopic') m.push(esc(story.period));
  if(meta&&meta.theme) m.push(esc(themeText(meta.theme)));
  if(credit) m.push(esc(t('partner'))+' <a href="'+esc(credit.url)+'" target="_blank" rel="noopener noreferrer" class="inline-link">'+esc(credit.name)+'</a>');
  dr.innerHTML=`<div class="dr-bar"><span>${esc(t(cat))}</span><button class="dr-x" data-close aria-label="${esc(t('close'))}">${esc(t('close'))}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
    <div class="dr-head"><h2 class="dr-t" aria-label="${esc(name)}">${chars(name)}</h2>${m.length?'<div class="dr-meta">'+m.map(x=>'<span>'+x+'</span>').join('')+'</div>':''}</div>
    <div class="dr-body">${caseBody(cat,name)}</div>`;
  const g=(window.PROJECT_GALLERIES||{})[name], xg=document.getElementById('xGallery');
  if(g&&xg) renderGallery(g,xg);
  const wasOpen=dr.classList.contains('on');
  if(!wasOpen){dr.scrollTop=0;dr.classList.remove('on');void dr.offsetWidth;}
  dr.classList.add('on');sc.classList.add('on');document.body.classList.add('lock');
  if(A&&!wasOpen){
    const {createTimeline,stagger}=A;
    createTimeline({defaults:{ease:'outExpo'}})
      .add(dr.querySelectorAll('.dr-t .ch'),{translateY:['110%','0%'],duration:1200,delay:stagger(22)},380)
      .add(dr.querySelectorAll('.dr-bar>*,.dr-meta'),{opacity:[0,1],translateY:[14,0],duration:900,delay:stagger(80)},520)
      .add(dr.querySelector('.dr-body'),{opacity:[0,1],translateY:[48,0],duration:1300},600);
  }
}
let toastT;
function copyEmail(){
  const done=()=>{let el=document.getElementById('toast');if(!el){el=document.createElement('div');el.id='toast';el.className='toast';el.setAttribute('role','status');document.body.appendChild(el);}
    el.textContent=t('copied');el.classList.remove('on');void el.offsetWidth;el.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove('on'),2200);};
  const fb=()=>{const ta=document.createElement('textarea');ta.value=EMAIL;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}ta.remove();done();};
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(EMAIL).then(done,fb);else fb();
}
function closeDrawer(){ if(ROUTE.proj) location.hash=href(ROUTE.sec); }

/* ---------- motion (anime.js) ---------- */
let io, T0=0, BASE=0;
function reveal(el){
  const extra=performance.now()-T0<200?BASE:0;
  if(!A){el.classList.add('in');return;}
  const {animate,stagger}=A, d=(parseInt(el.style.getPropertyValue('--d'))||0)+extra, done=()=>el.classList.add('in');
  if(el.classList.contains('sp')){
    animate(el.querySelectorAll('.ch'),{translateY:['110%','0%'],duration:1400,delay:stagger(24,{start:d}),ease:'outExpo',onComplete:done});
  }else if(el.classList.contains('gr')){
    animate(el.querySelectorAll('.pl'),{opacity:[0,1],scale:[0,1],rotate:[90,0],duration:1100,delay:stagger(40,{start:d}),ease:'outExpo'});
    animate(el.querySelectorAll('.cell'),{opacity:[0,1],translateY:[48,0],duration:1300,delay:stagger(90,{start:d+150}),ease:'outExpo',onComplete:done});
  }else if(el.closest('.card')){
    const cv=el.querySelector('.cover'), mt=el.querySelector('.cmeta');
    animate(el,{opacity:[0,1],duration:300,delay:d,ease:'linear'});
    animate(cv,{'--r':[100,0],duration:1500,delay:d,ease:'inOutExpo'});
    animate(mt,{opacity:[0,1],translateY:[24,0],duration:1100,delay:d+650,ease:'outExpo',onComplete:done});
  }else{
    animate(el,{opacity:[0,1],translateY:[36,0],duration:1200,delay:d,ease:'outExpo',onComplete:done});
  }
}
function hoverFx(){
  if(!A) return;
  document.querySelectorAll('#page .cell').forEach(c=>{
    const ic=c.querySelector('svg'); if(!ic) return;
    c.addEventListener('pointerenter',()=>A.animate(ic,{translateY:-6,rotate:-10,scale:1.12,duration:700,ease:'outElastic(1,.5)'}));
    c.addEventListener('pointerleave',()=>A.animate(ic,{translateY:0,rotate:0,scale:1,duration:600,ease:'outExpo'}));
  });
}
function observe(base){
  if(io) io.disconnect();
  T0=performance.now(); BASE=base||0;
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){io.unobserve(e.target);reveal(e.target);}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
  document.querySelectorAll('#page .rv:not(.in),#page .sp:not(.in),#page .gr:not(.in)').forEach(el=>io.observe(el));
  hoverFx();
}
function curtain(label,mid){
  const c=document.getElementById('curtain'), tx=c.querySelector('.curtain-t');
  tx.innerHTML=chars(label); const ch=tx.querySelectorAll('.ch');
  const {createTimeline,stagger}=A;
  c.style.pointerEvents='auto'; c.style.transformOrigin='50% 100%';
  createTimeline()
    .add(c,{scaleY:[0,1],duration:700,ease:'inOutQuart'})
    .add(ch,{translateY:['110%','0%'],duration:700,delay:stagger(20),ease:'outExpo'},'-=200')
    .call(()=>mid())
    .add(ch,{translateY:['0%','-110%'],duration:450,delay:stagger(14),ease:'inExpo'},'+=120')
    .call(()=>{c.style.transformOrigin='50% 0%';})
    .add(c,{scaleY:[1,0],duration:800,ease:'inOutQuart',onComplete:()=>{c.style.pointerEvents='none';}},'-=120');
}
function renderPage(base){
  const s=sectionById(ROUTE.sec);
  document.documentElement.lang=LANG==='ptbr'?'pt-BR':'en';
  document.getElementById('page').innerHTML=ROUTE.sec==='home'?renderHome():renderCategory(s);
  document.title=ROUTE.sec==='home'?'Marccus Alves — '+H1:(s.titleKey?t(s.titleKey):t(s.id))+' — Marccus Alves';
  observe(base);
}
function parseHash(){
  const parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean).map(decodeURIComponent);
  const s=sectionById(parts[0]);
  return {sec:s?s.id:'home',proj:s&&s.id!=='home'&&parts[1]?parts.slice(1).join('/'):null};
}
let FIRST=true;
function route(){
  const r=parseHash();
  const drawer=()=>{ROUTE.proj=r.proj;renderDrawer();};
  if(r.sec!==ROUTE.sec){
    const go=b=>{ROUTE.sec=r.sec;renderPage(b);window.scrollTo(0,0);drawer();};
    go(FIRST?250:0);
    FIRST=false;return;
  }
  FIRST=false;drawer();
}
function setLang(code){LANG=code;localStorage.setItem('mk_lang',code);const y=window.scrollY;renderPage();document.querySelectorAll('#page .rv,#page .sp,#page .gr').forEach(el=>el.classList.add('in'));window.scrollTo(0,y);if(ROUTE.proj){const st=document.getElementById('drawer').scrollTop;renderDrawer();document.getElementById('drawer').scrollTop=st;}}

document.addEventListener('click',e=>{
  const lg=e.target.closest('[data-lang]'); if(lg){setLang(lg.dataset.lang);return;}
  if(e.target.closest('[data-copy]')){copyEmail();return;}
  if(e.target.closest('[data-scroll]')){const w=document.getElementById('work');if(w)window.scrollTo({top:w.offsetTop-10,behavior:'smooth'});return;}
  if(e.target.closest('[data-close]')||e.target.id==='scrim'){closeDrawer();}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();});
window.addEventListener('hashchange',route);
route();
