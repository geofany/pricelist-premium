const { netflix } = useNetflix();
const { bStation } = useBStation();
const { viu } = useViu();
const { drakorId } = useDrakorId();
const { hboGo } = useHboGo();
const { vidio } = useVidio();
const { iqiyi } = useIqiyi();
const { amazon } = useAmazon();

export const useProducts = () => {
  const products: Array<Product> = [
    netflix,
    bStation,
    viu,
    drakorId,
    vidio,
    hboGo,
    amazon,
    iqiyi,
  ];

  products.map((product: Product) => {
    return product.type.map((item: List) => {
      return item.list.map((list: Detail, index) => {
        list.real_price = list.stock_price - (list.stock_price / 100) * 20;
        if (item.name.includes("Sharing")) {
          list.sell_price = Math.ceil(list.real_price + 5 * (index + 1));
        } else {
          list.sell_price = Math.ceil(list.real_price + 10 * (index + 1));
        }
        list.profit = Math.floor(list.sell_price - list.real_price);
        if (list.official_price > 0) {
          list.is_shown = list.sell_price < list.official_price;
        }
        if (list.is_shown) item.count++;
      });
    });
  });

  return {
    products,
  };
};
