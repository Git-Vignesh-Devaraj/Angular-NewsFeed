import { SelectedData, News } from './../../interfaces/news.interface';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input("data") inputData: SelectedData;
  news: News;
  showLoader = true;
  isError: boolean;
  BASE_URL = "https://saurav.tech/NewsAPI/"
  top_headline_api = "top-headlines/category/";
  end_json = ".json";

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showLoader = true;
    this.isError = false;
    this.getData()
  }

  getData() {
    this.http.get<News>(
      `${this.BASE_URL}${this.top_headline_api}${this.inputData.category}/${this.inputData.country}${this.end_json}`
    ).subscribe(
      (data: News) => {
        setTimeout(() => this.showLoader = false, 2000)
        this.news = data;
      },
      ((error: HttpErrorResponse) => {
        this.showLoader = false;
        this.isError = true;
      })
    );
  }
}
