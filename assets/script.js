// ============== State ==============
const TARGET = new Date(2026, 5, 7, 9, 0, 0); // 2026/6/7 09:00 Chinese
let CURRENT_LANG = localStorage.getItem('gaokao-lang') || 'zh';
const DATA = window.GAOKAO_DATA || { national: { schedule: [] }, provinces: [] };

const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, '0');

// ============== Countdown ==============
function tick() {
  const now = new Date();
  const diff = Math.max(0, TARGET - now);
  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  $('cd-days').textContent = pad(days);
  $('cd-hours').textContent = pad(hours);
  $('cd-minutes').textContent = pad(minutes);
  $('cd-seconds').textContent = pad(seconds);

  const t = window.I18N[CURRENT_LANG].hero;
  $('cd-target').textContent = diff === 0 ? t.targetReached : t.target;
}

// ============== Render: Nav ==============
function renderNav() {
  const t = window.I18N[CURRENT_LANG].nav;
  const nav = $('nav-links');
  nav.innerHTML = Object.entries(t).map(([k, v]) =>
    `<li><a href="#${k === 'countdown' ? 'countdown' : k}">${v}</a></li>`
  ).join('');
}

// ============== Render: Hero ==============
function renderHero() {
  const t = window.I18N[CURRENT_LANG];
  $('hero-kicker').textContent = t.hero.kicker;
  $('hero-title1').textContent = t.hero.title1;
  $('hero-title2').textContent = t.hero.title2;
  $('hero-lede').textContent = t.hero.lede;
  $('lbl-days').textContent = t.hero.days;
  $('lbl-hours').textContent = t.hero.hours;
  $('lbl-minutes').textContent = t.hero.minutes;
  $('lbl-seconds').textContent = t.hero.seconds;
  $('cd-target').textContent = t.hero.target;

  $('hero-stats').innerHTML = `
    <div class="stat"><strong>1290<sub>${t.hero.stat1Num}</sub></strong><span>${t.hero.stat1Label}</span></div>
    <div class="stat"><strong>9<sub>${t.hero.stat2Num}</sub></strong><span>${t.hero.stat2Label}</span></div>
    <div class="stat"><strong>4<sub>${t.hero.stat3Num}</sub></strong><span>${t.hero.stat3Label}</span></div>
  `;

  document.title = t.documentTitle;
  document.documentElement.lang = CURRENT_LANG === 'zh' ? 'zh-CN' : 'en';
  const brand = document.querySelector('[data-i18n="brand"]');
  if (brand) brand.textContent = CURRENT_LANG === 'zh' ? '2026 高考考前指南' : 'Gaokao 2026 Guide';
}

