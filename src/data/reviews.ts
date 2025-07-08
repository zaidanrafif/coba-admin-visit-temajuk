export interface Review {
  id: string;
  name: string;
  imageUrl: string;
  date: string;
  rating: number;
  text: string;
  destination: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Budi Santoso",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "12 Mei 2023",
    rating: 5,
    text: "Temajuk adalah surga tersembunyi yang wajib dikunjungi! Pantainya bersih dengan pasir putih dan air laut yang jernih. Sunset di sini adalah yang terindah yang pernah saya lihat. Penduduk lokalnya sangat ramah dan membantu. Akomodasi di Coconut Tree Bungalows sangat nyaman dan otentik. Akan kembali lagi tahun depan!",
    destination: "Pantai Temajuk"
  },
  {
    id: "2",
    name: "Siti Nurhayati",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "3 Juni 2023",
    rating: 4,
    text: "Pengalaman yang luar biasa mengunjungi Tugu Perbatasan Indonesia-Malaysia. Bisa berfoto dengan satu kaki di Indonesia dan satu kaki di Malaysia adalah momen yang unik! Akses ke lokasi memang agak menantang, tapi pemandangan sepanjang perjalanan sangat memukau. Saran: bawa air yang cukup dan berangkat pagi hari untuk menghindari panas.",
    destination: "Tugu Perbatasan Indonesia-Malaysia"
  },
  {
    id: "3",
    name: "Ahmad Fauzi",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20 Juli 2023",
    rating: 5,
    text: "Hutan Mangrove Temajuk adalah tempat yang wajib dikunjungi bagi pecinta fotografi dan pengamat burung. Saya menghabiskan seharian di jalur susur mangrove dan tidak pernah bosan dengan pemandangannya. Berhasil memotret beberapa jenis burung langka. Pemandu lokal kami sangat berpengetahuan tentang ekosistem mangrove.",
    destination: "Hutan Mangrove Temajuk"
  },
  {
    id: "4",
    name: "Rina Wijaya",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "5 Agustus 2023",
    rating: 3,
    text: "Bukit Maung menawarkan pemandangan yang luar biasa, tapi perjalanan ke puncak cukup menantang. Jalur trekking-nya kurang terawat di beberapa bagian dan tidak ada penanda yang jelas. Saran untuk pengelola: perbaiki jalur pendakian dan tambahkan penanda. Tapi tetap worth it karena view dari puncak sangat spektakuler!",
    destination: "Bukit Maung"
  },
  {
    id: "5",
    name: "Denny Pratama",
    imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "17 September 2023",
    rating: 5,
    text: "Danau Laut Madu adalah tempat yang magical! Warna air keemasannya sangat unik dan cantik, terutama saat matahari terbenam. Tempat yang sempurna untuk bersantai dan berenang. Saya menginap di Wisma Temajuk yang letaknya tidak jauh dari danau, harganya terjangkau dan pemiliknya sangat ramah.",
    destination: "Danau Laut Madu"
  },
  {
    id: "6",
    name: "Lina Susanti",
    imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2 Oktober 2023",
    rating: 4,
    text: "Air Terjun Coras sangat menyegarkan! Airnya jernih dan sejuk. Perjalanannya memang cukup melelahkan tapi sangat worth it. Saya makan di Warung Seafood Pak Rahman setelahnya dan seafood-nya sangat segar dan lezat. Kalau ke Temajuk, jangan lewatkan kedua tempat ini!",
    destination: "Air Terjun Carocok Antu Soreh (Coras)"
  },
  {
    id: "7",
    name: "Hendra Gunawan",
    imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "15 November 2023",
    rating: 5,
    text: "Temajuk adalah destinasi yang sempurna untuk honeymoon kami! Kami menginap di Temajuk Beach Resort dan pelayanannya luar biasa. Spot foto di Sunset Point Temajuk menghasilkan foto-foto yang indah untuk album pernikahan kami. Jangan lupa mencoba kopi di Kedai Kopi Ujung Negeri, kopi lokalnya sangat nikmat!",
    destination: "Sunset Point Temajuk"
  },
  {
    id: "8",
    name: "Maya Anggraini",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "8 Desember 2023",
    rating: 4,
    text: "Landmark Perbatasan RI-Malaysia adalah pengalaman unik yang tidak bisa didapatkan di tempat lain. Berfoto di dua negara sekaligus adalah momen yang tak terlupakan. Area sekitarnya juga bersih dan terawat. Saran: pelajari sedikit tentang sejarah perbatasan sebelum berkunjung untuk menambah pengalaman.",
    destination: "Landmark Perbatasan RI-Malaysia"
  }
];