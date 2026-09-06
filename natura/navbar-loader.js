document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-placeholder");
  if (!container) return;

  container.innerHTML = `
    <div class="fixed-nav-wrap">
      <nav class="navbar navbar-expand-md natura-nav fade-up">
        <div class="container-fluid px-2">
          <a class="navbar-brand d-flex align-items-center gap-2 m-0" href="index.html">
            <img src="logo.png" alt="Natura logo" class="brand-logo">
            <span class="brand-name">NATURA.</span>
          </a>

          <button class="navbar-toggler border-0 text-cream" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-between" id="navContent">
            <ul class="navbar-nav mx-auto gap-md-5 gap-3 text-center py-3 py-md-0">
              <li class="nav-item"><a class="nav-link nav-underline" href="index.html#page3">Tutorial</a></li>
              <li class="nav-item"><a class="nav-link nav-underline" href="ranking.html">Ranking</a></li>
              <li class="nav-item"><a class="nav-link nav-underline" href="voucher.html">Voucher</a></li>
            </ul>
            </ul>

            <div class="d-flex align-items-center justify-content-center gap-3 pb-3 pb-md-0">
              <!-- Guest State -->
              <div id="authButtons" class="d-flex gap-2">
                <a href="login.html" class="auth-btn auth-btn-login">Masuk</a>
                <a href="register.html" class="auth-btn auth-btn-register">Daftar</a>
              </div>

              <!-- Logged In State -->
              <div id="userProfile" class="d-none align-items-center gap-3">
                <a href="notif.html" class="bell text-decoration-none" title="Notifikasi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  <span class="notification-badge"></span>
                </a>

                <div class="dropdown">
                  <div class="user-pill dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false" role="button" tabindex="0">
                    <div class="avatar">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <span id="userNameDisplay">User</span>
                  </div>

                  <ul class="dropdown-menu dropdown-menu-end natura-dropdown-menu" aria-labelledby="userDropdown">
                    <li><a class="dropdown-item" href="profile.html">Profil</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item logout-item" href="#" onclick="logout(event)">Keluar</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `;

  initNavbarUser();
});

function initNavbarUser() {
  const username = localStorage.getItem("natura_user");
  const authButtons = document.getElementById("authButtons");
  const userProfile = document.getElementById("userProfile");
  const userNameDisplay = document.getElementById("userNameDisplay");

  if (username) {
    if (authButtons) authButtons.classList.replace("d-flex", "d-none");
    if (userProfile) userProfile.classList.replace("d-none", "d-flex");
    if (userNameDisplay) userNameDisplay.textContent = username;
  }
}

function logout(event) {
  if (event) event.preventDefault();
  localStorage.removeItem("natura_user");
  localStorage.removeItem("natura_role");
  window.location.reload();
}