import { Category } from './../interfaces/news.interface';

export class NewsData {
  public static newsOptionsData: Category[] = [
    {
      label: "General",
      value: "general",
    },
    {
      label: "Business",
      value: "business",
    },
    {
      label: "Entertainment",
      value: "entertainment",
    },
    {
      label: "Health",
      value: "health",
    },
    {
      label: "Science",
      value: "science",
    },
    {
      label: "Sports",
      value: "sports",
    },
    {
      label: "Technology",
      value: "technology",
    }
  ];

  public static countries: Category[] = [
    {
      label: "India",
      value: "in",
    },
    {
      label: "USA",
      value: "us",
    },
    {
      label: "China",
      value: "ch",
    },
    {
      label: "Japan",
      value: "jp",
    },
    {
      label: "Russia",
      value: "ru",
    },
    {
      label: "Australia",
      value: "au",
    },
  ];
}