// ============== Render: Schedule ==============
function renderNationalSchedule() {
  const t = window.I18N[CURRENT_LANG].schedule;
  $('sec-schedule-badge').textContent = t.badge;
  $('sec-schedule-title').textContent = t.title;
  $('sec-schedule-sub').textContent = t.sub;

  const wkMap = window.I18N[CURRENT_LANG].weekday;
  $('national-schedule').innerHTML = DATA.national.schedule.map(day => `
    <div class="day-card">
      <div class="date">${window.tr(day.date, CURRENT_LANG, 'date')}</div>
      <span class="weekday">${wkMap[day.weekday] || day.weekday || ''}</span>
      ${day.items.map(item => `
        <div class="item">
          <span class="time">${window.tr(item.time, CURRENT_LANG, 'time')}</span>
          <span class="subject">${window.tr(item.subject, CURRENT_LANG, 'subject')}</span>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ============== Render: Checklist ==============
function renderChecklist() {
  const t = window.I18N[CURRENT_LANG].checklist;
  $('sec-checklist-badge').textContent = t.badge;
  $('sec-checklist-title').textContent = t.title;
  $('sec-checklist-sub').textContent = t.sub;
  $('checklist-grid').innerHTML = t.cards.map(c => `
    <div class="card">
      <h3><span class="dot ${c.type}"></span>${c.title}</h3>
      <ul class="check-list ${c.cross ? 'cross' : ''}">
        ${c.items.map(it => `<li>${it}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ============== Render: Rules ==============
function renderRules() {
  const t = window.I18N[CURRENT_LANG].rules;
  $('sec-rules-badge').textContent = t.badge;
  $('sec-rules-title').textContent = t.title;
  $('rules-timeline').innerHTML = t.timeline.map(item => `
    <div class="tl-item">
      <div class="tl-time">${item.time}</div>
      <div class="tl-body"><h4>${item.title}</h4><p>${item.desc}</p></div>
    </div>
  `).join('');
}

// ============== Render: Emergency ==============
function renderEmergency() {
  const t = window.I18N[CURRENT_LANG].emergency;
  $('sec-emergency-badge').textContent = t.badge;
  $('sec-emergency-title').textContent = t.title;
  $('emergency-grid').innerHTML = t.cards.map(c => `
    <div class="card emergency">
      <h3>${c.title}</h3>
      <p>${c.body}</p>
    </div>
  `).join('');
}

// ============== Render: Mind ==============
function renderMind() {
  const t = window.I18N[CURRENT_LANG].mind;
  $('sec-mind-badge').textContent = t.badge;
  $('sec-mind-title').textContent = t.title;
  $('mind-grid').innerHTML = t.cards.map(c => `
    <div class="card">
      <h3>${c.title}</h3>
      <ul class="check-list">${c.items.map(it => `<li>${it}</li>`).join('')}</ul>
    </div>
  `).join('');
}

// ============== Render: Provinces ==============
function renderProvinces() {
  const t = window.I18N[CURRENT_LANG].provinces;
  $('sec-provinces-badge').textContent = t.badge;
  $('sec-provinces-title').textContent = t.title;
  $('sec-provinces-sub').innerHTML = t.sub;
  $('province-picker-label').textContent = t.pickerLabel;

  const sel = $('province-select');
  const prev = sel.value;
  sel.innerHTML = `<option value="">${t.selectDefault}</option>` +
    DATA.provinces.map(p => {
      const name = window.tr(p.name, CURRENT_LANG, 'province');
      const tag = window.tr(p.tag, CURRENT_LANG, 'tag');
      return `<option value="${p.id}">${name} (${tag})</option>`;
    }).join('');
  if (prev) sel.value = prev;

  // 重新渲染当前已选省份
  if (sel.value) {
    const p = DATA.provinces.find(x => x.id === sel.value);
    if (p) renderProvinceDetail(p);
  }
}

function renderProvinceDetail(province) {
  const detail = $('province-detail');
  if (!province) { detail.hidden = true; return; }
  const t = window.I18N[CURRENT_LANG].provinces;
  const isFirst = province.tag && province.tag.includes('首届');
  const name = window.tr(province.name, CURRENT_LANG, 'province');
  const tag = window.tr(province.tag, CURRENT_LANG, 'tag');
  const mode = window.tr(province.mode, CURRENT_LANG, 'mode');

  let notes = province.notes || [];
  if (CURRENT_LANG === 'en' && window.I18N_MAPS.provinceNotes[province.id]) {
    notes = window.I18N_MAPS.provinceNotes[province.id];
  }

  detail.innerHTML = `
    <h3>${name} <span class="province-tag ${isFirst ? 'first' : ''}">${tag}</span></h3>
    <div class="province-mode"><strong>${t.modeLabel}</strong>${mode}</div>
    <div class="schedule-grid">
      ${province.schedule.map(day => `
        <div class="day-card">
          <div class="date">${window.tr(day.date, CURRENT_LANG, 'date')}</div>
          ${day.items.map(item => `
            <div class="item">
              <span class="time">${window.tr(item.time, CURRENT_LANG, 'time')}</span>
              <span class="subject">${window.tr(item.subject, CURRENT_LANG, 'subject')}</span>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
    ${notes.length ? `
      <div class="notes">
        <strong style="font-size:14px;">${t.notesTitle}</strong>
        <ul>${notes.map(n => `<li>${n}</li>`).join('')}</ul>
      </div>
    ` : ''}
    ${province.officialUrl ? `
      <a class="official-link" href="${province.officialUrl}" target="_blank" rel="noopener">${t.officialLink}</a>
    ` : ''}
  `;
  detail.hidden = false;
}

// ============== Render: News ==============
function renderNews() {
  const t = window.I18N[CURRENT_LANG].news;
  $('sec-news-badge').textContent = t.badge;
  $('sec-news-title').textContent = t.title;
  $('sec-news-sub').textContent = t.sub;
  $('news-list').innerHTML = t.items.map(n => `
    <div class="news-item">
      <div class="news-date">${n.date}</div>
      <div class="news-body">
        <h4>${n.title}</h4>
        <p>${n.desc}</p>
        ${n.source ? `<div class="news-source">${t.sourceLabel}${n.source}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// ============== Render: Cheer + Foot ==============
function renderCheerFoot() {
  const t = window.I18N[CURRENT_LANG];
  $('cheer-title').textContent = t.cheer.title;
  $('cheer-body').innerHTML = t.cheer.body;
  $('cheer-signoff').textContent = t.cheer.signoff;
  $('foot-disclaimer').innerHTML = t.foot.disclaimer;
  $('foot-meta').textContent = t.foot.meta;
}

// ============== Lang Switch ==============
function applyLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === CURRENT_LANG);
  });
}

function setLang(lang) {
  if (lang !== 'zh' && lang !== 'en') return;
  CURRENT_LANG = lang;
  localStorage.setItem('gaokao-lang', lang);
  renderAll();
}

function renderAll() {
  renderNav();
  renderHero();
  renderNationalSchedule();
  renderChecklist();
  renderRules();
  renderEmergency();
  renderMind();
  renderProvinces();
  renderNews();
  renderCheerFoot();
  applyLangButtons();
}

// ============== Init ==============
(function init() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  $('province-select').addEventListener('change', e => {
    const province = DATA.provinces.find(p => p.id === e.target.value);
    renderProvinceDetail(province);
    if (province) $('province-detail').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  renderAll();
  tick();
  setInterval(tick, 1000);
})();
