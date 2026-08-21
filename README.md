# 🌈 Belajar Ceria — Huruf & Angka

Aplikasi belajar anak dalam mode **landscape**, dibuat mengikuti referensi desain yang diberikan: warna cerah, tombol besar, panel kiri/tengah/kanan, karakter lucu, latihan tracing, panah urutan penulisan, dan navigasi bawah.

## Fitur
- 🔤 Huruf A–Z
- 🔢 Angka 1–10
- ✍️ Menulis/coret langsung dengan jari
- ➡️ Panah dan nomor tahapan cara menulis
- ⬛ Garis putus-putus besar
- 🔊 Suara Bahasa Indonesia yang diperlambat dan dibuat bernada lebih tinggi
- ⭐ Favorit
- ⬅️ / ➡️ navigasi
- 📱 Landscape
- 🧽 Bersihkan coretan

## Cara pakai
Upload `index.html` ke GitHub Pages lalu buka dengan HP dalam posisi landscape.

## Catatan suara
Suara memakai Web Speech API. `rate` dibuat lambat dan `pitch` dibuat tinggi agar terdengar lebih ceria. Suara anak yang benar-benar natural bergantung pada voice Bahasa Indonesia yang tersedia di perangkat.

## Struktur
```text
belajar-ceria/
├── index.html
└── README.md
```

Versi ini sengaja dibuat satu file. Gambar referensi disisipkan ke dalam HTML sehingga `index.html` dapat dipindahkan tanpa file gambar tambahan.

## Pengembangan berikutnya
- Animasi urutan goresan.
- Penilaian ketepatan tracing.
- Rekaman suara karakter anak asli.
- Maskot animasi.
- Musik belajar.
- Materi warna, bentuk, hewan, buah, dan suku kata.
