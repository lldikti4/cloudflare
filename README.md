# Cloud Flare

Cloudflare Workers, fungsi tanpa server dari Cloudflare, berjalan di jaringan edge dan ditulis dalam JavaScript. Saat pekerja dikerahkan, kode yang ditulis didistribusikan ke seluruh lokasi edge yang ditawarkan oleh Cloudflare, dengan latensi minimal. Runtime Cloudflare Workers menggunakan mesin V8 karena mereka memiliki perilaku yang mirip dengan JavaScript di Node.js atau browser. Pekerja bertugas dalam mengeksekusi JavaScript ringan untuk augmentasi aplikasi yang sudah ada atau dalam pembuatan aplikasi baru.

Pekerja menggunakan Isolate , bukan container atau mesin virtual, sehingga mesin V8 dapat menjalankan banyak proses aplikasi ke satu server dengan aman dan efisien. Dibandingkan dengan mesin virtual, overhead yang diperlukan untuk eksekusi kode jauh berkurang, sehingga memungkinkan eksekusi instan dan konsumsi memori lebih sedikit.

Cloudflare Workers terbukti bermanfaat di banyak sektor untuk aplikasi di lingkungan tanpa server. Keterjangkauan, keamanan, dan penskalaan otomatis adalah keunggulan utama jika dibandingkan dengan platform tanpa server lainnya. Tanpa aset statis yang dibuat sebelumnya, jaringan edge Worker yang kuat dapat menghasilkan aset statis dengan lancar.

