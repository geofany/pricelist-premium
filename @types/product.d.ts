type Product = {
  title: string;
  logo: string;
  note: Array<string>;
  type: Array<List>;
};

type List = {
  name: string;
  count: number;
  list: Array<Detail>;
};

type Detail = {
  name: string;
  stock_price: number; //price from eka
  official_price: number; //official website price
  real_price?: number; //price from eka - 20%
  sell_price?: number; //real price + 5000
  profit?: number; //sell price - real price
  is_shown: boolean;
};
