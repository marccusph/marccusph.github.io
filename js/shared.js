/* ===================== icons ===================== */
const ICON = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  chart:'<path d="M4 20V4"/><path d="M4 20h16"/><rect x="8" y="11" width="3" height="6" rx="1"/><rect x="14" y="7" width="3" height="10" rx="1"/>',
  pen:'<path d="M16 3.5 20.5 8 8 20.5 3.5 20 3.5 16z"/><path d="M14 6 18 10"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.3 6.3 2.5 2.5M15.2 15.2l2.5 2.5M17.7 6.3l-2.5 2.5M8.8 15.2l-2.5 2.5"/>',
  trophy:'<path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3"/><path d="M10 13.5h4M9 20h6M12 13.5V20"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.5a3 3 0 0 1 0 6M16.5 19a5.5 5.5 0 0 0-2-4.3"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  chatglobe:'<path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-9l-4 3v-3H4A1.5 1.5 0 0 1 2.5 15V7A1.5 1.5 0 0 1 4 5.5z"/><path d="M7 9.2h4M9 9.2v4.2M8 12.6c2.2 0 3-1.6 3-3.4"/><path d="M13.4 13.4l2-4.2 2 4.2M13.9 12.3h3"/>',
  user:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUp:'<path d="M7 17 17 7M9 7h8v8"/>',
  back:'<path d="M19 12H5M11 18l-6-6 6-6"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
  pin:'<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  link:'<path d="M9 15 15 9M10 7l1.5-1.5a4 4 0 0 1 6 6L16 12M14 17l-1.5 1.5a4 4 0 0 1-6-6L8 11"/>',
  heart:'<path d="M12 20s-7-4.3-7-10A4 4 0 0 1 12 7.2 4 4 0 0 1 19 10c0 5.7-7 10-7 10z"/>',
  chev:'<path d="m6 9 6 6 6-6"/>',
  doctor:'<path d="M4.5 3.5V8a5 5 0 0 0 10 0V3.5"/><path d="M4.5 3.5h2M12.5 3.5h2"/><path d="M9.5 13v3.5a4.5 4.5 0 0 0 9 0V14"/><circle cx="18.5" cy="11.5" r="2.5"/>',
  contract:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h3"/>',
  robot:'<rect x="4.5" y="9" width="15" height="10" rx="2.5"/><path d="M12 9V5.5"/><circle cx="12" cy="4" r="1.5"/><path d="M9 13.5v1.5M15 13.5v1.5"/><path d="M2 13.5v2M22 13.5v2"/>',
  nurse:'<path d="M19.5 12.6 12 20.5l-7.5-7.9a5 5 0 0 1 7.5-6.6 5 5 0 0 1 7.5 6.6z"/><path d="M12 8.5v5M9.5 11h5"/>',
  computer:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  meal:'<circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.8"/><path d="M3.5 3.5v4.5M3.5 21v-8"/><path d="M2 3.5v3a1.5 1.5 0 0 0 3 0v-3"/><path d="M20.5 21v-6.5"/><path d="M20.5 14.5c-1.6 0-2-2.5-2-5.5 0-2.5.8-5.5 2-5.5z"/>',
  laptop:'<path d="M5 5h14a1 1 0 0 1 1 1v9H4V6a1 1 0 0 1 1-1z"/><path d="M2 18h20l-1.5 1.5a2 2 0 0 1-1.4.5H4.9a2 2 0 0 1-1.4-.5z"/>',
  mic:'<rect x="9" y="2.5" width="6" height="11.5" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3.5M8.5 21.5h7"/>',
  gym:'<path d="m6.6 6.6 10.8 10.8"/><path d="M5.2 8 8 5.2a1.4 1.4 0 0 0-2-2L3.2 6a1.4 1.4 0 0 0 2 2z"/><path d="M16 18.8l2.8-2.8a1.4 1.4 0 0 1 2 2L18 20.8a1.4 1.4 0 0 1-2-2z"/><path d="m2.5 5.5-1 1M21.5 18.5l-1 1M5.5 2.5l-1 1M18.5 21.5l1-1"/>',
  icecream:'<path d="m7.5 11 3.6 9.4a1 1 0 0 0 1.8 0L16.5 11"/><path d="M16.8 7a4.8 4.8 0 0 0-9.6 0"/><path d="M16.8 7a1.9 1.9 0 0 1 0 3.8H7.2A1.9 1.9 0 0 1 7.2 7"/>',
  bowl:'<path d="M3.5 11.5h17a8.5 8.5 0 0 1-17 0z"/><path d="M8 11.5c0-3.8 2-6.2 5.5-7.3M15.5 5.5 17.5 3"/>',
  needle:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
  diamond:'<path d="M7 3h10l4 6-9 12L3 9z"/><path d="M3 9h18M10 3 8.5 9l3.5 12M14 3l1.5 6L12 21"/>',
  clover:'<circle cx="12" cy="6.8" r="3.3"/><circle cx="7.2" cy="13" r="3.3"/><circle cx="16.8" cy="13" r="3.3"/><path d="M12 13.5c-.4 2.5-.2 5 1.5 7.5"/>',
  sneaker:'<path d="M2.5 16.5V11A1.5 1.5 0 0 1 4 9.5h4.2l2.6 3a3.5 3.5 0 0 0 1.6 1l6.5 1.9c1.3.4 2.1 1.2 2.1 2.6v.5a1 1 0 0 1-1 1h-16a1.5 1.5 0 0 1-1.5-1.5z"/><path d="M2.5 19.5h19"/><path d="m11.4 12.8-1.5 1.5M14.2 13.8l-1.4 1.6"/>',
  handshake:'<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  moto:'<circle cx="5" cy="16.5" r="3.3"/><circle cx="19" cy="16.5" r="3.3"/><path d="M5 16.5h6l3.5-5h-5l-2-2.5H4"/><path d="M11 11.5 14 16.5M14.5 7.5h2.8l1.7 9"/>',
  drum:'<path d="M3.5 9.5c0-1.7 3.8-3 8.5-3s8.5 1.3 8.5 3-3.8 3-8.5 3-8.5-1.3-8.5-3z"/><path d="M3.5 9.5v4c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3v-4"/><path d="m6 12 12 5M18 12 6 17"/><path d="M16.5 5.5 20 2.5M18 6 21.5 4"/>',
  swim:'<circle cx="7" cy="10" r="2.6"/><circle cx="15" cy="10" r="2.6"/><path d="M9.5 9.6h3M4.5 9.4 3 8M17.5 9.4 19 8"/><path d="M3 16c1.5 0 1.5 1.3 3 1.3S10.5 16 12 16s1.5 1.3 3 1.3S19.5 16 21 16"/>',
  bike:'<circle cx="5.5" cy="16" r="3.3"/><circle cx="18.5" cy="16" r="3.3"/><path d="M5.5 16 9 8h5l3.5 8M9 8h6.5M14 8l-4.5 8"/><path d="M13 5.5h2.5"/>',
  bean:'<ellipse cx="12" cy="12" rx="6.5" ry="8.5" transform="rotate(28 12 12)"/><path d="M9 5.5c2.5 2 1.5 4.5 0 6.5s-2.5 4.5 0 6.5"/>',
  matrix:'<rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/><path d="m6 12.5 1.5 1.5 2-2.5M12 12.5l1.5 1.5 2-2.5"/>',
  hanger:'<path d="M12 6.5a2 2 0 1 1 1.4 1.9c-.9.3-1.4.9-1.4 1.6v1.5"/><path d="m12 11.5-8 5.2A1.4 1.4 0 0 0 4.8 19.5h14.4a1.4 1.4 0 0 0 .8-2.8z"/>',
  tablet:'<rect x="5" y="2.5" width="14" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
};
function svg(name,extra=''){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICON[name]||''}</svg>`;}


/* merge base (EN) story with PT-BR overrides when LANG==='ptbr' */
function locStory(cat,name){
  const base=(window.PROJECT_STORIES||{})[cat+'|'+name]||(window.PROJECT_STORIES||{})[name];
  if(!base || LANG!=='ptbr') return base;
  const ov=(window.STORY_PTBR||{})[cat+'|'+name]||(window.STORY_PTBR||{})[name];
  if(!ov) return base;
  const m=Object.assign({},base);
  ['role','period','title','intro'].forEach(k=>{ if(ov[k]!=null) m[k]=ov[k]; });
  if(ov.paragraphs) m.paragraphs=ov.paragraphs;
  if(base.timeline) m.timeline=base.timeline.map((e,i)=>{const o=(ov.timeline&&ov.timeline[i])||{};return Object.assign({},e,{text:o.text!=null?o.text:e.text,label:o.label!=null?o.label:e.label});});
  if(base.photos) m.photos=base.photos.map((p,i)=>{const o=(ov.photos&&ov.photos[i])||{};return Object.assign({},p,{label:o.label!=null?o.label:p.label});});
  if(base.sidePhoto) m.sidePhoto=Object.assign({},base.sidePhoto,(ov.sidePhoto&&ov.sidePhoto.label!=null)?{label:ov.sidePhoto.label}:{});
  if(base.links) m.links=base.links.map((l,i)=>{const o=(ov.links&&ov.links[i])||{};return Object.assign({},l,{label:o.label!=null?o.label:l.label});});
  return m;
}

/* ---- project external links (icons) ---- */
const LINK_ICON = {
  site:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7v.01"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11.5 17v-4a2 2 0 0 1 4 0v4M11.5 17v-7"/></svg>',
  youtube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10.5 9.5 4.5 2.5-4.5 2.5z"/></svg>'
};
const LINK_LABEL = { site:'Website', instagram:'Instagram', linkedin:'LinkedIn', youtube:'YouTube' };
/* esc + markdown-style [text](url) → safe inline links */
function fmt(s){
  return esc(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="inline-link">$1</a>');
}
function renderLinks(story){
  if(!story || !story.links || !story.links.length) return '';
  const mk=l=>
    '<a class="slink" href="'+l.url+'" target="_blank" rel="noopener noreferrer">'+
      (LINK_ICON[l.type]||LINK_ICON.site)+
      '<span>'+esc(l.label||LINK_LABEL[l.type]||l.type)+'</span>'+
    '</a>';
  const videos=story.links.filter(l=>l.type==='youtube');
  const social=story.links.filter(l=>l.type!=='youtube');
  // when there are both social + video links, split them: social left, videos right
  if(videos.length && social.length){
    return '<div class="story-links split">'+
      '<div class="link-grp">'+social.map(mk).join('')+'</div>'+
      '<div class="link-grp link-grp-end">'+videos.map(mk).join('')+'</div>'+
    '</div>';
  }
  return '<div class="story-links">'+story.links.map(mk).join('')+'</div>';
}

/* ---- vertical timeline (oldest → newest, alternating sides, album-style photos) ---- */
function renderTimeline(story){
  if(!story || !story.timeline || !story.timeline.length) return '';
  return '<div class="timeline">'+story.timeline.map((e,i)=>
    '<div class="tl-item '+(i%2?'tl-right':'tl-left')+'">'+
      '<span class="tl-dot"></span>'+
      '<div class="tl-card">'+
        '<div class="tl-year">'+esc(e.year)+'</div>'+
        '<p class="tl-text">'+fmt(e.text)+'</p>'+
        (e.img?'<figure class="polaroid"><img src="'+e.img+'" alt="'+esc(e.label||'')+'" loading="lazy" draggable="false" oncontextmenu="return false"></figure>':'')+
      '</div>'+
    '</div>'
  ).join('')+'</div>';
}

/* ---- equal-size photo row (all photos same size) ---- */
function renderPhotos(story){
  if(!story || !story.photos || !story.photos.length) return '';
  return '<div class="photo-row">'+story.photos.map(p=>
    '<figure class="photo-cell"><img src="'+p.src+'" alt="'+esc(p.label||'')+'" loading="lazy" draggable="false" oncontextmenu="return false"></figure>'
  ).join('')+'</div>';
}

/* ---- photo collage (masonry; small illustrative images) ---- */
function renderCollage(story){
  if(!story || !story.collage || !story.collage.length) return '';
  return '<div class="collage">'+story.collage.map(p=>
    '<figure class="collage-item">'+
      '<img src="'+p.src+'" alt="'+esc(p.label||'')+'" loading="lazy" draggable="false" oncontextmenu="return false">'+
      (p.label?'<figcaption>'+esc(p.label)+'</figcaption>':'')+
    '</figure>'
  ).join('')+'</div>';
}

/* ---- image gallery viewer (pre-rendered pages, no download) ---- */
function renderGallery(g, container){
  container.innerHTML='';
  const pad = n => String(n).padStart(g.pad||2,'0');
  for(let i=1;i<=g.count;i++){
    const src = g.dir + (g.prefix||'page-') + pad(i) + '.' + (g.ext||'jpg');
    const el=document.createElement('div');
    el.className='pdf-page'; el.style.aspectRatio=(g.ratio||'16 / 9');
    const img=document.createElement('img');
    if(i>4) img.loading='lazy';
    img.decoding='async'; img.alt='';
    img.draggable=false; img.oncontextmenu=e=>e.preventDefault();
    img.onload=()=>{el.style.aspectRatio='auto';};
    img.onerror=()=>{el.innerHTML='<span class="pdf-num">'+i+'</span>';};
    img.src=src; el.appendChild(img);
    container.appendChild(el);
  }
}

