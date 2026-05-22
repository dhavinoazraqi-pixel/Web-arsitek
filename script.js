// ─── UNLOCK STATE (persisted in sessionStorage) ────────────────
function getUnlocked() {
  try { return JSON.parse(sessionStorage.getItem('unlocked') || '[]'); } catch(e) { return []; }
}
function setUnlocked(arr) { sessionStorage.setItem('unlocked', JSON.stringify(arr)); }
function isUnlocked(chapId) {
  const u = getUnlocked();
  return chapId === 1 || u.includes('full') || u.includes(chapId);
}

// ─── CHAPTER DATA ──────────────────────────────────────────────
const chapters = [
  {
    id: 1,
    title: "BAB 1 — Apa yang kamu dapat dari metode otomatisasi?",
    meta: "1 Materi · Pengenalan",
    price: 0,
    lessons: [
      { slug: "bab1-pengenalan.html",
        name: "Pentingnya menguasai metode ini",
        type: "📖", typeLabel: 
        "Bacaan", free: true }
    ]
  },
  {
    id: 2,
    title: "BAB 2 — Otomatisasi Dinding",
    meta: "10 Video · 1 File Eksklusif",
    price: 75000,
    lessons: [
      { slug: "videobab2.html", 
        name: "Overview otomatisasi dinding",
        type: "🎬", 
        typeLabel: "Video", 
        preview: true },
    
      { slug: "bab2exlcusivetools.html", 
        name: "Exclusive tools (Plugin Eksklusif)", 
        type: "📁",
        typeLabel: "File" },
    
      { slug: "bab2-file-pendukung",
        name: "File pendukung Eksklusif", 
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab2-generic",
        name: "Otomatisasi dinding generic", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab2-anotasi",
        name: "Otomatisasi dinding dengan anotasi", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab2-detail", 
        name: "Otomatisasi dinding dengan detail lanjutan",
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab2-kompleks",
        name: "Otomatisasi dinding kompleks", 
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab2-modifikasi",
        name: "Modifikasi dinding", 
        type: "🎬", typeLabel: "Video" },
    
      { slug: "bab2-autotag", 
        name: "Memanfaatkan auto tag sebagai layer dinding",
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab2-save-assembly", 
        name: "Kapan waktu yang tepat untuk save assembly?",
        type: "🎬", typeLabel: "Video" },
    
      { slug: "bab2-custom", 
        name: "Dinding dengan bentuk custom", 
        type: "🎬", 
        typeLabel: "Video" },
    ]
  },
  {
    id: 3,
    title: "BAB 3 — Otomatisasi Struktur",
    meta: "10 Video · 2 File Eksklusif",
    price: 75000,
    lessons: [
      { slug: "bab3-overview", 
        name: "Overview Otomatisasi Struktur",
        type: "🎬", 
        typeLabel: "Video",
        preview: false },
    
      { slug: "bab3-file-struktur",
        name: "Exclusive files (otomatisasi modelling struktur)",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab3-modelling-cepat",
        name: "Otomatisasi Modelling struktur secara cepat",
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab3-tabrakan", 
        name: "Otomatisasi penyesuaian struktur yang bertabrakan",
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab3-modifikasi",
        name: "Modifikasi struktur yang telah terbuat",
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab3-dinding-struktur", 
        name: "Menyesuaikan dinding pada struktur", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab3-ext-pendetailan", 
        name: "Exclusive Extension (tools pendetailan struktur)",
        type: "📁",
        typeLabel: "File" },
    
      { slug: "bab3-detail-kolom",
        name: "Otomatisasi detail kolom",
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab3-detail-sloof", 
        name: "Otomatisasi detail sloof", 
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab3-detail-balok",
        name: "Otomatisasi detail balok menerus", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab3-ded-3d", 
        name: "Otomatisasi DED struktur dari 3D model", 
        type: "🎬",
        typeLabel: "Video" },
    ]
  },
  {
    id: 4,
    title: "BAB 4 — Otomatisasi Pondasi",
    meta: "6 Video · 2 File Eksklusif",
    price: 60000,
    lessons: [
      { slug: "bab4-overview", 
        name: "Overview otomatisasi pondasi", 
        type: "🎬", 
        typeLabel: "Video", 
        preview: false },
    
      { slug: "bab4-file-pondasi", 
        name: "Exclusive file (File otomatisasi pondasi)",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab4-batu-kali", 
        name: "Otomatisasi pondasi batu kali", 
        type: "🎬",
        typeLabel: "Video" },
      { slug: "bab4-footplate",
        name: "Otomatisasi pondasi footplate", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab4-modelling-tanah",
        name: "Exclusive tools (Modelling tanah detail)",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab4-tanah-detail",
        name: "Modelling struktur tanah detail dan cepat", 
        type: "🎬", 
        typeLabel: "Video" },
    ]
  },
  {
    id: 5,
    title: "BAB 5 — Otomatisasi Lantai Detail",
    meta: "5 Video · 1 File Eksklusif",
    price: 55000,
    lessons: [
      { slug: "bab5-overview", 
        name: "Overview otomatisasi modelling lantai detail", 
        type: "🎬", 
        typeLabel: "Video",
        preview: false },
    
      { slug: "bab5-tools-lantai", 
        name: "Exclusive tools (otomatisasi lapisan lantai & pola)", 
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab5-lapisan",
        name: "Otomatisasi detail lapisan lantai", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab5-keramik", 
        name: "Otomatisasi pola keramik", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab5-paving", 
        name: "Otomatisasi pola paving", 
        type: "🎬",
        typeLabel: "Video" },
    ]
  },
  {
    id: 6,
    title: "BAB 6 — Otomatisasi Bukaan (Pintu & Jendela)",
    meta: "8 Video · 3 File Eksklusif",
    price: 75000,
    lessons: [
      { slug: "bab6-overview",
        name: "Overview otomatisasi bukaan",
        type: "🎬", 
        typeLabel: "Video",
        preview: false },
    
      { slug: "bab6-tools-bukaan", 
        name: "Exclusive tools (Bukaan dinding otomatis)", 
        type: "📁",
        typeLabel: "File" },
    
      { slug: "bab6-pintu-jendela", 
        name: "Otomatisasi bukaan pintu dan jendela", 
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab6-anotasi-pj",
        name: "Exclusive files (Anotasi pintu & jendela auto resized)", 
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab6-gambar-kerja-pj",
        name: "Anotasi gambar kerja pintu & jendela",
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab6-pintu-3d",
        name: "Exclusive files (Pintu 3D lengkap dengan 2D)", 
        type: "📁",
        typeLabel: "File" },
    
      { slug: "bab6-otomatis-3d",
        name: "Otomatisasi pintu 3D lengkap dengan 2D sekaligus",
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab6-drag-drop", 
        name: "Pintu jendela hanya dengan drag & drop",
        type: "🎬", 
        typeLabel: "Video" },
    ]
  },
  {
    id: 7,
    title: "BAB 7 — Otomatisasi Tangga",
    meta: "5 Video · 2 File Eksklusif",
    price: 60000,
    lessons: [
      { slug: "bab7-overview", 
        name: "Overview otomatisasi modelling tangga",
        type: "🎬", 
        typeLabel: "Video", 
        preview: false },
    
      { slug: "bab7-file-tangga", 
        name: "Exclusive files (tangga otomatis menyesuaikan ukuran)",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab7-ukuran", 
        name: "Tangga otomatis menyesuaikan ukuran", 
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab7-tools-tangga", 
        name: "Exclusive tools (otomatisasi modelling tangga)",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab7-custom", 
        name: "Otomatisasi tangga custom", 
        type: "🎬", 
        typeLabel: "Video" },
    ]
  },
  {
    id: 8,
    title: "BAB 8 — Otomatisasi Plafond",
    meta: "4 Video · 1 File Eksklusif",
    price: 55000,
    lessons: [
      { slug: "bab8-overview", 
        name: "Overview otomatisasi plafond", 
        type: "🎬",
        typeLabel: "Video",
        preview: false },
    
      { slug: "bab8-file-plafon", 
        name: "Exclusive file (otomatisasi rangka plafon)",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab8-rangka", 
        name: "Otomatisasi rangka plafon detail", 
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab8-panel",
        name: "Otomatisasi panel plafon",
        type: "🎬", 
        typeLabel: "Video" },
    ]
  },
  {
    id: 9,
    title: "BAB 9 — Otomatisasi Atap",
    meta: "7 Video · 3 File Eksklusif",
    price: 70000,
    lessons: [
      { slug: "bab9-overview", 
        name: "Overview otomatisasi atap",
        type: "🎬", 
        typeLabel: "Video",
        preview: false },
    
      { slug: "bab9-tools-kuda", 
        name: "Exclusive tools (Otomatisasi rangka kuda kuda)",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab9-kuda-kuda", 
        name: "Otomatisasi rangka kuda kuda", 
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab9-file-reng",
        name: "Exclusive file (otomatisasi rangka reng atap)",
        type: "📁",
        typeLabel: "File" },
    
      { slug: "bab9-reng",
        name: "Otomatisasi rangka reng atap",
        type: "🎬", 
        typeLabel: "Video" },
    
      { slug: "bab9-file-genteng",
        name: "Exclusive file Otomatisasi genteng detail realistis",
        type: "📁", 
        typeLabel: "File" },
    
      { slug: "bab9-genteng", 
        name: "Otomatisasi genting detail realistis", 
        type: "🎬",
        typeLabel: "Video" },
    ]
  },
  {
    id: 10,
    title: "BAB 10 — Otomatisasi DED dari 3D Model",
    meta: "4 Video · 1 File Eksklusif",
    price: 70000,
    lessons: [
      { slug: "bab10-file-ded",
        name: "Exclusive tools & files (otomatisasi gambar kerja)", 
        type: "📁",
        typeLabel: "File" },
    
      { slug: "bab10-overview",
        name: "Overview otomatisasi DED gambar kerja dari 3D model",
        type: "🎬", 
        typeLabel: "Video", 
        preview: false },
    
      { slug: "bab10-denah", 
        name: "Otomatisasi denah dari 3D lengkap dengan anotasi",
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab10-potongan",
        name: "Otomatisasi potongan dari 3D lengkap dengan anotasi",
        type: "🎬",
        typeLabel: "Video" },
    ]
  },
  {
    id: 11,
    title: "BAB 11 — Otomatisasi Dimensi Gambar Kerja / DED",
    meta: "5 Video · 1 File Eksklusif",
    price: 65000,
    lessons: [
      { slug: "bab11-overview", 
        name: "Overview otomatisasi dimensi gambar kerja", 
        type: "🎬", 
        typeLabel: "Video", 
        preview: false },
    
      { slug: "bab11-tools-dimensi",
        name: "Exclusive tools (otomatisasi dimensi gambar kerja)", 
        type: "📁",
        typeLabel: "File" },
    
      { slug: "bab11-denah", 
        name: "Otomatisasi dimensi denah",
        type: "🎬",
        typeLabel: "Video" },
    
      { slug: "bab11-elevasi", 
        name: "Otomatisasi dimensi elevasi potongan",
        type: "🎬", 
        typeLabel: "Video" },
    ]
  }
];

