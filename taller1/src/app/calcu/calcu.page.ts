import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.page.html',
  styleUrls: ['./calcu.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonGrid,  // <- IMPORTANTE
    IonRow,   // <- IMPORTANTE
    IonCol,   // <- IMPORTANTE
    CommonModule
  ],
})
export class CalcuPage {
  display: string = '';

  constructor(private router: Router) {}

  append(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  backspace() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      this.display = new Function(`return ${this.display}`)().toString();
    } catch {
      this.display = 'Error';
    }
  }

  sin() {
    this.display = Math.sin(Number(this.display)).toString();
  }

  cos() {
    this.display = Math.cos(Number(this.display)).toString();
  }

  tan() {
    this.display = Math.tan(Number(this.display)).toString();
  }

  sqrt() {
    this.display = Math.sqrt(Number(this.display)).toString();
  }

  pow() {
    this.display = Math.pow(Number(this.display), 2).toString();
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
