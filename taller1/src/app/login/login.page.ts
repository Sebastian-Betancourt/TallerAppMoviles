import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonInput, 
  IonButton, 
  IonItem, 
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      // ✅ Redirige a la página de la calculadora
      this.router.navigate(['/calcu']);
    } else {
      this.router.navigate(['/error']);
    }
  }
}
