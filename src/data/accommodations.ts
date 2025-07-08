export interface Accommodation {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  price: string;
  location: string;
  facilities: string[];
  contact: string;
  website?: string;
  gallery: string[];
  rooms: Room[];
}

interface Room {
  type: string;
  price: string;
  capacity: string;
  description: string;
}

export const accommodations: Accommodation[] = [
  {
    id: "temajuk-beach-resort",
    title: "Temajuk Beach Resort",
    description: "Resort tepi pantai dengan pemandangan laut yang menakjubkan dan fasilitas lengkap untuk liburan keluarga.",
    fullDescription: "Temajuk Beach Resort adalah akomodasi mewah yang terletak tepat di tepi Pantai Temajuk. Resort ini menawarkan pemandangan laut yang menakjubkan dari setiap kamar dan dilengkapi dengan berbagai fasilitas untuk memenuhi kebutuhan liburan keluarga. Dengan desain yang memadukan unsur modern dan tradisional, resort ini memberikan suasana yang nyaman dan menenangkan. Nikmati hidangan lezat di restoran tepi pantai, bersantai di kolam renang infinity, atau sekadar menikmati sunset dari teras kamar Anda.",
    imageUrl: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Resort",
    price: "Rp 800.000 - Rp 2.500.000",
    location: "Jl. Pantai Temajuk, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    facilities: ["Kolam Renang", "Restoran", "WiFi", "AC", "TV", "Parkir", "24-hour Front Desk", "Spa"],
    contact: "+62 8123 4567 890",
    website: "www.temajukbeachresort.com",
    gallery: [
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rooms: [
      {
        type: "Kamar Standard",
        price: "Rp 800.000/malam",
        capacity: "2 orang",
        description: "Kamar nyaman dengan tempat tidur queen size, kamar mandi pribadi, dan balkon kecil."
      },
      {
        type: "Kamar Deluxe",
        price: "Rp 1.200.000/malam",
        capacity: "2 orang",
        description: "Kamar luas dengan tempat tidur king size, kamar mandi dengan bathtub, dan balkon dengan pemandangan laut."
      },
      {
        type: "Suite",
        price: "Rp 2.500.000/malam",
        capacity: "4 orang",
        description: "Suite mewah dengan ruang tamu terpisah, 2 kamar tidur, dapur kecil, dan teras pribadi menghadap ke laut."
      }
    ]
  },
  {
    id: "wisma-temajuk",
    title: "Wisma Temajuk",
    description: "Penginapan nyaman dengan harga terjangkau dan lokasi strategis, cocok untuk backpacker dan pelancong hemat.",
    fullDescription: "Wisma Temajuk adalah penginapan nyaman dengan harga terjangkau yang terletak di pusat Desa Temajuk. Dengan lokasi yang strategis, penginapan ini menjadi pilihan ideal bagi backpacker dan pelancong hemat. Meskipun sederhana, Wisma Temajuk menyediakan semua kebutuhan dasar untuk kenyamanan tamu, seperti kamar yang bersih, kamar mandi pribadi, dan area bersantai. Staff yang ramah siap membantu memberikan informasi tentang atraksi wisata di sekitar Temajuk.",
    imageUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Wisma",
    price: "Rp 250.000 - Rp 500.000",
    location: "Jl. Utama Temajuk No. 15, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    facilities: ["Parkir", "WiFi", "Kipas Angin", "Kamar Mandi Dalam", "Sarapan Sederhana"],
    contact: "+62 8234 5678 901",
    gallery: [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rooms: [
      {
        type: "Kamar Standard",
        price: "Rp 250.000/malam",
        capacity: "2 orang",
        description: "Kamar sederhana dengan tempat tidur double, kipas angin, dan kamar mandi pribadi."
      },
      {
        type: "Kamar Keluarga",
        price: "Rp 500.000/malam",
        capacity: "4 orang",
        description: "Kamar luas dengan 2 tempat tidur double, kipas angin, dan kamar mandi pribadi."
      }
    ]
  },
  {
    id: "coconut-tree-bungalows",
    title: "Coconut Tree Bungalows",
    description: "Bungalow kayu tradisional yang dikelilingi oleh kebun kelapa, menawarkan suasana tropis yang autentik.",
    fullDescription: "Coconut Tree Bungalows adalah akomodasi unik yang menawarkan pengalaman menginap di bungalow kayu tradisional yang dikelilingi oleh kebun kelapa. Setiap bungalow dibangun dengan gaya arsitektur lokal dan menggunakan material alami, menciptakan suasana tropis yang autentik. Meskipun tradisional, bungalow ini dilengkapi dengan fasilitas modern untuk kenyamanan tamu. Nikmati sarapan di teras pribadi Anda sambil mendengarkan kicauan burung dan hembusan angin pantai.",
    imageUrl: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bungalow",
    price: "Rp 600.000 - Rp 900.000",
    location: "Jl. Kelapa Temajuk, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    facilities: ["Hammock", "Teras Pribadi", "Kipas Angin", "Air Panas", "Sarapan", "Rental Sepeda"],
    contact: "+62 8345 6789 012",
    website: "www.coconuttreebungalows.com",
    gallery: [
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rooms: [
      {
        type: "Bungalow Standard",
        price: "Rp 600.000/malam",
        capacity: "2 orang",
        description: "Bungalow kayu dengan tempat tidur queen size, kamar mandi semi terbuka, dan teras pribadi."
      },
      {
        type: "Bungalow Deluxe",
        price: "Rp 900.000/malam",
        capacity: "3 orang",
        description: "Bungalow kayu yang lebih luas dengan tempat tidur king size, kamar mandi semi terbuka, ruang duduk, dan teras pribadi dengan hammock."
      }
    ]
  },
  {
    id: "homestay-mama-rosa",
    title: "Homestay Mama Rosa",
    description: "Penginapan rumahan yang menawarkan pengalaman tinggal bersama penduduk lokal dan mencicipi masakan rumahan khas Temajuk.",
    fullDescription: "Homestay Mama Rosa adalah rumah penduduk lokal yang menyediakan kamar-kamar untuk disewakan kepada wisatawan. Penginapan ini menawarkan pengalaman unik untuk tinggal bersama penduduk lokal dan merasakan kehidupan sehari-hari di Temajuk. Selain kamar yang nyaman, tamu akan dimanjakan dengan masakan rumahan khas Temajuk yang lezat, yang disiapkan langsung oleh Mama Rosa. Ini adalah kesempatan sempurna untuk belajar tentang budaya lokal dan mendapatkan tips wisata dari penduduk setempat.",
    imageUrl: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Homestay",
    price: "Rp 200.000 - Rp 350.000",
    location: "Jl. Kampung Temajuk No. 7, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    facilities: ["Sarapan dan Makan Malam", "Kipas Angin", "Kamar Mandi Bersama", "Ruang Keluarga", "Dapur Bersama"],
    contact: "+62 8456 7890 123",
    gallery: [
      "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rooms: [
      {
        type: "Kamar Single",
        price: "Rp 200.000/malam",
        capacity: "1 orang",
        description: "Kamar sederhana dengan tempat tidur single dan akses ke kamar mandi bersama."
      },
      {
        type: "Kamar Double",
        price: "Rp 300.000/malam",
        capacity: "2 orang",
        description: "Kamar dengan tempat tidur double dan akses ke kamar mandi bersama."
      },
      {
        type: "Kamar Keluarga",
        price: "Rp 350.000/malam",
        capacity: "3 orang",
        description: "Kamar luas dengan 1 tempat tidur double dan 1 tempat tidur single, serta akses ke kamar mandi bersama."
      }
    ]
  },
  {
    id: "villa-temajuk-indah",
    title: "Villa Temajuk Indah",
    description: "Villa pribadi dengan kolam renang yang cocok untuk liburan keluarga atau kelompok dengan privasi tinggi.",
    fullDescription: "Villa Temajuk Indah adalah akomodasi mewah yang menawarkan privasi tinggi bagi tamu yang menginap. Terletak tidak jauh dari pantai, villa ini dilengkapi dengan kolam renang pribadi dan taman tropis yang indah. Dengan beberapa kamar tidur, ruang tamu yang luas, dan dapur lengkap, villa ini adalah pilihan ideal untuk liburan keluarga atau kelompok. Nikmati waktu bersantai di tepi kolam atau mengadakan BBQ di area outdoor yang telah disediakan. Staff villa siap membantu menyediakan kebutuhan Anda selama menginap.",
    imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Villa",
    price: "Rp 2.000.000 - Rp 3.500.000",
    location: "Komplek Villa Temajuk, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    facilities: ["Kolam Renang Pribadi", "Dapur Lengkap", "AC", "TV", "WiFi", "Area BBQ", "Taman", "Parkir Pribadi"],
    contact: "+62 8567 8901 234",
    website: "www.villatemajukindah.com",
    gallery: [
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rooms: [
      {
        type: "Villa 2 Kamar",
        price: "Rp 2.000.000/malam",
        capacity: "4 orang",
        description: "Villa dengan 2 kamar tidur, ruang tamu, dapur, dan kolam renang pribadi."
      },
      {
        type: "Villa 3 Kamar",
        price: "Rp 2.800.000/malam",
        capacity: "6 orang",
        description: "Villa dengan 3 kamar tidur, ruang tamu luas, dapur lengkap, dan kolam renang pribadi."
      },
      {
        type: "Villa 4 Kamar",
        price: "Rp 3.500.000/malam",
        capacity: "8 orang",
        description: "Villa mewah dengan 4 kamar tidur, ruang tamu dan ruang makan terpisah, dapur lengkap, kolam renang pribadi, dan taman luas."
      }
    ]
  }
];