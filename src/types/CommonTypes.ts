export interface CommonProps {
  title: string;
  children: React.ReactNode;
}

export interface Product {
  id: number;
  title: string;
  item: string;
  description: string;
  image: string;
  price: string;
}

export interface Advanteges {
  id: number;
  title: string;
  subtitle: string;
}

export interface DataInsertion {
  services?: Product[];
  advanteges?: Advanteges[];
}
