/* ===== Sections + projects (company name only for now) ===== */
window.SECTIONS = [
  { id:'home',        icon:'home',   group:'general' },
  { id:'marketing',   icon:'chart',  group:'portfolio', projects:[
      'Unimed','Almanza','Darkmatter','Zeta Marketing','Workfit.pt','Mamma Jamma',
      'Algar','Artists','Mr Fritz','Equilíbrio Studio'
  ]},
  { id:'branding',    icon:'pen',    group:'portfolio', projects:[
      'Nevata','Musa','Tattool','EL Jóias'
  ]},
  { id:'ai',          icon:'spark',  group:'portfolio', projects:[
      'Sklad','Combaine','Marketrix'
  ]},
  { id:'communities', icon:'users',  group:'portfolio', pat:['bn-e','bn-a','bn-d','bn-c','bn-e'], projects:[
      'Edublin','Founders Running Club','351 Startup','MotoGP Brasil','Co.Labora'
  ]},
  { id:'offtopic',    icon:null,     group:'portfolio', hideCount:true, titleKey:'offtopic_title', projects:[
      'Drummer','Motorcyclist','Triathlete','Barista'
  ]},
];

/* per-project brand colors (overrides the hash) */
window.PROJECT_ART = {
  'Unimed':        'art-unimed',
  'Almanza':       'art-almanza',
  'Darkmatter':    'art-darkmatter',
  'Workfit.pt':    'art-workfit',
  'Zeta Marketing':'art-zeta',
  'Algar':         'art-algar',
  'Mr Fritz':      'art-mrfritz',
  'Mamma Jamma':   'art-mamma',
  'Artists':       'art-artists',
  'Equilíbrio Studio':'art-equilibrio',
  'Nevata':        'art-nevata',
  'Musa':          'art-musa',
  'Tattool':       'art-tattool',
  'EL Jóias':      'art-eljoias',
  'Edublin':       'art-edublin',
  'Founders Running Club':'art-frc',
  '351 Startup':   'art-351',
  'Co.Labora':     'art-mamma',
  'MotoGP Brasil': 'art-motogp',
  'Drummer':       'art-drummer',
  'Motorcyclist':  'art-motorcyclist',
  'Triathlete':    'art-triathlete',
  'Barista':       'art-barista',
  'Marketrix':     'art-marketrix',
  'Combaine':  'art-yellowshoes'
};

/* card metadata: theme label + icon */
window.PROJECT_META = {
  'Unimed':        { theme:'Health',             icon:'doctor' },
  'Almanza':       { theme:'Insurance',          icon:'contract' },
  'Darkmatter':    { theme:'AI Consulting',      icon:'robot' },
  'Workfit.pt':    { theme:'Health',             icon:'nurse' },
  'Zeta Marketing':{ theme:'Advertising',        icon:'computer' },
  'Mamma Jamma':   { theme:'Food',               icon:'meal' },
  'Mr Fritz':      { theme:'Food & Franchising', icon:'meal' },
  'Algar':         { theme:'Tech Consulting',    icon:'laptop' },
  'Artists':       { theme:'Entertainment',      icon:'mic' },
  'Equilíbrio Studio':{ theme:'Fitness & Pilates', icon:'gym' },
  'Nevata':        { theme:'Artisanal Ice Creams', icon:'icecream' },
  'Musa':          { theme:'Fresh Foods',        icon:'bowl' },
  'Tattool':       { theme:'SaaS',               icon:'tablet' },
  'EL Jóias':      { theme:'Handmade Jewelry',   icon:'diamond' },
  'Edublin':       { icon:'clover' },
  'Founders Running Club':{ icon:'sneaker' },
  '351 Startup':   { icon:'computer' },
  'Co.Labora':     { icon:'handshake' },
  'MotoGP Brasil': { icon:'moto' },
  'Drummer':       { icon:'drum' },
  'Motorcyclist':  { icon:'moto' },
  'Triathlete':    { icons:['swim','sneaker','bike'] },
  'Barista':       { icon:'bean' },
  'Marketrix':     { icon:'matrix' },
  'Combaine':  { icon:'hanger' },
  'Sklad':         { icon:'chatglobe' }
};

/* deterministic gradient picker so a project always gets the same art */
window.artFor = function(name){
  if(window.PROJECT_ART && window.PROJECT_ART[name]) return window.PROJECT_ART[name];
  let h=0; for(let i=0;i<name.length;i++) h=(h*31+name.charCodeAt(i))>>>0;
  return 'art'+((h%8)+1);
};

/* projects that have a presentation to view in-card (no download) */
/* IMAGE GALLERIES (preferred — bulletproof). Fill once page images are added:
   'Nevata': { dir:'assets/nevata/', count:33, ext:'jpg' }  → expects page-01.jpg … page-33.jpg */
window.PROJECT_GALLERIES = {
  'Nevata':   { dir:'assets/nevata/pages/',  count:33, ext:'jpg' },
  'EL Jóias': { dir:'assets/eljoias/pages/', count:10, ext:'jpg' },
  'Tattool':  { dir:'assets/tattool/pages/', count:15, ext:'jpg' },
  'Musa':     { dir:'assets/musa/pages/',    count:26, ext:'jpg' },
};

/* PDF fallback (works in a real browser; can render imperfectly on some files) */
window.PROJECT_DOCS = {};
window.DOC_LABEL = { en:'Presentation', ptbr:'Apresentação', ptpt:'Apresentação', es:'Presentación', fr:'Présentation', de:'Präsentation', it:'Presentazione' };

/* per-project partnership credit — replaces the "Presentation" tag. {name,url} */
window.PROJECT_CREDITS = {
  'Nevata':   { name:'Raphael Lalli',  url:'https://raphalalli.com.br/' },
  'Musa':     { name:'Raphael Lalli',  url:'https://raphalalli.com.br/' },
  'Tattool':  { name:'Paulo Ribeiro',  url:'https://pauloribeiro.me/' },
  'EL Jóias': { name:'V. Neto',        url:'https://www.valdivinoneto.squarespace.com' },
};
