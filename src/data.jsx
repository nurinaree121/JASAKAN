import { Home, Category, Shop, Message } from "iconsax-react-native";
import { fontType, colors } from './theme';

export const blogData = [
  {
    id: 1,
    title: 'Home Cleaning Service',
    description: '100x lebih bersih',
    uploadDate: 'Nov 10, 2023',
    eventDate: 'Nov 18, 2023',
    location: 'Area Blitar',
    quota: 0,
    registered: 75,
    image: 'https://gemilang.co.id/wp-content/uploads/2024/05/Jenis-Cleaning-Service_-Pengertian-dan-Daftar-Tugasnya.webp',
    totalComments: 12,
  },
  {
    id: 2,
    title: 'Service Kulkas, Tv, AC, dll',
    description: 'Penanaman pohon bersama untuk menghijaukan kembali area terbuka di sekitar Hutan Kota.',
    uploadDate: 'Nov 10, 2023',
    eventDate: 'Nov 25, 2023',
    location: 'Hutan Kota, Jakarta Selatan',
    quota: 150,
    registered: 120,
    image: 'https://aminahstore.com/wp-content/uploads/2018/09/1-7.jpg',
    totalComments: 20,
  },
    /* {
      title: 'Sosialisasi Pembuatan Kompos Sampah Organik',
      date: 'Nov 10, 2023',
      image: 'https://i.pinimg.com/736x/a4/05/6c/a4056c10650fc5aa930fa29cb0522ba7.jpg',
    }, */
    {
      id: 3,
      title: 'Pembuatan Almari, kursi, meja, dll',
      description: 'Penanaman pohon bersama untuk menghijaukan kembali area terbuka di sekitar Hutan Kota.',
      uploadDate: 'Nov 10, 2023',
      eventDate: 'Nov 25, 2023',
      location: 'Hutan Kota, Jakarta Selatan',
      quota: 150,
      registered: 120,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdJo6qow2GDE-EOoslCmiFG-qM9ACXwJwNg&shttps://i.pinimg.com/736x/a4/05/6c/a4056c10650fc5aa930fa29cb0522ba7.jpg',
      totalComments: 20,
    },
    {
      id: 3,
      title: 'Pembuatan Almari, kursi, meja, dll',
      description: 'Penanaman pohon bersama untuk menghijaukan kembali area terbuka di sekitar Hutan Kota.',
      uploadDate: 'Nov 10, 2023',
      eventDate: 'Nov 25, 2023',
      location: 'Hutan Kota, Jakarta Selatan',
      quota: 150,
      registered: 120,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdJo6qow2GDE-EOoslCmiFG-qM9ACXwJwNg&shttps://i.pinimg.com/736x/a4/05/6c/a4056c10650fc5aa930fa29cb0522ba7.jpg',
      totalComments: 20,
    },
    {
      id: 3,
      title: 'Pembuatan Almari, kursi, meja, dll',
      description: 'Penanaman pohon bersama untuk menghijaukan kembali area terbuka di sekitar Hutan Kota.',
      uploadDate: 'Nov 10, 2023',
      eventDate: 'Nov 25, 2023',
      location: 'Hutan Kota, Jakarta Selatan',
      quota: 150,
      registered: 120,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdJo6qow2GDE-EOoslCmiFG-qM9ACXwJwNg&shttps://i.pinimg.com/736x/a4/05/6c/a4056c10650fc5aa930fa29cb0522ba7.jpg',
      totalComments: 20,
    },
  ];
  
  export const dataJasa = [
    {
      id: '1',
      category: 'Pemrograman',
      title: 'Pembuatan Website',
      harga: 'Rp.100K-Rp.200K',
      review: 89,
      image: 'https://kuliahkaryawan.net/images/blog/da85f03959ba58d0c22d16cf089f3ea8.jpg',
    },
    {
      id: '2',
      category: 'Rumah Tangga',
      title: 'Antar Jemput Anak',
      harga: 'Rp.100K-Rp.200K',
      review: 88,
      image: 'https://ik.imagekit.io/carro/jualo/original/39089155/image_20230728-19772-1khsfwz.jpg?v=1690480099',
    },
    {
      id: '3',
      category: 'Pertukangan',
      title: 'Pembuatan Almari, kursi, meja, dll',
      harga: 'Rp.100K-Rp.200K',
      review: 89,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdJo6qow2GDE-EOoslCmiFG-qM9ACXwJwNg&shttps://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
    },
    {
      id: '4',
      category: 'Jasa Elektronik',
      title: 'Service Kulkas, Tv, AC, dll',
      harga: 'Rp.100K-Rp.200K',
      review: 90,
      image: 'https://aminahstore.com/wp-content/uploads/2018/09/1-7.jpg',
    },
    {
      id: '5',
      category: 'Jasa Otomotif',
      title: 'Service Mobil dan Motor',
      harga: 'Rp.100K-Rp.200K',
      review: 115,
      image: 'https://moladin.com/blog/wp-content/uploads/2021/04/moladin-tips-mudik-01.jpg',
    },
  ];
  
  export const categories = [
    { id: '1', title: 'Jasa Otomotif' },
    { id: '2', title: 'Jasa Rumah Tangga' },
    { id: '3', title: 'Jasa Elektronik' },
  ];

  export const menuItems = [
    { id: '1', title: 'Beranda', icon: <Home size={24} color={colors.white()} /> },
    { id: '2', title: 'Jasa', icon: <Category size={24} color={colors.white()} /> },
    { id: '3', title: 'Promo', icon: <Shop size={24} color={colors.white()} /> },
  ];

  export const ProfileData = {
    profilePict:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    name: 'Arthur Conan Doyle',
    createdAt: '18 Mar, 2020',
    blogPosted: 29,
    following: 3000,
    follower: 3000,
  };