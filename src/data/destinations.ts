export interface Destination {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  price: string;
  location: string;
  openHours: string;
  facilities: string[];
  activities: string[];
  tips: string[];
  gallery: string[];
}

export const destinations: Destination[] = [
  {
    id: "pantai-temajuk",
    title: "Pantai Temajuk",
    description: "Pantai eksotis dengan pasir putih dan air jernih yang membentang sepanjang 6 km di ujung barat Indonesia.",
    fullDescription: "Pantai Temajuk adalah pantai eksotis yang terletak di ujung barat Indonesia. Dengan hamparan pasir putih yang membentang sepanjang 6 km dan air laut yang jernih, pantai ini menawarkan pemandangan yang memukau. Pantai Temajuk relatif masih sepi pengunjung sehingga sangat cocok bagi Anda yang mencari tempat wisata yang tenang dan jauh dari keramaian. Anda dapat menikmati keindahan sunset yang menakjubkan, berenang di perairan yang jernih, atau sekadar bersantai di tepi pantai sambil menikmati kelapa muda.",
    imageUrl: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Pantai",
    price: "Rp 10.000",
    location: "Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas, Kalimantan Barat",
    openHours: "24 jam (terbaik dikunjungi pagi atau sore hari)",
    facilities: ["Area Parkir", "Toilet Umum", "Warung Makan", "Penyewaan Perahu"],
    activities: ["Berenang", "Melihat Sunset", "Berkemah", "Snorkeling", "Memancing"],
    tips: [
      "Bawalah perlengkapan seperti sunblock, topi, dan kacamata untuk melindungi diri dari sinar matahari",
      "Jika ingin bermalam, sebaiknya memesan penginapan terlebih dahulu karena ketersediaan terbatas",
      "Kunjungi pada hari kerja untuk menghindari keramaian"
    ],
    gallery: [
      "https://images.pexels.com/photos/1921336/pexels-photo-1921336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "tugu-perbatasan",
    title: "Tugu Perbatasan Indonesia-Malaysia",
    description: "Monumen perbatasan yang menandai wilayah Indonesia dan Malaysia di ujung barat Pulau Kalimantan.",
    fullDescription: "Tugu Perbatasan Indonesia-Malaysia adalah monumen yang terletak tepat di garis perbatasan antara Indonesia dan Malaysia di ujung barat Pulau Kalimantan. Tugu ini menjadi saksi bisu perjalanan sejarah kedua negara dan merupakan simbol kedaulatan negara. Pengunjung dapat berfoto dengan latar belakang tugu sambil menginjak dua negara sekaligus. Tugu ini dikelilingi oleh hutan tropis yang masih asri dan menawarkan pengalaman wisata yang unik dan berbeda.",
    imageUrl: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Monumen",
    price: "Rp 5.000",
    location: "Perbatasan Indonesia-Malaysia, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "08.00 - 17.00 WIB",
    facilities: ["Area Parkir", "Toilet Umum", "Pos Penjagaan"],
    activities: ["Berfoto", "Melihat Pemandangan", "Trekking"],
    tips: [
      "Bawalah identitas diri (KTP/SIM/Paspor) saat berkunjung",
      "Patuhi aturan dan jangan melewati batas negara tanpa izin",
      "Bawalah air minum yang cukup karena perjalanan menuju tugu cukup melelahkan"
    ],
    gallery: [
      "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2471970/pexels-photo-2471970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "hutan-mangrove",
    title: "Hutan Mangrove Temajuk",
    description: "Ekosistem mangrove yang menjadi habitat berbagai flora dan fauna serta menawarkan jalur susur mangrove.",
    fullDescription: "Hutan Mangrove Temajuk adalah kawasan hutan bakau yang terletak di pesisir pantai Temajuk. Ekosistem mangrove ini menjadi rumah bagi berbagai flora dan fauna, termasuk burung-burung langka dan kepiting bakau. Pengunjung dapat menjelajahi hutan mangrove melalui jalur susur kayu yang telah disediakan. Pemandangan akar-akar pohon mangrove yang menjulang dari air adalah pemandangan yang menarik untuk diabadikan. Selain nilai estetikanya, hutan mangrove juga berperan penting dalam melindungi pesisir dari abrasi dan menjaga ekosistem laut.",
    imageUrl: "images/batu-nenek-aluwi.jpg",
    category: "Alam",
    price: "Rp 15.000",
    location: "Pesisir Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "07.00 - 18.00 WIB",
    facilities: ["Jalur Susur Mangrove", "Toilet Umum", "Pos Informasi", "Area Parkir"],
    activities: ["Tracking Mangrove", "Fotografi", "Pengamatan Burung", "Edukasi Lingkungan"],
    tips: [
      "Kenakan pakaian yang nyaman dan sepatu yang sesuai untuk tracking",
      "Bawalah obat anti nyamuk",
      "Jangan membuang sampah sembarangan untuk menjaga kelestarian ekosistem"
    ],
    gallery: [
      "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5232048/pexels-photo-5232048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/14199312/pexels-photo-14199312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "bukit-maung",
    title: "Bukit Maung",
    description: "Bukit dengan pemandangan spektakuler Laut Natuna dan bentangan hutan tropis yang luas.",
    fullDescription: "Bukit Maung adalah salah satu destinasi wisata alam yang menawarkan pemandangan spektakuler di Temajuk. Dari puncak bukit, pengunjung dapat menikmati panorama Laut Natuna yang membentang luas serta hamparan hutan tropis yang mengelilingi kawasan Temajuk. Tracking menuju puncak bukit membutuhkan waktu sekitar 1-2 jam, namun keindahan pemandangan di puncak akan membayar semua usaha Anda. Bukit Maung adalah tempat ideal untuk melihat matahari terbit dan menikmati udara segar pegunungan.",
    imageUrl: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Alam",
    price: "Rp 10.000",
    location: "Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "06.00 - 18.00 WIB",
    facilities: ["Jalur Pendakian", "Pos Istirahat", "Area Camping"],
    activities: ["Trekking", "Camping", "Fotografi", "Melihat Sunrise"],
    tips: [
      "Bawalah air minum dan bekal yang cukup",
      "Kenakan sepatu trekking dan pakaian yang nyaman",
      "Untuk melihat sunrise, sebaiknya mendaki pada malam hari dan bermalam di puncak"
    ],
    gallery: [
      "https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2224956/pexels-photo-2224956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "teluk-atong",
    title: "Teluk Atong",
    description: "Pantai ini dikenal karena atong adalah orang pertama yang mendirikan penginapan di kawasan ini.",
    fullDescription: "Pantai ini dikenal karena atong adalah orang pertama yang mendirikan penginapan di kawasan ini, daerah yang dulunya paling ujung dan dekat dengan hutan lindung Tanjung Datuk. Sekarang semakin ramai karena jalur menuju atong bahari sudah menjadi jalur utama wisata Desa Temajuk. Karakteristik pantai ini sama dengan pantai Camar Bulan, namun perbedaannya adalah ketika surut batu karang akan terhampar luas didepan pantai dan ketika air pasang kita bisa melakukan snorkeling disekitar pantai ini.",
    imageUrl: "https://jadesta.com/imgpost/35189.jpg",
    category: "Teluk",
    price: "Rp 15.000",
    location: "Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "08.00 - 17.00 WIB",
    facilities: ["Area Parkir", "Toilet Umum", "Gazebo", "Warung Makan"],
    activities: ["Berenang", "Fotografi", "Piknik", "Bersantai"],
    tips: [
      "Bawalah baju ganti jika berencana berenang",
      "Waspada terhadap kedalaman danau di beberapa bagian",
      "Jangan membuang sampah sembarangan untuk menjaga kebersihan pantai"
    ],
    gallery: [
      "https://images.pexels.com/photos/2159538/pexels-photo-2159538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "air-terjun-coras",
    title: "Air Terjun Carocok Antu Soreh (Coras)",
    description: "Air terjun bertingkat yang berada di tengah hutan belantara dengan air yang jernih dan sejuk.",
    fullDescription: "Air Terjun Carocok Antu Soreh atau yang biasa disingkat Coras adalah air terjun bertingkat yang terletak di tengah hutan belantara Temajuk. Air terjun ini memiliki beberapa tingkatan dengan kolam-kolam alami yang dapat digunakan untuk berendam. Air yang jernih dan sejuk serta suara gemericik air yang menenangkan menciptakan atmosfer yang sangat menyegarkan. Perjalanan menuju air terjun ini melalui jalur trekking yang cukup menantang, namun keindahan alam sepanjang perjalanan dan keindahan air terjun akan membuat segala usaha terbayarkan.",
    imageUrl: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Air Terjun",
    price: "Rp 20.000",
    location: "Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "08.00 - 16.00 WIB",
    facilities: ["Jalur Trekking", "Area Istirahat", "Toilet Umum"],
    activities: ["Trekking", "Berendam", "Fotografi", "Menikmati Alam"],
    tips: [
      "Kenakan sepatu yang sesuai untuk trekking",
      "Bawalah air minum yang cukup",
      "Datanglah pagi hari untuk menghindari hujan sore yang biasa terjadi di kawasan hutan"
    ],
    gallery: [
      "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1650227/pexels-photo-1650227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  }
];