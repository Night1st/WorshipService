export interface ICategory {
  id: number;
  product_group_id: number;
  name: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
  created_by?: any;
  updated_by?: any;
}
export interface IFilterCategory {
  category: Category[];
}

interface Category {
  value: string;
}

export interface IProductsByCategory {
  id: number;
  productName: string;
  qr_code: string;
  slug: string;
  image: string;
  freeShip?: number;
  origin_price: number;
  current_price: number;
  sale_percent: number;
}