export const useVidio = () => {
  const vidio: Product = {
    title: "Vidio",
    logo: "https://image.moengage.com/vidiomoengage/20230922065959151515SB7S9GLogoIconVidio1pngcompvidiomoengage.png",
    note: [
      "- Full Garansi",
      "- Akun sharing dari seller tinggal pakai",
      "- Akun private bisa dari buyer",
      "- Bisa login All Device (Hp, Laptop, TV, Tablet, dll)",
      "- Akun sharing hanya bisa login 1 device & history kecampur sama orang lain",
      "- Akun privat bisa sampai 5 device dan bebas atur settingan akun",
      "- Akun Diamond buat yang ingin nonton Sepak Bola dan Serial Korea",
    ],
    type: [
      {
        name: "Sharing Platinum",
        count: 0,
        list: [
          {
            name: "1 Bulan",
            stock_price: 15,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
        ],
      },
      {
        name: "Sharing Diamond",
        count: 0,
        list: [
          {
            name: "1 Bulan",
            stock_price: 80,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
        ],
      },
      {
        name: "Private Platinum",
        count: 0,
        list: [
          {
            name: "3 Bulan",
            stock_price: 60,
            official_price: 117,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "1 Tahun",
            stock_price: 100,
            official_price: 269,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
        ],
      },
      {
        name: "Private Diamond",
        count: 0,
        list: [
          {
            name: "1 Bulan",
            stock_price: 150,
            official_price: 99,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
        ],
      },
    ],
  };
  return {
    vidio,
  };
};
