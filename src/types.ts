export type Product = {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  price: number;
  image: string;
  category: string;
  stock: number;
  featured?: boolean;
};

export type OrderStatus = 'pending' | 'packed' | 'shipped' | 'delivered';

export type Order = {
  id: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
};

export type District = {
  value: string;
  label: {
    en: string;
    ta: string;
  };
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  district: string;
  message: string;
};