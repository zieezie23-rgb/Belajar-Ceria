# 🌈 Belajar Ceria — Huruf & Angka

> **Buku belajar interaktif untuk anak:** lihat, dengarkan, eja, dan latihan menulis dengan jari.

Belajar Ceria adalah aplikasi web edukasi sederhana untuk mengenalkan **huruf A–Z** dan **angka 1–10**. Konsepnya bukan kuis, tetapi materi belajar per halaman dengan ukuran besar dan aktivitas menelusuri bentuk huruf/angka.

## ✨ Fitur

### 🔤 Huruf A–Z
Setiap halaman menampilkan:
- Huruf kapital berukuran besar.
- Contoh kata dan gambar/emoji.
- Cara mengucapkan huruf.
- Cara mengeja kata.
- Panduan cara menulis.
- Tombol suara dengan pengucapan lebih lambat dan nada ceria.
- Mascot/karakter lucu.
- Latihan menulis dengan jari.

### 🔢 Angka 1–10
Setiap halaman menampilkan:
- Angka besar.
- Nama angka.
- Cara mengucapkan.
- Cara mengeja.
- Panduan cara menulis.
- Aktivitas menghitung.
- Latihan menulis dengan jari.

### ✍️ Tracing Interaktif
Area utama menggunakan **HTML Canvas**.

Anak dapat:
1. Melihat garis putus-putus sebagai panduan.
2. Menyentuh layar.
3. Mengikuti bentuk huruf atau angka dengan jari.
4. Menghapus coretan.
5. Mencoba lagi sampai terbiasa.

Tracing menggunakan **Pointer Events**, sehingga mendukung sentuhan HP/tablet dan mouse.

### 🔊 Suara Anak yang Lebih Santai
Aplikasi menggunakan **Web Speech API** dengan:
- Bahasa Indonesia.
- Kecepatan diperlambat.
- Pitch dibuat lebih tinggi/ceria.
- Kalimat pendek agar lebih mudah diikuti anak.
- Memilih voice Indonesia jika tersedia di perangkat.

> Catatan: suara yang tersedia bergantung pada browser dan voice yang terpasang di HP. Jika perangkat tidak menyediakan suara Indonesia, browser dapat menggunakan suara default.

## 📱 Tampilan

Desain dibuat dengan prinsip:
- Tulisan besar.
- Tombol besar.
- Warna cerah.
- Sudut membulat.
- Kontras yang mudah dilihat.
- Layout responsif untuk HP dan tablet.

## 🚀 Cara Menggunakan

### Langsung dari HP
1. Download `index.html`.
2. Buka menggunakan browser yang mendukung HTML5.
3. Pilih **Huruf** atau **Angka**.
4. Tekan 🔊 untuk mendengarkan.
5. Ikuti garis putus-putus menggunakan jari.

### GitHub Pages
1. Buat repository baru.
2. Upload `index.html`.
3. Pastikan nama file adalah **`index.html`**.
4. Aktifkan GitHub Pages.
5. Buka alamat Pages yang diberikan GitHub.

## 📁 Struktur

```text
belajar-ceria/
├── index.html
└── README.md
```

Versi ini sengaja dibuat dalam satu file agar mudah dipasang dan diuji. Jika aplikasi semakin besar, struktur dapat dipisahkan menjadi:

```text
belajar-ceria/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── letters.js
│   └── numbers.js
├── assets/
│   ├── images/
│   ├── sounds/
│   └── icons/
└── README.md
```

## 🧠 Konsep Belajar

Alur setiap halaman:

**👀 Lihat → 🔊 Dengarkan → 🔤 Eja → ✍️ Ikuti → 🔁 Ulangi**

Tujuannya agar anak dapat mengenali bentuk, bunyi, nama, dan cara menulis secara bertahap.

## 🔮 Pengembangan Berikutnya

- ✍️ Panduan urutan goresan yang benar dengan animasi.
- 🖍️ Mode latihan menulis bebas.
- ⭐ Penilaian seberapa dekat coretan dengan jalur panduan.
- 🔊 Rekaman suara anak yang lebih natural.
- 🐰 Maskot animasi yang memberi semangat.
- 🎵 Lagu alfabet dan angka.
- 🎨 Warna dan bentuk.
- 🐶 Hewan.
- 🍎 Buah.
- 📚 Materi suku kata.
- 📖 Membaca kata sederhana.
- 👨‍👩‍👧 Mode orang tua/guru.
- 📊 Rekap perkembangan belajar.
- 📱 PWA agar dapat dipasang seperti aplikasi Android.

## ⚠️ Catatan

Versi ini adalah **prototype pembelajaran**. Garis putus-putus berfungsi sebagai panduan visual dan coretan anak belum dinilai secara otomatis.

Untuk versi lanjutan, tracing dapat dibuat lebih pintar dengan:
- mendeteksi posisi jari,
- memeriksa apakah goresan mengikuti jalur,
- memberikan bintang,
- menunjukkan bagian yang perlu diperbaiki,
- dan memainkan animasi urutan penulisan.

---

<div align="center">

### 🌈 Belajar Ceria

**Belajar pelan-pelan. Coba lagi. Pasti bisa! ✨**

</div>
