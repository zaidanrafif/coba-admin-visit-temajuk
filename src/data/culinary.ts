export interface Culinary {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  price: string;
  location: string;
  openHours: string;
  contact?: string;
  specialties: string[];
  gallery: string[];
}

export const culinary: Culinary[] = [
  {
    id: "warung-seafood-pak-rahman",
    title: "Warung Seafood Pak Rahman",
    description: "Warung seafood dengan menu ikan dan seafood segar langsung dari nelayan lokal Temajuk.",
    fullDescription: "Warung Seafood Pak Rahman adalah tempat makan populer di Temajuk yang menyajikan berbagai hidangan seafood segar. Semua bahan diperoleh langsung dari nelayan lokal yang menangkap ikan setiap pagi. Spesialisasi warung ini adalah ikan bakar dengan bumbu khas Temajuk yang gurih dan sedikit pedas. Selain ikan bakar, Anda juga dapat menikmati cumi goreng tepung, udang asam manis, dan berbagai olahan seafood lainnya. Suasana warung yang sederhana dengan pemandangan pantai menambah kenikmatan saat bersantap.",
    imageUrl: "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Seafood",
    price: "Rp 25.000 - Rp 100.000",
    location: "Jl. Pantai Temajuk No. 10, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "11.00 - 21.00 WIB",
    contact: "+62 8123 4567 890",
    specialties: [
      "Ikan Bakar Bumbu Khas",
      "Cumi Goreng Tepung",
      "Udang Asam Manis",
      "Sup Ikan Kuah Asam"
    ],
    gallery: [
      "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "rumah-makan-bintang-laut",
    title: "Rumah Makan Bintang Laut",
    description: "Restoran keluarga dengan menu masakan Indonesia dan beberapa hidangan khas Kalimantan Barat.",
    fullDescription: "Rumah Makan Bintang Laut adalah restoran keluarga yang menyajikan berbagai menu masakan Indonesia dan hidangan khas Kalimantan Barat. Dengan interior yang nyaman dan pelayanan yang ramah, restoran ini cocok untuk makan bersama keluarga atau teman. Menu andalan mereka adalah Ayam Kampung Taliwang, Ikan Kerisi Goreng, dan Sayur Pakis Santan. Untuk hidangan khas Kalimantan Barat, mereka menawarkan Bubur Pedas dan Sotong Pangkong yang tidak boleh dilewatkan. Porsi yang disajikan cukup besar dengan harga yang terjangkau.",
    imageUrl: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Indonesia",
    price: "Rp 20.000 - Rp 80.000",
    location: "Jl. Utama Temajuk No. 25, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "07.00 - 21.00 WIB",
    contact: "+62 8234 5678 901",
    specialties: [
      "Ayam Kampung Taliwang",
      "Ikan Kerisi Goreng",
      "Bubur Pedas Kalimantan",
      "Sotong Pangkong"
    ],
    gallery: [
      "https://images.pexels.com/photos/1321731/pexels-photo-1321731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "kedai-kopi-ujung-negeri",
    title: "Kedai Kopi Ujung Negeri",
    description: "Kedai kopi cozy dengan kopi lokal Kalimantan dan camilan tradisional khas Temajuk.",
    fullDescription: "Kedai Kopi Ujung Negeri adalah tempat nongkrong favorit wisatawan di Temajuk. Kedai ini menyajikan kopi lokal Kalimantan yang disangrai dan digiling secara tradisional sehingga menghasilkan aroma dan rasa yang khas. Selain kopi, mereka juga menawarkan berbagai minuman seperti teh herbal dan jus buah segar. Untuk menemani minuman Anda, tersedia berbagai camilan tradisional seperti kue lapis Sambas, telur asin bakar, dan pisang goreng dengan sambal kacang. Suasana kedai yang cozy dengan dekorasi vintage dan pemandangan pantai membuat pengunjung betah berlama-lama.",
    imageUrl: "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Kafe",
    price: "Rp 10.000 - Rp 35.000",
    location: "Jl. Pinggir Pantai No. 5, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "07.00 - 22.00 WIB",
    contact: "+62 8345 6789 012",
    specialties: [
      "Kopi Robusta Kalimantan",
      "Kue Lapis Sambas",
      "Telur Asin Bakar",
      "Pisang Goreng Sambal Kacang"
    ],
    gallery: [
      "https://images.pexels.com/photos/1157855/pexels-photo-1157855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1195614/pexels-photo-1195614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "warung-mie-khas-sambas",
    title: "Warung Mie Khas Sambas",
    description: "Warung sederhana yang menyajikan mie Sambas yang terkenal dengan tekstur kenyal dan kuah kaldunya yang gurih.",
    fullDescription: "Warung Mie Khas Sambas adalah tempat makan sederhana yang menyajikan makanan khas Kabupaten Sambas, yaitu Mie Sambas. Mie ini terkenal dengan teksturnya yang kenyal dan kuah kaldu ayam atau udang yang gurih. Proses pembuatan mie dilakukan secara tradisional dengan bahan-bahan pilihan. Selain Mie Sambas original, warung ini juga menawarkan variasi seperti Mie Sambas Seafood dan Mie Sambas Ayam Jamur. Sebagai pelengkap, tersedia juga gorengan, kerupuk, dan sambal khusus yang menambah kenikmatan mie.",
    imageUrl: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Lokal",
    price: "Rp 15.000 - Rp 30.000",
    location: "Jl. Pasar Temajuk No. 8, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "09.00 - 20.00 WIB",
    contact: "+62 8456 7890 123",
    specialties: [
      "Mie Sambas Original",
      "Mie Sambas Seafood",
      "Mie Sambas Ayam Jamur",
      "Pangsit Goreng"
    ],
    gallery: [
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3926133/pexels-photo-3926133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "rumah-makan-mama-ina",
    title: "Rumah Makan Mama Ina",
    description: "Rumah makan tradisional dengan masakan rumahan khas Kalimantan Barat dan suasana kekeluargaan.",
    fullDescription: "Rumah Makan Mama Ina adalah tempat makan tradisional yang menyajikan masakan rumahan khas Kalimantan Barat. Dikelola langsung oleh Mama Ina, seorang ibu lokal yang sudah puluhan tahun memasak, rumah makan ini menawarkan cita rasa autentik dengan resep turun temurun. Menu andalan mereka adalah Nasi Campur Khas Temajuk, Sayur Pakis Tumis Terasi, Ayam Panggang Bumbu Khas, dan Sambal Terasi Temajuk yang terkenal pedasnya. Suasana kekeluargaan dan pelayanan yang ramah membuat pengunjung merasa seperti makan di rumah sendiri.",
    imageUrl: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Tradisional",
    price: "Rp 15.000 - Rp 50.000",
    location: "Jl. Kampung Temajuk No. 12, Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas",
    openHours: "08.00 - 20.00 WIB",
    contact: "+62 8567 8901 234",
    specialties: [
      "Nasi Campur Khas Temajuk",
      "Sayur Pakis Tumis Terasi",
      "Ayam Panggang Bumbu Khas",
      "Sambal Terasi Temajuk"
    ],
    gallery: [
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  }
];