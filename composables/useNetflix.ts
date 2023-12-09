export const useNetflix = () => {
  const netflix: Product = {
    title: "Netflix",
    logo: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico",
    note: [
      "- Full Garansi",
      "- Akun dari seller tinggal pakai",
      "- Bisa login All Device (Hp, Laptop, TV, Tablet, dll)",
      "- Kualitas 4k UHD",
      "- Akun sharing hanya bisa login 1 device & history kecampur sama orang lain",
      "- Akun privat bisa sampai 5 device dan bebas atur settingan akun",
      "- Login tanpa VPN",
    ],
    type: [
      {
        name: "Sharing",
        count: 0,
        list: [
          {
            name: "3 Hari",
            stock_price: 5,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "7 Hari",
            stock_price: 10,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "23 Hari",
            stock_price: 22,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "1 Bulan",
            stock_price: 29,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "3 Bulan",
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
        name: "Private",
        count: 0,
        list: [
          {
            name: "23 Hari",
            stock_price: 130,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "1 Bulan",
            stock_price: 150,
            official_price: 186,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "3 Bulan",
            stock_price: 530,
            official_price: 558,
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
    netflix,
  };
};
