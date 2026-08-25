// SmartProcure — Application Logic, State Management, and Translations

// 1. Multilingual Translations
const translations = {
  mr: {
    navHome: "मुख्य",
    navBook: "बुकिंग",
    navStatus: "स्थिती",
    navAlerts: "सूचना",
    navProfile: "माहिती",
    namaskar: "नमस्कार",
    farmerId: "शेतकरी आयडी",
    mobileNumber: "मोबाईल क्रमांक",
    loginTitle: "शेतकरी लॉगिन",
    loginSub: "स्मार्टप्रोक्युअर पोर्टल",
    loginBtn: "ओटीपी मिळवा & प्रवेश करा",
    enterOtp: "४-अंकी ओटीपी प्रविष्ट करा",
    helpSupport: "मदत आणि संपर्क",
    currentStatus: "सध्याची खरेदी स्थिती",
    soybean: "सोयाबीन",
    cotton: "कापूस",
    turDal: "तूर डाळ",
    paddy: "धान (भात)",
    bookingConfirmed: "बुकिंगची खात्री झाली!",
    viewBooking: "बुकिंग तपशील",
    bookSlot: "खरेदी वेळ बुक करा",
    myProcurement: "माझी खरेदी",
    paymentStatus: "पेमेंट स्थिती",
    todayTime: "आजची वेळ",
    myToken: "माझा टोकन",
    procStatus: "खरेदी स्थिती",
    reschedule: "पुन्हा वेळ निवडा",
    notifications: "सूचना",
    profile: "प्रोफाइल",
    commodity: "शेतमाल",
    quantity: "प्रमाण (क्विंटल)",
    centre: "खरेदी केंद्र",
    slot: "वेळ",
    confirm: "खात्री करा",
    selectCommodity: "शेतमाल निवडा",
    enterQuantity: "प्रमाण प्रविष्ट करा",
    chooseCentre: "खरेदी केंद्र निवडा",
    selectSlot: "वेळ निवडा",
    keepCentre: "हेच केंद्र ठेवा",
    missedSlot: "तुमची वेळ चुकली आहे",
    chooseAnotherSlot: "दुसरी वेळ निवडा",
    peopleAhead: "पुढील लोक",
    estWait: "अंदाजे प्रतीक्षा",
    minutes: "मिनिटे",
    broughtItems: "सोबत आणायची कागदपत्रे",
    bring712: "७/१२ उतारा आणि बँक पासबुक सोबत आणा",
    directions: "नकाशा मार्ग",
    addReminder: "स्मरणपत्र ठेवा",
    paymentInitiated: "पेमेंट सुरू झाले",
    paymentCredited: "पेमेंट जमा झाले",
    bankProcessing: "बँक प्रक्रिया सुरू",
    procCompleted: "खरेदी पूर्ण झाली",
    arrived: "केंद्रावर आगमन",
    weighing: "वजन मोजणे",
    qualityCheck: "गुणवत्ता तपासणी",
    waiting: "प्रतीक्षा यादी",
    registration: "नोंदणी",
    verified: "सत्यापित",
    pending: "प्रलंबित",
    rejected: "अस्वीकृत",
    notArrived: "आगमन नाही",
    mandiBusyText: "वाशी केंद्र सध्या व्यस्त आहे. या जवळच्या पर्यायी केंद्रांवर लवकर वेळ उपलब्ध आहे."
  },
  hi: {
    navHome: "मुख्य",
    navBook: "बुकिंग",
    navStatus: "स्थिति",
    navAlerts: "सूचना",
    navProfile: "प्रोफाइल",
    namaskar: "नमस्कार",
    farmerId: "किसान आईडी",
    mobileNumber: "मोबाइल नंबर",
    loginTitle: "किसान लॉगिन",
    loginSub: "स्मार्टप्रोक्योर पोर्टल",
    loginBtn: "ओटीपी प्राप्त करें & लॉगिन करें",
    enterOtp: "४-अंकीय ओटीपी दर्ज करें",
    helpSupport: "सहायता और संपर्क",
    currentStatus: "वर्तमान खरीद स्थिति",
    soybean: "सोयाबीन",
    cotton: "कपास",
    turDal: "अरहर (तूर)",
    paddy: "धान",
    bookingConfirmed: "बुकिंग की पुष्टि हो गई!",
    viewBooking: "बुकिंग देखें",
    bookSlot: "खरीद स्लॉट बुक करें",
    myProcurement: "मेरी खरीद",
    paymentStatus: "भुगतान स्थिति",
    todayTime: "आज का समय",
    myToken: "मेरा टोकन",
    procStatus: "खरीद स्थिति",
    reschedule: "फिर से समय चुनें",
    notifications: "सूचनाएं",
    profile: "प्रोफाइल",
    commodity: "फसल",
    quantity: "मात्रा (क्विंटल)",
    centre: "खरीद केंद्र",
    slot: "समय",
    confirm: "पुष्टि करें",
    selectCommodity: "फसल चुनें",
    enterQuantity: "मात्रा दर्ज करें",
    chooseCentre: "खरीद केंद्र चुनें",
    selectSlot: "समय चुनें",
    keepCentre: "यही केंद्र रखें",
    missedSlot: "आपकी निर्धारित समय-सीमा छूट गई है",
    chooseAnotherSlot: "दूसरा स्लॉट चुनें",
    peopleAhead: "कतार में आगे लोग",
    estWait: "अनुमानित प्रतीक्षा",
    minutes: "मिनट",
    broughtItems: "साथ लाने वाले दस्तावेज",
    bring712: "७/१२ खतौनी और बैंक पासबुक साथ लाएं",
    directions: "दिशा-निर्देश",
    addReminder: "रिमाइंडर जोड़ें",
    paymentInitiated: "भुगतान शुरू",
    paymentCredited: "भुगतान जमा",
    bankProcessing: "बँक प्रक्रिया",
    procCompleted: "खरीद पूरी हुई",
    arrived: "केंद्र पर आगमन",
    weighing: "तौल (वजन)",
    qualityCheck: "गुणवत्ता जांच",
    waiting: "प्रतीक्षा",
    registration: "पंजीकरण",
    verified: "सत्यापित",
    pending: "लंबित",
    rejected: "अस्वीकृत",
    notArrived: "नहीं पहुंचे",
    mandiBusyText: "वाशी केंद्र फिलहाल व्यस्त है। इन नजदीकी केंद्रों पर जल्द उपलब्धता है।"
  },
  en: {
    navHome: "Home",
    navBook: "Book",
    navStatus: "Queue",
    navAlerts: "Alerts",
    navProfile: "Profile",
    namaskar: "Namaskar",
    farmerId: "Farmer ID",
    mobileNumber: "Mobile Number",
    loginTitle: "Farmer Login",
    loginSub: "SmartProcure Portal",
    loginBtn: "Get OTP & Verify",
    enterOtp: "Enter 4-digit OTP",
    helpSupport: "Help & Support",
    currentStatus: "Current Procurement Status",
    soybean: "Soybean",
    cotton: "Cotton",
    turDal: "Tur Dal",
    paddy: "Paddy",
    bookingConfirmed: "Booking Confirmed!",
    viewBooking: "View Booking",
    bookSlot: "Book Procurement Slot",
    myProcurement: "My Procurement",
    paymentStatus: "Payment Status",
    todayTime: "Today's Slot",
    myToken: "My Token",
    procStatus: "Procurement Status",
    reschedule: "Reschedule / Rebook",
    notifications: "Notifications",
    profile: "Profile",
    commodity: "Commodity",
    quantity: "Quantity (Quintals)",
    centre: "Procurement Centre",
    slot: "Slot / Time",
    confirm: "Confirm",
    selectCommodity: "Select Commodity",
    enterQuantity: "Enter Quantity",
    chooseCentre: "Choose Centre",
    selectSlot: "Select Slot",
    keepCentre: "Keep This Centre",
    missedSlot: "Your appointment was missed",
    chooseAnotherSlot: "Choose Another Slot",
    peopleAhead: "People Ahead",
    estWait: "Est. Waiting Time",
    minutes: "mins",
    broughtItems: "What to bring",
    bring712: "Bring 7/12 land record & bank passbook",
    directions: "Get Directions",
    addReminder: "Add Reminder",
    paymentInitiated: "Payment Initiated",
    paymentCredited: "Payment Credited",
    bankProcessing: "Bank Processing",
    procCompleted: "Procurement Completed",
    arrived: "Arrived at Centre",
    weighing: "Weighing",
    qualityCheck: "Quality Check",
    waiting: "Waiting in Queue",
    registration: "Registration",
    verified: "Verified",
    pending: "Pending",
    rejected: "Rejected",
    notArrived: "Not Arrived",
    mandiBusyText: "Vashi centre is currently busy. These nearby centres have earlier availability."
  }
};

// 2. Active Application State
let appState = {
  currentLanguage: 'en',
  
  // Farmer Profile (Ramesh Patil)
  farmer: {
    id: "FMR-71289",
    name: "Ramesh Patil",
    mobile: "9876543210",
    village: "Kopar Khairane",
    lat: 19.0900,
    long: 73.0000,
    landRecords: [
      { surveyNo: "214/A", areaAcres: 5.5, cropType: "soybean", verified: true },
      { surveyNo: "214/B", areaAcres: 3.2, cropType: "cotton", verified: true }
    ],
    cropPlans: [
      { cropType: "soybean", season: "Kharif", expectedQty: 35 },
      { cropType: "cotton", season: "Kharif", expectedQty: 20 }
    ]
  },
  
  // Mandi database and active loads
  mandis: [
    { id: "vashi", name: "Vashi Mandi", lat: 19.0760, long: 73.0075, distance: 5.1, load: 92, waitMin: 225, capacity: 200, booked: 184 },
    { id: "turbhe", name: "Turbhe Mandi", lat: 19.0330, long: 73.0190, distance: 8.2, load: 55, waitMin: 90, capacity: 150, booked: 82 },
    { id: "sanpada", name: "Sanpada Mandi", lat: 19.0667, long: 73.0167, distance: 6.5, load: 60, waitMin: 120, capacity: 150, booked: 90 }
  ],
  
  // All active bookings in system
  bookings: [
    // Pre-seeded dummy bookings to simulate queue
    { id: "BK-101", token: "VSH-1020", farmerId: "FMR-45120", farmerName: "Sanjay Deshmukh", commodity: "soybean", quantity: 30, centreId: "vashi", date: "2026-08-25", slot: "09:00 AM", status: "COMPLETED", queueToken: 1020, timestamp: "2026-08-25 09:15" },
    { id: "BK-102", token: "VSH-1021", farmerId: "FMR-90184", farmerName: "Anil Shinde", commodity: "soybean", quantity: 15, centreId: "vashi", date: "2026-08-25", slot: "09:30 AM", status: "COMPLETED", queueToken: 1021, timestamp: "2026-08-25 09:45" },
    { id: "BK-103", token: "VSH-1022", farmerId: "FMR-31294", farmerName: "Vitthal Kale", commodity: "soybean", quantity: 40, centreId: "vashi", date: "2026-08-25", slot: "10:00 AM", status: "QUALITY_CHECK", queueToken: 1022, timestamp: "2026-08-25 10:10" },
    { id: "BK-104", token: "VSH-1023", farmerId: "FMR-88102", farmerName: "Pandurang Pawar", commodity: "paddy", quantity: 50, centreId: "vashi", date: "2026-08-25", slot: "10:30 AM", status: "WEIGHING", queueToken: 1023, timestamp: "2026-08-25 10:28" },
    { id: "BK-105", token: "VSH-1024", farmerId: "FMR-67543", farmerName: "Babanrao Patil", commodity: "soybean", quantity: 20, centreId: "vashi", date: "2026-08-25", slot: "10:30 AM", status: "ARRIVED", queueToken: 1024, timestamp: "2026-08-25 10:31" },
    
    // Ramesh's active booking
    {
      id: "BK-712",
      token: "TBR-1042",
      farmerId: "FMR-71289",
      farmerName: "Ramesh Patil",
      commodity: "soybean",
      quantity: 20,
      centreId: "turbhe",
      date: "2026-08-25",
      slot: "11:30 AM",
      status: "BOOKED",
      queueToken: 1042,
      timestamp: "2026-08-25 10:30"
    }
  ],
  
  // Payment transactions
  payments: [
    { id: "TXN-90184", bookingId: "BK-102", farmerName: "Anil Shinde", amount: 73350, status: "CREDITED", bankRef: "NEFT-SBIN8293014", date: "25 Aug" },
    { id: "TXN-45120", bookingId: "BK-101", farmerName: "Sanjay Deshmukh", amount: 146700, status: "INITIATED", bankRef: "NEFT-SBIN8293992", date: "25 Aug" }
  ],
  
  notifications: [
    { id: 1, title: "Booking Confirmed", body: "Your slot at Turbhe Mandi on 25 Aug 11:30 AM is confirmed. Token: TBR-1042", time: "5 mins ago", unread: true },
    { id: 2, title: "Weather Advisory", body: "Light showers expected in Navi Mumbai. Mandis have covered storage sheds.", time: "1 hour ago", unread: false }
  ],
  
  // Current screen state tracker
  farmerApp: {
    isLoggedIn: false,
    activeScreen: 'login', // login, home, booking, slots, confirm, status, notifications, profile
    bookingForm: {
      commodity: '',
      quantity: '',
      centreId: '',
      date: '',
      slot: ''
    },
    bookingStep: 1, // 1: Commodity, 2: Quantity & Centre, 3: Slot & Confirm
    hasMissedSlot: false
  },
  
  dashboard: {
    activeTab: 'overview', // overview, appointments, live-queue, capacity, payments, integrations
    selectedCentreId: 'all',
    searchQuery: '',
    loadBalancingState: 'idle',
    logEntries: [
      { type: 'info', time: '19:36:57', text: 'SmartProcure Core Orchestrator successfully initialized.' },
      { type: 'query', time: '19:36:57', text: 'SELECT * FROM mandis WHERE district = "Thane"' },
      { type: 'result', time: '19:36:57', text: 'Returned 3 rows: Vashi (92% load), Turbhe (55% load), Sanpada (60% load)' }
    ]
  }
};

// Map Instance (Leaflet)
let leafletMap = null;

// ==========================================
// 3. Database & Orchestrator Logs
// ==========================================
function addLog(type, text) {
  const time = new Date().toTimeString().split(' ')[0];
  appState.dashboard.logEntries.unshift({ type, time, text });
  if (appState.dashboard.logEntries.length > 50) {
    appState.dashboard.logEntries.pop();
  }
  renderDbLogs();
}

function renderDbLogs() {
  const container = document.getElementById('db-logs-container');
  if (!container) return;
  
  container.innerHTML = appState.dashboard.logEntries.map(log => {
    let typeClass = log.type === 'query' ? 'query' : log.type === 'result' ? 'result' : '';
    return `<div class="db-logger-line ${typeClass}">[${log.time}] ${log.type.toUpperCase()}: ${escapeHtml(log.text)}</div>`;
  }).join('');
}

function escapeHtml(text) {
  return text.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 4. Multilingual Engine
// ==========================================
function changeLanguage(lang) {
  appState.currentLanguage = lang;
  document.getElementById('master-lang').value = lang;
  addLog('info', `Farmer App language context shifted to: ${lang.toUpperCase()}`);
  renderFarmerApp();
}

function getTranslation(key) {
  const lang = appState.currentLanguage;
  return translations[lang][key] || translations['en'][key] || key;
}

// ==========================================
// 5. Initializers & Orchestration Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderFarmerApp();
  renderDashboard();
});

// Switch Dashboard Tab
function switchDashTab(tab) {
  appState.dashboard.activeTab = tab;
  renderDashboard();
  
  // Highlight active tab
  const tabs = document.querySelectorAll('.dashboard-tab');
  tabs.forEach(btn => {
    btn.classList.remove('active');
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (onclickAttr.includes(`'${tab}'`)) {
      btn.classList.add('active');
    }
  });
  
  addLog('info', `Mandi dashboard active tab changed to: ${tab.toUpperCase()}`);
}

