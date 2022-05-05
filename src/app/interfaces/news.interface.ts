export interface Category {
  label: string;
  value: string;
}

export interface SelectedData {
  category: string;
  country: string;
}

export interface Source {
  id: number;
  name: String;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface News {
  status: string;
  totalResults: number;
  articles?: Article[];
}
