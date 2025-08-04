import { Component } from '@angular/core';

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
  { img: 'assets/images/excavadorapesada.jpg', text: 'Utilizamos maquinaria de última generación...' },
  { img: 'assets/images/trabajadormasculino.jpg', text: 'Empleamos estrictos procesos de supervisión...' },
  { img: 'assets/images/NormaEtica.jpg', text: 'Nuestros productos obedecen a la norma NTC...' },
  { img: 'assets/images/PreciosCalidad.jpg', text: 'Ofrecemos precios competitivos y calidad...' },
  { img: 'assets/img5.jpg', text: 'Otra razón para preferirnos...' }
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
