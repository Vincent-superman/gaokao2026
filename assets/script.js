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

// ============== Weather ==============
const WEATHER_STATE = { coords: null, place: null, daily: null, hourly: null };
const EXAM_DAYS = ['2026-06-07', '2026-06-08', '2026-06-09', '2026-06-10'];

function weatherIcon(code) {
  if (code === 0) return '☀️';
  if (code === 1) return '🌤️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 57) return '🌦️';
  if (code >= 61 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '🌨️';
  if (code >= 80 && code <= 82) return '🌧️';
  if (code >= 85 && code <= 86) return '🌨️';
  if (code >= 95) return '⛈️';
  return '🌡️';
}

function weatherText(code) {
  const codes = window.I18N[CURRENT_LANG].weather.weatherCodes;
  return codes[code] || (CURRENT_LANG === 'zh' ? '未知天气' : 'Unknown');
}

function weatherShowError(msg) {
  const el = $('weather-error');
  el.innerHTML = msg;
  el.hidden = false;
  $('weather-status').hidden = true;
}

function weatherClearError() { $('weather-error').hidden = true; }

function weatherShowStatus(msg) {
  const el = $('weather-status');
  el.textContent = msg;
  el.hidden = false;
}

function weatherClearStatus() { $('weather-status').hidden = true; }

function renderWeatherStatic() {
  const t = window.I18N[CURRENT_LANG].weather;
  $('sec-weather-badge').textContent = t.badge;
  $('sec-weather-title').textContent = t.title;
  $('sec-weather-sub').innerHTML = t.sub;
  const locateBtn = $('weather-locate-btn');
  locateBtn.textContent = locateBtn.dataset.busy === '1' ? t.btnLocating : t.btnLocate;
  $('weather-or-label').textContent = t.orLabel;
  $('weather-search-input').placeholder = t.searchPlaceholder;
  const searchBtn = $('weather-search-btn');
  searchBtn.textContent = searchBtn.dataset.busy === '1' ? t.btnSearching : t.btnSearch;
  $('weather-clear-btn').textContent = t.btnClear;

  if (WEATHER_STATE.daily) {
    renderWeatherCards();
    renderWeatherMeta();
  }
}

function renderWeatherMeta() {
  const t = window.I18N[CURRENT_LANG].weather;
  const meta = $('weather-meta');
  if (!WEATHER_STATE.place) { meta.hidden = true; return; }
  const p = WEATHER_STATE.place;
  const cityLabel = CURRENT_LANG === 'zh'
    ? (p.name_zh || p.name)
    : (p.name_en || p.name);
  const country = CURRENT_LANG === 'zh' ? (p.country_zh || p.country || '') : (p.country || '');
  const region = p.admin1 ? ' · ' + p.admin1 : '';
  meta.innerHTML = `
    <div>
      <div class="meta-city">${cityLabel}<span class="meta-country">${country}${region}</span></div>
      <div class="meta-coord">${t.coordLabel}: ${p.latitude.toFixed(3)}, ${p.longitude.toFixed(3)}</div>
    </div>
    <button type="button" id="weather-change-city">${t.changeCity}</button>
  `;
  meta.hidden = false;
  $('weather-change-city').onclick = () => {
    $('weather-search-input').focus();
  };
}

function renderWeatherCards() {
  const t = window.I18N[CURRENT_LANG].weather;
  const grid = $('weather-grid');
  const daily = WEATHER_STATE.daily;
  const hourly = WEATHER_STATE.hourly;
  if (!daily) { grid.hidden = true; return; }

  const wkMap = window.I18N[CURRENT_LANG].weekday;
  const wkKeys = ['周日','周一','周二','周三','周四','周五','周六'];

  const cards = EXAM_DAYS.map(date => {
    const idx = daily.time.indexOf(date);
    if (idx === -1) return '';
    const code = daily.weather_code[idx];
    const tmax = Math.round(daily.temperature_2m_max[idx]);
    const tmin = Math.round(daily.temperature_2m_min[idx]);
    const pop = daily.precipitation_probability_max[idx] ?? 0;
    const wind = daily.wind_speed_10m_max[idx];
    const uv = daily.uv_index_max ? Math.round(daily.uv_index_max[idx] || 0) : null;
    const sunrise = (daily.sunrise[idx] || '').split('T')[1] || '';
    const sunset = (daily.sunset[idx] || '').split('T')[1] || '';

    const weekDate = new Date(date + 'T00:00:00');
    const wk = wkMap[wkKeys[weekDate.getDay()]];

    const morning = aggregateSlot(hourly, date, 9, 11);
    const afternoon = aggregateSlot(hourly, date, 15, 17);
    const tips = buildTips(t, tmax, tmin, pop, wind, uv || 0, morning, afternoon);

    const dateLabel = CURRENT_LANG === 'zh'
      ? `${weekDate.getMonth() + 1}月${weekDate.getDate()}日`
      : weekDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return `
      <div class="weather-card exam-day">
        <div class="wc-head">
          <div>
            <span class="wc-date">${dateLabel}</span>
            <span class="wc-weekday">${wk}</span>
          </div>
          <span class="wc-tag">${t.examDay}</span>
        </div>
        <div class="wc-summary">
          <span class="wc-icon">${weatherIcon(code)}</span>
          <div>
            <div class="wc-cond">${weatherText(code)}</div>
            <div class="wc-temp">${tmax}°<span class="lo">/ ${tmin}°</span></div>
          </div>
        </div>
        <div class="wc-stats">
          <span>${t.precip}<strong>${pop}%</strong></span>
          <span>${t.wind}<strong>${Math.round(wind)} km/h</strong></span>
          ${uv !== null ? `<span>${t.uv}<strong>${uv}</strong></span>` : ''}
          <span>${t.sunrise}<strong>${sunrise.slice(0,5)}</strong></span>
        </div>
        <div class="wc-slots">
          <div class="wc-slot">
            <div class="wc-slot-label">${t.morningSlot}</div>
            <div class="wc-slot-data">${weatherIcon(morning.code)} ${Math.round(morning.temp)}°<span class="small">${t.precip} ${morning.pop}%</span></div>
          </div>
          <div class="wc-slot">
            <div class="wc-slot-label">${t.afternoonSlot}</div>
            <div class="wc-slot-data">${weatherIcon(afternoon.code)} ${Math.round(afternoon.temp)}°<span class="small">${t.precip} ${afternoon.pop}%</span></div>
          </div>
        </div>
        ${tips.length ? `<div class="wc-tips"><strong>${t.tip}：</strong>${tips.join(' ')}</div>` : ''}
      </div>
    `;
  }).filter(Boolean).join('');

  grid.innerHTML = cards || `<div class="weather-status">${t.errors.network}</div>`;
  grid.hidden = false;
}

function aggregateSlot(hourly, date, fromH, toH) {
  if (!hourly) return { code: 0, temp: 0, pop: 0 };
  let codeMode = 0, tempSum = 0, popMax = 0, count = 0;
  const codeCount = {};
  for (let i = 0; i < hourly.time.length; i++) {
    const ts = hourly.time[i];
    if (ts.indexOf(date) !== 0) continue;
    const hour = parseInt(ts.split('T')[1].split(':')[0]);
    if (hour < fromH || hour > toH) continue;
    const c = hourly.weather_code[i];
    codeCount[c] = (codeCount[c] || 0) + 1;
    tempSum += hourly.temperature_2m[i];
    popMax = Math.max(popMax, hourly.precipitation_probability[i] || 0);
    count++;
  }
  if (count === 0) return { code: 0, temp: 0, pop: 0 };
  let topCount = -1;
  Object.keys(codeCount).forEach(k => {
    if (codeCount[k] > topCount) { topCount = codeCount[k]; codeMode = parseInt(k); }
  });
  return { code: codeMode, temp: tempSum / count, pop: popMax };
}

function buildTips(t, tmax, tmin, pop, wind, uv, morning, afternoon) {
  const tips = [];
  if (morning.temp >= 32) tips.push(t.tipHotMorning);
  else if (tmax >= 33) tips.push(t.tipHotAfternoon);
  if (pop >= 60 || morning.pop >= 60 || afternoon.pop >= 60) tips.push(t.tipRainHigh);
  else if (pop >= 30) tips.push(t.tipRainMid);
  if (tmin <= 18) tips.push(t.tipColdMorning);
  if (uv >= 8) tips.push(t.tipUVHigh);
  if (wind >= 30) tips.push(t.tipWindStrong);
  if (tips.length === 0) tips.push(t.tipNormal);
  return tips;
}

function setLocateBusy(busy) {
  const btn = $('weather-locate-btn');
  btn.disabled = !!busy;
  btn.dataset.busy = busy ? '1' : '0';
  const t = window.I18N[CURRENT_LANG].weather;
  btn.textContent = busy ? t.btnLocating : t.btnLocate;
}

function setSearchBusy(busy) {
  const btn = $('weather-search-btn');
  btn.disabled = !!busy;
  btn.dataset.busy = busy ? '1' : '0';
  const t = window.I18N[CURRENT_LANG].weather;
  btn.textContent = busy ? t.btnSearching : t.btnSearch;
}

async function fetchWeather(lat, lon) {
  const url = 'https://api.open-meteo.com/v1/forecast'
    + '?latitude=' + lat
    + '&longitude=' + lon
    + '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max,sunrise,sunset'
    + '&hourly=temperature_2m,precipitation_probability,weather_code'
    + '&start_date=2026-06-07&end_date=2026-06-10'
    + '&timezone=Asia%2FShanghai';
  const res = await fetch(url);
  if (!res.ok) throw new Error('forecast failed');
  return res.json();
}

async function reverseGeocode(lat, lon) {
  const lang = CURRENT_LANG === 'zh' ? 'zh' : 'en';
  const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat
    + '&longitude=' + lon + '&localityLanguage=' + lang;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return {
      latitude: lat,
      longitude: lon,
      name: data.city || data.locality || data.principalSubdivision || '—',
      name_zh: data.city || data.locality,
      name_en: data.city || data.locality,
      admin1: data.principalSubdivision || '',
      country: data.countryName || ''
    };
  } catch {
    return { latitude: lat, longitude: lon, name: '—', admin1: '', country: '' };
  }
}

