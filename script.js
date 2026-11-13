'use strict';
/* ===== TAHRIRLASH UCHUN MA'LUMOTLAR (narxlar, aloqa, rasmlar) ===== */
const CONTACT = {
  phone: '+998 00 000 00 00 (namuna)',
  addr: 'Toshkent sh., Namuna ko\'chasi, 1-uy (namuna)',
  hours: 'Har kuni: 10:00 – 23:00',
  telegram: 'https://t.me/ozbegim_namuna',
  instagram: 'https://instagram.com/ozbegim_namuna'
};
/* Rasm kalitlari: kerak bo'lsa IMG ichida o'z rasm havolalaringizni yozing */
const KW = {plov:'plov,pilaf,rice',somsa:'samosa,pastry',manti:'dumplings,steamed',lagman:'noodles,soup',shashlik:'kebab,skewer',
  norin:'noodles,meat',chuchvara:'dumplings,soup',dimlama:'stew,vegetables',mastava:'soup,rice',shorva:'soup,lamb',salat:'tomato,salad',
  qozon:'grilled,meat',choy:'tea,teapot',ayron:'yogurt,drink',interior:'restaurant,interior',chef:'chef,cooking',table:'dinner,table',
  fresh:'vegetables,spices',tandir:'bread,oven',milliy:'plov,uzbek',kabob:'kebab',xamir:'dumplings',offer:'feast,dinner'};
