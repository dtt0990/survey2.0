const API_URL = 'https://script.google.com/macros/s/AKfycbycN2gF9D4qOgtxLCf3IfJ-KWRMEEKmC1xMcRswSVwbkijZYqq01Y0QnO6D4pM-k5DS1w/exec';

const fallbackConfig = {
  roles: [
    { code: 'MANAGEMENT', vi: 'Quản lý', en: 'Management' },
    { code: 'SOURCING', vi: 'Thu mua', en: 'Sourcing / Purchasing' },
    { code: 'MERCHANDISING', vi: 'Merchandising', en: 'Merchandising' },
    { code: 'DEVELOPMENT', vi: 'Phát triển sản phẩm', en: 'R&D / Product Development' },
    { code: 'QUALITY', vi: 'Chất lượng / Kỹ thuật', en: 'Quality / Technical' },
    { code: 'PRODUCTION', vi: 'Sản xuất / Vận hành', en: 'Production / Operations' },
    { code: 'OTHER', vi: 'Khác', en: 'Other' }
  ],
  scale: [
    { score: 1, vi: 'Rất chưa đáp ứng', en: 'Very Poor' },
    { score: 2, vi: 'Chưa đáp ứng', en: 'Poor' },
    { score: 3, vi: 'Đáp ứng', en: 'Acceptable' },
    { score: 4, vi: 'Tốt', en: 'Good' },
    { score: 5, vi: 'Rất tốt', en: 'Excellent' }
  ],
  questions: [], priorities: []
};

const fallbackCopy = {
  vi: {
    brandName: 'TRẦN HIỆP THÀNH', brandSubtitle: 'Khảo sát trải nghiệm khách hàng',
    heroEyebrow: 'Customer Experience 2026', heroTitle: 'Phản hồi của Quý khách giúp chúng tôi làm tốt hơn.',
    heroBody: 'Khảo sát mất khoảng 3 phút. Mỗi phản hồi sẽ được dùng để xác định nội dung cần cải thiện trong sản phẩm, dịch vụ và quá trình phối hợp.',
    heroPoint1: 'Khoảng 3 phút', heroPoint2: 'Dữ liệu phục vụ cải tiến', heroPoint3: 'Không cần đăng nhập',
    companyLabel: 'Tên công ty', companyPlaceholder: 'Nhập tên công ty...', confirmCompany: 'Quý khách đang gửi phản hồi cho', change: 'Thay đổi', roleLabel: 'Bộ phận / vai trò',
    overallChip: 'Đánh giá chung', overallQuestion: 'Nhìn chung, Quý khách hài lòng với sản phẩm, dịch vụ và quá trình hợp tác với THT ở mức nào?',
    priorityChip: 'Điều quan trọng với Quý khách', priorityQuestion: 'Chọn tối đa 3 yếu tố quan trọng nhất khi làm việc với nhà cung cấp vải.',
    finalChip: 'Một góp ý cuối', finalQuestion: 'Nếu THT chỉ có thể cải thiện một điều trong 6 tháng tới, Quý khách mong muốn đó là gì?', finalPlaceholder: 'Quý khách có thể chia sẻ ngắn gọn tại đây...', optional: 'Không bắt buộc',
    thanksEyebrow: 'Đã ghi nhận', thanksTitle: 'Cảm ơn Quý khách.', thanksBody: 'Phản hồi đã được gửi thành công. THT sẽ sử dụng dữ liệu này để xác định các nội dung cần cải thiện trong thời gian tới.', footerNote: 'Khảo sát trải nghiệm khách hàng',
    back: 'Quay lại', next: 'Tiếp tục', submit: 'Gửi phản hồi', lowPrompt: 'Nội dung nào cần được cải thiện?',
    steps: ['Thông tin khảo sát','Đánh giá theo tiêu chí','Đánh giá chung','Yếu tố ưu tiên','Góp ý cuối'],
    stepKicker: ['Bắt đầu','Phần đánh giá','Đánh giá chung','Ưu tiên','Góp ý'],
    chooseCompany: 'Vui lòng chọn tên công ty.', chooseRole: 'Vui lòng chọn bộ phận / vai trò.', answerAll: 'Vui lòng hoàn thành tất cả tiêu chí.', chooseOverall: 'Vui lòng chọn mức đánh giá chung.', choosePriority: 'Vui lòng chọn ít nhất 1 yếu tố.', loading: 'Đang tải...', submitError: 'Chưa thể gửi phản hồi. Vui lòng thử lại.'
  },
  en: {
    brandName: 'TRAN HIEP THANH', brandSubtitle: 'Customer Experience Survey',
    heroEyebrow: 'Customer Experience 2026', heroTitle: 'Your feedback helps us work better with you.',
    heroBody: 'The survey takes about 3 minutes. Your feedback will be used to identify improvements in our products, services and collaboration.',
    heroPoint1: 'About 3 minutes', heroPoint2: 'Feedback used for improvement', heroPoint3: 'No sign in required',
    companyLabel: 'Company', companyPlaceholder: 'Search company name...', confirmCompany: 'You are submitting feedback for', change: 'Change', roleLabel: 'Department / role',
    overallChip: 'Overall rating', overallQuestion: "Overall, how satisfied are you with THT's products, services and overall collaboration experience?",
    priorityChip: 'What matters most', priorityQuestion: 'Choose up to 3 factors that matter most when working with a fabric supplier.',
    finalChip: 'One last comment', finalQuestion: 'If THT could improve one thing in the next six months, what should it be?', finalPlaceholder: 'You can share a short comment here...', optional: 'Optional',
    thanksEyebrow: 'Received', thanksTitle: 'Thank you.', thanksBody: 'Your feedback has been received. THT will use it to identify areas for improvement.', footerNote: 'Customer Experience Survey',
    back: 'Back', next: 'Continue', submit: 'Submit feedback', lowPrompt: 'What should we improve?',
    steps: ['Survey information','Performance review','Overall satisfaction','Priorities','Final comment'],
    stepKicker: ['Start','Evaluation','Overall','Priorities','Comment'],
    chooseCompany: 'Please select your company.', chooseRole: 'Please select your department / role.', answerAll: 'Please complete all criteria.', chooseOverall: 'Please select an overall score.', choosePriority: 'Please select at least 1 factor.', loading: 'Loading...', submitError: 'We could not submit your feedback. Please try again.'
  }
};

