import {AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  isMenuHidden = true;
  currentSlide = 0;
  cardsToShow = 4;

  cards = [
  { img: 'assets/images/excavadorapesada.jpg', text: 'Innovamos e invertimos en infraestructura continuamente para estar a la vanguardia de la industria de los agregados.', icon: 'assets/logos/excavador.svg' },
  { img: 'assets/images/trabajadormasculino.jpg', text: 'Tenemos la experiencia, el conocimiento y la solidez, para garantizar a nuestros el suministro continuo y estable de nuestros productos, manteniendo siempre los más altos estándares de calidad. ', icon: 'assets/logos/excavador.svg' },
  { img: 'assets/images/NormaEtica.jpg', text: 'Estamos comprometidos con la sostenibilidad, invertimos en energías limpias, recuperación de ecosistemas e inversión social. ', icon: 'assets/logos/excavador.svg' },
  { img: 'assets/images/PreciosCalidad.jpg', text: 'Ofrecemos precios altamente competitivos y material de excelente calidad.', icon: 'assets/logos/excavador.svg' },
  { img: 'assets/images/PreciosCalidad.jpg', text: 'Ofrecemos precios altamente competitivos y material de excelente calidad.', icon: 'assets/logos/excavador.svg' }
];

  constructor() {
    this.updateCardsToShow();
    window.addEventListener('resize', this.updateCardsToShow.bind(this));
  }

  updateCardsToShow() {
    const width = window.innerWidth;
    if (width < 640) {
      this.cardsToShow = 1; // Mobile
    } else {
      this.cardsToShow = 4; // Desktop
    }
  }
  
  get totalSlides(): number {
    return Math.ceil(this.cards.length / this.cardsToShow);
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  get maxSlide() {
  return this.totalSlides - 1;
}

next() {
  this.currentSlide = (this.currentSlide + 1) > this.maxSlide ? 0 : this.currentSlide + 1;
}

prev() {
  this.currentSlide = (this.currentSlide - 1) < 0 ? this.maxSlide : this.currentSlide - 1;
}

get visibleCards() {
    const start = this.currentSlide * this.cardsToShow;
    let visible = this.cards.slice(start, start + this.cardsToShow);

    if (visible.length < this.cardsToShow) {
      const remaining = this.cardsToShow - visible.length;
      visible = visible.concat(this.cards.slice(0, remaining));
    }

    return visible;
  }

}