const IMG = {}; // masalan: IMG.plov = 'rasmlar/plov.jpg'
const fmt = n => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ') + " so'm";
const ph = t => 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#111"/><stop offset="1" stop-color="#FF4500"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><text x="400" y="320" font-size="54" fill="#fff" text-anchor="middle" font-family="Georgia">${t}</text></svg>`);
const imgUrl = (k, w = 800, h = 600) => IMG[k] || `https://loremflickr.com/${w}/${h}/${KW[k] || 'food'}?lock=${[...k].reduce((a, c) => a + c.charCodeAt(0), 0)}`;
function fillImg(img, k, w, h, label) {
  img.loading = img.classList.contains('hero-img') ? 'eager' : 'lazy';
  img.onerror = () => { img.onerror = null; img.src = ph(label || k); };
  img.src = imgUrl(k, w, h);
}
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ===== Ma'lumotlar ===== */
const DISHES = [
  {id:1,n:"O'zbek palovi",c:'milliy',p:35000,k:'plov',r:5,d:"Qozonda, yog'da dimlangan guruch, mol go'shti va sariq sabzi."},
  {id:2,n:'Tandir somsa',c:'xamir',p:15000,k:'somsa',r:5,d:"Tandirda pishgan, go'shtli va piyozli qatlama somsa."},
  {id:3,n:'Manti',c:'xamir',p:30000,k:'manti',r:5,d:"Bug'da pishirilgan, go'sht va piyoz soluvchi yumshoq manti."},
  {id:4,n:"Lag'mon",c:'xamir',p:32000,k:'lagman',r:4,d:"Qo'lda cho'zilgan lag'mon, sabzavot va go'shtli quyuq sho'rva bilan."},
  {id:5,n:'Shashlik',c:'kabob',p:25000,k:'shashlik',r:5,d:"Ko'mirda pishirilgan, piyoz bilan beriladigan mazali shashlik."},
  {id:6,n:'Norin',c:'milliy',p:35000,k:'norin',r:4,d:"Ingichka kesilgan xamir va ot go'shtidan tayyorlangan an'anaviy taom."},
  {id:7,n:'Chuchvara',c:'xamir',p:28000,k:'chuchvara',r:5,d:"Mayda chuchvaralar, issiq sho'rva va ko'katlar bilan."},
  {id:8,n:'Dimlama',c:'milliy',p:38000,k:'dimlama',r:4,d:"Go'sht va mavsumiy sabzavotlar o'z sharbatida dimlanadi."},
  {id:9,n:'Mastava',c:"sho'rva",p:25000,k:'mastava',r:4,d:"Guruchli, go'shtli va sabzavotli to'yimli sho'rva."},
  {id:10,n:"Sho'rva",c:"sho'rva",p:30000,k:'shorva',r:5,d:"Qo'y go'shtidan, katta bo'lak sabzavotlar bilan qaynatilgan sho'rva."},
  {id:11,n:'Achchiq-chuchuk',c:'salat',p:12000,k:'salat',r:4,d:"Pomidor, piyoz va achchiq qalampirdan yengil salat."},
  {id:12,n:'Qozon kabob',c:'kabob',p:45000,k:'qozon',r:5,d:"Qozonda qovurilgan go'sht va kartoshka, ko'katlar bilan."},
  {id:13,n:"Ko'k choy",c:'ichimlik',p:8000,k:'choy',r:5,d:"Choynakda damlangan issiq ko'k choy."},
  {id:14,n:'Ayron',c:'ichimlik',p:10000,k:'ayron',r:4,d:"Sovuq, tuzli va yoqimli quyuq ayron."}
];
const OFFERS = [
  {id:101,n:'Kun taomi',k:'plov',d:"Bugungi maxsus palov va salat.",o:50000,p:39000},
  {id:102,n:'Oilaviy dasturxon',k:'offer',d:"4 kishilik: palov, somsa, salat va choy.",o:190000,p:149000},
  {id:103,n:'Mazali tushlik',k:'mastava',d:"Sho'rva, non va choy — 12:00 dan 15:00 gacha.",o:45000,p:35000},
  {id:104,n:'Maxsus chegirmalar',k:'shashlik',d:"Har 5 ta shashlikka 1 ta tekin somsa.",o:60000,p:48000}
];
const CATS = [['milliy','Milliy taomlar'],["sho'rva","Sho'rvalar"],['kabob','Kaboblar'],['xamir','Xamirli taomlar'],['salat','Salatlar'],['ichimlik','Ichimliklar']];
const REVIEWS = [
  ['Aziza Karimova',5,"Palovi juda mazali, xuddi bobomning qo'lidagidek! Xizmat ham a'lo darajada."],
  ['Jasur Rahimov',5,"Tandir somsa issiq va xushbo'y. Oilam bilan har hafta kelamiz."],
  ['Malika Yusupova',4,"Lag'mon va manti juda yoqdi. Muhit shinam, xodimlar samimiy."],
  ['Bobur Toshmatov',5,"Shashlik ko'mirda pishgan, go'shti yumshoq. Tavsiya qilaman!"],
  ['Dilnoza Aliyeva',5,"Buyurtmani tez yetkazib berishdi, taomlar issiq keldi. Rahmat!"]
];
const GAL = [['plov','Milliy taomlar'],['interior','Restoran ichki ko\'rinishi'],['table','An\'anaviy dasturxon'],['chef','Oshpazlar ish jarayonida'],['fresh','Yangi masalliqlar'],['tandir','Tandirda pishirish jarayoni']];
const ALL = [...DISHES, ...OFFERS.map(o => ({...o, c:'offer'}))];
const byId = id => ALL.find(x => x.id === id);
const stars = n => '★'.repeat(n) + '☆'.repeat(5 - n);