const state = {
  lang: 'vi', step: 1, customers: [], config: fallbackConfig, content: {},
  customer: null, role: null, scores: {}, lowScoreComments: {}, overall: null, priorities: [],
  admin: { active: false, pin: '', currentKey: '', imageKey: '', pending: new Map() }
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

async function apiPost(payload) {
  const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify(payload) });
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Request failed');
  return json.data;
}

async function init() {
  setupImageFallbacks();
  bindStaticEvents();
  await Promise.all([loadCustomers(), loadWebContent()]);
  await loadSurveyConfig();
  applyLanguage(); renderRoles(); renderQuestions(); renderOverall(); renderPriorities(); updateStep();
}

function setupImageFallbacks() {
  $('#brandLogo').addEventListener('error', () => { $('#brandLogo').style.display = 'none'; });
  $('#heroImage').addEventListener('error', () => { $('#heroImage').style.display = 'none'; });
}

function bindStaticEvents() {
  $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
    state.lang = btn.dataset.lang;
    $$('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
    applyLanguage(); renderRoles(); renderQuestions(); renderOverall(); renderPriorities(); updateStep();
  }));
  $('#customerSearch').addEventListener('input', handleCustomerSearch);
  $('#customerSearch').addEventListener('focus', handleCustomerSearch);
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) $('#customerResults').hidden = true;
    if (state.admin.active) {
      const editable = e.target.closest('[data-content-key], .editable-dynamic');
      if (editable && !e.target.closest('button, input, textarea')) openTextEditor(editable.dataset.contentKey);
    }
  });
  $('#changeCompany').addEventListener('click', clearCompany);
  $('#nextBtn').addEventListener('click', nextStep);
  $('#backBtn').addEventListener('click', previousStep);
  $('#surveyForm').addEventListener('submit', submitSurvey);

  $('#editEntry').addEventListener('click', () => openModal('pinModal'));
  $('#verifyPinBtn').addEventListener('click', verifyAdminPin);
  $('#pinInput').addEventListener('keydown', e => { if (e.key === 'Enter') verifyAdminPin(); });
  $('#applyTextEditBtn').addEventListener('click', applyTextEdit);
  $('#saveContentBtn').addEventListener('click', savePendingChanges);
  $('#exitEditBtn').addEventListener('click', exitEditMode);
  $('#backupBtn').addEventListener('click', showBackups);
  $('#uploadImageBtn').addEventListener('click', uploadSelectedImage);
  $$('[data-replace-image]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation(); openImageEditor(btn.dataset.replaceImage);
  }));
  $$('[data-close-modal]').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.closeModal)));
  $$('.modal-backdrop').forEach(modal => modal.addEventListener('click', e => { if (e.target === modal) closeModal(modal.id); }));
}

