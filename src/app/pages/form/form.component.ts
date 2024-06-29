import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  username: string | undefined;
  lastname: string | undefined;
  hobby: string | undefined;

  resetForm() {
    this.username = '';
    this.lastname = '';
    this.hobby = '';
  }
}