// ─── RENDER ───────────────────────────────────────────────────
function renderChapters() {
  const wrap = document.getElementById('chaptersWrap');
  wrap.innerHTML = '';
  chapters.forEach(ch => {
    const unlocked = isUnlocked(ch.id);
    const card = document.createElement('div');
    card.className = `chapter-card ${unlocked ? 'unlocked' : 'locked'}`;
    card.id = `chapter-${ch.id}`;

    const badgeHtml = unlocked
      ? `<span class="chapter-badge badge-free">✓ ${ch.id === 1 ? 'Gratis' : 'Terbuka'}</span>`
      : `<span class="chapter-badge badge-lock">🔒 Berbayar</span>`;
    const toggleHtml = `<span class="chapter-toggle">▼</span>`;

    card.innerHTML = `
      <div class="chapter-header" onclick="toggleChapter(${ch.id})">
        <div class="chapter-number">B${ch.id}</div>
        <div class="chapter-info">
          <h3>${ch.title}</h3>
          <div class="chapter-meta">${ch.meta}</div>
        </div>
        ${badgeHtml}
        ${toggleHtml}
      </div>
      ${renderLessons(ch, unlocked)}
    `;
    wrap.appendChild(card);
  });

  // Auto-open BAB 1
  document.getElementById('chapter-1').classList.add('open');
}