async function searchCity(query) {
  const lang = CURRENT_LANG === 'zh' ? 'zh' : 'en';
  const url = 'https://geocoding-api.open-meteo.com/v1/search?count=1&language=' + lang
    + '&name=' + encodeURIComponent(query);
  const res = await fetch(url);
  if (!res.ok) throw new Error('geocoding failed');
  const data = await res.json();
  if (!data.results || data.results.length === 0) return null;
  const r = data.results[0];
  return {
    latitude: r.latitude,
    longitude: r.longitude,
    name: r.name,
    admin1: r.admin1 || '',
    country: r.country || ''
  };
}

async function loadWeatherFor(place) {
  const t = window.I18N[CURRENT_LANG].weather;
  weatherClearError();
  weatherShowStatus(CURRENT_LANG === 'zh' ? '正在获取天气数据…' : 'Fetching weather…');
  try {
    const data = await fetchWeather(place.latitude, place.longitude);
    WEATHER_STATE.place = place;
    WEATHER_STATE.daily = data.daily;
    WEATHER_STATE.hourly = data.hourly;
    weatherClearStatus();
    renderWeatherMeta();
    renderWeatherCards();
  } catch {
    weatherShowError(t.errors.network);
  }
}

function handleLocate() {
  const t = window.I18N[CURRENT_LANG].weather;
  weatherClearError();
  if (!('geolocation' in navigator)) { weatherShowError(t.errors.noGeo); return; }
  if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.protocol !== 'file:') {
    weatherShowError(t.errors.insecure);
    return;
  }
  setLocateBusy(true);
  navigator.geolocation.getCurrentPosition(async (pos) => {
    setLocateBusy(false);
    const { latitude, longitude } = pos.coords;
    const place = await reverseGeocode(latitude, longitude);
    await loadWeatherFor(place);
  }, (err) => {
    setLocateBusy(false);
    if (err.code === 1) weatherShowError(t.errors.denied);
    else if (err.code === 2) weatherShowError(t.errors.unavailable);
    else if (err.code === 3) weatherShowError(t.errors.timeout);
    else weatherShowError(t.errors.unavailable);
  }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 });
}

async function handleSearch() {
  const t = window.I18N[CURRENT_LANG].weather;
  const q = $('weather-search-input').value.trim();
  if (!q) return;
  weatherClearError();
  setSearchBusy(true);
  try {
    const place = await searchCity(q);
    if (!place) {
      weatherShowError(t.errors.notFound);
      setSearchBusy(false);
      return;
    }
    setSearchBusy(false);
    await loadWeatherFor(place);
  } catch {
    setSearchBusy(false);
    weatherShowError(t.errors.network);
  }
}

function bindWeatherEvents() {
  $('weather-locate-btn').addEventListener('click', handleLocate);
  $('weather-search-btn').addEventListener('click', handleSearch);
  $('weather-search-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
  });
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
  renderWeatherStatic();
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
  bindWeatherEvents();
  renderAll();
  tick();
  setInterval(tick, 1000);
})();
