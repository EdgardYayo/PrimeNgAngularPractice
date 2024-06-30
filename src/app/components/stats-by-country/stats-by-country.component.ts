import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CovidService } from '../../shared/services/covid.services';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-stats-by-country',
  standalone: true,
  imports: [RouterLink, ButtonModule, DividerModule],
  templateUrl: './stats-by-country.component.html',
  styleUrl: './stats-by-country.component.css'
})
export class StatsByCountryComponent implements OnInit {
  countryName: string | undefined;
  stats: any;


  constructor(private route: ActivatedRoute, private covidService: CovidService) {}

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        this.countryName = params['country'];
        this.loadStats();
      })
  }

  loadStats() {
    this.covidService.getStatistics(this.countryName).subscribe((data) => {
      console.log(data);
      this.stats = data.response[0];
    })
  }
}