function renderLessons(ch, unlocked) {
  const rows = ch.lessons.map(l => {
    const canOpen = unlocked || l.preview;
    if (canOpen) {
      return `<div class="lesson-item clickable" onclick="openLesson('${l.slug}', ${ch.id}, '${escapeAttr(l.name)}')">
        <span class="lesson-icon">${l.type}</span>
        <span class="lesson-name">${l.name}</span>
        <span class="lesson-tag ${l.free !== false && !l.preview ? 'tag-free' : 'tag-preview'}">${l.free !== false && ch.id === 1 ? 'Gratis' : 'Preview'}</span>
        <span class="arrow-icon">›</span>
      </div>`;
    } else {
      return `<div class="lesson-item">
        <span class="lesson-icon">🔒</span>
        <span class="lesson-name" style="opacity:.45">${l.name}</span>
        <span class="lesson-tag tag-locked">${l.typeLabel}</span>
      </div>`;
    }
  }).join('');

  const lockedCta = !unlocked ? `
    <div class="locked-cta">
      <p>🔒 Konten ini terkunci. Beli BAB ini atau dapatkan akses full course.</p>
      <div class="locked-cta-btns">
        <button class="btn-unlock-bab" onclick="openPayment(${ch.id},'${escapeAttr(ch.title)}',${ch.price})">
          Buka BAB ${ch.id} · Rp ${ch.price.toLocaleString('id-ID')}
        </button>
        <button class="btn-unlock-full" onclick="openPayment('full','Akses Full Course (BAB 1–11)',499000)">
          Full Course · Rp 499.000
        </button>
      </div>
    </div>` : '';

  return `<div class="chapter-lessons">${rows}${lockedCta}</div>`;
}

