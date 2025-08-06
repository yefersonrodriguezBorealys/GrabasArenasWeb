<<<<<<< HEAD
import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
=======
import {AfterViewInit, Component } from '@angular/core';
>>>>>>> ef999b10e3e1f6c8cb9b5d8176986d3b5fc2eec4

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuHidden = true;

  startIndex = 0;
  cardsToShow = 4;

  touchStartX = 0;
  touchEndX = 0;

  cards = [
    {
      img: 'assets/images/foto_2.jpg',
      text: 'Innovamos e invertimos en infraestructura continuamente para estar a la vanguardia de la industria de los agregados.',
      icon: 'assets/logos/excavador.svg'
    },
    {
      img: 'assets/images/foto_3.JPG',
      text: 'Tenemos la experiencia, el conocimiento y la solidez, para garantizar a nuestros el suministro continuo y estable de nuestros productos, manteniendo siempre los más altos estándares de calidad.',
      icon: 'assets/logos/insignia.svg'
    },
    {
      img: 'assets/images/foto_6.png',
      text: 'Estamos comprometidos con la sostenibilidad, invertimos en energías limpias, recuperación de ecosistemas e inversión social.',
      icon: 'assets/logos/verificacion-de-escudo.svg'
    },
    {
      img: 'assets/images/foto_4.JPG',
      text: 'Ofrecemos precios altamente competitivos y material de excelente calidad.',
      icon: 'assets/logos/garantia.svg'
    },
    {
      img: 'assets/images/Foto_5.jpg',
      text: 'Entregamos nuestros productos donde el cliente lo requiera, de manera oportuna y segura, por medio de nuestra empresa aliada de transporte.',
      icon: 'assets/logos/verificacion-de-escudo.svg'
    }
  ];

  constructor() {
    this.updateCardsToShow();
    window.addEventListener('resize', this.updateCardsToShow.bind(this));
  }

  updateCardsToShow() {
    const width = window.innerWidth;

    if (width < 640) {
      this.cardsToShow = 1;
    } else if (width < 1024) {
      this.cardsToShow = 2;
    } else {
      this.cardsToShow = 4;
    }
  }

  get visibleCards() {
    const visible: any[] = [];
    for (let i = 0; i < this.cardsToShow; i++) {
      const index = (this.startIndex + i) % this.cards.length;
      visible.push(this.cards[index]);
    }
    return visible;
  }

  next() {
    this.startIndex = (this.startIndex + 1) % this.cards.length;
  }

  prev() {
    this.startIndex = (this.startIndex - 1 + this.cards.length) % this.cards.length;
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  // 👇 Eventos táctiles para swipe
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

<<<<<<< HEAD
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipeGesture();
  }

  handleSwipeGesture() {
    const deltaX = this.touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.prev(); // Desliza a la derecha → ir hacia atrás
      } else {
        this.next(); // Desliza a la izquierda → ir hacia adelante
      }
    }
  }
}
=======
}

>>>>>>> ef999b10e3e1f6c8cb9b5d8176986d3b5fc2eec4