/* ===== Savatcha ===== */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('ozbegim_cart')) || []; } catch { cart = []; }
cart = cart.filter(i => byId(i.id));
const total = () => cart.reduce((s, i) => s + byId(i.id).p * i.q, 0);
const count = () => cart.reduce((s, i) => s + i.q, 0);
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2200); }
function saveCart() { try { localStorage.setItem('ozbegim_cart', JSON.stringify(cart)); } catch {} renderCart(); }
function add(id, silent) {
  const it = cart.find(i => i.id === id); it ? it.q++ : cart.push({id, q:1});
  saveCart(); const b = $('.cart-btn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  if (!silent) toast(`«${byId(id).n}» savatchaga qo'shildi`);
}
function change(id, d) { const it = cart.find(i => i.id === id); if (!it) return; it.q += d; if (it.q < 1) cart = cart.filter(i => i !== it); saveCart(); }
function renderCart() {
  $('#cartCount').textContent = count();
  $('#cartTotal').textContent = fmt(total());
  $('#cartBody').innerHTML = cart.length ? cart.map(i => { const f = byId(i.id); return `<div class="ci"><img data-k="${f.k}" alt="${f.n}"><div><h4>${f.n}</h4><small>${fmt(f.p)}</small><div class="qty"><button data-d="-1" data-id="${f.id}" aria-label="Kamaytirish">−</button><b>${i.q}</b><button data-d="1" data-id="${f.id}" aria-label="Ko'paytirish">+</button></div></div><button class="rm" data-rm="${f.id}" aria-label="O'chirish">×</button></div>`; }).join('')
    : '<p class="empty">Savatchangiz hozircha bo\'sh.<br>Mazali taomlarni tanlang!</p>';
  $$('#cartBody img').forEach(im => fillImg(im, im.dataset.k, 128, 128, im.alt));
}
$('#cartBody').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.d) change(+b.dataset.id, +b.dataset.d);
  if (b.dataset.rm) { cart = cart.filter(i => i.id !== +b.dataset.rm); saveCart(); }
});

/* ===== Panel / modal boshqaruvi ===== */
const ov = $('#ov');
function openPanel(el) { closeAll(); el.classList.add('open'); ov.classList.add('on'); document.body.classList.add('lock'); }
function closeAll() { $$('.cart.open,.modal.open').forEach(e => e.classList.remove('open')); ov.classList.remove('on'); document.body.classList.remove('lock'); }
$('#cartOpen').addEventListener('click', () => openPanel($('#cart')));
ov.addEventListener('click', closeAll);
$$('[data-close]').forEach(b => b.addEventListener('click', closeAll));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeAll(); closeLb(); } });
function openCheckout() {
  if (!cart.length) { toast("Avval savatchaga taom qo'shing"); openPanel($('#cart')); return; }
  $('#orderForm').hidden = false; $('#done').hidden = true; $('#oErr').textContent = '';
  $('#sumList').innerHTML = cart.map(i => `<li><span>${byId(i.id).n} × ${i.q}</span><span>${fmt(byId(i.id).p * i.q)}</span></li>`).join('');
  $('#sumQty').textContent = count(); $('#sumTotal').textContent = fmt(total());
  openPanel($('#modal'));
}
document.addEventListener('click', e => {
  const o = e.target.closest('[data-order]'); if (o) { if (o.dataset.add) add(+o.dataset.add, true); openCheckout(); }
  const a = e.target.closest('[data-add]:not([data-order])'); if (a) add(+a.dataset.add);
  const d = e.target.closest('[data-detail]'); if (d) showDetail(+d.dataset.detail);
});
function showDetail(id) {
  const f = byId(id);
  $('#detailBody').innerHTML = `<img data-k="${f.k}" alt="${f.n}" style="width:100%;height:280px;border-radius:12px;margin-bottom:1rem"><h3>${f.n}</h3><div class="stars">${stars(f.r || 5)}</div><p style="color:var(--mut);margin:.6rem 0">${f.d}</p><p class="pr" style="margin-bottom:1rem">${fmt(f.p)}</p><div class="acts"><button class="btn" data-add="${f.id}">Savatchaga qo'shish</button><button class="btn ghost" data-order data-add="${f.id}">Buyurtma berish</button></div>`;
  const im = $('#detailBody img'); fillImg(im, f.k, 900, 560, f.n);
  openPanel($('#detail'));
}

/* ===== Formalar ===== */
const phoneOk = v => { const d = v.replace(/\D/g, ''); return /^[\d\s()+-]+$/.test(v) && d.length >= 9 && d.length <= 12; };
function validate(form, err) {
  let msg = '';
  $$('input[required],textarea[required]', form).forEach(f => {
    const bad = !f.value.trim() || (f.type === 'tel' && !phoneOk(f.value));
    f.classList.toggle('bad', bad);
    if (bad && !msg) msg = f.type === 'tel' && f.value.trim() ? "Telefon raqamini to'g'ri kiriting (masalan: +998 90 123 45 67)." : "Iltimos, barcha majburiy maydonlarni to'ldiring.";
  });
  err.textContent = msg; return !msg;
}
$('#orderForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validate(e.target, $('#oErr'))) return;
  cart = []; saveCart(); e.target.reset(); e.target.hidden = true; $('#done').hidden = false;
});
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validate(e.target, $('#cErr'))) return;
  e.target.reset(); toast("Xabaringiz yuborildi. Rahmat!");
});