function escapeAttr(s) { return s.replace(/'/g, "\\'").replace(/"/g, '&quot;'); }

function toggleChapter(id) {
  document.getElementById(`chapter-${id}`).classList.toggle('open');
}

// ─── OPEN LESSON ──────────────────────────────────────────────
function openLesson(slug, chapId, lessonName, isPreview = true) {

  // kalau preview → langsung buka
  if (isPreview) {
    window.location.href = slug;return;
  }
  // kalau belum beli → munculkan payment
  if (!isUnlocked(chapId)) {
    const ch = chapters.find(c => c.id === chapId);
    openPayment(
      chapId,
      ch.title,
      ch.price
    );

    return;
  }
  window.location.href = `${slug}.html?bab=${chapId}&slug=${encodeURIComponent(slug)}&name=${encodeURIComponent(lessonName)}`;
}

// ─── PAYMENT FLOW ─────────────────────────────────────────────
let currentPayment = {};
let selectedMethod = null;
let selectedSub = null;
let timerInterval = null;
let timerSecs = 14 * 60 + 59;

const bankData = {
  bca:     { name:'BCA',     va:'8277 0081 2345 6789', an:'Arsitek Sarungan' },
  mandiri: { name:'Mandiri', va:'1420 0081 2345 678',  an:'Arsitek Sarungan' },
  bni:     { name:'BNI',     va:'8277 8100 8123 4567', an:'Arsitek Sarungan' },
  bri:     { name:'BRI',     va:'0088 01 00812 30001', an:'Arsitek Sarungan' },
};

function rp(n){ return 'Rp ' + Number(n).toLocaleString('id-ID'); }
function randCode(){ return Array.from({length:3},()=>Math.floor(1000+Math.random()*9000)).join('-'); }

function openPayment(chapId, name, price) {
  currentPayment = { chapId, name, price };
  selectedMethod = null; selectedSub = null;
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('selected'));
  document.querySelectorAll('.sub-method-btn').forEach(b => b.classList.remove('picked'));
  document.getElementById('btnNextMethod').disabled = true;
  document.getElementById('modalCourseName').textContent = name;
  document.getElementById('modalPrice').textContent = rp(price);
  document.getElementById('s2CourseName').textContent = name;
  document.getElementById('s2Price').textContent = rp(price);
  ['inputNama','inputEmail','inputWa'].forEach(id => document.getElementById(id).value = '');
  showStep(1);
  document.getElementById('modalBackdrop').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closePayment() {
  document.getElementById('modalBackdrop').classList.remove('show');
  document.body.style.overflow = '';
  clearInterval(timerInterval);
}

const stepTitles = ['','Pilih Pembayaran','Data Diri','Instruksi Bayar','Memverifikasi...','Pembayaran Berhasil!'];

function showStep(n) {
  [1,2,3,4,5].forEach(i => { document.getElementById('step'+i).style.display = i===n?'':'none'; });
  document.getElementById('modalTitle').textContent = stepTitles[n];
  const backBtn = document.getElementById('modalBack');
  backBtn.classList.toggle('visible', n===2||n===3);
  [1,2,3].forEach(i => {
    const dot = document.getElementById('sd'+i);
    dot.className = 'step-dot' + (i<n?' done':i===n?' active':'');
  });
  document.querySelector('.step-bar').style.display = n>=4 ? 'none' : '';
  document.getElementById('mainModal').scrollTop = 0;
}

function goBack() {
  const current = [1,2,3,4,5].find(i => document.getElementById('step'+i).style.display!=='none');
  if (current===2) goStep1(); else if (current===3) goStep2();
}

