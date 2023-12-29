function fadeOut() {
  var button = document.querySelector('.fade-button');
  button.classList.add('fade-out');

  // Optional: Mencegah tombol diklik lagi setelah menghilang
  button.disabled = true;

  // Optional: Menghapus tombol dari DOM setelah animasi selesai
  setTimeout(function() {
    button.style.display = 'none';
  }, 1000); // Sesuaikan dengan durasi animasi
}
