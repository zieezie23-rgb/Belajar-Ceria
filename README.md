# 🌈 Belajar Ceria

Aplikasi belajar anak untuk **huruf A–Z dan angka 1–10** dengan desain responsif.

## Perubahan versi ini
- Layout menyesuaikan **landscape maupun portrait**.
- Pada portrait, panel samping disembunyikan supaya area latihan tetap besar dan tidak terpotong.
- Pada landscape, layout menjadi tiga panel seperti desain referensi.
- Panah penulisan dibuat **terpisah** agar tidak menumpuk.
- Nomor 1, 2, 3 berada di jalur masing-masing.
- Area tengah bisa dicoret menggunakan jari/stylus/mouse.
- Suara dibuat lebih lambat dan pitch lebih tinggi agar lebih ceria.

## Suara
Versi ini menggunakan Web Speech API. Browser/Android menentukan voice yang tersedia. Pengaturan dibuat lambat (`rate`) dan bernada tinggi (`pitch`) untuk mendekati gaya suara anak.

Untuk **suara anak asli/natural**, diperlukan file rekaman suara karakter (MP3/OGG) yang kemudian bisa dimasukkan ke aplikasi.

## Instalasi
Upload `index.html` ke GitHub Pages.

```text
Belajar-Ceria/
└── index.html
```
