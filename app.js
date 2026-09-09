const API_URL = "https://script.google.com/macros/s/AKfycbycN2gF9D4qOgtxLCf3IfJ-KWRMEEKmC1xMcRswSVwbkijZYqq01Y0QnO6D4pM-k5DS1w/exec";
const CONTENT = {"brandName":{"vi":"Công ty Cổ phần Dệt Trần Hiệp Thành","en":"TRAN HIEP THANH TEXTILE CORPORATION"},"brandSubtitle":{"vi":"Khảo sát trải nghiệm khách hàng","en":"Customer Experience Survey"},"heroEyebrow":{"vi":"Trải nghiệm Khách hàng 2026","en":"Customer Experience 2026"},"heroTitle":{"vi":"Phản hồi của Quý khách sẽ giúp chúng tôi cải thiện tốt hơn!","en":"Your feedback helps us serve you better!"},"heroBody":{"vi":"Khảo sát mất khoảng 3 phút. Mỗi phản hồi sẽ được dùng để xác định nội dung cần cải thiện trong sản phẩm, dịch vụ và quá trình phối hợp công việc.","en":"This survey takes about 3 minutes. Your feedback will help us identify practical improvements across our products, services and collaboration."},"heroPoint1":{"vi":"TRÁCH NHIỆM","en":"RESPONSIBILITY"},"heroPoint2":{"vi":"HỢP TÁC","en":"COOPERATION"},"heroPoint3":{"vi":"TẬN TÂM","en":"DEDICATION"},"stepKicker":{"vi":"Bắt đầu","en":"Getting started"},"sectionTitle":{"vi":"Thông tin khảo sát","en":"Survey information"},"companyLabel":{"vi":"Tên công ty","en":"Company name"},"companyPlaceholder":{"vi":"Nhập tên công ty...","en":"Search company name..."},"confirmCompany":{"vi":"Quý khách đang gửi phản hồi cho","en":"You are submitting feedback for"},"change":{"vi":"Thay đổi","en":"Change"},"roleLabel":{"vi":"Bộ phận / vai trò","en":"Department / Role"},"overallChip":{"vi":"Đánh giá chung","en":"Overall rating"},"overallQuestion":{"vi":"Nhìn chung, Quý khách hài lòng với sản phẩm, dịch vụ và quá trình hợp tác với THT ở mức nào?","en":"Overall, how satisfied are you with THT's products, services and collaboration experience?"},"priorityChip":{"vi":"Điều quan trọng với Quý khách","en":"What matters most"},"priorityQuestion":{"vi":"Chọn tối đa 3 yếu tố quan trọng nhất khi làm việc với nhà cung cấp vải.","en":"Choose up to 3 factors that matter most when working with a fabric supplier."},"finalChip":{"vi":"Một góp ý cuối","en":"One final thought"},"finalQuestion":{"vi":"Nếu THT chỉ có thể cải thiện một điều trong 6 tháng tới, Quý khách mong muốn đó là gì?","en":"If THT could improve one thing in the next six months, what should it be?"},"finalPlaceholder":{"vi":"Quý khách có thể chia sẻ ngắn gọn tại đây...","en":"Please share your feedback here..."},"optional":{"vi":"Không bắt buộc","en":"Optional"},"thanksEyebrow":{"vi":"Đã ghi nhận","en":"Received"},"thanksTitle":{"vi":"Cảm ơn Quý khách đã dành thời gian thực hiện khảo sát!","en":"Thank you for taking the time to complete the survey!"},"thanksBody":{"vi":"Khảo sát đã được thực hiện thành công. Chúng tôi sẽ sử dụng dữ liệu này để xác định các nội dung cần cải thiện trong thời gian tới với mục đích phụ vụ Khách hàng tốt hơn. Trân trọng!","en":"The survey has been successfully completed. We will use this data to identify areas for improvement and better serve our customers. "},"footerNote":{"vi":"Customer Experience Survey","en":"Customer Experience Survey"},"role_MANAGEMENT":{"vi":"Quản lý","en":"Management"},"role_SOURCING":{"vi":"Thu mua","en":"Sourcing / Purchasing"},"role_MERCHANDISING":{"vi":"Merchandising","en":"Merchandising"},"role_DEVELOPMENT":{"vi":"Phát triển sản phẩm","en":"R&D / Product Development"},"role_QUALITY":{"vi":"Chất lượng / Kỹ thuật","en":"Quality / Technical"},"role_PRODUCTION":{"vi":"Sản xuất / Vận hành","en":"Production / Operations"},"role_OTHER":{"vi":"Khác","en":"Other"},"scale_1":{"vi":"Rất chưa đáp ứng","en":"Very Poor"},"scale_2":{"vi":"Chưa đáp ứng","en":"Poor"},"scale_3":{"vi":"Đáp ứng","en":"Acceptable"},"scale_4":{"vi":"Tốt","en":"Good"},"scale_5":{"vi":"Rất tốt","en":"Excellent"},"question_DEV":{"vi":"THT đáp ứng yêu cầu về tiến độ phát triển sản phẩm và mẫu ở mức nào?","en":"How well does THT meet your expectations regarding product and sample development lead time?"},"question_RESP":{"vi":"THT phản hồi các yêu cầu về báo giá, thông tin sản phẩm, kỹ thuật và đơn hàng nhanh chóng ở mức nào?","en":"How effectively does THT respond to your requests regarding quotations, product information, technical matters and orders?"},"question_DEL":{"vi":"THT đáp ứng tiến độ giao hàng đã cam kết đáng tin cậy ở mức nào?","en":"How reliably does THT meet committed delivery schedules?"},"question_QUAL":{"vi":"Chất lượng sản phẩm của THT ổn định giữa các lô hàng ở mức nào?","en":"How consistent is THT's product quality across different production lots?"},"question_CLAIM":{"vi":"Khi có vấn đề phát sinh, THT phản hồi và giải quyết vấn đề đến cùng ở mức nào?","en":"When an issue occurs, how effectively does THT respond and resolve it through to completion?"},"question_COMM":{"vi":"THT chủ động cập nhật tiến độ và thông báo sớm các thay đổi hoặc rủi ro liên quan đến sản phẩm và đơn hàng ở mức nào?","en":"How proactively does THT provide progress updates and early notice of changes or risks related to products and orders?"},"question_VALUE":{"vi":"THT hiểu nhu cầu của Quý Khách hàng và chủ động đề xuất các giải pháp phù hợp ở mức nào?","en":"How well does THT understand your needs and proactively propose relevant solutions?"},"priority_QUALITY":{"vi":"Chất lượng sản phẩm","en":"Product Quality"},"priority_PRICE":{"vi":"Giá cạnh tranh","en":"Competitive Pricing"},"priority_DEVELOPMENT":{"vi":"Tốc độ phát triển sản phẩm","en":"Development Speed"},"priority_DELIVERY":{"vi":"Độ tin cậy về giao hàng","en":"Delivery Reliability"},"priority_RESPONSIVENESS":{"vi":"Tốc độ phản hồi","en":"Responsiveness"},"priority_TECHNICAL":{"vi":"Hỗ trợ kỹ thuật","en":"Technical Support"},"priority_INNOVATION":{"vi":"Phát triển sản phẩm mới","en":"Innovation & New Development"},"priority_SUSTAINABILITY":{"vi":"Bền vững và tuân thủ","en":"Sustainability & Compliance"},"priority_CLAIM":{"vi":"Xử lý khiếu nại","en":"Complaint Resolution"},"priority_COMMUNICATION":{"vi":"Chủ động cập nhật thông tin","en":"Proactive Communication"}};

