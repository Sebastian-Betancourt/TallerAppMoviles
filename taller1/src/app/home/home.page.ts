import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule
  ]
})
export class HomePage {

  cards = [
    {
      title: 'Funciones Matemáticas Avanzadas',
      description: 'Realiza operaciones con funciones trigonométricas, logaritmos, exponenciales, y más.'
    },
    {
      title: 'Interfaz Intuitiva',
      description: 'Diseño amigable que facilita la navegación y el ingreso de expresiones matemáticas complejas.'
    },
    {
      title: 'Historial de Cálculos',
      description: 'Guarda y revisa tus cálculos anteriores para un acceso rápido y eficiente.'
    },
    {
      title: 'Modo Científico y Básico',
      description: 'Alterna entre una calculadora científica completa y una básica según tus necesidades.'
    },
    {
      title: 'Conversión de Unidades',
      description: 'Convierte entre diferentes unidades de medida como longitud, peso, temperatura y más.'
    },
    {
      title: 'Soporte para Funciones Personalizadas',
      description: 'Define y usa tus propias funciones matemáticas para cálculos repetitivos.'
    }
  ];

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