/* ===== Slayder ===== */
function slider(root, track, pvFn, autoMs) {
  const slides = $$('.slide', track); let i = 0, pv = 1, timer, startX = null;
  const max = () => Math.max(0, slides.length - pv);
  const dots = $('.dots', root);
  function build() {
    pv = pvFn(); root.style.setProperty('--pv', pv); i = Math.min(i, max());
    dots.innerHTML = Array.from({length: max() + 1}, (_, n) => `<button aria-label="${n + 1}-slayd"></button>`).join(''); go(i);
  }
  function go(n) {
    i = n > max() ? 0 : n < 0 ? max() : n;
    track.style.transform = `translateX(-${i * 100 / pv}%)`;
    $$('button', dots).forEach((b, k) => b.classList.toggle('on', k === i));
  }
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), autoMs); };
  $('.prev', root).addEventListener('click', () => { go(i - 1); auto(); });
  $('.next', root).addEventListener('click', () => { go(i + 1); auto(); });
  dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { go($$('button', dots).indexOf(b)); auto(); } });
  root.addEventListener('mouseenter', () => clearInterval(timer)); root.addEventListener('mouseleave', auto);
  root.addEventListener('touchstart', e => { startX = e.touches[0].clientX; clearInterval(timer); }, {passive:true});
  root.addEventListener('touchend', e => { if (startX === null) return; const dx = e.changedTouches[0].clientX - startX; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); startX = null; auto(); });
  addEventListener('resize', build); build(); auto();
}

/* ===== Render ===== */
function foodCard(f, slide) {
  return `<article class="fcard${slide ? '' : ' pop'}"><div class="im"><img data-k="${f.k}" alt="${f.n} — o'zbek milliy taomi"></div><div class="fb"><h3>${f.n}</h3><div class="stars" aria-label="${f.r} yulduz">${stars(f.r)}</div><p>${f.d}</p><span class="pr">${fmt(f.p)}</span><div class="acts">${slide
    ? `<button class="btn o" data-detail="${f.id}">Batafsil</button><button class="btn" data-order data-add="${f.id}">Buyurtma berish</button>`
    : `<button class="btn o" data-add="${f.id}">Savatchaga qo'shish</button><button class="btn" data-order data-add="${f.id}">Buyurtma berish</button>`}</div></div></article>`;
}
const hydrate = r => $$('img[data-k]:not([src])', r).forEach(im => fillImg(im, im.dataset.k, +im.dataset.w || 800, +im.dataset.h || 600, im.alt));
function renderMenu(cat) {
  const list = cat ? DISHES.filter(d => d.c === cat) : DISHES;
  $('#menuGrid').innerHTML = list.map(f => foodCard(f)).join('');
  const nm = cat && CATS.find(c => c[0] === cat)[1];
  $('#filterInfo').innerHTML = cat ? `Tanlangan: <b style="color:var(--or)">${nm}</b> · <button class="btn sm" id="reset">Barchasini ko'rsatish</button>` : 'Barcha taomlar';
  hydrate($('#menuGrid'));
}
$('#foodTrack').innerHTML = DISHES.slice(0, 8).map(f => `<div class="slide">${foodCard(f, true)}</div>`).join('');
$('#cats').innerHTML = CATS.map(([k, t]) => `<button class="cat rv" data-cat="${k}"><img data-k="${k === "sho'rva" ? 'shorva' : k === 'ichimlik' ? 'choy' : k}" data-w="500" data-h="400" alt="${t}"><span>${t}</span></button>`).join('');
$('#cats').addEventListener('click', e => {
  const b = e.target.closest('.cat'); if (!b) return;
  const on = b.classList.contains('on'); $$('.cat').forEach(c => c.classList.remove('on'));
  if (!on) b.classList.add('on'); renderMenu(on ? null : b.dataset.cat);
  $('#menyu').scrollIntoView({behavior:'smooth'});
});
$('#filterInfo').addEventListener('click', e => { if (e.target.id === 'reset') { $$('.cat').forEach(c => c.classList.remove('on')); renderMenu(); } });
$('#offers').innerHTML = OFFERS.map(o => `<article class="fcard rv"><div class="im"><span class="badge">-${Math.round((1 - o.p / o.o) * 100)}%</span><img data-k="${o.k}" alt="${o.n} — maxsus taklif"></div><div class="fb"><h3>${o.n}</h3><p>${o.d}</p><div><span class="old">${fmt(o.o)}</span><span class="pr">${fmt(o.p)}</span></div><button class="btn" data-order data-add="${o.id}">Buyurtma berish</button></div></article>`).join('');
$('#gal').innerHTML = GAL.map(([k, t], n) => `<button data-n="${n}" class="rv"><img data-k="${k}" data-w="900" data-h="700" alt="${t}"></button>`).join('');
$('#revTrack').innerHTML = REVIEWS.map(([n, r, t]) => `<div class="slide"><div class="rcard"><div class="av" aria-hidden="true">${n[0]}</div><h3>${n}</h3><div class="stars">${stars(r)}</div><p>«${t}»</p></div></div>`).join('');
$('#info').innerHTML = `<li><b>Telefon</b>${CONTACT.phone}</li><li><b>Manzil</b>${CONTACT.addr}</li><li><b>Ish vaqti</b>${CONTACT.hours}</li><li><b>Telegram</b><a href="${CONTACT.telegram}" target="_blank" rel="noopener">${CONTACT.telegram}</a></li><li><b>Instagram</b><a href="${CONTACT.instagram}" target="_blank" rel="noopener">${CONTACT.instagram}</a></li>`;
$('[data-c=phone]').textContent = CONTACT.phone; $('[data-c=addr]').textContent = CONTACT.addr; $('[data-c=hours]').textContent = CONTACT.hours;
$$('.soc a')[0].href = CONTACT.telegram; $$('.soc a')[1].href = CONTACT.instagram;
renderMenu(); renderCart(); hydrate(document);
slider($('#foodSlider'), $('#foodTrack'), () => innerWidth < 640 ? 1 : innerWidth < 960 ? 2 : 3, 4500);
slider($('#revSlider'), $('#revTrack'), () => 1, 5500);

