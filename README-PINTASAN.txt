BELAJAR CERIA - VERSI PINTASAN SEPERTI APLIKASI

Versi ini sudah disiapkan sebagai Progressive Web App (PWA).
Saat dipasang dari browser yang mendukung PWA, Belajar Ceria akan tampil
seperti aplikasi: tanpa address bar dan tanpa tampilan browser.

PENTING:
PWA tidak bisa dipasang sebagai pintasan aplikasi dari file ZIP/local HTML
secara normal. Folder ini harus disajikan melalui HTTPS (atau localhost).

Cara paling mudah:
1. Upload seluruh folder ini ke hosting HTTPS.
2. Buka URL index.html dari Chrome Android.
3. Pilih "Tambahkan ke layar utama" / "Install app".
4. Ikon Belajar Ceria akan muncul di layar HP.
5. Saat ikon dibuka, tampilannya standalone seperti aplikasi.

Semua aset lokal tetap dibawa di dalam folder ini dan service worker
menyimpannya untuk penggunaan offline setelah pertama kali dibuka.


ICON: manifest.webmanifest mengarah langsung ke ./assets/icon.png. Ikon adalah file PNG terpisah, bukan base64/embedded.
