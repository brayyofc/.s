function signup() {
    // Tampilkan loading modal
    const loadingModal = document.getElementById('loadingModal');
    loadingModal.style.display = 'flex';

    // Simulasikan proses sign up (2 detik)
    setTimeout(() => {
        // Sembunyikan loading modal
        loadingModal.style.display = 'none';

        // Arahkan ke halaman login
        window.location.href = 'login.html';
    }, 2000); // 2 detik
}


function login() {
    // Tampilkan loading modal
    const loadingModal = document.getElementById('loadingModal');
    loadingModal.style.display = 'flex';

    // Simulasikan proses login (2 detik)
    setTimeout(() => {
        // Sembunyikan loading modal
        loadingModal.style.display = 'none';

        // Arahkan ke halaman dashboard
        window.location.href = 'dashboard.html';
    }, 2000); // 2 detik
}


// Toggle Dark Mode
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
