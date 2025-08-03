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
  
  get totalSlides(): number {
    return Math.ceil(this.cards.length / this.cardsToShow);
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  get maxSlide() {
  return Math.max(0, this.cards.length - this.cardsToShow);
}

next() {
  if (this.currentSlide < this.maxSlide) this.currentSlide++;
}

prev() {
  if (this.currentSlide > 0) this.currentSlide--;
}

}