// Switch Farmer Bottom Tab
function switchPhoneTab(tab) {
  if (!appState.farmerApp.isLoggedIn) return;
  
  if (tab === 'home') appState.farmerApp.activeScreen = 'home';
  else if (tab === 'booking') {
    appState.farmerApp.activeScreen = 'booking';
    appState.farmerApp.bookingStep = 1;
    appState.farmerApp.bookingForm = { commodity: '', quantity: '', centreId: '', date: '', slot: '' };
  }
  else if (tab === 'status') appState.farmerApp.activeScreen = 'status';
  else if (tab === 'notifications') appState.farmerApp.activeScreen = 'notifications';
  else if (tab === 'profile') appState.farmerApp.activeScreen = 'profile';
  
  renderFarmerApp();
  
  // Highlight active tab
  const tabs = document.querySelectorAll('.phone-nav-item');
  tabs.forEach(btn => {
    btn.classList.remove('active');
    if (btn.querySelector('span').getAttribute('data-key') === getTabKey(tab)) {
      btn.classList.add('active');
    }
  });
}

function getTabKey(tab) {
  const map = { home: 'navHome', booking: 'navBook', status: 'navStatus', notifications: 'navAlerts', profile: 'navProfile' };
  return map[tab];
}

// ==========================================
// 6. Farmer Mobile App Renderer
// ==========================================
// Initialize checklist state
if (!appState.farmerApp.checklist) {
  appState.farmerApp.checklist = {
    bring712: false,
    bringAadhaar: false,
    bringBank: false,
    bringCropPlan: false
  };
}

function getOfficialHeaderHtml(backActionHtml = '') {
  return `
    <div class="gov-dept-header">
      ${backActionHtml}
      <div class="gov-emblem-svg">
        <svg viewBox="0 0 100 100" width="34" height="34" style="fill: var(--primary-color); display: block;">
          <circle cx="50" cy="50" r="44" fill="none" stroke="var(--primary-color)" stroke-width="4"/>
          <rect x="44" y="25" width="12" height="30" fill="var(--primary-color)"/>
          <path d="M38,55 L62,55 L58,70 L42,70 Z" fill="var(--primary-color)"/>
          <circle cx="50" cy="40" r="8" fill="#ffffff"/>
          <line x1="50" y1="55" x2="50" y2="70" stroke="#ffffff" stroke-width="2"/>
          <text x="50" y="82" font-size="8" font-family="var(--font-header)" font-weight="800" text-anchor="middle" fill="var(--primary-color)">महाराष्ट्र</text>
        </svg>
      </div>
      <div class="gov-title-block">
        <span class="gov-title-mr">अन्न व नागरी पुरवठा विभाग</span>
        <span class="gov-title-en">Food & Civil Supplies Dept, Maha</span>
      </div>
      <div class="official-stamp" style="font-size: 8px; padding: 2px 4px; border-width: 1px;">
        <i data-lucide="shield-check" style="width: 10px; height: 10px;"></i>
        <span>MSP</span>
      </div>
    </div>
    <div class="tricolor-stripe">
      <div class="stripe-orange"></div>
      <div class="stripe-white"></div>
      <div class="stripe-green"></div>
    </div>
  `;
}

function toggleChecklistItem(itemKey) {
  if (!appState.farmerApp.checklist) appState.farmerApp.checklist = {};
  appState.farmerApp.checklist[itemKey] = !appState.farmerApp.checklist[itemKey];
  renderFarmerApp();
}

function getChecklistHtml() {
  const c = appState.farmerApp.checklist || {};
  return `
    <div class="checklist-container">
      <h4 style="font-size:12px; font-weight:700; color:var(--text-dark); margin-bottom:8px; display:flex; align-items:center; gap:4px;">
        <i data-lucide="check-square" style="width:14px; height:14px;"></i>
        सोबत आणायची कागदपत्रे / Mandatory Items
      </h4>
      <p style="font-size:10px; color:var(--text-muted); margin-bottom:10px; line-height:1.3;">
        कृपया खरेदी केंद्रावर जाण्यापूर्वी खालील गोष्टी तपासा आणि टिक करा:
      </p>
      
      <div class="checklist-item" onclick="toggleChecklistItem('bring712')">
        <div class="checklist-checkbox ${c.bring712 ? 'checked' : ''}">
          ${c.bring712 ? '<i data-lucide="check" style="width:12px; height:12px; display:block;"></i>' : ''}
        </div>
        <span class="checklist-label ${c.bring712 ? 'checked' : ''}">मूळ डिजिटल ७/१२ उतारा (Original 7/12 land extract)</span>
      </div>
      
      <div class="checklist-item" onclick="toggleChecklistItem('bringAadhaar')">
        <div class="checklist-checkbox ${c.bringAadhaar ? 'checked' : ''}">
          ${c.bringAadhaar ? '<i data-lucide="check" style="width:12px; height:12px; display:block;"></i>' : ''}
        </div>
        <span class="checklist-label ${c.bringAadhaar ? 'checked' : ''}">मूळ आधार कार्ड (Original Aadhaar Card)</span>
      </div>
      
      <div class="checklist-item" onclick="toggleChecklistItem('bringBank')">
        <div class="checklist-checkbox ${c.bringBank ? 'checked' : ''}">
          ${c.bringBank ? '<i data-lucide="check" style="width:12px; height:12px; display:block;"></i>' : ''}
        </div>
        <span class="checklist-label ${c.bringBank ? 'checked' : ''}">बँक पासबुक प्रत (Bank Passbook Copy - Aadhaar Seeded)</span>
      </div>
      
      <div class="checklist-item" onclick="toggleChecklistItem('bringCropPlan')">
        <div class="checklist-checkbox ${c.bringCropPlan ? 'checked' : ''}">
          ${c.bringCropPlan ? '<i data-lucide="check" style="width:12px; height:12px; display:block;"></i>' : ''}
        </div>
        <span class="checklist-label ${c.bringCropPlan ? 'checked' : ''}">ई-पीक पाहणी नोंदणी (e-Peek Crop Registry proof)</span>
      </div>
    </div>
  `;
}

function renderFarmerApp() {
  const content = document.getElementById('phone-content');
  const nav = document.getElementById('phone-nav-bar');
  
  if (!appState.farmerApp.isLoggedIn) {
    nav.style.display = 'none';
    renderLoginScreen(content);
    return;
  }
  
  nav.style.display = 'flex';
  
  // Handle Missed Slot Banner Interruption
  if (appState.farmerApp.hasMissedSlot && appState.farmerApp.activeScreen === 'home') {
    renderMissedSlotScreen(content);
    return;
  }
  
  switch (appState.farmerApp.activeScreen) {
    case 'home':
      renderHomeScreen(content);
      break;
    case 'booking':
      renderBookingScreen(content);
      break;
    case 'status':
      renderStatusScreen(content);
      break;
    case 'notifications':
      renderNotificationsScreen(content);
      break;
    case 'profile':
      renderProfileScreen(content);
      break;
    case 'payment':
      showPaymentStatusMobile();
      break;
    default:
      renderHomeScreen(content);
  }
  
  // Remove existing toast alert if present in the DOM
  const existingToast = document.querySelector('.toast-alert');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Prepend floating alert toast to phone screen if active
  if (appState.farmerApp.activeAlertToast) {
    const toastHtml = `
      <div class="toast-alert" onclick="goToAlertsFromToast()" style="background-color:var(--primary-color); color:#ffffff; padding:10px 14px; display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid var(--accent-color); cursor:pointer; position:absolute; top:24px; left:0; right:0; z-index:9999; box-shadow:0 4px 10px rgba(0,0,0,0.15); animation: slideDown 0.3s ease;">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="background-color:rgba(255,255,255,0.2); width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <i data-lucide="bell" style="width:14px; height:14px; color:#ffffff;"></i>
          </div>
          <div style="text-align:left;">
            <div style="font-size:10px; font-weight:700; color:var(--accent-color);">${appState.farmerApp.activeAlertToast.title}</div>
            <div style="font-size:10px; color:#f3f4f6; line-height:1.2; font-weight:500;">${appState.farmerApp.activeAlertToast.body}</div>
          </div>
        </div>
        <i data-lucide="chevron-right" style="width:16px; height:16px; color:#ffffff; flex-shrink:0;"></i>
      </div>
    `;
    const screen = document.querySelector('.phone-screen');
    if (screen) {
      screen.insertAdjacentHTML('beforeend', toastHtml);
    }
  }
  
  // Update icons
  lucide.createIcons();
}

function goToAlertsFromToast() {
  appState.farmerApp.activeAlertToast = null;
  const existingToast = document.querySelector('.toast-alert');
  if (existingToast) {
    existingToast.remove();
  }
  switchPhoneTab('notifications');
}

