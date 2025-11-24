function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('wna') || lowerMessage.includes('asing')) {
            return `Untuk pembuatan KTP-el Warga Negara Asing (WNA) di Semarang, berikut persyaratannya:<br><br>
            1. Fotokopi paspor dan KITAS/KITAP yang masih berlaku<br>
            2. Surat keterangan domisili dari kelurahan<br>
            3. Surat nikah/buku nikah (jika sudah menikah dengan WNI)<br>
            4. Mengisi formulir permohonan<br>
            Proses dapat dilakukan di Kantor Disdukcapil Kota Semarang `;
        } else if (lowerMessage.includes('ktp') || lowerMessage.includes('elektronik'))  {
            if (lowerMessage.includes('baru') || lowerMessage.includes('pemula')) { 
            return `Untuk perekaman KTP-el baru untuk WNI, persyaratannya adalah:<br><br>
            1. Berusia minimal 17 tahun atau sudah menikah<br>
            2. Membawa fotocopy KK terbaru<br>
            3. Surat pengantar dari RT/RW<br>
            4. Fotocopy akta kelahiran<br>
            Proses cetak KTP-el bisa dilakukan sehari setelah perekaman data. Anda datang langsung ke Kantor Disdukcapil atau Unit Layanan terdekat.`;
        } else if (lowerMessage.includes('rusak') || lowerMessage.includes('ganti')) {
            return `Untuk Pembuatan KTP-el baru karena ada perubahan data, persyaratannya adalah:<br><br>
            1. KTP-el lama atau rusak <br>
            2. KK yang sudah diperbarui data nya (jika ada perubahan data)<br>
            3. Surat kehilangan dari kepolisian (jika KTP-el hilang)<br>
            4. Surat keterangan pindah datang (jika terjadi pindah datang)<br>
            5. Datang langsung ke kantor dinas atau Unit Layanan terdekat<br>
            Proses pembuatan KTP-el bisa ditunggu apabila blanko KTP-el tersedia.`;
        }
        else {
        return `Informasi umum tentang KTP-el:<br><br>
        - Wajib dimiliki setiap warga negara Indonesia<br>
        - Harus diperbarui ketika ada perubahan data keluarga<br><br>
       `;
    }
        }
        
    else if (lowerMessage.includes('kk') || lowerMessage.includes('kartu keluarga')) {
    if (lowerMessage.includes('baru') || lowerMessage.includes('buat') || lowerMessage.includes('pembuatan')) {
        return `Untuk pembuatan Kartu Keluarga baru/pisah Kartu Keluarga, persyaratannya adalah:<br><br>
        1. Surat nikah/akta perkawinan (bagi yang sudah menikah)<br>
        2. KTP asli suami dan istri<br>
        3. Surat keterangan pindah (jika berasal dari luar kota)<br>
        4. Surat pengantar dari RT/RW setempat<br>
        <a href="https://drive.google.com/file/d/1s6vTXBMTIJJMlkFLA2ctk-skRh4P9RYK/view" target="_blank" style="color: #0056b3; text-decoration: underline;">5. Surat Pernyataan Menggunakan Alamat Rumah Sendiri</a><br>
        <a href="https://drive.google.com/file/d/1s6vTXBMTIJJMlkFLA2ctk-skRh4P9RYK/view" target="_blank" style="color: #0056b3; text-decoration: underline;">6. Surat Pernyataan Alamat Digunakan Dalam Administrasi Kependudukan( apabila kontrak )</a><br><br>
        <strong>Prosedur:</strong><br>
        - Pengajuan melalui Si D'Nok<br>
        - Membuat akun Si D'Nok (bagi yang belum memiliki akun)<br>
        - Pengajuan Kedatangan (jika berasal dari luar kota dan luar kecamatan)<br>
        - Pengajuan Perubahan Biodata KK (jika alamat masih sama)<br>
        - Mengisi formulir permohonan perubahan data (jika ada perubahan)<br>
        - Proses selesai dalam 3-5 hari kerja<br>
        - Jika proses selesai akan mendapat email verifikasi dan barcode untuk cetak KK baru<br>
        Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
        Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
    }
    else if (lowerMessage.includes('perubahan') || lowerMessage.includes('ubah') || lowerMessage.includes('ganti')) {
        return `Untuk perubahan data di Kartu Keluarga, berikut persyaratannya:<br><br>
        1. Formulir permohonan perubahan data<br>
        2. KK asli yang masih berlaku<br>
        3. Dokumen pendukung sesuai perubahan:<br>
        - Akta nikah/Akta cerai untuk perubahan status perkawinan<br>
        - Ijazah untuk perubahan pendidikan<br>
        - Akta kelahiran untuk perubahan nama ibu/bapak atau perubahan nama sesuai akta<br>
        - SK pekerjaan untuk perubahan pekerjaan<br>
        4. KTP asli pemohon<br><br>
        <strong>Prosedur Pengajuan:</strong><br>
        - Pengajuan melalui Si D'Nok<br>
        - Membuat akun Si D'Nok (bagi yang belum memiliki akun)<br>
        - Pilih pelayanan perubahan biodata KK<br>
        - Mengisi semua data yang diminta pada website Si D'Nok<br>
        - Upload semua dokumen pendukung (wajib dokumen asli)<br>
        - Proses memakan waktu estimasi 1-5 hari kerja<br>
        - Jika proses selesai akan mendapat email verifikasi dan barcode untuk cetak KK<br>
        Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
        Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;

    }
    else if (lowerMessage.includes('hilang') || lowerMessage.includes('rusak')) {
        return `Untuk mengurus KK hilang/rusak:<br><br>
        1. Membuat surat kehilangan di kepolisian (jika hilang)<br>
        2. Fotokopi KK yang rusak (jika masih ada)<br>
        3. KTP asli kepala keluarga<br>
        4. Pengajuan KK baru di Si D'Nok atau IKD (jika KK masih yang lama atau belum barcode)<br>
        5. Cetak ulang melalui IKD (jika KK sudah barcode)<br><br>
        <strong>Prosedur Pengajuan IKD</strong><br>
        - Download dan buat akun IKD (jika belum punya akun)<br>
        - Aktivasi IKD datang langsung ke Kantor Dinas atau TPDK terdekat diwilayah Kota Semarang pada jam kerja<br>
        - Pengajuan KK baru di bagian pelayanan, proses pengajuan memakan waktu estimasi 1-5 hari kerja (jika kk belum barcode)<br>
        - Cetak KK baru melalui Dokumenku, lalu bagikan dan akan muncul barcode untuk cetak KK dimesin ADM di Kantor (jika KK sudah barcode)<br>
        Note : Aktivasi IKD harus dilakukan yang bersangkutan langsung datang ke Kantor Disdukcapil atau Unit layanan terdekat, dan dapat diakses melalui <a href="https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi IKD</a><br><br>
        <strong>Prosedur Pengajuan Si D'Nok</strong><br>
        - Pengajuan melalui Si D'Nok<br>
        - Membuat akun Si D'Nok (bagi yang belum memiliki akun)<br>
        - Pengajuan perubahan biodata KK<br>
        - Mengisi semua data yang diminta pada website Si D'Nok<br>
        - Upload semua dokumen pendukung (wajib dokumen asli)<br>
        - Proses memakan waktu estimasi 1-5 hari kerja<br>
        - Jika proses selesai akan mendapat email verifikasi dan barcode untuk cetak KK<br>
        Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
        Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        }
    else {
        return `Informasi umum tentang Kartu Keluarga:<br><br>
        - Dokumen penting yang memuat data seluruh anggota keluarga<br>
        - Wajib dimiliki setiap keluarga di Indonesia<br>
        - Harus diperbarui ketika ada perubahan data keluarga<br><br>
        <strong>Layanan terkait:</strong><br>
        1. <a href="#" onclick="askQuickQuestion('Bagaimana cara membuat KK baru?')">Pembuatan KK Baru</a><br>
        2. <a href="#" onclick="askQuickQuestion('Apa syarat perubahan KK?')">Perubahan Data KK</a><br>
        3. <a href="#" onclick="askQuickQuestion('Bagaimana jika KK hilang?')">Kehilangan KK</a>`;
}
}

    else if ( lowerMessage.includes('kelahiran')) {
         if (lowerMessage.includes('baru') || lowerMessage.includes('penerbitan') || lowerMessage.includes('akta')) {
            
            return `Untuk membuat akta kelahiran baru, persyaratan dokumennya adalah:<br><br>
            1. Surat keterangan kelahiran dari dokter/bidan/rumah sakit<br>
            2. KK asli orang tua<br>
            3. KTP asli kedua orang tua<br>
            4. Surat nikah/akta perkawinan orang tua<br>
            5. Surat pengantar dari RT/RW<br>
            6. KTP saksi<br>
            <a href="https://sidnok.semarangkota.go.id/get-berkas/1656899722" target="_blank" style="color: #0056b3; text-decoration: underline;">5. Surat Pernyataan Anak Ibu</a> (jika anak lahir diluar nikah)<br>
            <strong>Prosedur Pembuatan Akta Kelahiran</strong><br>
            - Pengajuan melalui SI D'Nok<br>
            - Yang melakukan pengajuan harus orang tua bayi, jika anak ibu maka harus ibu kandungnya sendiri<br>
            - Membuat akun Si D'Nok (jika belum memiliki akun)<br>
            - Pengajuan Pelayanan Akta kelahiran<br>
            - Upload semua dokumen yang diperlukan (wajib asli, discan atau difoto)<br>
            - Upload Buku nikah lembar pertama, kedua, dan ketiga (bagi yang ber agama islam)<br>
            Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
            <strong>Estimasi Verifikasi :</strong> 1-5 hari kerja, setelah proses selesai akan mendapat email verifikasi dan 3 barcode yang berisi KK baru, Akta kelahiran, dan KIA dicetak di mesin ADM di kantor dinas atau TPDK terdekat<br>
            Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        } 
         else if (lowerMessage.includes('hilang') || lowerMessage.includes('rusak')) {
             return `Untuk melaporkan akta kelahiran yang hilang/rusak dan mengurus duplikat, berikut prosedurnya:<br><br>
            1. Membuat surat kehilangan di kepolisian<br>
            2. Fotokopi akta kelahiran (jika ada)<br>
            3. Fotokopi KK dan KTP orang tua<br>
            4. Surat pengantar dari kelurahan<br>
            5. Mengisi formulir permohonan duplikat<br><br>
            Datang langsung ke Kantor Disdukcapil Kota Semarang.`;
         }
    
    else if (lowerMessage.includes('dewasa') || lowerMessage.includes('nik')) {
            return `Berikut persyatan untuk penerbitan akta kelahiran dewasa atau sudah memiliki NIK :<br><br>
            1. Surat keterangan kelahiran dari kelurahan<br>
            2. KTP yang bersangkutan <br>
            3. Buku nikah orang tua, (jika tidak ada menggunakan <a href="https://sidnok.semarangkota.go.id/get-berkas/1656902490" target="_blank" style="color: #0056b3; text-decoration: underline;">SPTJM</a> sebagai kebenaran pasangan suami istri)<br>
            4. Buku nikah yang bersangkutan<br>
            5. KK yang bersangkutan<br>
            6. Urutan saudara (ditulis nama dan tempat tanggal lahir)<br>
            <strong>Prosedur Penerbitan :</strong><br><br>
            - Pengajuan memalui Si D'Nok <br>
            - Pendaftaran baru (bagi yang belum memiliki akun) <br>
            - Ikuti instruksi yang ada dalam Si D'Nok<br>
            - Upload dokumen yang dibutuhkan <br>
            Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
            <strong>Estimasi Verifikasi :</strong> 1-5 hari kerja, setelah proses selesai akan mendapat email verifikasi dan 1 barcode untuk cetak Akta kelahiran dicetak di mesin ADM dikantor dinas atau TPDK terdekat<br>
            Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        }
        else {
            return `Informasi Umum Tentang Akta Kelahiran :<br>
            1. Wajib dimiliki semua warga negara indonesia<br>
            2. Pelapor harus orang tua kandung<br>`;
        }
    }
         else if (lowerMessage.includes('kematian')) {
        // Pengecekan frasa lengkap untuk memastikan jawaban muncul
        if (
            lowerMessage.includes('cara membuat akta kematian') ||
            lowerMessage.includes('cara buat akta kematian') ||
            lowerMessage.includes('buat akta kematian') ||
            lowerMessage.includes('membuat akta kematian') ||
            lowerMessage.includes('baru akta kematian')
        ) {
            return `Untuk Membuat Akta Kematian, persyaratan dokumennya adalah: <br><br>
            1. Surat kematian dari rumah sakit (jika meninggal di rumah sakit)<br>
            2. Surat kematian dari kelurahan (jika meninggal di rumah)<br>
            3. KK dan KTP asli pelapor (harus ahli waris)<br>
            4. KK dan KTP almarhum<br>
            5. 2 KTP saksi<br>
            6. <a href="https://sidnok.semarangkota.go.id/get-berkas/1720769569" target="_blank" style="color:#0056b3;text-decoration:underline;">SPTJM</a> (jika tidak terdapat di database)<br><br>

            <strong>Prosedur Pengajuan</strong><br>
            - Pengajuan melalui Si D'Nok<br>
            - Pilih Pelayanan Akta Kematian<br>
            - Ikuti langkah-langkah untuk melengkapi data<br>
            - Upload semua dokumen asli<br>
            - Setelah dapat email verifikasi, datang ke Kantor Disdukcapil Kota Semarang<br><br>

            Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto harus aslinya<br>
            Layanan Online Si D'Nok: <br>
            <a href="https://sidnok.semarangkota.go.id/" target="_blank">Website Si D'Nok</a><br>
            <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank">Aplikasi Android</a>`;
        } else {
            return `Informasi tentang Akta Kematian:<br>
            - Pelaporan kematian dilakukan oleh ahli waris<br>
            - Pengajuan bisa melalui Si D'Nok atau datang langsung ke kantor Disdukcapil<br>
            - Dokumen wajib asli untuk proses upload<br><br>
            Jika Anda ingin membuat akta kematian baru, ketik: <br>
            <strong>"cara membuat akta kematian"</strong>`;
        }
    }

        else if (lowerMessage.includes('kawin')|| lowerMessage.includes('non islam')) {
        return ` Berikut persyaratan untuk penerbitan Akta Perkawinan Non Islam: <br><br> 
        a. Surat keterangan telah terjadinya perkawinan dari pemuka agama atau penghayat kepercayaan terhadap Tuhan Yang Maha Esa <br>
        b. Akta Kelahiran kedua calon pengantin <br>
        c. Foto Berdampingan ukuran 4x6 berwarna, background bebas<br>
        d. KTP-el kedua calon pengantin <br>
        e. Kartu Keluarga kedua calon pengantin <br>
        f. Surat Pengantar Nikah model N1-N4 dari Kelurahan kedua calon pengantin <br>
        g. Bagi janda atau duda karena cerai mati melampirkan akta kematian pasangannya <br>
        h. Bagi janda atau duda karena cerai hidup melampirkan akta perceraian<br>
        Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
        <strong>Pengajuan Online Melalui Si D'Nok</strong><br>
        Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        } 
        else if (lowerMessage.includes('cerai')) {
            return `Berikut persyaratan untuk penerbitan Akta Cerai Non Islam: <br><br>
            a. Salinan putusan pengadilan yang telah mempunyai kekuatan hukum tetap<br>
            b. Kutipan akta perkawinan asli<br>
            c. KTP-el Asli<br>
            d. KK Asli<br>
            Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya
            <strong>Pengajuan Online Melalui Si D'Nok</strong><br>
            Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        }
        else if (lowerMessage.includes('pindah') || (lowerMessage.includes('keluar'))) {
            return `Berikut persyaratan Perpindahan Keluar :<br>
            1. Kartu Keluarga<br>
            2. KTP<br><br>
            Untuk Perpindahan Keluar antar kelurahan/kecamatan dalam Kota Semarang dilengkapi: <br>
            1. Kartu Keluarga <br>
             <a href="https://drive.google.com/file/d/1s6vTXBMTIJJMlkFLA2ctk-skRh4P9RYK/view" target="_blank" style="color: #0056b3; text-decoration: underline;">2. Surat Pernyataan Menggunakan Alamat Rumah Sendiri</a><br>
             <a href="https://drive.google.com/file/d/1s6vTXBMTIJJMlkFLA2ctk-skRh4P9RYK/view" target="_blank" style="color: #0056b3; text-decoration: underline;">3. Surat Pernyataan Alamat Digunakan Dalam Administrasi Kependudukan( apabila kontrak )</a><br><br>
            <strong>Catatan:</strong><br>
            -Surat pernyataan diatas pada bagian alamat ditulis alamat yang baru dan dimintakan ttd RT/RW alamat yang baru<br> 
            -Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
            <strong>Pengajuan Online Melalui Si D'Nok</strong><br>
            Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        
        }
        else if (lowerMessage.includes('kedatangan') || (lowerMessage.includes('datang'))) {
            return `Berikut persyaratan Kedatangan : <br>
            1. SKPWNI dan membawa KTP-el dan/atau KIA untuk diganti dengan yang baru<br>
            2. Surat Nikah/Cerai (apablila sudah menikah/cerai)<br>
            <a href="https://drive.google.com/file/d/1s6vTXBMTIJJMlkFLA2ctk-skRh4P9RYK/view" target="_blank" style="color: #0056b3; text-decoration: underline;">2. Surat Pernyataan Menggunakan Alamat Rumah Sendiri</a><br>
            <a href="https://drive.google.com/file/d/1s6vTXBMTIJJMlkFLA2ctk-skRh4P9RYK/view" target="_blank" style="color: #0056b3; text-decoration: underline;">3. Surat Pernyataan Alamat Digunakan Dalam Administrasi Kependudukan( apabila kontrak )</a><br><br>
       <strong>Catatan:</strong><br>
            -Surat pernyataan diatas pada bagian alamat ditulis alamat yang baru dan dimintakan ttd RT/RW alamat yang baru<br> 
            -Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya<br>
            <strong>Pengajuan Online Melalui Si D'Nok</strong><br>
            Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        
        }
        else if (lowerMessage.includes('kia'))  {
            if (lowerMessage.includes('baru')) {
            return `Berikut persyaratan untuk penerbitan KIA baru:<br>
            1. Kutipan Akta Kelahiran<br>
            2. Kartu Keluarga orang tua/wali<br>
            3. KTP-el kedua orang tua/wali<br>
            4. Pas Foto Anak berwarna untuk anak 5-17 tahun kurang 1 (satu) hari<br>
            Catatan: Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya
            <strong>Pengajuan Online Melalui Si D'Nok</strong><br>
            Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a><br>`
            
        } else if (lowerMessage.includes('hilang')|| lowerMessage.includes('rusak')|| lowerMessage.includes('perubahan data')) {
            return`Berikut persyaratan untuk penerbitan ulang KIA: <br>
            1. Surat Kehilangan(apabila hilang)<br>
            2. KIA lama yang rusak(apabila rusak)<br>
            Pengajuan melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok </a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a> Atau bisa cetak ulang melalui IKD di Kantor Disdukcapil atau Unit Layanan Terdekat`
        } 
        else {
            return `Informasi umum tentang Kartu Identitas Anak:<br>
            1. Berlaku sampai umur 17 kurang 1 hari<br>
            2. Update foto setelah umur 5 tahun<br>
            3. Dimiliki semua anak di Indoensia`
        }
    }
    
     else if (lowerMessage.includes('online') || lowerMessage.includes('daring')) {
        return `Disdukcapil Semarang menyediakan beberapa layanan online melalui:<br><br>
        Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a><br>
        Pelayanan Online Si D'Nok meliputi : <br>
        - Perubahan Biodata KK<br>
        - Akta Kelahiran<br>
        - Akta Kematian<br>
        - Perpindahan Keluar<br>
        - Kedatangan<br>
        - Kartu Identitas Anak<br>
        - Akta Cerai dan Akta Kawin<br>
        `
     }
    else if (lowerMessage.includes('pertanyaan') || lowerMessage.includes('kompleks')) {
            return `Untuk pertanyaan kompleks silahkan datang langsung ke: <br>
            1. Kantor Disdukcapil Kota Semarang<br>
            2. Unit Layanan Ngaliyan<br>
            3. Unit Layanan Genuk<br>
            4. Unit Layanan Banyumanik<br>
            5. Unit Layanan Semarang Timur<br>
            6. Unit Layanan Gunungpati<br>
            7. Unit Layanan Semarang Selatan<br>
            8. Unit Layanan Candisari <br>
            9. Unit Layanan Semarang Barat <br>
            10. Unit layanan Pedurungan <br>
            11. Unit Layanan Semarang Utara <br>`
        }
    else {
        return `Maaf, saya tidak sepenuhnya memahami pertanyaan Anda. Berikut beberapa informasi yang mungkin membantu:<br><br>
        1. Jam layanan Disdukcapil Semarang: <br>
        - Senin-Kamis pukul 08.15-15.00 WIB<br>
        - Jumat pukul 08.00-13.00 WIB<br>
        - Istirahat : 11.30 - 12.30 WIB<br>
        - Sabtu & Minggu : Libur<br>
        2. Lokasi: <a href="https://maps.app.goo.gl/8scQBqsuZofzacrE8" target="_blank" style="color: #0056b3; text-decoration: underline;">Jl. Kanguru Raya No.3, Gayamsari, Kec. Gayamsari, Kota Semarang</a><br>
        3. Nomor telepon: 089676309299<br>
        4. Instagram: <a href="https://www.instagram.com/disdukcapilkotasemarang/" style="color: #0056b3; text-decoration: underline;">disdukcapilkotasemarang</a><br><br>
        Untuk pertanyaan lebih spesifik, silakan datang langsung ke Kantor Disdukcapil Kota Semarang atau Unit Layanan terdekat.`;
    }

}

module.exports = generateBotResponse ;