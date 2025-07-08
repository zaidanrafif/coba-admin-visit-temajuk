export interface TransportRoute {
  id: string;
  title: string;
  description: string;
  steps: RouteStep[];
  tips: string[];
  estimatedCost: string;
  estimatedTime: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  imageUrl: string;
}

interface RouteStep {
  step: number;
  description: string;
  duration: string;
  cost: string;
  vehicle: string;
}

export const transportationRoutes: TransportRoute[] = [
  {
    id: "pontianak-temajuk",
    title: "Pontianak ke Temajuk",
    description: "Rute perjalanan dari Kota Pontianak (ibukota Provinsi Kalimantan Barat) menuju Desa Temajuk.",
    estimatedCost: "Rp 350.000 - Rp 500.000 per orang",
    estimatedTime: "10-12 jam",
    difficulty: "Sedang",
    imageUrl: "https://images.pexels.com/photos/2942172/pexels-photo-2942172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    steps: [
      {
        step: 1,
        description: "Dari Pontianak, ambil bus atau travel menuju Kota Sambas. Bus berangkat dari Terminal Antar Kota Pontianak.",
        duration: "4-5 jam",
        cost: "Rp 100.000 - Rp 150.000",
        vehicle: "Bus / Travel"
      },
      {
        step: 2,
        description: "Dari Terminal Sambas, lanjutkan perjalanan dengan mobil travel atau angkutan umum menuju Kecamatan Paloh.",
        duration: "2-3 jam",
        cost: "Rp 80.000 - Rp 100.000",
        vehicle: "Travel / Angkutan Umum"
      },
      {
        step: 3,
        description: "Dari Paloh, lanjutkan perjalanan menuju Temajuk dengan ojek atau mobil sewaan melalui jalur darat.",
        duration: "3-4 jam",
        cost: "Rp 150.000 - Rp 200.000",
        vehicle: "Ojek / Mobil Sewaan"
      },
      {
        step: 4,
        description: "Alternatif lain, dari Paloh Anda dapat menggunakan perahu motor (ketinting) menyusuri Sungai Paloh menuju Temajuk.",
        duration: "2-3 jam",
        cost: "Rp 200.000 - Rp 250.000 (per perahu)",
        vehicle: "Perahu Motor"
      }
    ],
    tips: [
      "Berangkat pagi hari dari Pontianak untuk menghindari terjebak malam di perjalanan",
      "Pesan tiket bus/travel minimal sehari sebelumnya terutama saat akhir pekan atau liburan",
      "Siapkan uang cash karena ATM terbatas di sepanjang perjalanan",
      "Untuk rute melalui sungai, pastikan membawa perlengkapan anti mabuk jika Anda rentan mabuk perjalanan",
      "Pertimbangkan untuk bermalam di Sambas jika tiba terlalu sore, karena jalur menuju Temajuk cukup menantang"
    ]
  },
  {
    id: "singkawang-temajuk",
    title: "Singkawang ke Temajuk",
    description: "Rute perjalanan dari Kota Singkawang menuju Desa Temajuk dengan berbagai opsi transportasi.",
    estimatedCost: "Rp 300.000 - Rp 450.000 per orang",
    estimatedTime: "8-10 jam",
    difficulty: "Sedang",
    imageUrl: "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    steps: [
      {
        step: 1,
        description: "Dari Singkawang, ambil bus atau travel menuju Kota Sambas.",
        duration: "2-3 jam",
        cost: "Rp 70.000 - Rp 100.000",
        vehicle: "Bus / Travel"
      },
      {
        step: 2,
        description: "Dari Terminal Sambas, lanjutkan perjalanan dengan travel atau angkutan umum menuju Kecamatan Paloh.",
        duration: "2-3 jam",
        cost: "Rp 80.000 - Rp 100.000",
        vehicle: "Travel / Angkutan Umum"
      },
      {
        step: 3,
        description: "Dari Paloh, lanjutkan perjalanan menuju Temajuk dengan ojek atau mobil sewaan melalui jalur darat.",
        duration: "3-4 jam",
        cost: "Rp 150.000 - Rp 200.000",
        vehicle: "Ojek / Mobil Sewaan"
      },
      {
        step: 4,
        description: "Alternatif lain, dari Paloh Anda dapat menggunakan perahu motor (ketinting) menyusuri Sungai Paloh menuju Temajuk.",
        duration: "2-3 jam",
        cost: "Rp 200.000 - Rp 250.000 (per perahu)",
        vehicle: "Perahu Motor"
      }
    ],
    tips: [
      "Jalur dari Singkawang ke Sambas memiliki pemandangan indah, pilih kursi di sisi jendela untuk menikmatinya",
      "Disarankan untuk menghubungi penginapan di Temajuk sebelumnya untuk meminta bantuan transportasi dari Paloh",
      "Bawa makanan dan minuman yang cukup untuk perjalanan",
      "Jika menggunakan jalur sungai, pakai jaket pelampung yang biasanya disediakan oleh pemilik perahu",
      "Download peta offline karena sinyal di beberapa area mungkin tidak stabil"
    ]
  },
  {
    id: "sambas-temajuk",
    title: "Sambas ke Temajuk",
    description: "Rute perjalanan terdekat dari Kota Sambas menuju Desa Temajuk dengan opsi transportasi darat dan sungai.",
    estimatedCost: "Rp 230.000 - Rp 350.000 per orang",
    estimatedTime: "5-7 jam",
    difficulty: "Sedang",
    imageUrl: "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    steps: [
      {
        step: 1,
        description: "Dari Terminal Sambas, ambil angkutan umum atau travel menuju Kecamatan Paloh.",
        duration: "2-3 jam",
        cost: "Rp 80.000 - Rp 100.000",
        vehicle: "Travel / Angkutan Umum"
      },
      {
        step: 2,
        description: "Dari Paloh, lanjutkan perjalanan menuju Temajuk dengan ojek atau mobil sewaan melalui jalur darat.",
        duration: "3-4 jam",
        cost: "Rp 150.000 - Rp 200.000",
        vehicle: "Ojek / Mobil Sewaan"
      },
      {
        step: 3,
        description: "Alternatif lain, dari Paloh Anda dapat menggunakan perahu motor (ketinting) menyusuri Sungai Paloh menuju Temajuk.",
        duration: "2-3 jam",
        cost: "Rp 200.000 - Rp 250.000 (per perahu)",
        vehicle: "Perahu Motor"
      }
    ],
    tips: [
      "Sambas memiliki beberapa objek wisata seperti Istana Sambas, kunjungi sebelum melanjutkan ke Temajuk",
      "Jika memilih jalur darat, pastikan kondisi jalan sebelum berangkat, terutama saat musim hujan",
      "Perjalanan melalui sungai bisa menjadi pilihan yang lebih nyaman dan menawarkan pemandangan yang berbeda",
      "Di Paloh, Anda bisa menghubungi Pak Herman (kontak: 085245678XXX) untuk transportasi menuju Temajuk",
      "Sediakan uang lebih untuk biaya tak terduga"
    ]
  },
  {
    id: "temajuk-local",
    title: "Transportasi Lokal di Temajuk",
    description: "Panduan transportasi untuk berkeliling di area Temajuk dan mengunjungi berbagai objek wisata sekitar.",
    estimatedCost: "Rp 50.000 - Rp 300.000 per hari",
    estimatedTime: "Fleksibel",
    difficulty: "Mudah",
    imageUrl: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    steps: [
      {
        step: 1,
        description: "Sewa sepeda untuk berkeliling area pantai dan desa Temajuk.",
        duration: "Sewa harian",
        cost: "Rp 50.000 - Rp 70.000 per hari",
        vehicle: "Sepeda"
      },
      {
        step: 2,
        description: "Sewa sepeda motor untuk jarak yang lebih jauh, seperti ke Tugu Perbatasan atau Bukit Maung.",
        duration: "Sewa harian",
        cost: "Rp 100.000 - Rp 150.000 per hari",
        vehicle: "Sepeda Motor"
      },
      {
        step: 3,
        description: "Gunakan jasa ojek lokal untuk kunjungan ke spot wisata yang lebih jauh atau sulit dijangkau.",
        duration: "Per perjalanan",
        cost: "Rp 50.000 - Rp 100.000 per perjalanan",
        vehicle: "Ojek"
      },
      {
        step: 4,
        description: "Untuk rombongan, sewa mobil jeep atau mobil off-road untuk mengunjungi beberapa destinasi dalam satu hari.",
        duration: "Sewa harian",
        cost: "Rp 500.000 - Rp 800.000 per hari",
        vehicle: "Mobil Jeep / Off-road"
      },
      {
        step: 5,
        description: "Untuk menjelajahi area pantai dan melihat sunset, sewa perahu nelayan lokal.",
        duration: "2-3 jam",
        cost: "Rp 200.000 - Rp 300.000",
        vehicle: "Perahu Nelayan"
      }
    ],
    tips: [
      "Sebagian besar penginapan menyediakan jasa penyewaan sepeda dan sepeda motor",
      "Simpan nomor kontak penginapan dan pemandu lokal untuk keadaan darurat",
      "Rental kendaraan biasanya meminta KTP atau identitas lain sebagai jaminan",
      "Hindari bepergian sendiri ke area yang jauh dari pemukiman",
      "Tanyakan ke penduduk lokal tentang kondisi jalan sebelum menuju ke destinasi tertentu",
      "Beberapa area mungkin tidak terjangkau sinyal telepon, jadi selalu beri tahu orang lain tentang rencana perjalanan Anda"
    ]
  }
];