const QUESTION_CODES = ["DEV","RESP","DEL","QUAL","CLAIM","COMM","VALUE"];
const ROLE_CODES = ["MANAGEMENT","SOURCING","MERCHANDISING","DEVELOPMENT","QUALITY","PRODUCTION","OTHER"];
const PRIORITY_CODES = ["QUALITY","PRICE","DEVELOPMENT","DELIVERY","RESPONSIVENESS","TECHNICAL","INNOVATION","SUSTAINABILITY","CLAIM","COMMUNICATION"];

const state = {
  lang:"vi",
  step:1,
  customers:[],
  selectedCustomer:null,
  role:null,
  scores:{},
  lowScoreComments:{},
  overall:null,
  priorities:[],
  config:null
};

const $ = s => document.querySelector(s);

function t(key) {
  return CONTENT[key]?.[state.lang] || "";
}

function renderStaticText() {
  const direct = [
    "brandName","brandSubtitle","heroEyebrow","heroTitle","heroBody","heroPoint1","heroPoint2","heroPoint3",
    "stepKicker","sectionTitle","companyLabel","confirmCompany","roleLabel","overallChip","overallQuestion",
    "priorityChip","priorityQuestion","finalChip","finalQuestion","optional","thanksEyebrow","thanksTitle","thanksBody","footerNote"
  ];
  direct.forEach(key => {
    const el = document.getElementById(key);
    if(el) el.textContent = t(key);
  });
  $("#companySearch").placeholder = t("companyPlaceholder");
  $("#finalComment").placeholder = t("finalPlaceholder");
  $("#changeCompany").textContent = t("change");
  document.documentElement.lang = state.lang;
}

