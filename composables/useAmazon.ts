export const useAmazon = () => {
  const amazon: Product = {
    title: "Amazon Prime",
    logo: "https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_627%2Cw_627&url=https%3A%2F%2Fstorage.googleapis.com%2Fpadlet-uploads%2F2081924948%2F6138ca68827aed084add42d195e75b46%2Famazon_prime.avif%3FExpires%3D1702617305%26GoogleAccessId%3D778043051564-q79bsd8mc40b0bl82ikkrtc3jdofe4dg%2540developer.gserviceaccount.com%26Signature%3DjjtpKrfktQQtKI68OaH%252BXx56fwb9JqjmaeE%252B6fXBjiDKTDQXJjFPga83AyfDIC8ndsLEKhD8Beiax3fgLnjaxZ9pqWXr%252FDUh9Hwt9acavnbyWE3FBwIR%252FucICILF7GVsHNqXwrug1%252FTNB7jTimvculi3Axm2pROf2Kp5UCiCdf4%253D%26original-url%3Dhttps%253A%252F%252Fpadlet-uploads.storage.googleapis.com%252F2081924948%252F6138ca68827aed084add42d195e75b46%252Famazon_prime.avif",
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
            name: "1 Bulan",
            stock_price: 13,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "3 Bulan",
            stock_price: 18,
            official_price: 0,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "6 Bulan",
            stock_price: 40,
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
            stock_price: 35,
            official_price: 59,
            real_price: 0,
            sell_price: 0,
            profit: 0,
            is_shown: true,
          },
          {
            name: "6 Bulan",
            stock_price: 85,
            official_price: 354,
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
    amazon,
  };
};