async function loadCustomers() {
  try {
    const res = await fetch(`${API_URL}?action=getCustomers`); const json = await res.json();
    if (!json.success) throw new Error(json.message || 'Customer API error');
    state.customers = json.data || [];
  } catch (err) { console.error(err); state.customers = []; }
}

async function loadWebContent() {
  try {
    const res = await fetch(`${API_URL}?action=getWebContent`); const json = await res.json();
    if (!json.success) throw new Error(json.message || 'Content API error');
    state.content = json.data || {};
    applyImageContent();
  } catch (err) { console.error(err); state.content = {}; }
}

async function loadSurveyConfig() {
  try {
    const res = await fetch(`${API_URL}?action=getSurveyConfig`); const json = await res.json();
    if (!json.success) throw new Error(json.message || 'Config API error');
    state.config = { ...fallbackConfig, ...json.data };
  } catch (err) { console.error(err); state.config = fallbackConfig; }
}

function contentText(key, lang = state.lang) {
  const pending = state.admin.pending.get(key);
  if (pending && pending[lang] !== undefined) return pending[lang];
  const item = state.content[key];
  if (item && item[lang] !== undefined && item[lang] !== '') return item[lang];
  return fallbackCopy[lang][key] || '';
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  $$('[data-content-key]').forEach(el => {
    const key = el.dataset.contentKey;
    const text = contentText(key);
    if (text) el.textContent = text;
  });
  $$('[data-content-placeholder-key]').forEach(el => {
    const key = el.dataset.contentPlaceholderKey;
    const text = contentText(key);
    if (text) el.placeholder = text;
  });
  $('#backBtn').textContent = fallbackCopy[state.lang].back;
  $('#nextBtn').textContent = fallbackCopy[state.lang].next;
  $('#submitBtn').textContent = fallbackCopy[state.lang].submit;
}

function applyImageContent() {
  const logo = state.content.logoImage && state.content.logoImage.value;
  const hero = state.content.heroImage && state.content.heroImage.value;
  if (logo) { $('#brandLogo').src = logo; $('#brandLogo').style.display = 'block'; }
  if (hero) { $('#heroImage').src = hero; $('#heroImage').style.display = 'block'; }
}

function handleCustomerSearch() {
  if (state.customer) return;
  const q = $('#customerSearch').value.trim().toLowerCase();
  const items = state.customers.filter(c => `${c.customerName} ${c.shortName || ''}`.toLowerCase().includes(q)).slice(0, 10);
  const box = $('#customerResults'); box.innerHTML = '';
  if (!items.length) { box.hidden = true; return; }
  items.forEach(c => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'search-item';
    b.innerHTML = `<strong>${escapeHtml(c.customerName)}</strong>${c.shortName ? `<small>${escapeHtml(c.shortName)}</small>` : ''}`;
    b.addEventListener('click', () => selectCompany(c)); box.appendChild(b);
  });
  box.hidden = false;
}