function renderRoles() {
  $("#roleGrid").innerHTML = ROLE_CODES.map(code => `
    <button type="button" class="option-btn ${state.role===code ? "selected":""}" data-role="${code}">
      ${escapeHtml(t("role_"+code))}
    </button>
  `).join("");
  $$("#roleGrid [data-role]").forEach(btn => btn.addEventListener("click", () => {
    state.role = btn.dataset.role;
    renderRoles();
  }));
}

function renderScaleButtons(container, selected, onSelect) {
  container.innerHTML = [1,2,3,4,5].map(n => `
    <button type="button" class="rating-btn ${Number(selected)===n ? "selected":""}" data-score="${n}">
      <strong>${n}</strong>
      <small>${escapeHtml(t("scale_"+n))}</small>
    </button>
  `).join("");
  [...container.querySelectorAll("[data-score]")].forEach(btn => btn.addEventListener("click", () => onSelect(Number(btn.dataset.score))));
}

function renderQuestions() {
  const wrap = $("#questionsContainer");
  wrap.innerHTML = QUESTION_CODES.map((code, i) => `
    <article class="question-card" data-question="${code}">
      <div class="question-meta">${String(i+1).padStart(2,"0")} · ${code}</div>
      <h3>${escapeHtml(t("question_"+code))}</h3>
      <div class="rating-grid" id="scale_${code}"></div>
      <div class="low-comment ${state.scores[code] <= 2 ? "visible":""}" id="low_${code}">
        <label>${state.lang==="vi" ? "Quý khách có thể chia sẻ ngắn gọn điều cần cải thiện." : "Please briefly tell us what could be improved."}</label>
        <textarea id="comment_${code}" rows="3">${escapeHtml(state.lowScoreComments[code] || "")}</textarea>
      </div>
    </article>
  `).join("");

  QUESTION_CODES.forEach(code => {
    renderScaleButtons($("#scale_"+code), state.scores[code], score => {
      state.scores[code] = score;
      if(score > 2) state.lowScoreComments[code] = "";
      renderQuestions();
    });
    const ta = $("#comment_"+code);
    if(ta) ta.addEventListener("input", e => state.lowScoreComments[code] = e.target.value);
  });
}

function renderOverall() {
  renderScaleButtons($("#overallScale"), state.overall, score => {
    state.overall = score;
    renderOverall();
  });
}

function renderPriorities() {
  $("#priorityGrid").innerHTML = PRIORITY_CODES.map(code => `
    <button type="button" class="priority-btn ${state.priorities.includes(code) ? "selected":""}" data-priority="${code}">
      ${escapeHtml(t("priority_"+code))}
    </button>
  `).join("");
  $("#priorityCount").textContent = `${state.priorities.length} / 3`;
  $$("#priorityGrid [data-priority]").forEach(btn => btn.addEventListener("click", () => {
    const code = btn.dataset.priority;
    if(state.priorities.includes(code)) {
      state.priorities = state.priorities.filter(x => x !== code);
    } else if(state.priorities.length < 3) {
      state.priorities.push(code);
    }
    renderPriorities();
  }));
}

function renderCompanyState() {
  if(state.selectedCustomer) {
    $("#companySearch").classList.add("hidden");
    $("#companyConfirm").classList.remove("hidden");
    $("#selectedCompanyName").textContent = state.selectedCustomer.customerName;
  } else {
    $("#companySearch").classList.remove("hidden");
    $("#companyConfirm").classList.add("hidden");
    $("#selectedCompanyName").textContent = "";
  }
}

function renderAll() {
  renderStaticText();
  renderRoles();
  renderQuestions();
  renderOverall();
  renderPriorities();
  renderCompanyState();
  $$(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === state.lang));
  showStep(state.step, false);
}

function showStep(step, scroll=true) {
  state.step = step;
  $$(".step").forEach(el => el.classList.toggle("active", Number(el.dataset.step) === step));
  $("#progressCopy").textContent = `${step} / 5`;
  $("#progressBar").style.width = `${step*20}%`;
  if(scroll) $(".survey-shell").scrollIntoView({behavior:"smooth",block:"start"});
}

function validateStep(step) {
  if(step===1) {
    if(!state.selectedCustomer) return fail(state.lang==="vi" ? "Vui lòng chọn tên công ty." : "Please select your company.");
    if(!state.role) return fail(state.lang==="vi" ? "Vui lòng chọn bộ phận / vai trò." : "Please select your department / role.");
  }
  if(step===2) {
    const missing = QUESTION_CODES.filter(code => !state.scores[code]);
    if(missing.length) return fail(state.lang==="vi" ? "Vui lòng hoàn tất các câu đánh giá." : "Please complete all rating questions.");
  }
  if(step===3 && !state.overall) return fail(state.lang==="vi" ? "Vui lòng chọn mức đánh giá chung." : "Please select an overall rating.");
  if(step===4 && state.priorities.length < 1) return fail(state.lang==="vi" ? "Vui lòng chọn ít nhất một yếu tố quan trọng." : "Please select at least one important factor.");
  clearStatus();
  return true;
}

