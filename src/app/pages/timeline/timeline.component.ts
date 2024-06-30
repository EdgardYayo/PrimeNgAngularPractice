import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CovidService } from '../../shared/services/covid.services';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { DividerModule } from 'primeng/divider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CardModule, 
    NgFor, 
    NgIf,
    RouterLink,
    CommonModule, 
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    DividerModule,
    ToggleButtonModule,
    ProgressSpinnerModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  providers: [CovidService]
})
export class TimelineComponent implements OnInit {
  countries = [];
  filteredCountrys: string[] = [];
  countryToFilter: string = '';
  checked: boolean = false;
  loading: boolean = true;


  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
      this.covidService.getCountries().subscribe((data) => {
        console.log(data);
        this.countries = data.response;
        this.filteredCountrys = [...this.countries];
        this.sortCountries();
        this.loading = false;
      });
  }

  filterCountrys() {
    console.log(this.countryToFilter);
    console.log(this.filteredCountrys);
    console.log(this.countries);
    
    

    if(this.countryToFilter.trim() === '') {
      alert('Tienes que escribir el nombre de un pais antes de filtrar')
      return;
    }
    
    this.filteredCountrys = this.countries.filter((country : string) => {
      return country.toLowerCase().includes(this.countryToFilter.toLowerCase().trim())
    })

    if(this.filteredCountrys.length === 0) {
      alert('No hay paises que coincidan con el filtrado')
      this.filteredCountrys = [...this.countries];
    }

    this.sortCountries();
  }

  sortCountries() {
    if (this.checked) {
      this.filteredCountrys.sort((a, b) => b.localeCompare(a));
    } else {
      this.filteredCountrys.sort((a, b) => a.localeCompare(b));
    }
  }

  toggleOrder() {
    this.sortCountries();
  }
}
