export const useDrakorId = () => {
  const drakorId: Product = {
    title: "Drakor.ID",
    logo: "https://play-lh.googleusercontent.com/MjhwfM8MnkuKgiaHUp8AWysdn3UJ9okV2wZagfBQ8DwKVp26zpWbwqkG0iIjB3nN7Aw",
    note: [
      "- Full Garansi",
      "- Akun dari seller tinggal pakai",
      "- Bisa login All Device (Hp, Laptop, TV, Tablet, dll)",
      "- Akun sharing hanya bisa login 1 device & history kecampur sama orang lain",
    ],
    type: [
      {
        name: "Sharing",
        count: 0,
        list: [
          {
            name: "6 Bulan",
            stock_price: 29,
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
    ],
  };
  return {
    drakorId,
  };
};
