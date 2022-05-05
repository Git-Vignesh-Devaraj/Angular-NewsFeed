import { Category, SelectedData } from './../../interfaces/news.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsData } from 'src/app/data/news.data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

  }

  public newsCategoriesData: Category[] = NewsData.newsOptionsData;
  public countries: Category[] = NewsData.countries;
  public selectedData: SelectedData;
  public newsForm: FormGroup = this.formBuilder.group(
    {
      category: [this.newsCategoriesData[1].value],
      country:  [this.countries[0].value]
    }
  );
  @Output() dataEmitter:EventEmitter<SelectedData> = new EventEmitter<SelectedData>();
  ngOnInit(): void {
    this.newsForm.valueChanges.subscribe(
      data => {
        this.selectedData = data;
        this.dataEmitter.emit(this.selectedData)
      }
    )
  }

}