/* ===== Lightbox ===== */
let lbI = 0; const lb = $('#lb');
function showLb(n) { lbI = (n + GAL.length) % GAL.length; const im = $('img', lb); im.alt = GAL[lbI][1]; im.onerror = () => { im.onerror = null; im.src = ph(GAL[lbI][1]); }; im.src = imgUrl(GAL[lbI][0], 1200, 800); }
function closeLb() { lb.classList.remove('open'); }
$('#gal').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { showLb(+b.dataset.n); lb.classList.add('open'); } });
$('.prev', lb).addEventListener('click', () => showLb(lbI - 1)); $('.next', lb).addEventListener('click', () => showLb(lbI + 1));
$('.x', lb).addEventListener('click', closeLb); lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => { if (!lb.classList.contains('open')) return; if (e.key === 'ArrowLeft') showLb(lbI - 1); if (e.key === 'ArrowRight') showLb(lbI + 1); });

/* ===== Navigatsiya, scroll ===== */
const nav = $('#nav'), burger = $('#burger');
burger.addEventListener('click', () => { nav.classList.toggle('open'); burger.classList.toggle('open'); });
$$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.classList.remove('open'); }));
addEventListener('scroll', () => $('#hdr').classList.toggle('solid', scrollY > 40), {passive:true});
const secMap = {bosh:'bosh',taomlar:'taomlar',kategoriya:'menyu',menyu:'menyu',haqimizda:'haqimizda',takliflar:'haqimizda',galereya:'galereya',fikrlar:'fikrlar',aloqa:'aloqa'};
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const t = secMap[e.target.id]; $$('#nav a').forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + t)); } }), {rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s => spy.observe(s));
const rvObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rvObs.unobserve(e.target); } }), {threshold:.12});
$$('.rv').forEach((el, n) => { el.style.transitionDelay = (n % 6) * 70 + 'ms'; rvObs.observe(el); });
