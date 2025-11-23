// ==================== ទិន្នន័យហាង ====================
const shop = {
  logo: "https://favourable-amaranth-vhazesm3c3.edgeone.app/A1.jpg",
  name: "និស្សិតកាហ្វេ",
  welcome: "សួស្តី! Welcome សូមស្វាគមន៍",
  location: "នៅមាត់ទន្លេរត្បូងឃ្មុំ",
  phone: "071 977 7622",
  hours: "08:00AM - 08:00PM ជារៀងរាល់ថ្ងៃ",
  facebook: "https://web.facebook.com/profile.php?id=61583191186186",
  tiktok: "https://www.tiktok.com/@studentcoffee.kh"
};

// ==================== ទិន្នន័យភេសជ្ជៈ (ប្រើរូបភាពក្នុងថត ./Image/Drink/) ====================
const drinks = [
  { name: "តែជ្រក់",      price: "3 USD",     photos: ["./Image/Drink/2.jpg",  "./Image/Drink/2.jpg",  "./Image/Drink/3.jpg"] },
  { name: "កាហ្វេខ្មៅទឹកកក",     price: "3 USD",     photos: ["./Image/Drink/2.jpg",  "./Image/Drink/5.jpg",  "./Image/Drink/6.jpg"] },
  { name: "ម៉ាត់ចាឡាតេ",        price: "3.5 USD",   photos: ["./Image/Drink/2.jpg",  "./Image/Drink/8.jpg",  "./Image/Drink/9.jpg"] },
  { name: "កាហ្វេដោះទឹកកក",     price: "4 USD",     photos: ["./Image/Drink/2.jpg", "./Image/Drink/11.jpg", "./Image/Drink/12.jpg"] },
  { name: "ឡាតេទឹកកក",           price: "3.5 USD",   photos: ["./Image/Drink/2.jpg", "./Image/Drink/14.jpg", "./Image/Drink/15.jpg"] },
  { name: "កាពូជីណូ",         price: "4 USD",     photos: ["./Image/Drink/2.jpg", "./Image/Drink/17.jpg", "./Image/Drink/18.jpg"] },
  { name: "ម៉ូកាទឹកកក",          price: "4 USD",     photos: ["./Image/Drink/2.jpg", "./Image/Drink/20.jpg", "./Image/Drink/21.jpg"] },
  { name: "ស្រ្តបឺរីឡាតេ",  price: "3.5 USD",   photos: ["./Image/Drink/2.jpg", "./Image/Drink/23.jpg", "./Image/Drink/24.jpg"] },
  { name: "ម្ចូរព្រឹក",        price: "2.5 USD",   photos: ["./Image/Drink/2.jpg", "./Image/Drink/26.jpg", "./Image/Drink/27.jpg"] },
  { name: "អាមេរិកកាណូ",     price: "3.5 USD",   photos: ["./Image/Drink/2.jpg", "./Image/Drink/29.jpg", "./Image/Drink/30.jpg"] },
  { name: "សូកូឡាឡាតេ",        price: "4 USD",     photos: ["./Image/Drink/2.jpg", "./Image/Drink/32.jpg", "./Image/Drink/33.jpg"] }
];

// ==================== បង្កើត Header + Menu + Detail ====================
const app = document.getElementById("app");

app.innerHTML = `
  <div class="header">
    <img src="${shop.logo}" alt="Logo" class="logo">
    <h1>${shop.name}</h1>
    <p class="welcome">${shop.welcome}</p>

    <div class="info">
      <span><i class="fas fa-map-marker-alt"></i> ${shop.location}</span>
      <span><i class="fas fa-phone"></i> ${shop.phone}</span>
      <span><i class="fas fa-clock"></i> ${shop.hours}</span>
      <span class="open"><i class="fas fa-circle"></i> Open now</span>
    </div>

    <div class="social">
      <a href="${shop.facebook}" target="_blank"><i class="fab fa-facebook-f"></i> និស្សិតកាហ្វេ</a>
      <a href="${shop.tiktok}" target="_blank"><i class="fab fa-tiktok"></i> និស្សិតកាហ្វេ</a>
    </div>
  </div>

  <div class="menu">
    <h2>មីនុយ (Menu)</h2>
    <div class="menu-grid" id="menuGrid"></div>
  </div>

  <div id="detailView">
    <div class="close-btn">×</div>
    <div class="detail-content" id="detailContent"></div>
  </div>
`;

// ==================== បង្កើតកាតភេសជ្ជៈ ====================
const menuGrid = document.getElementById("menuGrid");
drinks.forEach((drink, index) => {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
    <img src="${drink.photos[0]}" alt="${drink.name}">
    <div class="item-content">
      <div class="item-name">${drink.name}</div>
      <div class="price">${drink.price}</div>
      <span class="status">មានលក់</span>
    </div>
  `;
  item.addEventListener("click", () => showDetail(index));
  menuGrid.appendChild(item);
});

// ==================== បង្ហាញ Detail ====================
const detailView = document.getElementById("detailView");
const detailContent = document.getElementById("detailContent");

function showDetail(id) {
  const d = drinks[id];
  detailContent.innerHTML = `
    <h1>${d.name}</h1>
    <div class="price">${d.price}</div>
    <div class="photos">
      ${d.photos.map(src => `<img src="${src}" alt="${d.name}">`).join('')}
    </div>
    <div class="back-btn">ត្រឡប់ទៅមីនុយ</div>
  `;
  detailView.classList.add("active");
}

// ==================== បិទ Detail ====================
function closeDetail() {
  detailView.classList.remove("active");
}

detailView.addEventListener("click", (e) => {
  if (
    e.target === detailView ||
    e.target.classList.contains("back-btn") ||
    e.target.classList.contains("close-btn")
  ) {
    closeDetail();
  }

});