function selectCompany(c) {
  state.customer = c; $('#customerSearch').value = c.customerName; $('#customerSearch').disabled = true; $('#customerResults').hidden = true;
  $('#selectedCompanyName').textContent = c.customerName; $('#selectedCompany').hidden = false; $('#step1Message').textContent = '';
}
function clearCompany() { state.customer = null; $('#customerSearch').disabled = false; $('#customerSearch').value = ''; $('#selectedCompany').hidden = true; $('#customerSearch').focus(); }

function renderRoles() {
  const root = $('#roleGrid'); root.innerHTML = '';
  (state.config.roles || []).forEach(role => {
    const value = role.en; const b = document.createElement('button'); b.type = 'button'; b.className = 'choice-card' + (state.role === value ? ' selected' : '');
    b.textContent = role[state.lang] || role.en;
    if (state.admin.active) { b.classList.add('editable-dynamic'); b.dataset.contentKey = `role_${role.code}`; }
    b.addEventListener('click', e => {
      if (state.admin.active) { e.preventDefault(); e.stopPropagation(); openTextEditor(`role_${role.code}`); return; }
      state.role = value; renderRoles(); $('#step1Message').textContent = '';
    }); root.appendChild(b);
  });
}

function renderQuestions() {
  const root = $('#questionList'); root.innerHTML = '';
  (state.config.questions || []).forEach((q, idx) => {
    const card = document.createElement('article'); card.className = 'question-card';
    card.innerHTML = `<div class="question-number">${String(idx+1).padStart(2,'0')} · ${escapeHtml(q.dimension)}</div><h3 class="editable-dynamic" data-content-key="question_${q.code}">${escapeHtml(q[state.lang] || q.en)}</h3><div class="rating-row" data-rating="${q.code}"></div><div class="low-comment ${Number(state.scores[q.code]) <= 2 ? 'show' : ''}" id="low-${q.code}"><label>${fallbackCopy[state.lang].lowPrompt}</label><textarea rows="3" maxlength="600" data-low="${q.code}"></textarea></div>`;
    root.appendChild(card);
    renderRatingButtons(card.querySelector(`[data-rating="${q.code}"]`), q.code, state.scores[q.code]);
    const ta = card.querySelector(`[data-low="${q.code}"]`); ta.value = state.lowScoreComments[q.code] || ''; ta.addEventListener('input', () => state.lowScoreComments[q.code] = ta.value);
    if (!state.admin.active) card.querySelector('h3').classList.remove('editable-dynamic');
  });
}

function renderOverall() { const root = $('#overallRating'); root.innerHTML = ''; renderRatingButtons(root, 'overall', state.overall); }
function renderRatingButtons(root, code, selected) {
  (state.config.scale || fallbackConfig.scale).forEach(item => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'rating-btn' + (Number(selected) === item.score ? ' selected' : '');
    b.innerHTML = `<span>${item.score}</span><small>${escapeHtml(item[state.lang] || item.en)}</small>`;
    if (state.admin.active) { b.classList.add('editable-dynamic'); b.dataset.contentKey = `scale_${item.score}`; }
    b.addEventListener('click', e => {
      if (state.admin.active) { e.preventDefault(); e.stopPropagation(); openTextEditor(`scale_${item.score}`); return; }
      if (code === 'overall') state.overall = item.score; else state.scores[code] = item.score;
      if (code === 'overall') renderOverall(); else renderQuestions();
    }); root.appendChild(b);
  });
}

