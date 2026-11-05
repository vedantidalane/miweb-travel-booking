// ── TRAVEL DATA ──
const DESTINATIONS = [
  { id:1, name:"Goa", state:"Goa", type:"beach", fromPrice:8999, rating:4.7, reviews:5678, image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop", desc:"Beautiful beaches, vibrant nightlife, Portuguese architecture and delicious seafood await you in this coastal paradise." },
  { id:2, name:"Manali", state:"Himachal Pradesh", type:"mountain", fromPrice:11999, rating:4.8, reviews:4321, image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop", desc:"Stunning snow-capped mountains, adventure sports, and Himalayan culture in this beautiful hill station." },
  { id:3, name:"Kerala Backwaters", state:"Kerala", type:"nature", fromPrice:14999, rating:4.9, reviews:3456, image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop", desc:"God's Own Country with serene backwaters, houseboat stays, Ayurveda and lush green landscapes." },
  { id:4, name:"Rajasthan", state:"Rajasthan", type:"heritage", fromPrice:12999, rating:4.6, reviews:6789, image:"https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop", desc:"Royal palaces, vibrant culture, desert safaris and the colours of the land of kings." },
  { id:5, name:"Leh-Ladakh", state:"J&K", type:"adventure", fromPrice:18999, rating:4.9, reviews:2345, image:"https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=300&fit=crop", desc:"High altitude desert, pristine lakes, ancient monasteries and the ultimate biking adventure." },
  { id:6, name:"Andaman Islands", state:"A&N Islands", type:"beach", fromPrice:24999, rating:4.8, reviews:1987, image:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop", desc:"Crystal clear water, exotic marine life, water sports and pristine white sand beaches." },
  { id:7, name:"Shimla", state:"Himachal Pradesh", type:"mountain", fromPrice:9999, rating:4.5, reviews:7654, image:"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&h=300&fit=crop", desc:"Queen of Hills with colonial charm, toy train rides and Himalayan panoramas." },
  { id:8, name:"Mysore", state:"Karnataka", type:"heritage", fromPrice:7999, rating:4.4, reviews:3210, image:"https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop", desc:"The City of Palaces, silk sarees, sandalwood and the magnificent Mysore Palace." },
];

const PACKAGES = [
  { id:1, name:"Goa Beach Bliss", destination:"Goa", duration:"4N/5D", price:12999, originalPrice:15999, rating:4.7, reviews:543, maxPax:8, type:"Beach", image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=250&fit=crop", includes:["Flights","3-Star Hotel","Daily Breakfast","Sightseeing","Airport Transfer"] },
  { id:2, name:"Manali Snow Adventure", destination:"Manali", duration:"5N/6D", price:15999, originalPrice:19999, rating:4.8, reviews:321, maxPax:10, type:"Adventure", image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=250&fit=crop", includes:["Train Tickets","2-Star Hotel","All Meals","Snow Trekking","Guide"] },
  { id:3, name:"Kerala Houseboat Retreat", destination:"Kerala", duration:"6N/7D", price:22999, originalPrice:28999, rating:4.9, reviews:212, maxPax:6, type:"Luxury", image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop", includes:["Flights","Houseboat Stay","All Meals","Backwater Cruise","Ayurveda Spa"] },
  { id:4, name:"Rajasthan Royal Tour", destination:"Rajasthan", duration:"7N/8D", price:19999, originalPrice:24999, rating:4.6, reviews:432, maxPax:12, type:"Heritage", image:"https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=250&fit=crop", includes:["AC Bus","Heritage Hotel","Breakfast","Fort Entries","Guide"] },
  { id:5, name:"Leh-Ladakh Bike Trip", destination:"Leh-Ladakh", duration:"8N/9D", price:29999, originalPrice:36999, rating:4.9, reviews:178, maxPax:15, type:"Adventure", image:"https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=250&fit=crop", includes:["Flights","Tent Stay","All Meals","Bike Rental","Permits"] },
  { id:6, name:"Andaman Scuba Paradise", destination:"Andaman", duration:"5N/6D", price:32999, originalPrice:41999, rating:4.8, reviews:267, maxPax:8, type:"Beach", image:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop", includes:["Flights","5-Star Resort","All Meals","Scuba Diving","Snorkeling"] },
];

// ── THEME & AUTH ──
function initTheme() {
  const saved = localStorage.getItem('wanderlust_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}
function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('wanderlust_theme', next);
}
initTheme();

function checkAuth() {
  const user = JSON.parse(sessionStorage.getItem('wanderlust_user') || 'null');
  const nav = document.getElementById('authNav');
  if (!nav || !user) return;
  nav.innerHTML = `<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="fas fa-user-circle me-1"></i>${user.name}</a>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#"><i class="fas fa-calendar me-2"></i>My Bookings</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item text-danger" href="#" onclick="logout()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
    </ul>`;
}
function logout() { sessionStorage.removeItem('wanderlust_user'); window.location.href = 'login.html'; }

function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const colors = { success:'bg-success', danger:'bg-danger', warning:'bg-warning text-dark', info:'bg-info' };
  const id = 'toast-' + Date.now();
  container.insertAdjacentHTML('beforeend', `<div id="${id}" class="toast align-items-center text-white ${colors[type]} border-0 show mb-2" role="alert">
    <div class="d-flex"><div class="toast-body">${msg}</div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="document.getElementById('${id}').remove()"></button></div></div>`);
  setTimeout(() => { const el = document.getElementById(id); if(el) el.remove(); }, 3000);
}