function selectMethod(type) {
  selectedMethod = type;
  selectedSub = (type==='card') ? 'card' : null;
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('selected'));
  document.getElementById('pm-'+type).classList.add('selected');
  document.querySelectorAll('.sub-method-btn').forEach(b => b.classList.remove('picked'));
  const needsSub = (type==='bank'||type==='qris'||type==='mart');
  document.getElementById('btnNextMethod').disabled = needsSub;
}

function pickBank(e, bank) {
  e.stopPropagation(); selectedSub = bank;
  document.querySelectorAll('#pm-bank .sub-method-btn').forEach(b => b.classList.remove('picked'));
  e.currentTarget.classList.add('picked');
  document.getElementById('btnNextMethod').disabled = false;
}
function pickWallet(e, wallet) {
  e.stopPropagation(); selectedSub = wallet;
  document.querySelectorAll('#pm-qris .sub-method-btn').forEach(b => b.classList.remove('picked'));
  e.currentTarget.classList.add('picked');
  document.getElementById('btnNextMethod').disabled = false;
}
function pickMart(e, mart) {
  e.stopPropagation(); selectedSub = mart;
  document.querySelectorAll('#pm-mart .sub-method-btn').forEach(b => b.classList.remove('picked'));
  e.currentTarget.classList.add('picked');
  document.getElementById('btnNextMethod').disabled = false;
}
function goStep1() { showStep(1); }
function goStep2() {
  if (!selectedMethod) return;
  const icons = {bank:'🏦',qris:'📱',card:'💳',mart:'🏪'};
  const names = {
    bank:`Transfer Bank — ${bankData[selectedSub]?.name||''}`,
    qris:`QRIS — ${selectedSub?selectedSub.charAt(0).toUpperCase()+selectedSub.slice(1):''}`,
    card:'Kartu Kredit / Debit',
    mart:`Minimarket — ${selectedSub?selectedSub.charAt(0).toUpperCase()+selectedSub.slice(1):''}`
  };
  document.getElementById('smcIcon').textContent = icons[selectedMethod];
  document.getElementById('smcName').textContent = names[selectedMethod];
  showStep(2);
}

function submitPayment() {
  const nama = document.getElementById('inputNama').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  const wa = document.getElementById('inputWa').value.trim();
  if (!nama||!email||!wa) { shakeInput(); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('inputEmail').style.borderColor='#ef4444';
    setTimeout(()=>document.getElementById('inputEmail').style.borderColor='',1500); return;
  }
  buildStep3(); showStep(3); startTimer();
}
function shakeInput() {
  ['inputNama','inputEmail','inputWa'].forEach(id=>{
    const el=document.getElementById(id);
    if (!el.value.trim()){ el.style.borderColor='#ef4444'; setTimeout(()=>el.style.borderColor='',1500); }
  });
}

function buildStep3() {
  const price = currentPayment.price;
  ['panelQris','panelBank','panelCard','panelMart'].forEach(id=>document.getElementById(id).style.display='none');
  if (selectedMethod==='qris') {
    document.getElementById('panelQris').style.display='';
    const wname = selectedSub?selectedSub.charAt(0).toUpperCase()+selectedSub.slice(1):'QRIS';
    document.getElementById('qrisWalletTitle').textContent=`Scan QR — ${wname}`;
    document.getElementById('qrisAmount').textContent=rp(price);
  } else if (selectedMethod==='bank') {
    document.getElementById('panelBank').style.display=''; buildBankPanel(price);
  } else if (selectedMethod==='card') {
    document.getElementById('panelCard').style.display='';
  } else if (selectedMethod==='mart') {
    document.getElementById('panelMart').style.display='';
    const mname=selectedSub?selectedSub.charAt(0).toUpperCase()+selectedSub.slice(1):'Minimarket';
    document.getElementById('martTitle').textContent=mname;
    document.getElementById('martBrand').textContent=mname;
    document.getElementById('martCode').textContent=randCode();
    document.getElementById('martAmount').textContent=rp(price);
  }
  const lbl={bank:`Transfer ke ${bankData[selectedSub]?.name||'Bank'}`,qris:`Scan QR ${selectedSub||'QRIS'}`,card:'Kartu Kredit/Debit',mart:selectedSub?selectedSub.charAt(0).toUpperCase()+selectedSub.slice(1):'Minimarket'};
  document.getElementById('timerName').textContent=lbl[selectedMethod]||'';
}

