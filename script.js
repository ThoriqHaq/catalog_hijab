const interactiveLogo = document.getElementById('interactive-logo');
const logoModal = document.getElementById('logo-modal');
const closeLogoBtn = document.getElementById('close-logo-modal');

const productModal = document.getElementById('product-modal');
const closeProductBtn = document.getElementById('close-product-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');

// Membuka modal ketika logo di header diklik
interactiveLogo.addEventListener('click', function() {
    logoModal.style.display = 'flex';
});

// Menutup modal logo
closeLogoBtn.addEventListener('click', function() {
    logoModal.style.display = 'none';
});

// Fungsi untuk membuka modal produk saat sel tabel diklik
function bukaModal(nama, gambar, deskripsi, harga) {
    modalTitle.innerText = nama;
    modalImg.src = gambar;
    modalDesc.innerText = deskripsi;
    modalPrice.innerText = harga;
    productModal.style.display = 'flex';
}

// Menutup modal produk
closeProductBtn.addEventListener('click', function() {
    productModal.style.display = 'none';
});

// Menutup modal jika pengguna mengklik area luar kotak modal
window.addEventListener('click', function(event) {
    if (event.target === logoModal) {
        logoModal.style.display = 'none';
    }
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
});