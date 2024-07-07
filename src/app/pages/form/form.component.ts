import { Component, OnInit, viewChild } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CovidService } from '../../shared/services/covid.services';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [AccordionModule, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [CovidService]
})
export class FormComponent implements OnInit {
  news: any[] | undefined = [];

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
      this.covidService.getNews().subscribe((data) => {
        console.log(data);
        this.news = data.articles;
      })
  }
}
