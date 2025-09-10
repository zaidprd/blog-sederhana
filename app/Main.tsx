import Link from '@/components/Link'

const Home = ({ posts }) => {
  return (
    <>
      {/* ===== Bagian Hero ===== */}
      <section className="px-4 py-20 text-center">
        <h1 className="text-4xl leading-tight font-extrabold text-gray-900 md:text-6xl dark:text-white">
          Jasa Pembuatan Website Profesional
        </h1>
        <p className="mt-4 text-xl text-gray-600 md:text-2xl dark:text-gray-300">
          Ubah ide Anda menjadi website yang memukau dan efektif.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/contact"
            className="bg-primary-500 hover:bg-primary-600 rounded-full px-6 py-3 text-lg font-bold text-white transition-colors duration-300"
          >
            Hubungi Kami
          </Link>
          <Link
            href="/portfolio"
            className="text-primary-500 border-primary-500 hover:bg-primary-500 rounded-full border-2 bg-transparent px-6 py-3 text-lg font-bold transition-colors duration-300 hover:text-white"
          >
            Lihat Portofolio
          </Link>
        </div>
      </section>

      {/* ===== Bagian Butuh Website (Layanan Baru) ===== */}
      <section className="w-full bg-white px-4 py-20 dark:bg-gray-800">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
          Butuh Website dan Saya...
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          {/* Kolom 1: Sudah siap dengan materinya */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-700">
            <svg
              className="text-primary-500 mx-auto mb-4 h-16 w-16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8l-6-6zM6 4h7v5h5v11H6V4zm2 10h8v2H8v-2zm0 4h5v2H8v-2z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Sudah siap dengan materinya
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Kirimkan materi atau rujukan website yang Anda inginkan ke tim kami. Website Anda akan
              online paling lama dalam 3 hari.
            </p>
          </div>

          {/* Kolom 2: Punya brosur atau materi lain */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-700">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <path d="M12 10c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM9 16h6v2H9z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Punya brosur atau materi lain
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Tim kami akan membantu mengonversi materi website sesuai dengan rujukan yang Anda
              inginkan.
            </p>
          </div>

          {/* Kolom 3: Belum punya materi */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-700">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2v.5L12 13 4 5.5V5h16zM4 19V8.586l7.707 7.707a.997.997 0 001.414 0L20 8.586V19H4z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Belum punya materi
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Tim kami akan membantu Anda menyelesaikan untuk website yang akan dibuat.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="bg-primary-500 hover:bg-primary-600 rounded-lg px-8 py-3 text-lg font-bold text-white shadow-md transition-colors duration-300">
            Buat Website Sekarang
          </button>
        </div>
      </section>

      {/* ===== Bagian Daftar Harga (Ditambahkan sesuai yajodoh.com) ===== */}
      <section className="w-full bg-gray-50 px-4 py-20 dark:bg-gray-900" id="harga">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
            Harga
          </h2>
          <p className="mb-12 text-center text-gray-600 dark:text-gray-300">
            Miliki segera website company profile anda hanya dengan Rp. 69.000 per bulan.
          </p>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Kartu Paket Basic */}
            <div className="relative flex flex-col rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800">
              <span className="absolute top-0 right-0 m-4 rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
                HEMAT
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Basic</h3>
              <p className="text-gray-500 dark:text-gray-400">setahun</p>
              <p className="text-primary-500 mt-4 text-4xl font-extrabold">
                <span className="text-2xl">Rp</span> 800<span className="text-lg">ribu</span>
              </p>
              <ul className="mt-6 flex-grow space-y-2 text-left">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  5 Halaman
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  4 Hari Kerja
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Entry 1 GB
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Gratis Domain .com
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Gratis SSL
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  5 Image Plus Logo
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Tombol WhatsApp
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  1 Artikel SEO
                </li>
              </ul>
              <button className="bg-primary-500 hover:bg-primary-600 mt-8 rounded-lg px-6 py-3 font-semibold text-white">
                Pesan
              </button>
            </div>

            {/* Kartu Paket Pro */}
            <div className="relative flex scale-105 flex-col rounded-lg bg-pink-500 p-8 text-center shadow-xl dark:bg-pink-700">
              <span className="absolute top-0 right-0 m-4 rounded-full bg-pink-300 px-3 py-1 text-sm font-bold text-white">
                POPULER
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">Pro</h3>
              <p className="text-gray-200">setahun</p>
              <p className="mt-4 text-4xl font-extrabold text-white">
                <span className="text-2xl">Rp</span> 1.5<span className="text-lg">Juta</span>
              </p>
              <ul className="mt-6 flex-grow space-y-2 text-left">
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  5 Halaman
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  4 Hari Kerja
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Unlimited Small
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Gratis Domain dot com
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Gratis SSL
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  10 Image Plus Logo
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Tombol WhatsApp
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  5 Artikel SEO
                </li>
              </ul>
              <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-pink-500 hover:bg-gray-100">
                Pesan
              </button>
            </div>

            {/* Kartu Paket Business */}
            <div className="relative flex flex-col rounded-lg bg-blue-500 p-8 text-center shadow-lg dark:bg-blue-700">
              <span className="absolute top-0 right-0 m-4 rounded-full bg-blue-300 px-3 py-1 text-sm font-bold text-white">
                PREMIUM
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">Business</h3>
              <p className="text-gray-200">setahun</p>
              <p className="mt-4 text-4xl font-extrabold text-white">
                <span className="text-2xl">Rp</span> 2.5<span className="text-lg">Juta</span>
              </p>
              <ul className="mt-6 flex-grow space-y-2 text-left">
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  5 Halaman +
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  6 Hari Kerja
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Unlimited Small
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Gratis Domain dot com
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Gratis SSL
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  15 Image Plus Logo
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Tombol WhatsApp
                </li>
                <li className="flex items-center text-white">
                  <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  10 Artikel SEO
                </li>
              </ul>
              <button className="bg-primary-500 hover:bg-primary-600 mt-8 rounded-lg px-6 py-3 font-semibold text-white">
                Pesan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bagian Portofolio (Disamakan dengan yajodoh.com) ===== */}
      <section className="w-full bg-white px-4 py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
            Portfolio Kami
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-300">
            Lihat berbagai website profesional yang telah kami buat untuk klien kami. Setiap project
            dibuat dengan dedikasi tinggi dan teknologi terdepan.
          </p>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Portfolio Item 1: Website Bisnis (Biru) */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex h-48 items-center justify-center bg-blue-600">
                <div className="text-center text-white">
                  <svg
                    className="mx-auto mb-3 h-16 w-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 16H6c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v12c0 .551-.449 1-1 1zm-7-4h2v2h-2zm0-4h2v2h-2z"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Website Bisnis</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  E-Commerce Modern
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Website toko online dengan fitur lengkap dan design modern untuk meningkatkan
                  penjualan.
                </p>
                <Link
                  href="/portfolio/ecommerce-modern"
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Lihat Detail &rarr;
                </Link>
              </div>
            </div>

            {/* Portfolio Item 2: Company Profile (Hijau) */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex h-48 items-center justify-center bg-green-500">
                <div className="text-center text-white">
                  <svg
                    className="mx-auto mb-3 h-16 w-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-1 13H5V9h14v10zm-6-8h-2v2h2v-2zm-2 4h-2v2h2v-2z"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Company Profile</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Profil Perusahaan
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Website company profile profesional yang menampilkan kredibilitas dan layanan
                  perusahaan.
                </p>
                <Link
                  href="/portfolio/company-profile"
                  className="mt-4 inline-block text-sm font-medium text-green-600 hover:underline dark:text-green-400"
                >
                  Lihat Detail &rarr;
                </Link>
              </div>
            </div>

            {/* Portfolio Item 3: Website Layanan (Ungu) */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex h-48 items-center justify-center bg-purple-600">
                <div className="text-center text-white">
                  <svg
                    className="mx-auto mb-3 h-16 w-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm4-11H8V9h8V7zm-4 8h-2v-2h2v2z"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Website Layanan</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Platform Layanan
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Website untuk penyedia jasa dengan sistem booking dan manajemen pelanggan
                  terintegrasi.
                </p>
                <Link
                  href="/portfolio/layanan"
                  className="mt-4 inline-block text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
                >
                  Lihat Detail &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/portfolio"
              className="bg-primary-500 hover:bg-primary-600 rounded-lg px-8 py-3 text-lg font-bold text-white shadow-md transition-colors duration-300"
            >
              Lihat Semua Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