function fail(message) {
  const box=$("#statusBox");
  box.textContent=message;
  box.classList.remove("hidden");
  box.scrollIntoView({behavior:"smooth",block:"center"});
  return false;
}
function clearStatus() {
  $("#statusBox").classList.add("hidden");
  $("#statusBox").textContent="";
}

async function loadCustomers() {
  try {
    const res = await fetch(`${API_URL}?action=getCustomers`, {cache:"no-store"});
    const json = await res.json();
    if(!json.success) throw new Error(json.message || "API error");
    state.customers = json.data || [];
  } catch(err) {
    console.error(err);
    fail(state.lang==="vi" ? "Không tải được danh sách công ty. Vui lòng thử lại." : "Unable to load the company list. Please try again.");
  }
}

function searchCustomers(q) {
  const value = q.trim().toLowerCase();
  const box=$("#companyResults");
  if(!value) {
    box.classList.add("hidden");
    box.innerHTML="";
    return;
  }
  const matches=state.customers.filter(c =>
    String(c.customerName||"").toLowerCase().includes(value) ||
    String(c.shortName||"").toLowerCase().includes(value)
  ).slice(0,12);

  box.innerHTML = matches.length ? matches.map(c => `
    <div class="search-item" data-id="${escapeAttr(c.customerId)}">
      <strong>${escapeHtml(c.customerName)}</strong>
      ${c.shortName ? `<span>${escapeHtml(c.shortName)}</span>` : ""}
    </div>
  `).join("") : `<div class="search-item"><span>${state.lang==="vi" ? "Không tìm thấy công ty phù hợp." : "No matching company found."}</span></div>`;
  box.classList.remove("hidden");
  $$("[data-id]",box).forEach(item => item.addEventListener("click", () => {
    state.selectedCustomer = state.customers.find(c => c.customerId === item.dataset.id);
    $("#companyResults").classList.add("hidden");
    renderCompanyState();
  }));
}

function $$(selector, root=document) { return [...root.querySelectorAll(selector)]; }

async function submitSurvey() {
  if(!validateStep(5)) return;
  const btn=$("#submitBtn");
  btn.disabled=true;
  btn.textContent = state.lang==="vi" ? "Đang gửi..." : "Submitting...";
  clearStatus();

  const payload = {
    action:"submitSurvey",
    customerId:state.selectedCustomer.customerId,
    role:t("role_"+state.role),
    language:state.lang.toUpperCase(),
    scores:state.scores,
    lowScoreComments:state.lowScoreComments,
    overall:state.overall,
    priorities:state.priorities.map(code => t("priority_"+code)),
    improvementComment:$("#finalComment").value.trim()
  };

  try {
    const res = await fetch(API_URL, {
      method:"POST",
      headers:{"Content-Type":"text/plain;charset=utf-8"},
      body:JSON.stringify(payload)
    });
    const json = await res.json();
    if(!json.success) throw new Error(json.message || "Submit failed");
    $$(".step").forEach(el => el.classList.remove("active"));
    $("#thankYou").classList.remove("hidden");
    $(".survey-head").classList.add("hidden");
    $(".progress-track").classList.add("hidden");
    $("#thankYou").scrollIntoView({behavior:"smooth",block:"center"});
  } catch(err) {
    console.error(err);
    fail(state.lang==="vi" ? "Chưa gửi được phản hồi. Vui lòng kiểm tra kết nối và thử lại." : "Your feedback could not be submitted. Please check your connection and try again.");
    btn.disabled=false;
    btn.textContent = state.lang==="vi" ? "Gửi phản hồi" : "Submit feedback";
  }
}

function bind() {
  $$(".lang-btn").forEach(btn => btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    renderAll();
  }));

  $("#companySearch").addEventListener("input", e => searchCustomers(e.target.value));
  $("#changeCompany").addEventListener("click", () => {
    state.selectedCustomer=null;
    $("#companySearch").value="";
    renderCompanyState();
    $("#companySearch").focus();
  });

  $$("[data-next]").forEach(btn => btn.addEventListener("click", () => {
    const current = Number(btn.closest(".step").dataset.step);
    if(validateStep(current)) showStep(Number(btn.dataset.next));
  }));
  $$("[data-prev]").forEach(btn => btn.addEventListener("click", () => showStep(Number(btn.dataset.prev))));
  $("#submitBtn").addEventListener("click", submitSurvey);

  document.addEventListener("click", e => {
    if(!e.target.closest(".search-wrap")) $("#companyResults").classList.add("hidden");
  });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch]));
}
function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g,"&#096;");
}

(async function init() {
  bind();
  renderAll();
  await loadCustomers();
})();