function buildBankPanel(price) {
  const banks=['bca','mandiri','bni','bri'];
  let active=selectedSub&&bankData[selectedSub]?selectedSub:'bca';
  document.getElementById('bankTabs').innerHTML=banks.map(b=>`<button class="bank-tab${b===active?' active':''}" onclick="switchBank('${b}',${price})">${bankData[b].name}</button>`).join('');
  renderBankDetail(active,price);
}
function switchBank(bank,price) {
  document.querySelectorAll('.bank-tab').forEach(t=>t.classList.remove('active'));
  event.currentTarget.classList.add('active');
  renderBankDetail(bank,price);
}
function renderBankDetail(bank,price) {
  const b=bankData[bank];
  const suffix=Math.floor(100+Math.random()*900);
  const total=price+suffix;
  document.getElementById('bankDetails').innerHTML=`
    <div>
      <div class="bank-row"><div><div class="bank-row-label">Bank Tujuan</div><div class="bank-row-val">${b.name} Virtual Account</div></div></div>
      <div class="bank-row"><div><div class="bank-row-label">Nomor VA</div><div class="bank-row-val" id="vaNum">${b.va}</div></div><button class="copy-btn" onclick="copyVal('vaNum',this)">Salin</button></div>
      <div class="bank-row"><div><div class="bank-row-label">Atas Nama</div><div class="bank-row-val">${b.an}</div></div></div>
      <div class="bank-amount-box">
        <div class="ba-label">Total transfer</div>
        <div class="ba-val" id="transferAmt">${rp(total)}</div>
        <div class="ba-note">⚠️ Termasuk kode unik Rp ${suffix} untuk verifikasi otomatis</div>
      </div>
    </div>`;
}
function copyVal(id,btn) {
  navigator.clipboard.writeText(document.getElementById(id).textContent.replace(/\s/g,'')).then(()=>{
    btn.textContent='Tersalin ✓'; btn.classList.add('copied');
    setTimeout(()=>{btn.textContent='Salin';btn.classList.remove('copied');},2000);
  });
}

function startTimer() {
  timerSecs=14*60+59; clearInterval(timerInterval); updateTimerDisplay();
  timerInterval=setInterval(()=>{timerSecs--;updateTimerDisplay();if(timerSecs<=0)clearInterval(timerInterval);},1000);
}
function updateTimerDisplay() {
  const m=Math.floor(timerSecs/60),s=timerSecs%60;
  const el=document.getElementById('timerCount');
  el.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.classList.toggle('urgent',timerSecs<120);
}

function confirmPayment() {
  if (selectedMethod==='card') {
    const num=document.getElementById('cardNum').value.replace(/\s/g,'');
    if (num.length<16||!document.getElementById('cardExp').value||document.getElementById('cardCvv').value.length<3||!document.getElementById('cardName').value.trim()) {
      alert('Harap lengkapi data kartu kamu.'); return;
    }
  }
  clearInterval(timerInterval); showStep(4);
  setTimeout(()=>{ unlockChapters(); buildSuccessScreen(); showStep(5); },1800);
}

function unlockChapters() {
  const chapId=currentPayment.chapId;
  const u=getUnlocked();
  if (chapId==='full') { if (!u.includes('full')) u.push('full'); }
  else { if (!u.includes(chapId)) u.push(chapId); }
  setUnlocked(u);
  renderChapters();
}

function buildSuccessScreen() {
  const chapId=currentPayment.chapId;
  const nama=document.getElementById('inputNama').value.trim();
  let tags=[];
  if (chapId==='full') {
    tags=chapters.map(c=>`BAB ${c.id}`);
    document.getElementById('successMsg').innerHTML=`Hei <strong>${nama}</strong>! 🎉 Semua BAB telah terbuka. Selamat belajar!`;
  } else {
    tags=[`BAB ${chapId}`];
    const ch=chapters.find(c=>c.id===chapId);
    document.getElementById('successMsg').innerHTML=`Hei <strong>${nama}</strong>! <strong>${ch?.title||''}</strong> telah terbuka.`;
  }
  document.getElementById('unlockedTags').innerHTML=tags.map(b=>`<span class="unlocked-bab-tag">✓ ${b}</span>`).join('');
}

function fmtCard(el) { let v=el.value.replace(/\D/g,'').slice(0,16); el.value=v.replace(/(.{4})/g,'$1 ').trim(); }
function fmtExp(el) { let v=el.value.replace(/\D/g,'').slice(0,4); if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2); el.value=v; }

document.getElementById('modalBackdrop').addEventListener('click',function(e){if(e.target===this)closePayment();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePayment();});

renderChapters();