// Screen 1: Login
function renderLoginScreen(container) {
  container.innerHTML = `
    ${getOfficialHeaderHtml()}
    <div class="farmer-body">
      <div class="login-header" style="margin: 20px 0 16px;">
        <i data-lucide="sprout" style="color: var(--success-color); width: 48px; height: 48px; display: inline-block;"></i>
        <h3>${getTranslation('loginTitle')}</h3>
        <p style="font-size: 13px; color: var(--text-muted);">कृषी खरेदी आणि स्लॉट व्यवस्थापन</p>
      </div>
      
      <div class="alert-banner alert-banner-info" style="margin-bottom: 16px; padding: 8px 12px;">
        <i data-lucide="info" style="width: 16px; height:16px; margin-top:0;"></i>
        <div class="alert-content">
          <p style="font-size: 11px;"><b>Demo Phone Number:</b> 9876543210</p>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">${getTranslation('mobileNumber')} / ${getTranslation('farmerId')}</label>
        <input type="text" id="login-phone" class="form-input" placeholder="उदा. 9876543210" value="9876543210">
      </div>
      
      <div class="form-group">
        <label class="form-label">${getTranslation('enterOtp')}</label>
        <input type="password" id="login-otp" class="form-input" placeholder="••••" value="1234">
      </div>
      
      <button class="phone-btn phone-btn-primary" onclick="handleLogin()" style="margin-top: 10px;">
        <i data-lucide="shield-check"></i>
        <span>${getTranslation('loginBtn')}</span>
      </button>
      
      <div style="margin-top: 24px; border-top: 1px solid var(--border-color); padding-top: 12px; font-size: 10px; color: var(--text-muted); line-height: 1.4;">
        <p style="text-align: center; font-weight: 600; margin-bottom: 4px;">शासकीय सूचना / Security Note</p>
        <p>लॉगिन करण्यासाठी आपला मोबाईल क्रमांक आधार कार्ड आणि ई-पीक पाहणी (e-Peek Pahani) सातबारा उताऱ्याशी जोडलेला असणे आवश्यक आहे.</p>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function handleLogin() {
  const phone = document.getElementById('login-phone').value;
  if (phone === appState.farmer.mobile) {
    appState.farmerApp.isLoggedIn = true;
    appState.farmerApp.activeScreen = 'home';
    addLog('query', `SELECT * FROM farmers WHERE mobile = '${phone}' LIMIT 1`);
    addLog('result', `Farmer authenticated: ${appState.farmer.name} (${appState.farmer.id})`);
    renderFarmerApp();
  } else {
    alert("Please use the demo mobile number: 9876543210");
  }
}

// Screen 2: Farmer Home
function renderHomeScreen(container) {
  // Find Ramesh's active booking
  const rameshBooking = appState.bookings.find(b => b.farmerId === appState.farmer.id && b.status !== 'COMPLETED' && b.status !== 'MISSED');
  
  let bookingCardHtml = '';
  if (rameshBooking) {
    const centreName = appState.mandis.find(m => m.id === rameshBooking.centreId).name;
    const dateFormatted = new Date(rameshBooking.date).toLocaleDateString(appState.currentLanguage === 'en' ? 'en-US' : 'mr-IN', { day: 'numeric', month: 'short' });
    
    bookingCardHtml = `
      <div class="card" style="border-left: 4px solid var(--primary-color); padding: 14px; margin-bottom: 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
          <span class="badge badge-primary">${getTranslation(rameshBooking.commodity)}</span>
          <span style="font-size: 11px; font-weight:700; color: var(--success-color); display:flex; align-items:center; gap:2px;">
            <i data-lucide="check-circle-2" style="width:12px; height:12px;"></i> ${getTranslation('bookingConfirmed')}
          </span>
        </div>
        <h4 style="font-size:15px; margin-bottom:4px;">${centreName}</h4>
        <div style="font-size: 12px; color: var(--text-muted); display:flex; gap:12px; margin-bottom: 10px;">
          <span><i data-lucide="calendar" style="width:12px; height:12px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>${dateFormatted}</span>
          <span><i data-lucide="clock" style="width:12px; height:12px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>${rameshBooking.slot}</span>
        </div>
        <button class="phone-btn phone-btn-secondary" onclick="appState.farmerApp.activeScreen = 'status'; renderFarmerApp();" style="padding: 6px 12px; font-size:12px;">
          <i data-lucide="eye" style="width:14px; height:14px;"></i>
          <span>${getTranslation('viewBooking')}</span>
        </button>
      </div>
    `;
  } else {
    bookingCardHtml = `
      <div class="card" style="text-align: center; padding: 24px; border-style: dashed;">
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">No active bookings found.</p>
        <button class="phone-btn phone-btn-primary" onclick="switchPhoneTab('booking')" style="font-size: 13px; padding: 8px 16px;">
          <i data-lucide="plus-circle" style="width:16px; height:16px;"></i>
          <span>${getTranslation('bookSlot')}</span>
        </button>
      </div>
    `;
  }
  
  container.innerHTML = `
    ${getOfficialHeaderHtml()}
    <div class="farmer-body">
      <!-- MHFCS Structured Welcome Banner -->
      <div class="farmer-welcome-card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
          <div>
            <span style="font-size:10px; color:var(--text-muted); font-weight:700; text-transform:uppercase;">${getTranslation('farmerId')}: ${appState.farmer.id}</span>
            <h3 style="margin:0; font-size:16px; font-weight:700;">${appState.farmer.name}</h3>
            <span style="font-size:11px; color:var(--text-muted);">${appState.farmer.village}, Navi Mumbai</span>
          </div>
          <span class="verify-badge">
            <i data-lucide="shield-check" style="width:10px; height:10px; display:inline-block; vertical-align:middle; margin-right:2px;"></i>
            Verified
          </span>
        </div>
        
        <div class="info-grid-row">
          <span class="info-grid-label">सातबारा नोंद / Survey Records</span>
          <span class="info-grid-value" style="color: var(--success-color);">e-Peek verified ✓</span>
        </div>
        <div class="info-grid-row">
          <span class="info-grid-label">नोंदणीकृत जमीन / Registered Area</span>
          <span class="info-grid-value">8.7 Acres (Soybean/Cotton)</span>
        </div>
      </div>
      
      <div style="font-size:12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform:uppercase; display:flex; align-items:center; gap:4px;">
        <i data-lucide="grid" style="width:14px; height:14px;"></i>
        शासकीय शेतकरी सेवा / Services Portal
      </div>
      
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom: 16px;">
        <button class="select-card" onclick="switchPhoneTab('booking')" style="padding: 12px; border-width:1.5px; border-color:var(--primary-color);">
          <i data-lucide="calendar-plus" style="color:var(--primary-color);"></i>
          <span style="font-size: 12px; font-weight:700; color:var(--primary-color);">१. स्लॉट बुकिंग</span>
          <span style="font-size: 9px; color:var(--text-muted);">Book Slot</span>
        </button>
        <button class="select-card" onclick="appState.farmerApp.activeScreen = 'status'; renderFarmerApp();" style="padding: 12px; border-width:1.5px;">
          <i data-lucide="clock" style="color:var(--warning-color);"></i>
          <span style="font-size: 12px; font-weight:700;">२. माझा टोकन</span>
          <span style="font-size: 9px; color:var(--text-muted);">Track Queue</span>
        </button>
        <button class="select-card" onclick="showPaymentStatusMobile()" style="padding: 12px; border-width:1.5px; grid-column: span 2;">
          <i data-lucide="indian-rupee" style="color:var(--success-color);"></i>
          <span style="font-size: 12px; font-weight:700; color:var(--success-color);">३. पेमेंट पावती Ledger</span>
          <span style="font-size: 10px; color:var(--text-muted);">View Disbursal Status</span>
        </button>
      </div>
      
      <div style="font-size:12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform:uppercase; display:flex; align-items:center; gap:4px;">
        <i data-lucide="bell" style="width:14px; height:14px;"></i>
        महत्त्वाच्या शासकीय सूचना / Alerts
      </div>
      <div class="notification-card unread" style="margin-bottom:0;" onclick="switchPhoneTab('notifications')">
        <div class="notification-card-dot"></div>
        <div class="notification-details">
          <div class="notification-title" style="font-size:12px;">${appState.notifications[0].title}</div>
          <div class="notification-body" style="font-size:10px;">${appState.notifications[0].body}</div>
          <div class="notification-time" style="font-size:9px;">${appState.notifications[0].time}</div>
        </div>
      </div>
    </div>
  `;
}

// Screen 3-5: Book slot flow
function renderBookingScreen(container) {
  const backBtnHtml = `
    <button onclick="appState.farmerApp.activeScreen = 'home'; renderFarmerApp();" style="border:none; background:none; padding:4px; margin-right:4px;">
      <i data-lucide="arrow-left" style="width: 20px; height: 20px; color: var(--primary-color);"></i>
    </button>
  `;
  
  container.innerHTML = `
    ${getOfficialHeaderHtml(backBtnHtml)}
    <div class="farmer-body">
      <!-- Step Progress Bar -->
      <div class="step-indicator" style="margin-bottom: 16px;">
        <div class="step-indicator-bar-fill" style="width: ${(appState.farmerApp.bookingStep - 1) * 50}%"></div>
        <div class="step-dot ${appState.farmerApp.bookingStep >= 1 ? 'active' : ''} ${appState.farmerApp.bookingStep > 1 ? 'completed' : ''}">1</div>
        <div class="step-dot ${appState.farmerApp.bookingStep >= 2 ? 'active' : ''} ${appState.farmerApp.bookingStep > 2 ? 'completed' : ''}">2</div>
        <div class="step-dot ${appState.farmerApp.bookingStep >= 3 ? 'active' : ''} ${appState.farmerApp.bookingStep > 3 ? 'completed' : ''}">3</div>
      </div>
      
      <div id="booking-step-content">
        <!-- Dynamic Steps loaded below -->
      </div>
    </div>
  `;
  
  renderBookingStep();
}

function renderBookingStep() {
  const container = document.getElementById('booking-step-content');
  const step = appState.farmerApp.bookingStep;
  
  if (step === 1) {
    // Step 1: Select Commodity
    container.innerHTML = `
      <h3 style="font-size:15px; margin-bottom:12px;">${getTranslation('selectCommodity')}</h3>
      <div class="commodity-grid">
        <div class="select-card ${appState.farmerApp.bookingForm.commodity === 'soybean' ? 'active' : ''}" onclick="selectBookingCommodity('soybean')">
          <i data-lucide="leaf"></i>
          <span class="select-card-title">${getTranslation('soybean')}</span>
          <span style="font-size:10px; color:var(--text-muted);">MSP: ₹4,892/Qtl</span>
        </div>
        <div class="select-card ${appState.farmerApp.bookingForm.commodity === 'cotton' ? 'active' : ''}" onclick="selectBookingCommodity('cotton')">
          <i data-lucide="scissors"></i>
          <span class="select-card-title">${getTranslation('cotton')}</span>
          <span style="font-size:10px; color:var(--text-muted);">MSP: ₹7,020/Qtl</span>
        </div>
        <div class="select-card ${appState.farmerApp.bookingForm.commodity === 'turDal' ? 'active' : ''}" onclick="selectBookingCommodity('turDal')">
          <i data-lucide="disc"></i>
          <span class="select-card-title">${getTranslation('turDal')}</span>
          <span style="font-size:10px; color:var(--text-muted);">MSP: ₹7,550/Qtl</span>
        </div>
        <div class="select-card ${appState.farmerApp.bookingForm.commodity === 'paddy' ? 'active' : ''}" onclick="selectBookingCommodity('paddy')">
          <i data-lucide="wheat"></i>
          <span class="select-card-title">${getTranslation('paddy')}</span>
          <span style="font-size:10px; color:var(--text-muted);">MSP: ₹2,300/Qtl</span>
        </div>
      </div>
      
      <button class="phone-btn phone-btn-primary ${appState.farmerApp.bookingForm.commodity ? '' : 'phone-btn-disabled'}" 
              onclick="advanceBookingStep(2)" ${appState.farmerApp.bookingForm.commodity ? '' : 'disabled'}>
        <span>Next / पुढे जा</span>
        <i data-lucide="chevron-right"></i>
      </button>
    `;
  } 
  else if (step === 2) {
    // Step 2: Quantity & Centre Recommendation
    const hasWarning = appState.farmerApp.bookingForm.centreId === 'vashi';
    
    let centreCardHtml = '';
    
    // Sort mandis: place recommendations on top
    appState.mandis.forEach(mandi => {
      const isRecommended = mandi.id === 'turbhe'; // Turbhe is suggested
      const isSelected = appState.farmerApp.bookingForm.centreId === mandi.id;
      
      centreCardHtml += `
        <div class="centre-card ${isRecommended ? 'recommended' : ''} ${isSelected ? 'active' : ''}" 
             style="${isSelected ? 'border: 2px solid var(--primary-color);' : ''}"
             onclick="selectBookingCentre('${mandi.id}')">
          ${isRecommended ? `<span class="centre-card-tag">Recommended / शिफारस केलेले</span>` : ''}
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="margin:0; font-size:14px;">${mandi.name}</h4>
            <span style="font-size:11px; font-weight:700; color:var(--primary-color);">${mandi.distance} km</span>
          </div>
          
          <div class="centre-stat-row">
            <div class="centre-stat-item">
              <span class="centre-stat-label">Current Load</span>
              <span class="centre-stat-val ${mandi.load > 80 ? 'high' : 'moderate'}">${mandi.load}%</span>
            </div>
            <div class="centre-stat-item">
              <span class="centre-stat-label">Est. Waiting</span>
              <span class="centre-stat-val">${mandi.waitMin >= 60 ? Math.floor(mandi.waitMin/60)+' hr '+(mandi.waitMin%60)+' min' : mandi.waitMin+' mins'}</span>
            </div>
            <div class="centre-stat-item">
              <span class="centre-stat-label">Next Slot</span>
              <span class="centre-stat-val" style="color: var(--success-color); font-weight:bold;">11:30 AM</span>
            </div>
          </div>
          
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:10px; color:var(--text-muted);">Capacity: ${mandi.booked}/${mandi.capacity} Qtl</span>
            <button class="phone-btn phone-btn-secondary" style="padding:4px 8px; font-size:10px; width:auto; border-radius:4px;">
              ${isSelected ? 'Selected / निवडले' : 'Select / निवडा'}
            </button>
          </div>
        </div>
      `;
    });
    
    container.innerHTML = `
      <div class="form-group">
        <label class="form-label">${getTranslation('enterQuantity')}</label>
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="number" id="booking-qty" class="form-input" style="flex:1;" placeholder="उदा. 20" 
                 value="${appState.farmerApp.bookingForm.quantity}" oninput="updateBookingQty(this.value)">
          <span style="font-weight:600; font-size:14px;">क्विंटल (Quintals)</span>
        </div>
      </div>
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin: 12px 0 6px;">
        <h3 style="font-size:13px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">
          ${getTranslation('chooseCentre')}
        </h3>
        <span style="font-size:11px; color:var(--primary-color); font-weight:600;">3 Near you</span>
      </div>
      
      <!-- Overload Banner warning -->
      <div id="mandi-overload-alert" class="alert-banner alert-banner-warning" style="display: ${hasWarning ? 'flex' : 'none'}; padding:8px 12px; margin-bottom:10px;">
        <i data-lucide="alert-triangle" style="width: 16px; height:16px; margin-top:0;"></i>
        <div class="alert-content">
          <p style="font-size:10px; font-weight:600; line-height:1.2;">
            ${getTranslation('mandiBusyText')}
          </p>
        </div>
      </div>
      
      <!-- GIS Map Frame -->
      <div id="mandi-leaflet-map" class="mandi-map"></div>
      
      <div class="centre-recommendation-list" style="margin-bottom: 20px;">
        ${centreCardHtml}
      </div>
      
      <div style="display:flex; gap:10px;">
        <button class="phone-btn phone-btn-secondary" onclick="advanceBookingStep(1)" style="flex:1;">
          <i data-lucide="chevron-left"></i>
          <span>Back</span>
        </button>
        <button id="step2-next-btn" class="phone-btn phone-btn-primary ${appState.farmerApp.bookingForm.quantity && appState.farmerApp.bookingForm.centreId ? '' : 'phone-btn-disabled'}" 
                onclick="advanceBookingStep(3)" style="flex:1.5;" ${appState.farmerApp.bookingForm.quantity && appState.farmerApp.bookingForm.centreId ? '' : 'disabled'}>
          <span>Next</span>
          <i data-lucide="chevron-right"></i>
        </button>
      </div>
    `;
    
    // Initialize map
    setTimeout(initMandiMap, 100);
  } 
  else if (step === 3) {
    // Step 3: Date & Slot Selection
    const selectedCentre = appState.mandis.find(m => m.id === appState.farmerApp.bookingForm.centreId);
    
    // Create Date selectors (Next 3 days starting 25 Aug)
    const dates = [
      { key: "2026-08-25", disp: "25 AUG", day: "TODAY" },
      { key: "2026-08-26", disp: "26 AUG", day: "WED" },
      { key: "2026-08-27", disp: "27 AUG", day: "THU" }
    ];
    
    let dateHtml = '';
    dates.forEach(d => {
      const isActive = appState.farmerApp.bookingForm.date === d.key;
      dateHtml += `
        <div class="date-btn ${isActive ? 'active' : ''}" onclick="selectBookingDate('${d.key}')">
          <div class="date-btn-day">${d.day}</div>
          <div class="date-btn-date">${d.disp.split(' ')[0]}</div>
          <div style="font-size:9px; font-weight:600; color:var(--text-muted);">${d.disp.split(' ')[1]}</div>
        </div>
      `;
    });
    
    // Create Slots selector
    const slots = [
      { time: "09:00 AM", status: "full" },
      { time: "10:30 AM", status: "limited" },
      { time: "11:30 AM", status: "available" },
      { time: "01:00 PM", status: "available" },
      { time: "02:30 PM", status: "available" },
      { time: "04:00 PM", status: "limited" }
    ];
    
    let slotHtml = '';
    slots.forEach(s => {
      const isActive = appState.farmerApp.bookingForm.slot === s.time;
      let statusText = s.status === 'full' ? 'FULL' : s.status === 'limited' ? 'LIMITED' : 'AVAILABLE';
      let statusClass = s.status;
      let disabledAttr = s.status === 'full' ? 'disabled' : '';
      
      slotHtml += `
        <button class="slot-btn ${isActive ? 'active' : ''} ${s.status === 'full' ? 'phone-btn-disabled' : ''}" 
                onclick="selectBookingSlot('${s.time}')" ${disabledAttr}>
          <span>${s.time}</span>
          <span class="slot-btn-status ${statusClass}">
            ${s.status === 'full' ? '●' : s.status === 'limited' ? '▲' : '✓'} ${statusText}
          </span>
        </button>
      `;
    });
    
    container.innerHTML = `
      <h3 style="font-size:13px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px;">
        Select Date / तारीख निवडा
      </h3>
      <div class="date-selector-row">
        ${dateHtml}
      </div>
      
      <h3 style="font-size:13px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px;">
        Select Time Slot / वेळ निवडा
      </h3>
      <div class="slot-grid" style="margin-bottom:20px;">
        ${slotHtml}
      </div>
      
      <div class="card" style="padding: 12px; background-color: var(--primary-light); margin-bottom: 20px; border-color: rgba(15, 62, 92, 0.2);">
        <h4 style="font-size:12px; color:var(--primary-color); margin-bottom:4px;">Booking Summary:</h4>
        <div style="font-size:11px; line-height:1.4;">
          <strong>Commodity:</strong> ${getTranslation(appState.farmerApp.bookingForm.commodity)} | 
          <strong>Qty:</strong> ${appState.farmerApp.bookingForm.quantity} Qtl<br>
          <strong>Centre:</strong> ${selectedCentre ? selectedCentre.name : ''}<br>
          <strong>Appt:</strong> ${appState.farmerApp.bookingForm.date} @ ${appState.farmerApp.bookingForm.slot || 'Not selected'}
        </div>
      </div>
      
      <div style="display:flex; gap:10px;">
        <button class="phone-btn phone-btn-secondary" onclick="advanceBookingStep(2)" style="flex:1;">
          <i data-lucide="chevron-left"></i>
          <span>Back</span>
        </button>
        <button class="phone-btn phone-btn-success ${appState.farmerApp.bookingForm.slot && appState.farmerApp.bookingForm.date ? '' : 'phone-btn-disabled'}" 
                onclick="confirmBookingSubmission()" style="flex:1.5;" ${appState.farmerApp.bookingForm.slot && appState.farmerApp.bookingForm.date ? '' : 'disabled'}>
          <i data-lucide="check-circle-2"></i>
          <span>Confirm Booking</span>
        </button>
      </div>
    `;
  }
  
  lucide.createIcons();
}

function selectBookingCommodity(comm) {
  appState.farmerApp.bookingForm.commodity = comm;
  addLog('info', `Farmer selected commodity: ${comm.toUpperCase()}`);
  renderBookingStep();
}

function updateBookingQty(val) {
  appState.farmerApp.bookingForm.quantity = parseFloat(val) || '';
  toggleStep2NextBtn();
}

function selectBookingCentre(centreId) {
  appState.farmerApp.bookingForm.centreId = centreId;
  addLog('info', `Farmer selected mandi centre: ${centreId.toUpperCase()}`);
  
  // Highlight map marker if initialized
  if (leafletMap) {
    // Zoom map closer
    const centre = appState.mandis.find(m => m.id === centreId);
    if (centre) leafletMap.setView([centre.lat, centre.long], 13);
  }
  
  renderBookingStep();
}

function selectBookingDate(dateStr) {
  appState.farmerApp.bookingForm.date = dateStr;
  addLog('info', `Farmer selected booking date: ${dateStr}`);
  renderBookingStep();
}

function selectBookingSlot(slotStr) {
  appState.farmerApp.bookingForm.slot = slotStr;
  addLog('info', `Farmer selected booking time slot: ${slotStr}`);
  renderBookingStep();
}

function toggleStep2NextBtn() {
  const btn = document.getElementById('step2-next-btn');
  if (!btn) return;
  const valid = appState.farmerApp.bookingForm.quantity > 0 && appState.farmerApp.bookingForm.centreId;
  if (valid) {
    btn.classList.remove('phone-btn-disabled');
    btn.removeAttribute('disabled');
  } else {
    btn.classList.add('phone-btn-disabled');
    btn.setAttribute('disabled', 'true');
  }
}

function advanceBookingStep(step) {
  appState.farmerApp.bookingStep = step;
  renderBookingScreen(document.getElementById('phone-content'));
}

// Initializing the Leaflet GIS Map in the simulation
function initMandiMap() {
  const mapDiv = document.getElementById('mandi-leaflet-map');
  if (!mapDiv) return;
  
  // Create map centered on Mumbai area
  leafletMap = L.map('mandi-leaflet-map', {
    zoomControl: false,
    attributionControl: false
  }).setView([19.0650, 73.0100], 11);
  
  // OpenStreetMap Tile Layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(leafletMap);
  
  // Farmer Home Icon (Blue)
  const homeIcon = L.divIcon({
    html: `<div style="background-color: var(--primary-color); border: 2px solid white; border-radius:50%; width:16px; height:16px; box-shadow:0 0 5px rgba(0,0,0,0.5)"></div>`,
    className: 'custom-div-icon',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
  
  L.marker([appState.farmer.lat, appState.farmer.long], { icon: homeIcon })
   .addTo(leafletMap)
   .bindPopup(`<b>My Village:</b> ${appState.farmer.village}`);
   
  // Add Mandi Markers
  appState.mandis.forEach(m => {
    let color = m.load > 80 ? 'var(--error-color)' : m.load > 60 ? 'var(--warning-color)' : 'var(--success-color)';
    const icon = L.divIcon({
      html: `<div style="background-color: ${color}; border: 2px solid white; border-radius:50%; width:18px; height:18px; box-shadow:0 0 5px rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; color:white; font-size:8px; font-weight:700;">M</div>`,
      className: 'custom-div-icon',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    
    L.marker([m.lat, m.long], { icon: icon })
     .addTo(leafletMap)
     .bindPopup(`<b>${m.name}</b><br>Load: ${m.load}%<br>Wait: ${m.waitMin} mins`);
  });
}

function confirmBookingSubmission() {
  const f = appState.farmerApp.bookingForm;
  
  // Calculate dynamic slot duration estimate (quantity-based scheduling)
  // Let base time = 30 mins, and each quintal adds 3 minutes
  const estProcessingMinutes = 30 + (f.quantity * 3);
  
  // Generate token and booking ID
  const prefix = f.centreId === 'vashi' ? 'VSH' : f.centreId === 'turbhe' ? 'TBR' : 'SPD';
  const lastToken = appState.bookings.filter(b => b.centreId === f.centreId).length + 1040;
  const token = `${prefix}-${lastToken}`;
  const bookingId = `BK-${Math.floor(Math.random() * 900) + 100}`;
  
  const newBooking = {
    id: bookingId,
    token: token,
    farmerId: appState.farmer.id,
    farmerName: appState.farmer.name,
    commodity: f.commodity,
    quantity: f.quantity,
    centreId: f.centreId,
    date: f.date,
    slot: f.slot,
    status: "BOOKED",
    queueToken: lastToken,
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
  };
  
  // Save to list
  appState.bookings.push(newBooking);
  
  // Remove missed slot flag if we successfully rescheduled
  appState.farmerApp.hasMissedSlot = false;
  
  // Log Database Transaction
  addLog('query', `INSERT INTO bookings (booking_id, token, farmer_id, commodity, quantity, centre_id, scheduled_date, slot_time, status, est_processing_mins) 
VALUES ('${bookingId}', '${token}', '${appState.farmer.id}', '${f.commodity}', ${f.quantity}, '${f.centreId}', '${f.date}', '${f.slot}', 'BOOKED', ${estProcessingMinutes})`);
  
  addLog('result', `New booking registered successfully. Assigned Token: ${token} at ${f.centreId.toUpperCase()}`);
  
  // Move to Confirmation Screen
  renderConfirmationScreen(document.getElementById('phone-content'), newBooking);
  
  // Re-render officer dashboard in background
  renderDashboard();
}

// Screen 6: Booking Confirmation
function renderConfirmationScreen(container, booking) {
  appState.farmerApp.activeScreen = 'confirm';
  const centre = appState.mandis.find(m => m.id === booking.centreId);
  const dateFormatted = new Date(booking.date).toLocaleDateString(appState.currentLanguage === 'en' ? 'en-US' : 'mr-IN', { day: 'numeric', month: 'long' });
  
  // Push Notification
  const newAlert = {
    id: appState.notifications.length + 1,
    title: "Booking Confirmed",
    body: `Your slot at ${centre.name} on ${dateFormatted} @ ${booking.slot} is confirmed. Token: ${booking.token}`,
    time: "Just now",
    unread: true
  };
  appState.notifications.unshift(newAlert);
  
  container.innerHTML = `
    ${getOfficialHeaderHtml()}
    
    <div class="farmer-body" style="text-align: center;">
      <div class="confirm-success-icon" style="margin-top: 10px;">
        <i data-lucide="check"></i>
      </div>
      
      <h3 style="font-size:18px; font-weight:700; color:var(--success-color); margin-bottom: 2px;">
        स्लॉट बुकिंग यशस्वी!
      </h3>
      <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">
        Token Number: <strong style="font-size:16px; color:var(--primary-color);">${booking.token}</strong>
      </p>
      
      <!-- Official Certificate Card -->
      <div class="card" style="text-align:left; padding:14px; margin-bottom: 14px; border: 1px solid var(--primary-color);">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1.5px solid var(--primary-light); padding-bottom:4px; align-items:center;">
          <span style="font-size:11px; color:var(--primary-color); font-weight:700; text-transform:uppercase;">खरेदी पावती / Receipt</span>
          <span class="official-stamp" style="font-size:8px; padding:1px 4px;">Verified</span>
        </div>
        
        <div style="font-size: 12px; line-height:1.6; color:var(--text-dark);">
          <strong>शेतकरी / Farmer:</strong> ${booking.farmerName}<br>
          <strong>Commodity / शेतमाल:</strong> ${getTranslation(booking.commodity)}<br>
          <strong>Quantity / वजन:</strong> ${booking.quantity} Quintals<br>
          <strong>Centre / केंद्र:</strong> ${centre.name}<br>
          <strong>Appointment / वेळ:</strong> ${dateFormatted} @ ${booking.slot}
        </div>
      </div>
      
      <!-- Interactive Checklist for Mandi Visit -->
      ${getChecklistHtml()}
      
      <div style="display:flex; flex-direction:column; gap:8px;">
        <button class="phone-btn phone-btn-primary" onclick="appState.farmerApp.activeScreen = 'status'; renderFarmerApp();">
          <i data-lucide="trending-up"></i>
          <span>Track Live Status / स्थिती पहा</span>
        </button>
        <button class="phone-btn phone-btn-secondary" onclick="appState.farmerApp.activeScreen = 'home'; renderFarmerApp();">
          <span>Go to Home / मुख्य स्क्रीन</span>
        </button>
      </div>
    </div>
  `;
  
  lucide.createIcons();
}

// Screen 7 & 9: Live Queue / My Token & Procurement Journey
function renderStatusScreen(container) {
  // Find Ramesh's active booking
  const booking = appState.bookings.find(b => b.farmerId === appState.farmer.id && b.status !== 'COMPLETED' && b.status !== 'MISSED');
  
  const backBtnHtml = `
    <button onclick="switchPhoneTab('home')" style="border:none; background:none; padding:4px; margin-right:4px;">
      <i data-lucide="arrow-left" style="width: 20px; height: 20px; color: var(--primary-color);"></i>
    </button>
  `;

  if (!booking) {
    container.innerHTML = `
      ${getOfficialHeaderHtml(backBtnHtml)}
      <div class="farmer-body" style="text-align: center; padding: 40px 20px;">
        <i data-lucide="calendar-x" style="width:48px; height:48px; color:var(--text-muted); margin-bottom:12px;"></i>
        <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 16px;">
          No active booking or queue token found today.
        </p>
        <button class="phone-btn phone-btn-primary" onclick="switchPhoneTab('booking')">
          <i data-lucide="plus"></i>
          <span>${getTranslation('bookSlot')}</span>
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  const centre = appState.mandis.find(m => m.id === booking.centreId);
  
  // Calculate queue statistics
  const activeToday = appState.bookings.filter(b => b.centreId === booking.centreId && b.date === booking.date && b.status !== 'COMPLETED' && b.status !== 'MISSED');
  const ahead = activeToday.filter(b => b.queueToken < booking.queueToken).length;
  const estWait = ahead * 15; 
  
  // Map booking status to timeline steps
  const steps = [
    { key: "BOOKED", label: getTranslation('registration'), time: "10:30 AM", num: 0 },
    { key: "ARRIVED", label: getTranslation('arrived'), time: booking.status !== 'BOOKED' ? "10:45 AM" : "--", num: 1 },
    { key: "WEIGHING", label: getTranslation('weighing'), time: ["WEIGHING", "QUALITY_CHECK", "APPROVED", "PAYMENT_INITIATED", "PAYMENT_CREDITED"].includes(booking.status) ? "11:05 AM" : "--", num: 2 },
    { key: "QUALITY_CHECK", label: getTranslation('qualityCheck'), time: ["QUALITY_CHECK", "APPROVED", "PAYMENT_INITIATED", "PAYMENT_CREDITED"].includes(booking.status) ? "11:15 AM" : "--", num: 3 },
    { key: "APPROVED", label: getTranslation('procCompleted'), time: ["APPROVED", "PAYMENT_INITIATED", "PAYMENT_CREDITED"].includes(booking.status) ? "11:25 AM" : "--", num: 4 },
    { key: "PAYMENT_INITIATED", label: getTranslation('paymentInitiated'), time: ["PAYMENT_INITIATED", "PAYMENT_CREDITED"].includes(booking.status) ? "11:30 AM" : "--", num: 5 },
    { key: "PAYMENT_CREDITED", label: getTranslation('paymentCredited'), time: booking.status === 'PAYMENT_CREDITED' ? "01:15 PM" : "--", num: 6 }
  ];
  
  // Get active step index
  let activeIndex = 0;
  if (booking.status === 'ARRIVED') activeIndex = 1;
  else if (booking.status === 'WEIGHING') activeIndex = 2;
  else if (booking.status === 'QUALITY_CHECK') activeIndex = 3;
  else if (booking.status === 'APPROVED') activeIndex = 4;
  else if (booking.status === 'PAYMENT_INITIATED') activeIndex = 5;
  else if (booking.status === 'PAYMENT_CREDITED') activeIndex = 6;
  
  let stepsHtml = '';
  steps.forEach((s, idx) => {
    let isCompleted = idx <= activeIndex;
    let isActive = idx === activeIndex;
    let statusClass = isCompleted ? 'completed' : '';
    if (isActive) statusClass = 'active';
    
    stepsHtml += `
      <div class="timeline-item ${statusClass}">
        <div class="timeline-dot"></div>
        <div class="timeline-info" style="display:flex; flex-direction:row; justify-content:space-between; align-items:center;">
          <div>
            <span class="timeline-title" style="font-size:12px; font-weight:${isActive?'700':'500'}; color:${isActive?'var(--primary-color)':'var(--text-dark)'}">
              ${s.label}
            </span>
          </div>
          <span class="timeline-time" style="font-size:10px;">${s.time}</span>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = `
    ${getOfficialHeaderHtml(backBtnHtml)}
    
    <div class="farmer-body">
      
      <!-- Token Card styled like official gate pass -->
      <div class="card" style="background: linear-gradient(to bottom, var(--primary-color), var(--primary-hover)); color: white; padding: 14px; text-align: center; margin-bottom: 12px; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
        <span style="font-size:9px; opacity:0.8; text-transform:uppercase; font-weight:700; letter-spacing:0.5px;">शासकीय खरेदी केंद्र गेट पास / GATE PASS</span>
        <h3 style="color: white; font-size: 30px; font-weight:800; letter-spacing:1px; margin: 4px 0; font-family:var(--font-header);">${booking.token}</h3>
        <p style="font-size: 11px; opacity: 0.9; margin: 0;">
          ${centre.name} | Qty: ${booking.quantity} Qtl (${getTranslation(booking.commodity)})
        </p>
      </div>
      
      <!-- Queue Stats (Only show if not yet completed) -->
      ${activeIndex < 4 ? `
        <div class="grid-2" style="margin-bottom: 12px; gap:8px;">
          <div class="stat-card" style="padding: 8px 10px; gap:6px;">
            <div class="stat-info">
              <span class="stat-label" style="font-size:8px;">${getTranslation('peopleAhead')}</span>
              <span class="stat-value" style="font-size:16px;">${ahead} शेतकरी</span>
            </div>
          </div>
          <div class="stat-card" style="padding: 8px 10px; gap:6px;">
            <div class="stat-info">
              <span class="stat-label" style="font-size:8px;">${getTranslation('estWait')}</span>
              <span class="stat-value" style="font-size:16px; color: var(--warning-color);">${estWait} ${getTranslation('minutes')}</span>
            </div>
          </div>
        </div>
      ` : ''}
      
      <!-- Live Journey Status (Vertical Timeline) -->
      <div class="card" style="padding: 14px; margin-bottom:12px;">
        <h4 style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:10px; border-bottom:1px solid #f3f4f6; padding-bottom:6px;">
          ${getTranslation('procStatus')} / खरेदी प्रवाह स्थिती
        </h4>
        
        <div class="timeline">
          ${stepsHtml}
        </div>
      </div>
      
      <!-- Checklist of items to bring -->
      ${activeIndex < 2 ? getChecklistHtml() : ''}
      
      <!-- Reschedule Action if waiting -->
      ${activeIndex === 0 ? `
        <button class="phone-btn phone-btn-secondary" onclick="triggerMissedSlotRecovery()" style="margin-top:10px;">
          <i data-lucide="calendar"></i>
          <span>${getTranslation('reschedule')}</span>
        </button>
      ` : ''}
    </div>
  `;
  
  lucide.createIcons();
}

// Screen 8: Missed Slot Screen
function renderMissedSlotScreen(container) {
  container.innerHTML = `
    <div class="gov-dept-header" style="border-bottom-color: var(--error-color);">
      <div class="gov-emblem-svg">
        <svg viewBox="0 0 100 100" width="34" height="34" style="fill: var(--error-color); display: block;">
          <circle cx="50" cy="50" r="44" fill="none" stroke="var(--error-color)" stroke-width="4"/>
          <rect x="44" y="25" width="12" height="30" fill="var(--error-color)"/>
          <path d="M38,55 L62,55 L58,70 L42,70 Z" fill="var(--error-color)"/>
          <text x="50" y="82" font-size="8" font-family="var(--font-header)" font-weight="800" text-anchor="middle" fill="var(--error-color)">महाराष्ट्र</text>
        </svg>
      </div>
      <div class="gov-title-block">
        <span class="gov-title-mr" style="color: var(--error-color);">खरेदी वेळ पुनर्गठन</span>
        <span class="gov-title-en">Missed Slot Recovery Portal</span>
      </div>
    </div>
    <div class="tricolor-stripe">
      <div class="stripe-orange"></div>
      <div class="stripe-white"></div>
      <div class="stripe-green"></div>
    </div>
    
    <div class="farmer-body">
      <div style="text-align: center; margin: 12px 0;">
        <div style="width:44px; height:44px; border-radius:50%; background-color:var(--error-light); color:var(--error-color); display:flex; align-items:center; justify-content:center; margin:0 auto 8px;">
          <i data-lucide="alert-circle" style="width:22px; height:22px;"></i>
        </div>
        <h3 style="font-size: 15px; font-weight:700; color:var(--error-color); margin-bottom:4px;">
          ${getTranslation('missedSlot')}
        </h3>
        <p style="font-size: 11px; color: var(--text-muted); line-height:1.35;">
          तुमची दिनांक <b>२५ ऑगस्ट रोजीची वेळ</b> चुकली आहे. खालीलपैकी उपलब्ध पर्यायी वेळ निवडा.
        </p>
      </div>
      
      <div style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px; display:flex; align-items:center; gap:4px;">
        <i data-lucide="calendar"></i>
        उपलब्ध केंद्र आणि वेळा / Reschedule Options
      </div>
      
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom: 20px;">
        
        <!-- Rec 1 -->
        <div class="centre-card" onclick="rebookMissedSlot('turbhe', '2026-08-25', '11:30 AM')" style="cursor:pointer; border-left:4px solid var(--success-color); padding: 12px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-size:13px; margin:0;">Turbhe Mandi (शिफारस केलेले)</h4>
            <span style="font-size:9px; font-weight:700; color:var(--success-color); background-color:var(--success-light); padding:2px 6px; border-radius:4px;">TODAY</span>
          </div>
          <p style="font-size:11px; color:var(--text-muted); margin: 2px 0 6px;">8.2 km • 55% load (1.5 hr wait)</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="badge badge-success" style="font-size:9px;">11:30 AM Available</span>
            <button class="phone-btn phone-btn-primary" style="padding: 4px 8px; font-size:10px; width:auto; border-radius:4px;">Rebook / निवडा</button>
          </div>
        </div>
        
        <!-- Rec 2 -->
        <div class="centre-card" onclick="rebookMissedSlot('sanpada', '2026-08-25', '01:00 PM')" style="cursor:pointer; padding: 12px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-size:13px; margin:0;">Sanpada Mandi</h4>
            <span style="font-size:9px; font-weight:700; color:var(--warning-color); background-color:var(--warning-light); padding:2px 6px; border-radius:4px;">TODAY</span>
          </div>
          <p style="font-size:11px; color:var(--text-muted); margin: 2px 0 6px;">6.5 km • 60% load (2 hr wait)</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="badge badge-warning" style="font-size:9px;">01:00 PM Limited</span>
            <button class="phone-btn phone-btn-secondary" style="padding: 4px 8px; font-size:10px; width:auto; border-radius:4px;">Rebook / निवडा</button>
          </div>
        </div>
        
        <!-- Rec 3 -->
        <div class="centre-card" onclick="rebookMissedSlot('turbhe', '2026-08-26', '09:00 AM')" style="cursor:pointer; padding: 12px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-size:13px; margin:0;">Turbhe Mandi</h4>
            <span style="font-size:9px; font-weight:700; color:var(--text-muted); background-color:#f3f4f6; padding:2px 6px; border-radius:4px;">TOMORROW</span>
          </div>
          <p style="font-size:11px; color:var(--text-muted); margin: 2px 0 6px;">8.2 km • Next day morning</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="badge badge-success" style="font-size:9px;">09:00 AM Available</span>
            <button class="phone-btn phone-btn-secondary" style="padding: 4px 8px; font-size:10px; width:auto; border-radius:4px;">Rebook / निवडा</button>
          </div>
        </div>
        
      </div>
      
      <button class="phone-btn phone-btn-secondary" onclick="appState.farmerApp.hasMissedSlot = false; renderFarmerApp();" style="width:100%;">
        <span>Cancel / मागे जा</span>
      </button>
    </div>
  `;
  
  lucide.createIcons();
}

function rebookMissedSlot(centreId, date, slot) {
  // Update Ramesh's booking in global state
  const b = appState.bookings.find(b => b.farmerId === appState.farmer.id);
  if (b) {
    b.centreId = centreId;
    b.date = date;
    b.slot = slot;
    b.status = 'BOOKED';
    
    // Generate new token based on centre
    const prefix = centreId === 'vashi' ? 'VSH' : centreId === 'turbhe' ? 'TBR' : 'SPD';
    const lastToken = appState.bookings.filter(bk => bk.centreId === centreId).length + 1040;
    b.token = `${prefix}-${lastToken}`;
    b.queueToken = lastToken;
    
    addLog('query', `UPDATE bookings SET centre_id='${centreId}', scheduled_date='${date}', slot_time='${slot}', status='BOOKED', token='${b.token}' WHERE farmer_id='${appState.farmer.id}'`);
    addLog('result', `Booking recovered successfully. Re-routed to ${centreId.toUpperCase()}. New Token: ${b.token}`);
  }
  
  appState.farmerApp.hasMissedSlot = false;
  appState.farmerApp.activeScreen = 'status';
  renderFarmerApp();
  renderDashboard();
}

// Screen 10: Payment Status Screen
function showPaymentStatusMobile() {
  appState.farmerApp.activeScreen = 'payment';
  const container = document.getElementById('phone-content');
  
  // Calculate Ramesh's payments
  const rameshBooking = appState.bookings.find(b => b.farmerId === appState.farmer.id);
  
  let paymentDetailsHtml = '';
  const backBtnHtml = `
    <button onclick="appState.farmerApp.activeScreen = 'home'; renderFarmerApp();" style="border:none; background:none; padding:4px; margin-right:4px;">
      <i data-lucide="arrow-left" style="width: 20px; height: 20px; color: var(--primary-color);"></i>
    </button>
  `;
  
  if (rameshBooking && ['APPROVED', 'PAYMENT_INITIATED', 'PAYMENT_CREDITED'].includes(rameshBooking.status)) {
    const amount = rameshBooking.quantity * 4892;
    let paymentStatus = 'PENDING';
    let bankRef = 'Awaiting Disbursal';
    let timelineIndex = 0;
    
    if (rameshBooking.status === 'APPROVED') {
      paymentStatus = 'APPROVED';
      timelineIndex = 1;
    } else if (rameshBooking.status === 'PAYMENT_INITIATED') {
      paymentStatus = 'INITIATED';
      bankRef = 'NEFT-SBIN8293994';
      timelineIndex = 2;
    } else if (rameshBooking.status === 'PAYMENT_CREDITED') {
      paymentStatus = 'CREDITED';
      bankRef = 'NEFT-SBIN8293994';
      timelineIndex = 3;
    }
    
    paymentDetailsHtml = `
      <div class="card" style="padding: 16px; margin-bottom: 14px; border:1px solid var(--success-color);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:11px; color:var(--text-muted); font-weight:600;">Procurement Amount</span>
          <span class="official-stamp" style="font-size:8px; padding:1px 4px;">PFMS Ledger</span>
        </div>
        <h2 style="font-size: 28px; font-weight:800; color:var(--success-color); margin: 2px 0 10px; font-family:var(--font-header);">₹${amount.toLocaleString('en-IN')}</h2>
        
        <div style="font-size:12px; border-bottom:1px solid #f3f4f6; padding-bottom:6px; margin-bottom:8px; line-height:1.6;">
          <strong>Commodity:</strong> ${getTranslation(rameshBooking.commodity)} (${rameshBooking.quantity} Qtl)<br>
          <strong>Transaction Ref:</strong> ${bankRef}<br>
          <strong>Disbursal Type:</strong> Direct Benefit Transfer (DBT)
        </div>
        
        <!-- Payment Timeline -->
        <div style="margin-top: 12px;">
          <h4 style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:10px;">Payment Progress / जमा अहवाल:</h4>
          
          <div style="display:flex; flex-direction:column; gap:12px; position:relative; padding-left: 20px;">
            <div style="position:absolute; top:4px; bottom:4px; left:6px; width:2px; background-color:var(--border-color);"></div>
            
            <!-- Step 1 -->
            <div style="position:relative;">
              <div style="position:absolute; left:-18px; top:4px; width:8px; height:8px; border-radius:50%; background-color:var(--success-color);"></div>
              <div style="font-size:11px; font-weight:700; color:var(--text-dark);">खरेदी मंजुरी (Approved at Mandi)</div>
            </div>
            
            <!-- Step 2 -->
            <div style="position:relative;">
              <div style="position:absolute; left:-18px; top:4px; width:8px; height:8px; border-radius:50%; background-color:${timelineIndex >= 2 ? 'var(--success-color)' : 'var(--border-color)'};"></div>
              <div style="font-size:11px; font-weight:700; color:${timelineIndex >= 2 ? 'var(--text-dark)' : 'var(--text-muted)'};">PFMS निधी वितरण (Dispatched via PFMS API)</div>
            </div>
            
            <!-- Step 3 -->
            <div style="position:relative;">
              <div style="position:absolute; left:-18px; top:4px; width:8px; height:8px; border-radius:50%; background-color:${timelineIndex >= 3 ? 'var(--success-color)' : 'var(--border-color)'};"></div>
              <div style="font-size:11px; font-weight:700; color:${timelineIndex >= 3 ? 'var(--success-color)' : 'var(--text-muted)'};">बँक खात्यात जमा (NEFT Credited to SBI)</div>
            </div>
          </div>
        </div>
      </div>
      
      <p style="font-size:10px; color:var(--text-muted); text-align:center; line-height:1.3; padding: 0 10px;">
        *नुकसान किंवा विलंब टाळण्यासाठी आपले बँक खाते आधार कार्डशी (Aadhaar DBT) लिंक असल्याची खात्री करा.
      </p>
    `;
  } else {
    paymentDetailsHtml = `
      <div class="card" style="text-align: center; padding: 30px 20px;">
        <i data-lucide="clock" style="width:36px; height:36px; color:var(--text-muted); margin-bottom:10px;"></i>
        <p style="font-size: 13px; color: var(--text-muted);">
          No approved transactions found. Payments are processed immediately after weighing and quality check confirmation at the mandi.
        </p>
      </div>
    `;
  }
  
  container.innerHTML = `
    ${getOfficialHeaderHtml(backBtnHtml)}
    <div class="farmer-body">
      ${paymentDetailsHtml}
    </div>
  `;
  lucide.createIcons();
}

// Screen 11: Notifications
function renderNotificationsScreen(container) {
  let listHtml = '';
  appState.notifications.forEach(n => {
    let actionButtonsHtml = '';
    if (n.isRedirectProposal) {
      actionButtonsHtml = `
        <div style="display:flex; gap:8px; margin-top:8px;" onclick="event.stopPropagation();">
          <button class="phone-btn phone-btn-primary" onclick="acceptRedirectProposal(${n.id})" style="padding:4px 8px; font-size:10px; width:auto; border-radius:4px;">
            Accept / होय (शिफ्ट करा)
          </button>
          <button class="phone-btn phone-btn-secondary" onclick="declineRedirectProposal(${n.id})" style="padding:4px 8px; font-size:10px; width:auto; border-radius:4px;">
            Decline / नाही
          </button>
        </div>
      `;
    }
    
    listHtml += `
      <div class="notification-card ${n.unread ? 'unread' : ''}" onclick="markNotificationRead(${n.id})">
        <div class="notification-card-dot" style="display:${n.unread ? 'block' : 'none'};"></div>
        <div class="notification-details">
          <div class="notification-title">${n.title}</div>
          <div class="notification-body">${n.body}</div>
          ${actionButtonsHtml}
          <div class="notification-time">${n.time}</div>
        </div>
      </div>
    `;
  });
  
  const backBtnHtml = `
    <button onclick="switchPhoneTab('home')" style="border:none; background:none; padding:4px; margin-right:4px;">
      <i data-lucide="arrow-left" style="width: 20px; height: 20px; color: var(--primary-color);"></i>
    </button>
  `;
  
  container.innerHTML = `
    ${getOfficialHeaderHtml(backBtnHtml)}
    
    <div class="farmer-body">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span style="font-size:12px; font-weight:700; color:var(--text-dark);">शासकीय सूचना फलक / Bulletin Board</span>
        <button onclick="clearNotifications()" style="font-size:10px; font-weight:700; background:none; border:none; color:var(--primary-color); cursor:pointer;">Clear All</button>
      </div>
      ${listHtml.length > 0 ? listHtml : '<p style="text-align:center; font-size:12px; color:var(--text-muted); margin-top:20px;">No alerts</p>'}
    </div>
  `;
  
  lucide.createIcons();
}

// Screen 12: Profile
function renderProfileScreen(container) {
  const backBtnHtml = `
    <button onclick="switchPhoneTab('home')" style="border:none; background:none; padding:4px; margin-right:4px;">
      <i data-lucide="arrow-left" style="width: 20px; height: 20px; color: var(--primary-color);"></i>
    </button>
  `;
  
  container.innerHTML = `
    ${getOfficialHeaderHtml(backBtnHtml)}
    
    <div class="farmer-body">
      <!-- MHFCS Identity Card Design -->
      <div class="card" style="padding: 16px; margin-bottom: 14px; border: 1.5px solid var(--primary-color); background: radial-gradient(circle, #ffffff 60%, var(--primary-light) 100%);">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--primary-color); padding-bottom:8px; margin-bottom:12px;">
          <div>
            <span style="font-size:8px; color:var(--text-muted); font-weight:700; text-transform:uppercase;">महाराष्ट्र शासन शेतकरी ओळखपत्र</span>
            <h4 style="margin:0; font-size:13px; color:var(--primary-color);">FARMER DIGITAL IDENTITY CARD</h4>
          </div>
          <span class="verify-badge" style="font-size:8px; padding:1px 4px;">ACTIVE</span>
        </div>
        
        <div style="display:flex; gap:12px; align-items:center;">
          <div style="width: 48px; height: 48px; border-radius: 4px; background-color: #cbd5e1; color: var(--primary-color); display:flex; align-items:center; justify-content:center; font-size: 20px; font-weight:700; border:1px solid var(--border-color); flex-shrink:0;">
            RP
          </div>
          <div style="font-size: 11px; line-height: 1.5;">
            <strong>नाव / Name:</strong> ${appState.farmer.name}<br>
            <strong>आयडी / ID:</strong> ${appState.farmer.id}<br>
            <strong>मोबाईल / Mob:</strong> +91 ${appState.farmer.mobile}
          </div>
        </div>
      </div>
      
      <div class="card" style="padding: 14px; margin-bottom: 14px;">
        <h4 style="font-size: 12px; font-weight:700; color: var(--text-dark); margin-bottom: 8px; border-bottom:1px solid #f3f4f6; padding-bottom:4px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="home" style="width:14px; height:14px;"></i>
          पत्ता व बँक तपशील / Registration
        </h4>
        <div style="font-size: 12px; line-height: 1.8;">
          <strong>Village / गाव:</strong> ${appState.farmer.village}, Navi Mumbai<br>
          <strong>Land Registry:</strong> e-Peek Pahani crop record active<br>
          <strong>Bank Account:</strong> State Bank of India ••••4321 (Aadhaar Seeded)
        </div>
      </div>
      
      <div class="card" style="padding: 14px;">
        <h4 style="font-size: 12px; font-weight:700; color: var(--text-dark); margin-bottom: 8px; border-bottom:1px solid #f3f4f6; padding-bottom:4px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="shield-check" style="width:14px; height:14px; color:var(--success-color);"></i>
          सातबारा पीक नोंदणी (Verified 7/12 land)
        </h4>
        <div style="font-size: 11px; line-height: 1.6;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px; border-bottom:1px dashed #f3f4f6; padding-bottom:4px;">
            <span>Survey 214/A (5.5 Acres)</span>
            <span class="badge badge-success" style="font-size:8px;">${getTranslation('soybean')} - VERIFIED</span>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span>Survey 214/B (3.2 Acres)</span>
            <span class="badge badge-success" style="font-size:8px;">${getTranslation('cotton')} - VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 7. Officer Web Dashboard Renderers
// ==========================================
function renderDashboard() {
  const container = document.getElementById('dashboard-content');
  const activeTab = appState.dashboard.activeTab;
  
  switch (activeTab) {
    case 'overview':
      renderOverviewTab(container);
      break;
    case 'appointments':
      renderAppointmentsTab(container);
      break;
    case 'live-queue':
      renderLiveQueueTab(container);
      break;
    case 'capacity':
      renderCapacityTab(container);
      break;
    case 'payments':
      renderPaymentsTab(container);
      break;
    case 'integrations':
      renderIntegrationsTab(container);
      break;
    default:
      renderOverviewTab(container);
  }
  
  // Re-bind Lucide icons
  lucide.createIcons();
}

// Tab 1: Queue Overview
function renderOverviewTab(container) {
  // Count stats
  const totalBookings = appState.bookings.length;
  const arrivedCount = appState.bookings.filter(b => b.status === 'ARRIVED').length;
  const completedCount = appState.bookings.filter(b => b.status === 'COMPLETED' || b.status === 'APPROVED' || b.status === 'PAYMENT_INITIATED' || b.status === 'PAYMENT_CREDITED').length;
  const waitingCount = appState.bookings.filter(b => ['WEIGHING', 'QUALITY_CHECK'].includes(b.status)).length;
  
  container.innerHTML = `
    <!-- Top Metrics Row -->
    <div class="grid-3">
      <div class="stat-card">
        <div class="stat-icon primary">
          <i data-lucide="calendar"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Today's Appointments</span>
          <span class="stat-value">${totalBookings}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon warning">
          <i data-lucide="user-check"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Arrived & Waiting</span>
          <span class="stat-value">${arrivedCount + waitingCount}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon success">
          <i data-lucide="check-circle-2"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Procurements Completed</span>
          <span class="stat-value">${completedCount}</span>
        </div>
      </div>
    </div>
    
    <!-- Central Congestion Risk Panel -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Mandi Crowd Status & Congestion Warnings</h3>
        <span class="badge badge-primary">Real-time Load Balancing Active</span>
      </div>
      
      <div class="grid-3" style="margin-bottom:0;">
        <div style="background-color: var(--error-light); border:1px solid rgba(198, 40, 40, 0.2); padding:14px; border-radius:var(--radius-md);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="color:var(--error-color);">Vashi Mandi</strong>
            <span class="badge badge-danger">92% Congested</span>
          </div>
          <p style="font-size:11px; line-height:1.4; color:#7f1d1d;">
            Average wait time is <b>3h 45m</b>. High inbound load. Redirect recommendations triggered for incoming bookings.
          </p>
        </div>
        
        <div style="background-color: var(--success-light); border:1px solid rgba(46, 125, 50, 0.2); padding:14px; border-radius:var(--radius-md);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="color:var(--success-color);">Turbhe Mandi</strong>
            <span class="badge badge-success">55% Moderate</span>
          </div>
          <p style="font-size:11px; line-height:1.4; color:#1b4332;">
            Average wait time is <b>1h 30m</b>. Normal handling speeds. Absorbing redirected overflow from Vashi.
          </p>
        </div>
        
        <div style="background-color: var(--success-light); border:1px solid rgba(46, 125, 50, 0.2); padding:14px; border-radius:var(--radius-md);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="color:var(--success-color);">Sanpada Mandi</strong>
            <span class="badge badge-success">60% Moderate</span>
          </div>
          <p style="font-size:11px; line-height:1.4; color:#1b4332;">
            Average wait time is <b>2h 00m</b>. Normal queues. Stable processing capacity available.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Today's Queue Logs & SQL Output -->
    <div class="grid-2">
      <div class="card" style="margin-bottom:0; display:flex; flex-direction:column; height:340px;">
        <div class="card-header">
          <h3 class="card-title">Live Mandi Operations Status</h3>
          <span style="font-size:11px; color:var(--text-muted);">Updates every 15s</span>
        </div>
        <div class="table-container" style="flex:1; overflow-y:auto;">
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Farmer Name</th>
                <th>Mandi</th>
                <th>Commodity</th>
                <th>Qty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${appState.bookings.slice(-5).reverse().map(b => {
                let statusBadge = `<span class="badge badge-primary">${b.status}</span>`;
                if (b.status === 'COMPLETED' || b.status === 'APPROVED' || b.status === 'PAYMENT_CREDITED') statusBadge = `<span class="badge badge-success">COMPLETED</span>`;
                else if (b.status === 'WEIGHING' || b.status === 'QUALITY_CHECK' || b.status === 'ARRIVED') statusBadge = `<span class="badge badge-warning">${b.status}</span>`;
                else if (b.status === 'MISSED') statusBadge = `<span class="badge badge-danger">MISSED</span>`;
                
                return `
                  <tr>
                    <td><strong>${b.token}</strong></td>
                    <td>${b.farmerName}</td>
                    <td><span style="text-transform:capitalize;">${b.centreId}</span></td>
                    <td>${getTranslation(b.commodity)}</td>
                    <td>${b.quantity} Qtl</td>
                    <td>${statusBadge}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- Developer detail logger inside dashboard -->
      <div class="card" style="margin-bottom:0; display:flex; flex-direction:column; height:340px;">
        <div class="card-header">
          <h3 class="card-title">Active Database SQL Log console</h3>
          <button class="phone-btn phone-btn-secondary" style="padding:4px 8px; width:auto; font-size:10px;" onclick="appState.dashboard.logEntries=[]; renderDbLogs();">Clear</button>
        </div>
        <div id="db-logs-container" class="db-logger" style="flex:1; max-height:none;">
          <!-- SQL Logs injected here -->
        </div>
      </div>
    </div>
  `;
  
  renderDbLogs();
}

// Tab 2: Daily Bookings
function renderAppointmentsTab(container) {
  container.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <div class="card-header">
        <h3 class="card-title">Pre-registered & Booked Slots Ledger</h3>
        <div style="display:flex; gap:8px;">
          <input type="text" placeholder="Search by Farmer ID/Token" class="form-input" style="padding:4px 10px; font-size:12px; width:180px;">
          <select class="lang-selector" style="font-size:11px;">
            <option>All Mandis</option>
            <option>Vashi</option>
            <option>Turbhe</option>
            <option>Sanpada</option>
          </select>
        </div>
      </div>
      
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Token</th>
              <th>Farmer Name (ID)</th>
              <th>Mandi Centre</th>
              <th>Scheduled Time</th>
              <th>Commodity</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${appState.bookings.map(b => {
              const centre = appState.mandis.find(m => m.id === b.centreId);
              let statusBadge = `<span class="badge badge-primary">${b.status}</span>`;
              if (b.status === 'COMPLETED' || b.status === 'APPROVED' || b.status === 'PAYMENT_CREDITED') statusBadge = `<span class="badge badge-success">COMPLETED</span>`;
              else if (['WEIGHING', 'QUALITY_CHECK', 'ARRIVED', 'PAYMENT_INITIATED'].includes(b.status)) statusBadge = `<span class="badge badge-warning">${b.status}</span>`;
              else if (b.status === 'MISSED') statusBadge = `<span class="badge badge-danger">MISSED</span>`;
              
              return `
                <tr>
                  <td>${b.id}</td>
                  <td><strong>${b.token}</strong></td>
                  <td><b>${b.farmerName}</b><br><span style="font-size:10px; color:var(--text-muted);">${b.farmerId}</span></td>
                  <td>${centre ? centre.name : b.centreId}</td>
                  <td>${b.date} • ${b.slot}</td>
                  <td><span style="text-transform:capitalize;">${b.commodity}</span></td>
                  <td>${b.quantity} Qtl</td>
                  <td>${statusBadge}</td>
                  <td>
                    ${b.status === 'BOOKED' ? `
                      <button class="phone-btn phone-btn-primary" style="padding:4px 8px; font-size:10px; width:auto; display:inline-flex;" onclick="markArrivedGate('${b.id}')">
                        Mark Arrived
                      </button>
                      <button class="phone-btn phone-btn-secondary" style="padding:4px 8px; font-size:10px; width:auto; display:inline-flex; border-color:var(--error-color); color:var(--error-color);" onclick="markMissedSlot('${b.id}')">
                        Miss
                      </button>
                    ` : `
                      <span style="font-size:11px; color:var(--text-muted);">Logged</span>
                    `}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function markArrivedGate(bookingId) {
  const b = appState.bookings.find(b => b.id === bookingId);
  if (b) {
    b.status = 'ARRIVED';
    addLog('query', `UPDATE bookings SET status = 'ARRIVED' WHERE booking_id = '${bookingId}'`);
    addLog('result', `Farmer ${b.farmerName} marked as ARRIVED at gate. Ticket queued.`);
    
    // Auto-update notification in farmer app
    appState.notifications.unshift({
      id: appState.notifications.length + 1,
      title: "Arrived at Mandi",
      body: `You have successfully checked in at ${b.centreId.toUpperCase()} Mandi. Please wait for weighing call.`,
      time: "Just now",
      unread: true
    });
    
    renderDashboard();
    renderFarmerApp();
  }
}

function markMissedSlot(bookingId) {
  const b = appState.bookings.find(b => b.id === bookingId);
  if (b) {
    b.status = 'MISSED';
    addLog('query', `UPDATE bookings SET status = 'MISSED' WHERE booking_id = '${bookingId}'`);
    addLog('result', `Booking ${bookingId} flagged as MISSED. Freeing slot capacity.`);
    
    if (b.farmerId === appState.farmer.id) {
      appState.farmerApp.hasMissedSlot = true;
    }
    
    renderDashboard();
    renderFarmerApp();
  }
}

// Tab 3: Live Gate Entry & Processing
function renderLiveQueueTab(container) {
  // Find active processing bookings (Arrived, Weighing, Quality Check)
  const activeQueue = appState.bookings.filter(b => ['ARRIVED', 'WEIGHING', 'QUALITY_CHECK'].includes(b.status));
  
  container.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <div class="card-header">
        <h3 class="card-title">Live Gate Queue Processing Command Center</h3>
        <span class="badge badge-warning">${activeQueue.length} Active in Mandi</span>
      </div>
      
      ${activeQueue.length === 0 ? `
        <div style="text-align:center; padding:40px; color:var(--text-muted);">
          <i data-lucide="users-2" style="width:40px; height:40px; margin-bottom:8px;"></i>
          <p>No farmers currently inside the mandi waiting for processing.</p>
          <p style="font-size:11px;">(Use the 'Mark Arrived' button in Daily Bookings, or click Scenario 4 below to simulate!)</p>
        </div>
      ` : `
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Farmer Name</th>
                <th>Commodity</th>
                <th>Booked Qty</th>
                <th>Current Status Stage</th>
                <th>Queue Operations</th>
              </tr>
            </thead>
            <tbody>
              ${activeQueue.map(b => {
                let barColor = 'var(--warning-color)';
                let stageText = 'Arrived at Gate';
                let actionBtn = '';
                
                if (b.status === 'ARRIVED') {
                  stageText = '1. Checked In';
                  actionBtn = `
                    <button class="phone-btn phone-btn-primary" style="padding:5px 10px; font-size:11px; width:auto;" onclick="advanceQueueStage('${b.id}', 'WEIGHING')">
                      Send to Weighing Scale
                    </button>
                  `;
                } 
                else if (b.status === 'WEIGHING') {
                  stageText = '2. Weighing Scale (Active)';
                  actionBtn = `
                    <button class="phone-btn phone-btn-primary" style="padding:5px 10px; font-size:11px; width:auto;" onclick="advanceQueueStage('${b.id}', 'QUALITY_CHECK')">
                      Approve Weight → Send to Quality lab
                    </button>
                  `;
                } 
                else if (b.status === 'QUALITY_CHECK') {
                  stageText = '3. Quality Lab (Testing)';
                  actionBtn = `
                    <button class="phone-btn phone-btn-success" style="padding:5px 10px; font-size:11px; width:auto; display:inline-flex;" onclick="approveProcurement('${b.id}')">
                      Approve (MSP Match)
                    </button>
                    <button class="phone-btn phone-btn-danger" style="padding:5px 10px; font-size:11px; width:auto; display:inline-flex;" onclick="rejectProcurement('${b.id}')">
                      Reject Quality
                    </button>
                  `;
                }
                
                return `
                  <tr>
                    <td><strong>${b.token}</strong></td>
                    <td><b>${b.farmerName}</b><br><span style="font-size:10px; color:var(--text-muted);">${b.farmerId}</span></td>
                    <td><span style="text-transform:capitalize;">${b.commodity}</span></td>
                    <td>${b.quantity} Qtl</td>
                    <td>
                      <span class="badge badge-warning">${stageText}</span>
                    </td>
                    <td>
                      ${actionBtn}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

function advanceQueueStage(bookingId, nextStage) {
  const b = appState.bookings.find(b => b.id === bookingId);
  if (b) {
    b.status = nextStage;
    addLog('query', `UPDATE bookings SET status = '${nextStage}' WHERE booking_id = '${bookingId}'`);
    addLog('result', `Farmer ${b.farmerName} (${b.token}) advanced to stage: ${nextStage}`);
    
    // Auto-update notification in farmer app
    let body = `Your appointment status updated to ${nextStage}.`;
    if (nextStage === 'WEIGHING') body = `Token ${b.token} is called at Weighing Bridge No. 3.`;
    else if (nextStage === 'QUALITY_CHECK') body = `Weighing completed. Soybean weight recorded: ${b.quantity} Qtl. Crop sample sent to Quality Lab.`;
    
    appState.notifications.unshift({
      id: appState.notifications.length + 1,
      title: `Mandi Status Update`,
      body: body,
      time: "Just now",
      unread: true
    });
    
    renderDashboard();
    renderFarmerApp();
  }
}

function approveProcurement(bookingId) {
  const b = appState.bookings.find(b => b.id === bookingId);
  if (b) {
    b.status = 'APPROVED';
    const amount = b.quantity * 4892; // soybean rate
    
    addLog('query', `UPDATE bookings SET status = 'APPROVED' WHERE booking_id = '${bookingId}'`);
    addLog('query', `INSERT INTO procurements (farmer_id, commodity, final_qty, price_qtl, total_payout, status) 
VALUES ('${b.farmerId}', '${b.commodity}', ${b.quantity}, 4892, ${amount}, 'APPROVED')`);
    
    addLog('result', `Procurement approved for ${b.farmerName}. Final weight: ${b.quantity} Qtl. Total payout: ₹${amount.toLocaleString('en-IN')}`);
    
    // Auto-update notification in farmer app
    appState.notifications.unshift({
      id: appState.notifications.length + 1,
      title: "Procurement Completed",
      body: `Your Soybean (20 Qtl) was successfully procured. Payment of ₹${amount.toLocaleString('en-IN')} approved.`,
      time: "Just now",
      unread: true
    });
    
    renderDashboard();
    renderFarmerApp();
  }
}

function rejectProcurement(bookingId) {
  const b = appState.bookings.find(b => b.id === bookingId);
  if (b) {
    b.status = 'REJECTED';
    addLog('query', `UPDATE bookings SET status = 'REJECTED' WHERE booking_id = '${bookingId}'`);
    addLog('result', `Procurement rejected for ${b.farmerName} (moisture levels too high).`);
    
    appState.notifications.unshift({
      id: appState.notifications.length + 1,
      title: "Procurement Rejected",
      body: `Crop sample rejected at Quality Lab: Moisture levels (16.5%) exceed MSP limit (12.0%).`,
      time: "Just now",
      unread: true
    });
    
    renderDashboard();
    renderFarmerApp();
  }
}

// Tab 4: Mandi Capacity Heatmap & Load Balancing
function renderCapacityTab(container) {
  const state = appState.dashboard.loadBalancingState || 'idle';
  
  // Header section
  let headerHtml = `
    <div class="card-header">
      <h3 class="card-title">Mandi Allocation Load Balancing Engine</h3>
      ${state === 'idle' ? `
        <button class="phone-btn phone-btn-primary" style="padding:6px 12px; font-size:11px; width:auto;" onclick="runLoadBalancingOptimization()">
          Run Routing Optimization
        </button>
      ` : ''}
    </div>
  `;
  
  // Alert Banner / Progress section
  let bodyHtml = '';
  
  if (state === 'idle') {
    bodyHtml = `
      <div class="alert-banner alert-banner-danger" style="margin-bottom:16px;">
        <i data-lucide="alert-triangle" style="color:var(--error-color);"></i>
        <div class="alert-content">
          <h4 style="color:var(--error-color);">Critical Congestion Alert at Vashi Mandi</h4>
          <p style="font-size:11px;">
            Vashi Mandi capacity has reached <strong>92% (congested)</strong> with an average wait time of <strong>3h 45m</strong>. 
            Run the Routing Optimization engine to balance loads to nearby low-congestion mandis.
          </p>
        </div>
      </div>
      
      <!-- Current Mandi Load Bars -->
      <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
        ${renderMandiLoadBars(false)}
      </div>
    `;
  } 
  
  else if (state === 'reviewing') {
    bodyHtml = `
      <div class="alert-banner alert-banner-warning" style="margin-bottom:16px;">
        <i data-lucide="check-circle" style="color:var(--warning-color);"></i>
        <div class="alert-content">
          <h4 style="color:var(--warning-color);">Load Balancing Recommendation Ready</h4>
          <p style="font-size:11px;">
            The routing algorithm has analyzed travel zones and capacity logs. <strong>18 upcoming bookings</strong> scheduled for Vashi can be redistributed.
          </p>
        </div>
      </div>
      
      <!-- Current Mandi Load Bars with dashed target indicators -->
      <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
        ${renderMandiLoadBars(true)}
      </div>
      
      <!-- Optimization Recommendations Detail -->
      <div class="card" style="padding: 14px; margin-bottom: 16px; background-color: var(--primary-light); border-color: var(--primary-color);">
        <h4 style="font-size: 13px; font-weight:700; color: var(--primary-color); margin-bottom: 8px;">Redistribution Algorithm Proposals:</h4>
        <div style="font-size: 12px; line-height: 1.6; margin-bottom: 12px;">
          • Total Bookings to Re-route: <strong>18 bookings</strong><br>
          • <strong>Turbhe Mandi</strong>: Recommend shifting 12 bookings (+12 slots)<br>
          • <strong>Sanpada Mandi</strong>: Recommend shifting 6 bookings (+6 slots)
        </div>
        <button class="phone-btn phone-btn-primary" onclick="showRedistributionList()">
          <i data-lucide="users"></i>
          <span>Review Recommendations</span>
        </button>
      </div>
    `;
  }
  
  else if (state === 'show_list') {
    bodyHtml = `
      <div class="alert-banner alert-banner-info" style="margin-bottom:16px;">
        <i data-lucide="info"></i>
        <div class="alert-content">
          <h4>Reviewing Farmer Consent & Redistribution Logs</h4>
          <p style="font-size:11px;">
            Proposed redirects were broadcasted to 18 farmers via SMS. Below are their responses. Only consenting farmers will be shifted.
          </p>
        </div>
      </div>
      
      <!-- Table of Proposed Shifting -->
      <div class="table-container" style="max-height: 250px; overflow-y: auto; margin-bottom: 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
        <table style="width: 100%; border-collapse: collapse; font-size:11px;">
          <thead>
            <tr style="background-color: #f3f4f6; text-align: left;">
              <th style="padding: 8px; border-bottom: 1px solid var(--border-color);">Farmer ID & Name</th>
              <th style="padding: 8px; border-bottom: 1px solid var(--border-color);">Original Mandi</th>
              <th style="padding: 8px; border-bottom: 1px solid var(--border-color);">Proposed Mandi</th>
              <th style="padding: 8px; border-bottom: 1px solid var(--border-color);">SMS Status</th>
              <th style="padding: 8px; border-bottom: 1px solid var(--border-color);">Consent State</th>
            </tr>
          </thead>
          <tbody>
            ${getMockFarmerSMSLogsHtml()}
          </tbody>
        </table>
      </div>
      
      <!-- Summary and Action buttons -->
      <div style="background-color: #f9fafb; padding:12px; border-radius:var(--radius-md); margin-bottom: 16px; border: 1px solid var(--border-color);">
        <div style="font-size:12px; line-height: 1.6; display:flex; justify-content:space-between; align-items:center;">
          <div>
            Total Proposed: <strong>18 Farmers</strong><br>
            Consented & Ready to Shift: <strong style="color:var(--success-color);">18 Farmers (12 to Turbhe, 6 to Sanpada)</strong>
          </div>
          <div style="text-align:right;">
            Wait Time reduction:<br>
            <strong style="color:var(--success-color);">4h 10m → 2h 05m</strong>
          </div>
        </div>
      </div>
      
      <div style="display:flex; gap:8px;">
        <button class="phone-btn phone-btn-primary" onclick="rebalanceMandiLoads()">
          <i data-lucide="check"></i>
          <span>Confirm & Execute Redistribution</span>
        </button>
        <button class="phone-btn phone-btn-secondary" style="width:auto; padding:0 16px;" onclick="cancelLoadBalancing()">
          <span>Cancel</span>
        </button>
      </div>
    `;
  }
  
  else if (state === 'completed') {
    bodyHtml = `
      <div class="alert-banner alert-banner-success" style="margin-bottom:16px;">
        <i data-lucide="check-circle" style="color:var(--success-color);"></i>
        <div class="alert-content">
          <h4 style="color:var(--success-color);">Load Balancing Completed Successfully</h4>
          <p style="font-size:11px;">
            18 bookings successfully redirected. Wait times balanced. Updated gate passes issued to all redirected farmers.
          </p>
        </div>
      </div>
      
      <!-- Optimized Mandi Load Bars -->
      <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
        ${renderMandiLoadBars(false)}
      </div>
      
      <!-- Summary card -->
      <div class="card" style="padding: 14px; margin-bottom: 16px; border:1.5px solid var(--success-color);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; border-bottom:1px solid #f3f4f6; padding-bottom:6px;">
          <span style="font-size:11px; font-weight:700; color:var(--success-color); text-transform:uppercase;">Optimization Report</span>
          <span class="badge badge-success" style="font-size:9px;">Redistribution Complete</span>
        </div>
        <div style="font-size:12px; line-height:1.7;">
          <strong>18 bookings</strong> recommended and approved for alternative slots:<br>
          • <strong>12 farmers</strong> shifted to <strong>Turbhe Mandi</strong><br>
          • <strong>6 farmers</strong> shifted to <strong>Sanpada Mandi</strong><br>
          • Estimated queue waiting time reduced from <strong style="color:var(--error-color);">4h 10m</strong> to <strong style="color:var(--success-color);">2h 05m</strong>
        </div>
      </div>
      
      <button class="phone-btn phone-btn-secondary" onclick="cancelLoadBalancing()">
        <span>Reset Optimizer</span>
      </button>
    `;
  }
  
  container.innerHTML = `
    <div class="card">
      ${headerHtml}
      <div style="padding: 16px;">
        ${bodyHtml}
      </div>
    </div>
  `;
  
  lucide.createIcons();
}

function runLoadBalancingOptimization() {
  appState.dashboard.loadBalancingState = 'reviewing';
  addLog('query', 'CALL calculate_multi_mandi_load_recommendations()');
  addLog('result', 'Optimization Complete: 18 eligible Vashi bookings can be redistributed to Turbhe (12) and Sanpada (6).');
  
  // Force reset Ramesh Patil's active booking back to Vashi to make the redirect demo 100% repeatable
  let b = appState.bookings.find(bk => bk.farmerId === appState.farmer.id);
  if (!b) {
    b = {
      id: "BK-712",
      token: "VSH-1042",
      farmerId: appState.farmer.id,
      farmerName: appState.farmer.name,
      commodity: "soybean",
      quantity: 20,
      centreId: "vashi",
      date: "2026-08-25",
      slot: "11:30 AM",
      status: "BOOKED",
      queueToken: 1042,
      timestamp: "2026-08-25 10:30"
    };
    appState.bookings.push(b);
  } else {
    b.centreId = 'vashi';
    b.date = '2026-08-25';
    b.slot = '11:30 AM';
    b.token = 'VSH-1042';
    b.status = 'BOOKED';
    b.queueToken = 1042;
  }
  
  // Automatically authenticate the farmer and shift focus to the status screen so the alert is immediately visible
  appState.farmerApp.isLoggedIn = true;
  appState.farmerApp.activeScreen = 'status';
  
  // Clear any existing proposal notifications to avoid duplicates
  appState.notifications = appState.notifications.filter(n => n.id !== 999);
  
  appState.notifications.unshift({
    id: 999,
    title: "Mandi Redirect Proposal / मंडी बदल प्रस्ताव",
    body: "Vashi Mandi is heavily congested. We propose rescheduling your booking to Turbhe Mandi (11:30 AM) to reduce wait time by 2 hours.",
    time: "Just now",
    unread: true,
    isRedirectProposal: true
  });
  
  appState.farmerApp.activeAlertToast = {
    title: "Mandi Redirect Proposal / मंडी बदल प्रस्ताव",
    body: "Vashi Mandi is overloaded. Tap to review shift proposal."
  };
  
  appState.dashboard.rameshConsentStatus = 'Pending Approval';
  addLog('info', 'Redirect Proposal notification pushed to Ramesh Patil.');
  
  renderDashboard();
  renderFarmerApp();
}

function showRedistributionList() {
  appState.dashboard.loadBalancingState = 'show_list';
  addLog('query', 'SELECT farmer_id, name, sms_delivered, consent_status FROM check_redistribution_consent()');
  addLog('result', 'Returned 18 rows: 18 farmers received SMS shift alerts. 18 responses approved.');
  renderDashboard();
}

function cancelLoadBalancing() {
  appState.dashboard.loadBalancingState = 'idle';
  appState.dashboard.rameshConsentStatus = 'Pending Approval';
  appState.farmerApp.activeAlertToast = null;
  
  // Reset Ramesh's booking back to Turbhe Mandi (default)
  const b = appState.bookings.find(bk => bk.farmerId === appState.farmer.id);
  if (b) {
    b.centreId = 'turbhe';
    b.date = '2026-08-25';
    b.slot = '11:30 AM';
    b.token = 'TBR-1042';
    b.status = 'BOOKED';
    b.queueToken = 1042;
  }
  
  // Remove proposal notifications
  appState.notifications = appState.notifications.filter(n => n.id !== 999 && n.id !== 1000);
  
  // Reset loads back to defaults
  appState.mandis[0].load = 92;
  appState.mandis[0].waitMin = 225;
  appState.mandis[0].booked = 184;
  
  appState.mandis[1].load = 55;
  appState.mandis[1].waitMin = 90;
  appState.mandis[1].booked = 82;
  
  appState.mandis[2].load = 60;
  appState.mandis[2].waitMin = 120;
  appState.mandis[2].booked = 90;
  
  addLog('info', 'Load balancing optimizer state reset.');
  renderDashboard();
  renderFarmerApp();
}

function rebalanceMandiLoads() {
  // Update state values to optimized
  appState.mandis[0].load = 72;
  appState.mandis[0].waitMin = 125;
  appState.mandis[0].booked = 166; // 184 - 18
  
  appState.mandis[1].load = 65; // 55 + 10%
  appState.mandis[1].waitMin = 110;
  appState.mandis[1].booked = 94; // 82 + 12
  
  appState.mandis[2].load = 63; // 60 + 3%
  appState.mandis[2].waitMin = 126;
  appState.mandis[2].booked = 96; // 90 + 6
  
  appState.dashboard.loadBalancingState = 'completed';
  
  addLog('query', `UPDATE bookings SET centre_id = 'turbhe' WHERE farmer_id IN ('FMR-10822', 'FMR-98214', 'FMR-45812', 'FMR-66120', 'FMR-33291', 'FMR-55410', 'FMR-61920', 'FMR-10293', 'FMR-77402', 'FMR-55219', 'FMR-44109', 'FMR-11029')`);
  addLog('query', `UPDATE bookings SET centre_id = 'sanpada' WHERE farmer_id IN ('FMR-22104', 'FMR-77189', 'FMR-88192', 'FMR-40918', 'FMR-99214', 'FMR-33201')`);
  
  // If Ramesh Patil is still in pending status, auto-approve his shift
  if (appState.dashboard.rameshConsentStatus === 'Pending Approval') {
    acceptRedirectProposal(999);
    return;
  }
  
  addLog('result', `Redistribution Complete. Relieved Vashi Mandi. Shifted 18 approved slots: 12 to Turbhe, 6 to Sanpada.`);
  renderDashboard();
  renderFarmerApp();
}

function acceptRedirectProposal(notificationId) {
  const b = appState.bookings.find(bk => bk.farmerId === appState.farmer.id);
  if (b) {
    b.centreId = 'turbhe';
    b.date = '2026-08-25';
    b.slot = '11:30 AM';
    b.token = 'TBR-1042';
    b.queueToken = 1042;
    b.status = 'BOOKED';
    
    addLog('query', `UPDATE bookings SET centre_id='turbhe', slot_time='11:30 AM', token='TBR-1042' WHERE farmer_id='${appState.farmer.id}'`);
    addLog('result', `Farmer Ramesh Patil accepted redirect to Turbhe Mandi.`);
  }
  
  // Update notification state to resolved
  const n = appState.notifications.find(notif => notif.id === notificationId);
  if (n) {
    n.unread = false;
    n.isRedirectProposal = false;
    n.body = "Accepted: Rescheduled to Turbhe Mandi (11:30 AM). Gate pass updated.";
  }
  
  renderFarmerApp();
  renderDashboard();
  
  // Go to status screen to show the new gate pass!
  setTimeout(() => {
    switchPhoneTab('status');
  }, 500);
}

function declineRedirectProposal(notificationId) {
  const n = appState.notifications.find(notif => notif.id === notificationId);
  if (n) {
    n.unread = false;
    n.isRedirectProposal = false;
    n.body = "Declined: Kept original booking at Vashi Mandi.";
  }
  
  addLog('info', 'Farmer Ramesh Patil declined redirect. Kept at Vashi Mandi.');
  renderFarmerApp();
  renderDashboard();
}

function triggerMissedSlotRecovery() {
  appState.farmerApp.hasMissedSlot = true;
  appState.farmerApp.activeScreen = 'home';
  renderFarmerApp();
  addLog('info', 'Farmer initiated Reschedule / Rebook workflow.');
}

function renderMandiLoadBars(showDashedFuture = false) {
  return appState.mandis.map(m => {
    let percentage = m.load;
    let progressColor = 'var(--success-color)';
    let statusClass = 'badge-success';
    
    let barHtml = '';
    if (showDashedFuture) {
      if (m.id === 'vashi') {
        barHtml = `
          <div style="display:flex; height:10px; background-color:#e5e7eb; border-radius:9999px; overflow:hidden; position:relative;">
            <div style="height:100%; width:72%; background-color:var(--success-color); transition:var(--transition);"></div>
            <div style="height:100%; width:20%; background-color:rgba(198,40,40,0.4); border-left:1.5px dashed var(--error-color); transition:var(--transition);" title="20% Load to shift"></div>
          </div>
        `;
        percentage = 92;
        progressColor = 'var(--error-color)';
        statusClass = 'badge-danger';
      } else if (m.id === 'turbhe') {
        barHtml = `
          <div style="display:flex; height:10px; background-color:#e5e7eb; border-radius:9999px; overflow:hidden; position:relative;">
            <div style="height:100%; width:55%; background-color:var(--success-color); transition:var(--transition);"></div>
            <div style="height:100%; width:10%; background-color:rgba(219,123,6,0.4); border-left:1.5px dashed var(--warning-color); transition:var(--transition);" title="10% Load to absorb"></div>
          </div>
        `;
        percentage = 55;
        progressColor = 'var(--success-color)';
        statusClass = 'badge-success';
      } else if (m.id === 'sanpada') {
        barHtml = `
          <div style="display:flex; height:10px; background-color:#e5e7eb; border-radius:9999px; overflow:hidden; position:relative;">
            <div style="height:100%; width:60%; background-color:var(--success-color); transition:var(--transition);"></div>
            <div style="height:100%; width:3%; background-color:rgba(219,123,6,0.4); border-left:1.5px dashed var(--warning-color); transition:var(--transition);" title="3% Load to absorb"></div>
          </div>
        `;
        percentage = 60;
        progressColor = 'var(--success-color)';
        statusClass = 'badge-success';
      }
    } else {
      if (percentage > 85) {
        progressColor = 'var(--error-color)';
        statusClass = 'badge-danger';
      } else if (percentage > 60) {
        progressColor = 'var(--warning-color)';
        statusClass = 'badge-warning';
      }
      barHtml = `
        <div style="height:10px; background-color:#e5e7eb; border-radius:9999px; overflow:hidden;">
          <div style="height:100%; width:${percentage}%; background-color:${progressColor}; transition:var(--transition);"></div>
        </div>
      `;
    }
    
    return `
      <div style="background:white; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div>
            <h4 style="margin:0; font-size:14px; font-weight:700;">${m.name}</h4>
            <span style="font-size:10px; color:var(--text-muted);">${m.distance} km from center zone</span>
          </div>
          <span class="badge ${statusClass}">${percentage}% Load</span>
        </div>
        
        <!-- Progress Bar -->
        ${barHtml}
        
        <div class="grid-3" style="margin-top:8px; margin-bottom:0;">
          <div style="font-size:10px;">
            <span style="color:var(--text-muted);">Queue wait:</span><br>
            <strong>${m.waitMin} mins</strong>
          </div>
          <div style="font-size:10px;">
            <span style="color:var(--text-muted);">Daily Capacity:</span><br>
            <strong>${m.capacity} Qtl</strong>
          </div>
          <div style="font-size:10px;">
            <span style="color:var(--text-muted);">Booked Slots:</span><br>
            <strong>${m.booked} slots</strong>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getMockFarmerSMSLogsHtml() {
  const rameshConsent = appState.dashboard.rameshConsentStatus || "Pending Approval";
  let rameshConsentHtml = '';
  if (rameshConsent === 'Pending Approval') {
    rameshConsentHtml = `<span class="badge badge-warning" style="font-size:9px; padding:2px 6px;">PENDING APPROVAL</span>`;
  } else if (rameshConsent === 'Approved (Shifted)') {
    rameshConsentHtml = `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>`;
  } else {
    rameshConsentHtml = `<span class="badge badge-danger" style="font-size:9px; padding:2px 6px;">DECLINED (KEPT VASHI)</span>`;
  }

  const mockFarmers = [
    { id: "FMR-71289", name: "Ramesh Patil (Demo)", target: "Turbhe Mandi", status: "Delivered", consentHtml: rameshConsentHtml },
    { id: "FMR-10822", name: "Sanjay Patil", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-98214", name: "Maruti Shinde", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-22104", name: "Baburao Kadam", target: "Sanpada Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-45812", name: "Tukaram Yadav", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-77189", name: "Namdev Sawant", target: "Sanpada Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-66120", name: "Ganpat Rao", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-33291", name: "Shankar Ghuge", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-88192", name: "Dilip Rane", target: "Sanpada Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-55410", name: "Anant Patil", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-61920", name: "Harish Deshmukh", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-40918", name: "Balasaheb Kale", target: "Sanpada Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-10293", name: "Sandeep Pawar", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-77402", name: "Rajendra Koli", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-99214", name: "Vijay More", target: "Sanpada Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-55219", name: "Yashwant Mane", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-44109", name: "Ramesh Bhosale", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-33201", name: "Ashok Jadhav", target: "Sanpada Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` },
    { id: "FMR-11029", name: "Vilas Kadam", target: "Turbhe Mandi", status: "Delivered", consentHtml: `<span class="badge badge-success" style="font-size:9px; padding:2px 6px;">APPROVED (SHIFTED)</span>` }
  ];
  
  return mockFarmers.map(f => `
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 8px;"><strong>${f.id}</strong><br>${f.name}</td>
      <td style="padding: 8px;">Vashi Mandi</td>
      <td style="padding: 8px;">${f.target}</td>
      <td style="padding: 8px;"><span style="color:var(--success-color); font-weight:600;"><i data-lucide="check" style="width:10px; height:10px; display:inline-block; vertical-align:middle; margin-right:2px;"></i>${f.status}</span></td>
      <td style="padding: 8px;">${f.consentHtml}</td>
    </tr>
  `).join('');
}

// Tab 5: Payments Hub
function renderPaymentsTab(container) {
  // Find approved bookings that need payment initiation
  const pendingPayments = appState.bookings.filter(b => b.status === 'APPROVED');
  
  // Find completed payments
  const completedPayments = appState.payments;
  
  container.innerHTML = `
    <!-- Metrics Row -->
    <div class="grid-2">
      <div class="stat-card" style="background-color: var(--success-light); border-color: rgba(46,125,50,0.2);">
        <div class="stat-icon success">
          <i data-lucide="indian-rupee"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Total Disbursed (PFMS)</span>
          <span class="stat-value">₹${completedPayments.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString('en-IN')}</span>
        </div>
      </div>
      <div class="stat-card" style="background-color: var(--warning-light); border-color: rgba(217,119,6,0.2);">
        <div class="stat-icon warning">
          <i data-lucide="clock"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Pending Approval Ledger</span>
          <span class="stat-value">${pendingPayments.length} Payments</span>
        </div>
      </div>
    </div>
    
    <!-- Actionable Pending Payouts Card -->
    <div class="card" style="margin-bottom:16px;">
      <div class="card-header">
        <h3 class="card-title">Pending Payment Processing Hub</h3>
        <span class="badge badge-warning">Direct NEFT Transfer</span>
      </div>
      
      ${pendingPayments.length === 0 ? `
        <div style="text-align:center; padding:30px; color:var(--text-muted);">
          <p>No pending payouts waiting for dispatch.</p>
          <p style="font-size:11px;">(Simulate a completed procurement inside the Live Queue page to generate a payout ledger!)</p>
        </div>
      ` : `
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Farmer Name</th>
                <th>Commodity</th>
                <th>Final Qty</th>
                <th>Total Payout</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              ${pendingPayments.map(b => {
                const amount = b.quantity * 4892;
                return `
                  <tr>
                    <td><strong>${b.token}</strong></td>
                    <td><b>${b.farmerName}</b><br><span style="font-size:10px; color:var(--text-muted);">${b.farmerId}</span></td>
                    <td><span style="text-transform:capitalize;">${b.commodity}</span></td>
                    <td>${b.quantity} Qtl</td>
                    <td><strong style="color:var(--primary-color);">₹${amount.toLocaleString('en-IN')}</strong></td>
                    <td>
                      <button class="phone-btn phone-btn-success" style="padding:6px 12px; font-size:11px; width:auto;" onclick="disbursePFMS('${b.id}', ${amount})">
                        Authorize Disbursal (PFMS API)
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
    
    <!-- Payment Logs -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Recent Settlement History (NEFT / PFMS Logs)</h3>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Txn Reference</th>
              <th>Farmer Name</th>
              <th>Settled Amount</th>
              <th>Bank Ref ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${completedPayments.map(p => `
              <tr>
                <td><strong>${p.id}</strong></td>
                <td>${p.farmerName}</td>
                <td>₹${p.amount.toLocaleString('en-IN')}</td>
                <td><code style="font-weight:700;">${p.bankRef}</code></td>
                <td>${p.date}</td>
                <td><span class="badge badge-success">${p.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function disbursePFMS(bookingId, amount) {
  const b = appState.bookings.find(b => b.id === bookingId);
  if (b) {
    b.status = 'PAYMENT_INITIATED';
    
    const txnId = `TXN-${Math.floor(Math.random() * 90000) + 10000}`;
    const bankRef = `NEFT-SBIN${Math.floor(Math.random() * 9000000) + 1000000}`;
    
    const newTxn = {
      id: txnId,
      bookingId: bookingId,
      farmerName: b.farmerName,
      amount: amount,
      status: "INITIATED",
      bankRef: bankRef,
      date: "25 Aug"
    };
    
    appState.payments.push(newTxn);
    
    addLog('query', `INSERT INTO payments (txn_id, booking_id, amount, status, bank_ref_id) 
VALUES ('${txnId}', '${bookingId}', ${amount}, 'INITIATED', '${bankRef}')`);
    addLog('result', `PFMS Payment initiated. Txn: ${txnId}, Bank Ref: ${bankRef}. Sent request to State Bank of India gateway.`);
    
    appState.notifications.unshift({
      id: appState.notifications.length + 1,
      title: "Payment Processed",
      body: `Payment of ₹${amount.toLocaleString('en-IN')} initiated. Ref: ${bankRef}. Will credit in 2 hours.`,
      time: "Just now",
      unread: true
    });
    
    renderDashboard();
    renderFarmerApp();
  }
}

// Tab 6: API Integrations & Mock Adapter Details
function renderIntegrationsTab(container) {
  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Orchestration Adapters & Land/Crop API Verification</h3>
        <span class="badge badge-success">API Status: Connected</span>
      </div>
      
      <p style="font-size:12px; color:var(--text-muted); margin-bottom:16px;">
        SmartProcure sits as a coordination layer. Below are the unified adapters that parse API inputs from Kapas Kisan, e-Samridhi, and the Maharashtra State Revenue Department databases.
      </p>
      
      <div class="grid-2">
        <div style="background:#f8fafc; border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md);">
          <h4 style="font-size:13px; color:var(--primary-color); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
            <i data-lucide="database" style="width:16px; height:16px;"></i>
            Maharashtra State land records (Mahabhumi 7/12 API)
          </h4>
          <pre style="background:#0f172a; color:#38bdf8; padding:10px; border-radius:6px; font-size:10px; overflow-x:auto;">
GET /api/v2/mahabhumi/verify-land?farmer_id=FMR-71289
Response:
{
  "farmer_id": "FMR-71289",
  "survey_no": "214/A",
  "owner_name": "Patil Ramesh Keshav",
  "verified_area_acres": 5.5,
  "eligible_crops": ["soybean", "tur_dal"],
  "digital_signature": "SIG-829A02B19F"
}
          </pre>
        </div>
        
        <div style="background:#f8fafc; border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md);">
          <h4 style="font-size:13px; color:var(--primary-color); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
            <i data-lucide="database" style="width:16px; height:16px;"></i>
            Crop Sowing Registry API (e-Peek Pahani Integration)
          </h4>
          <pre style="background:#0f172a; color:#38bdf8; padding:10px; border-radius:6px; font-size:10px; overflow-x:auto;">
GET /api/v1/epeek-pahani/crops?survey_no=214/A
Response:
{
  "survey_no": "214/A",
  "crop_sown": "soybean",
  "sowing_date": "2026-06-12",
  "gps_coordinates": "19.0905, 73.0012",
  "status": "APPROVED_BY_TALATHI"
}
          </pre>
        </div>
      </div>
      
      <div style="margin-top: 16px; background:#f8fafc; border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md);">
        <h4 style="font-size:13px; color:var(--primary-color); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
          <i data-lucide="cpu" style="width:16px; height:16px;"></i>
          Unified Commodity Adapter JSON Schema Normalization
        </h4>
        <p style="font-size:11px; color:var(--text-muted); margin-bottom:8px;">
          Normalizes data from three external procurement apps (e-Samridhi, MHFCS, Kapas Kisan) into a standard relational schema.
        </p>
        <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-size:10px; overflow-x:auto;">
// Normalized output parsed from Kapas Kisan API payload
{
  "unified_farmer_id": "FMR-71289",
  "source_system": "KAPAS_KISAN_MAHA",
  "commodity_normalized": "cotton",
  "registered_quantity_quintals": 20.0,
  "verification_token": "TOK-COTTON-98201",
  "eligibility_status": "VERIFIED"
}
        </pre>
      </div>
    </div>
  `;
}

// ==========================================
// 8. Scenario Controller Actions
// ==========================================
function triggerScenario(number) {
  // Reset active button state in controller
  const btns = document.querySelectorAll('.scenario-btn');
  btns.forEach(btn => btn.classList.remove('active'));
  
  const activeBtn = document.getElementById(`scenario-${number}-btn`);
  if (activeBtn) activeBtn.classList.add('active');
  
  addLog('info', `=== SCENARIO ${number} TRIGGERED ===`);
  
  switch (number) {
    case 1:
      // Normal Booking Flow
      resetDemo();
      appState.farmerApp.isLoggedIn = true;
      appState.farmerApp.activeScreen = 'home';
      // Remove Ramesh's pre-seeded booking so they can click "Book Slot" themselves
      appState.bookings = appState.bookings.filter(b => b.farmerId !== appState.farmer.id);
      
      renderFarmerApp();
      switchDashTab('appointments');
      
      addLog('info', 'Scenario 1: Resetting Ramesh\'s booking. Go to the phone screen, select "Book Slot", enter quantity (e.g. 20 Qtl), select Turbhe (recommended) or Vashi (congested), select Date & Time, and submit to see the database and admin dashboard sync.');
      break;
      
    case 2:
      // Mandi Overload & Redirect Recommendation
      resetDemo();
      appState.farmerApp.isLoggedIn = true;
      appState.farmerApp.activeScreen = 'status'; // Show Gate Pass page on phone
      
      // Seed a Vashi booking for Ramesh Patil
      const b2 = appState.bookings.find(bk => bk.farmerId === appState.farmer.id);
      if (b2) {
        b2.centreId = 'vashi';
        b2.date = '2026-08-25';
        b2.slot = '11:30 AM';
        b2.token = 'VSH-1042';
        b2.status = 'BOOKED';
        b2.queueToken = 1042;
      }
      
      switchDashTab('capacity');
      renderFarmerApp();
      
      addLog('info', 'Scenario 2: Mandi overload and redirect simulation. Ramesh Patil has an active booking at Vashi Mandi. Go to the dashboard capacity tab and execute redistribution. Ramesh will receive an in-app proposal notification to shift to Turbhe Mandi (11:30 AM) to save time, which he can accept or decline.');
      break;
      
    case 3:
      // Missed Slot Recovery
      resetDemo();
      appState.farmerApp.isLoggedIn = true;
      appState.farmerApp.hasMissedSlot = true;
      appState.farmerApp.activeScreen = 'home';
      
      // Update Ramesh's booking to show MISSED in database
      const b3 = appState.bookings.find(bk => bk.farmerId === appState.farmer.id);
      if (b3) b3.status = 'MISSED';
      
      renderFarmerApp();
      switchDashTab('appointments');
      
      addLog('info', 'Scenario 3: Missed Slot Recovery. Ramesh Patil missed his slot. The phone screen is automatically interrupted with a red "Missed Slot" warning. Clicking "Rebook Slot" offers one-click alternative bookings, re-scheduling him in the database.');
      break;
      
    case 4:
      // Live Gate-to-Queue Walkthrough
      resetDemo();
      appState.farmerApp.isLoggedIn = true;
      appState.farmerApp.activeScreen = 'status';
      
      // Ensure Ramesh has a booking that is active (ARRIVED or waiting)
      const b4 = appState.bookings.find(bk => bk.farmerId === appState.farmer.id);
      if (b4) b4.status = 'ARRIVED';
      
      renderFarmerApp();
      switchDashTab('live-queue');
      
      addLog('info', 'Scenario 4: Live gate-to-queue walkthrough. Ramesh has arrived at the mandi. On the right, select "Send to Weighing Scale", then "Approve Weight", then "Approve (MSP Match)" and watch the phone timeline update instantly at each step!');
      break;
      
    case 5:
      // Payment Verification
      resetDemo();
      appState.farmerApp.isLoggedIn = true;
      appState.farmerApp.activeScreen = 'payment';
      
      // Mark Ramesh booking as APPROVED (which generates payout list)
      const b5 = appState.bookings.find(bk => bk.farmerId === appState.farmer.id);
      if (b5) b5.status = 'APPROVED';
      
      renderFarmerApp();
      switchDashTab('payments');
      
      addLog('info', 'Scenario 5: Payments hub. Ramesh\'s crop was procured. Under the Payments Hub tab, authorization is pending. Click "Authorize Disbursal (PFMS API)" to initiate NEFT transfer. The farmer phone updates instantly to show the payment status.');
      break;
  }
}

function resetDemo() {
  // Re-initialize default booking and states
  appState.farmerApp.isLoggedIn = false;
  appState.farmerApp.activeScreen = 'login';
  appState.farmerApp.bookingStep = 1;
  appState.farmerApp.hasMissedSlot = false;
  appState.farmerApp.bookingForm = { commodity: '', quantity: '', centreId: '', date: '', slot: '' };
  
  appState.mandis[0].load = 92;
  appState.mandis[0].waitMin = 225;
  appState.mandis[0].booked = 184;
  
  appState.mandis[1].load = 55;
  appState.mandis[1].waitMin = 90;
  appState.mandis[1].booked = 82;
  
  appState.mandis[2].load = 60;
  appState.mandis[2].waitMin = 120;
  appState.mandis[2].booked = 90;
  
  appState.bookings = [
    { id: "BK-101", token: "VSH-1020", farmerId: "FMR-45120", farmerName: "Sanjay Deshmukh", commodity: "soybean", quantity: 30, centreId: "vashi", date: "2026-08-25", slot: "09:00 AM", status: "COMPLETED", queueToken: 1020, timestamp: "2026-08-25 09:15" },
    { id: "BK-102", token: "VSH-1021", farmerId: "FMR-90184", farmerName: "Anil Shinde", commodity: "soybean", quantity: 15, centreId: "vashi", date: "2026-08-25", slot: "09:30 AM", status: "COMPLETED", queueToken: 1021, timestamp: "2026-08-25 09:45" },
    { id: "BK-103", token: "VSH-1022", farmerId: "FMR-31294", farmerName: "Vitthal Kale", commodity: "soybean", quantity: 40, centreId: "vashi", date: "2026-08-25", slot: "10:00 AM", status: "QUALITY_CHECK", queueToken: 1022, timestamp: "2026-08-25 10:10" },
    { id: "BK-104", token: "VSH-1023", farmerId: "FMR-88102", farmerName: "Pandurang Pawar", commodity: "paddy", quantity: 50, centreId: "vashi", date: "2026-08-25", slot: "10:30 AM", status: "WEIGHING", queueToken: 1023, timestamp: "2026-08-25 10:28" },
    { id: "BK-105", token: "VSH-1024", farmerId: "FMR-67543", farmerName: "Babanrao Patil", commodity: "soybean", quantity: 20, centreId: "vashi", date: "2026-08-25", slot: "10:30 AM", status: "ARRIVED", queueToken: 1024, timestamp: "2026-08-25 10:31" },
    {
      id: "BK-712",
      token: "TBR-1042",
      farmerId: "FMR-71289",
      farmerName: "Ramesh Patil",
      commodity: "soybean",
      quantity: 20,
      centreId: "turbhe",
      date: "2026-08-25",
      slot: "11:30 AM",
      status: "BOOKED",
      queueToken: 1042,
      timestamp: "2026-08-25 10:30"
    }
  ];
  
  appState.payments = [
    { id: "TXN-90184", bookingId: "BK-102", farmerName: "Anil Shinde", amount: 73350, status: "CREDITED", bankRef: "NEFT-SBIN8293014", date: "25 Aug" },
    { id: "TXN-45120", bookingId: "BK-101", farmerName: "Sanjay Deshmukh", amount: 146700, status: "INITIATED", bankRef: "NEFT-SBIN8293992", date: "25 Aug" }
  ];
  
  appState.notifications = [
    { id: 1, title: "Booking Confirmed", body: "Your slot at Turbhe Mandi on 25 Aug 11:30 AM is confirmed. Token: TBR-1042", time: "5 mins ago", unread: true },
    { id: 2, title: "Weather Advisory", body: "Light showers expected in Navi Mumbai. Mandis have covered storage sheds.", time: "1 hour ago", unread: false }
  ];
  
  appState.dashboard.activeTab = 'overview';
  appState.dashboard.loadBalancingState = 'idle';
  appState.dashboard.rameshConsentStatus = 'Pending Approval';
  appState.farmerApp.activeAlertToast = null;
  
  appState.dashboard.logEntries = [
    { type: 'info', time: '19:36:57', text: 'SmartProcure Core Orchestrator successfully initialized.' },
    { type: 'query', time: '19:36:57', text: 'SELECT * FROM mandis WHERE district = "Thane"' },
    { type: 'result', time: '19:36:57', text: 'Returned 3 rows: Vashi (92% load), Turbhe (55% load), Sanpada (60% load)' }
  ];
  
  addLog('info', 'Demo state reset successfully.');
  
  renderFarmerApp();
  renderDashboard();
}

// Function to trigger a live payment credit after 5 seconds of initiation
// In this mock, we automatically transition payment initiated to credited after brief wait
setInterval(() => {
  const initiated = appState.payments.filter(p => p.status === 'INITIATED');
  if (initiated.length > 0) {
    initiated.forEach(p => {
      p.status = 'CREDITED';
      
      // Update corresponding booking status to payment credited
      const b = appState.bookings.find(bk => bk.id === p.bookingId);
      if (b) b.status = 'PAYMENT_CREDITED';
      
      addLog('query', `UPDATE payments SET status = 'CREDITED' WHERE txn_id = '${p.id}'`);
      addLog('result', `NEFT transfer settled at RBI gateway. Credit confirmation pushed to farmer ${p.farmerName}.`);
      
      appState.notifications.unshift({
        id: appState.notifications.length + 1,
        title: "Payment Credited",
        body: `Payment of ₹${p.amount.toLocaleString('en-IN')} has been credited to your Aadhaar Seeded SBI Account.`,
        time: "Just now",
        unread: true
      });
      
      renderDashboard();
      renderFarmerApp();
    });
  }
}, 8000);