function renderPriorities() {
  const root = $('#priorityGrid'); root.innerHTML = '';
  (state.config.priorities || []).forEach(p => {
    const value = p.en; const selected = state.priorities.includes(value); const b = document.createElement('button');
    b.type = 'button'; b.className = 'priority-card' + (selected ? ' selected' : ''); b.textContent = p[state.lang] || p.en;
    if (state.admin.active) { b.classList.add('editable-dynamic'); b.dataset.contentKey = `priority_${p.code}`; }
    b.addEventListener('click', e => {
      if (state.admin.active) { e.preventDefault(); e.stopPropagation(); openTextEditor(`priority_${p.code}`); return; }
      if (selected) state.priorities = state.priorities.filter(x => x !== value); else if (state.priorities.length < 3) state.priorities.push(value);
      renderPriorities(); $('#step4Message').textContent = '';
    }); root.appendChild(b);
  });
  $('#priorityCounter').textContent = `${state.priorities.length} / 3`;
}

function validateStep() {
  const t = fallbackCopy[state.lang];
  if (state.step === 1) { if (!state.customer) return showError('#step1Message', t.chooseCompany); if (!state.role) return showError('#step1Message', t.chooseRole); }
  if (state.step === 2) { const codes = (state.config.questions || []).map(q => q.code); if (!codes.every(c => Number(state.scores[c]) >= 1)) return showError('#step2Message', t.answerAll); }
  if (state.step === 3 && !state.overall) return showError('#step3Message', t.chooseOverall);
  if (state.step === 4 && state.priorities.length < 1) return showError('#step4Message', t.choosePriority);
  return true;
}
function showError(sel, message) { $(sel).textContent = message; return false; }
function nextStep() { if (state.admin.active) return; if (!validateStep()) return; if (state.step < 5) { state.step++; updateStep(); scrollSurveyTop(); } }
function previousStep() { if (state.admin.active) return; if (state.step > 1) { state.step--; updateStep(); scrollSurveyTop(); } }
function scrollSurveyTop() { $('#surveySection').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function updateStep() {
  $$('.step').forEach(el => el.classList.toggle('active', Number(el.dataset.step) === state.step));
  $('#progressBar').style.width = `${state.step * 20}%`; $('#progressCount').textContent = `${state.step} / 5`;
  $('#sectionTitle').textContent = fallbackCopy[state.lang].steps[state.step - 1]; $('#stepLabel').textContent = fallbackCopy[state.lang].stepKicker[state.step - 1];
  $('#backBtn').style.visibility = state.step === 1 ? 'hidden' : 'visible'; $('#nextBtn').hidden = state.step === 5; $('#submitBtn').hidden = state.step !== 5;
}

async function submitSurvey(e) {
  e.preventDefault(); if (state.admin.active) return;
  const payload = { action:'submitSurvey', customerId:state.customer.customerId, role:state.role, language:state.lang.toUpperCase(), scores:state.scores, lowScoreComments:state.lowScoreComments, overall:state.overall, priorities:state.priorities, improvementComment:$('#improvementComment').value.trim() };
  const btn = $('#submitBtn'); btn.disabled = true; btn.textContent = fallbackCopy[state.lang].loading;
  try {
    await apiPost(payload); $('#surveySection').hidden = true; $('#thankYou').hidden = false; $('#thankYou').scrollIntoView({ behavior:'smooth', block:'center' });
  } catch (err) { console.error(err); alert(fallbackCopy[state.lang].submitError); btn.disabled = false; btn.textContent = fallbackCopy[state.lang].submit; }
}

/* ---------- EDIT MODE ---------- */

function openModal(id) { $('#' + id).hidden = false; document.body.style.overflow = 'hidden'; }
function closeModal(id) { $('#' + id).hidden = true; if ($$('.modal-backdrop').every(m => m.hidden)) document.body.style.overflow = ''; }

async function verifyAdminPin() {
  const pin = $('#pinInput').value.trim(); $('#pinError').textContent = '';
  if (!pin) return $('#pinError').textContent = 'Vui lòng nhập PIN.';
  const btn = $('#verifyPinBtn'); btn.disabled = true;
  try {
    await apiPost({ action:'verifyAdmin', pin });
    state.admin.pin = pin; state.admin.active = true; document.body.classList.add('edit-mode'); $('#adminToolbar').hidden = false; $('#editEntry').hidden = true; closeModal('pinModal');
    renderRoles(); renderQuestions(); renderOverall(); renderPriorities(); setSaveStatus('Chưa có thay đổi');
  } catch (err) { $('#pinError').textContent = 'PIN không đúng.'; }
  finally { btn.disabled = false; }
}

function exitEditMode() {
  if (state.admin.pending.size && !confirm('Có thay đổi chưa lưu. Vẫn thoát?')) return;
  state.admin.active = false; state.admin.pin = ''; state.admin.pending.clear(); document.body.classList.remove('edit-mode'); $('#adminToolbar').hidden = true; $('#editEntry').hidden = false;
  applyLanguage(); renderRoles(); renderQuestions(); renderOverall(); renderPriorities();
}

function ensureContentRecord(key) {
  if (!state.content[key]) state.content[key] = { type:'text', vi:'', en:'', value:'' };
  return state.content[key];
}

function openTextEditor(key) {
  if (!state.admin.active || !key) return;
  const base = ensureContentRecord(key); const pending = state.admin.pending.get(key) || {};
  state.admin.currentKey = key; $('#editorTitle').textContent = humanizeKey(key);
  $('#editorVi').value = pending.vi !== undefined ? pending.vi : (base.vi || fallbackCopy.vi[key] || lookupConfigText(key,'vi'));
  $('#editorEn').value = pending.en !== undefined ? pending.en : (base.en || fallbackCopy.en[key] || lookupConfigText(key,'en'));
  openModal('textEditorModal');
}

function applyTextEdit() {
  const key = state.admin.currentKey; if (!key) return;
  const change = state.admin.pending.get(key) || { key };
  change.key = key; change.vi = $('#editorVi').value.trim(); change.en = $('#editorEn').value.trim(); state.admin.pending.set(key, change);
  ensureContentRecord(key).vi = change.vi; ensureContentRecord(key).en = change.en;
  syncConfigFromContentKey(key, change); applyLanguage(); renderRoles(); renderQuestions(); renderOverall(); renderPriorities(); setSaveStatus(`${state.admin.pending.size} thay đổi chưa lưu`); closeModal('textEditorModal');
}

function syncConfigFromContentKey(key, change) {
  if (key.startsWith('question_')) {
    const code = key.replace('question_',''); const item = (state.config.questions || []).find(x => x.code === code); if (item) { item.vi = change.vi; item.en = change.en; }
  } else if (key.startsWith('role_')) {
    const code = key.replace('role_',''); const item = (state.config.roles || []).find(x => x.code === code); if (item) { item.vi = change.vi; item.en = change.en; }
  } else if (key.startsWith('priority_')) {
    const code = key.replace('priority_',''); const item = (state.config.priorities || []).find(x => x.code === code); if (item) { item.vi = change.vi; item.en = change.en; }
  } else if (key.startsWith('scale_')) {
    const score = Number(key.replace('scale_','')); const item = (state.config.scale || []).find(x => Number(x.score) === score); if (item) { item.vi = change.vi; item.en = change.en; }
  }
}

function lookupConfigText(key, lang) {
  if (key.startsWith('question_')) { const x = state.config.questions.find(q => q.code === key.replace('question_','')); return x ? x[lang] : ''; }
  if (key.startsWith('role_')) { const x = state.config.roles.find(q => q.code === key.replace('role_','')); return x ? x[lang] : ''; }
  if (key.startsWith('priority_')) { const x = state.config.priorities.find(q => q.code === key.replace('priority_','')); return x ? x[lang] : ''; }
  if (key.startsWith('scale_')) { const x = state.config.scale.find(q => Number(q.score) === Number(key.replace('scale_',''))); return x ? x[lang] : ''; }
  return '';
}

async function savePendingChanges() {
  if (!state.admin.pending.size) return setSaveStatus('Không có thay đổi mới');
  const btn = $('#saveContentBtn'); btn.disabled = true; setSaveStatus('Đang lưu...');
  try {
    const changes = [...state.admin.pending.values()];
    const result = await apiPost({ action:'saveWebContent', pin:state.admin.pin, changes, note:'Edited from GitHub Pages' });
    state.content = result.content || state.content; state.admin.pending.clear(); await loadSurveyConfig(); applyLanguage(); renderRoles(); renderQuestions(); renderOverall(); renderPriorities(); setSaveStatus('Đã lưu');
  } catch (err) { console.error(err); setSaveStatus('Lưu thất bại'); alert(err.message); }
  finally { btn.disabled = false; }
}

function openImageEditor(key) {
  if (!state.admin.active) return;
  state.admin.imageKey = key; $('#imageModalTitle').textContent = key === 'logoImage' ? 'Thay logo' : 'Thay ảnh hero'; $('#imageFile').value = ''; $('#imageError').textContent = ''; openModal('imageModal');
}

async function uploadSelectedImage() {
  const file = $('#imageFile').files[0]; $('#imageError').textContent = '';
  if (!file) return $('#imageError').textContent = 'Vui lòng chọn hình ảnh.';
  if (file.size > 6 * 1024 * 1024) return $('#imageError').textContent = 'Ảnh phải nhỏ hơn hoặc bằng 6 MB.';
  const btn = $('#uploadImageBtn'); btn.disabled = true; btn.textContent = 'Đang tải...';
  try {
    const base64 = await fileToDataUrl(file);
    const result = await apiPost({ action:'uploadImage', pin:state.admin.pin, key:state.admin.imageKey, fileName:file.name, mimeType:file.type, base64 });
    ensureContentRecord(state.admin.imageKey).value = result.url; applyImageContent(); closeModal('imageModal'); setSaveStatus('Ảnh đã lưu vào Google Drive');
  } catch (err) { console.error(err); $('#imageError').textContent = err.message || 'Không thể tải ảnh.'; }
  finally { btn.disabled = false; btn.textContent = 'Tải lên Google Drive'; }
}

function fileToDataUrl(file) { return new Promise((resolve,reject) => { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = reject; r.readAsDataURL(file); }); }

async function showBackups() {
  openModal('backupModal'); const root = $('#backupList'); root.innerHTML = '<div class="backup-empty">Đang tải...</div>';
  try {
    const backups = await apiPost({ action:'getBackups', pin:state.admin.pin });
    root.innerHTML = '';
    if (!backups.length) { root.innerHTML = '<div class="backup-empty">Chưa có bản sao lưu.</div>'; return; }
    backups.forEach(item => {
      const div = document.createElement('div'); div.className = 'backup-item';
      const when = item.savedAt ? new Date(item.savedAt).toLocaleString('vi-VN') : '';
      div.innerHTML = `<div><strong>${escapeHtml(when || item.versionId)}</strong><small>${escapeHtml(item.note || item.versionId)}</small></div><button type="button" class="btn secondary compact">Khôi phục</button>`;
      div.querySelector('button').addEventListener('click', () => restoreVersion(item.versionId)); root.appendChild(div);
    });
  } catch (err) { root.innerHTML = `<div class="backup-empty">${escapeHtml(err.message)}</div>`; }
}

async function restoreVersion(versionId) {
  if (!confirm('Khôi phục phiên bản này? Nội dung hiện tại sẽ được sao lưu trước khi khôi phục.')) return;
  try {
    const result = await apiPost({ action:'restoreBackup', pin:state.admin.pin, versionId });
    state.content = result.content || {}; state.admin.pending.clear(); await loadSurveyConfig(); applyImageContent(); applyLanguage(); renderRoles(); renderQuestions(); renderOverall(); renderPriorities(); setSaveStatus('Đã khôi phục phiên bản'); closeModal('backupModal');
  } catch (err) { alert(err.message); }
}

function setSaveStatus(text) { $('#saveStatus').textContent = text; }
function humanizeKey(key) { return key.replace(/^question_/,'Câu hỏi: ').replace(/^role_/,'Vai trò: ').replace(/^priority_/,'Ưu tiên: ').replace(/^scale_/,'Thang điểm: ').replace(/([A-Z])/g,' $1').trim(); }
function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

init();
