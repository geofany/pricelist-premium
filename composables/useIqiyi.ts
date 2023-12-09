export const useIqiyi = () => {
  const iqiyi: Product = {
    title: "Iqiyi",
    logo: "https://www.iq.com/favicon.ico",
    note: [
      "- Full Garansi",
      "- Akun dari seller tinggal pakai",
      "- Bisa login All Device (Hp, Laptop, TV, Tablet, dll)",
      "- Akun sharing hanya bisa login 1 device & history kecampur sama orang lain",
      "- VIP Standart Plan",
    ],
    type: [
      {
        name: "Sharing",
        count: 0,
        list: [
          {
            name: "1 Bulan",
            stock_price: 12,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "1 Tahun",
            stock_price: 45,
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
            name: "1 Bulan",
            stock_price: 40,
            official_price: 19,
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
    iqiyi,
  };
};
