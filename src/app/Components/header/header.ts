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
  { img: 'assets/images/excavadorapesada.jpg', text: 'Innovamos e invertimos en infraestructura continuamente para estar a la vanguardia de la industria de los agregados.', icon: 'assets/logos/excavador.svg' },
  { img: 'assets/images/trabajadormasculino.jpg', text: 'Tenemos la experiencia, el conocimiento y la solidez, para garantizar a nuestros el suministro continuo y estable de nuestros productos, manteniendo siempre los más altos estándares de calidad. ', icon: 'assets/logos/excavador.svg' },
  { img: 'assets/images/NormaEtica.jpg', text: 'Estamos comprometidos con la sostenibilidad, invertimos en energías limpias, recuperación de ecosistemas e inversión social. ', icon: 'assets/logos/excavador.svg' },
  { img: 'assets/images/PreciosCalidad.jpg', text: 'Ofrecemos precios altamente competitivos y material de excelente calidad.', icon: 'assets/logos/excavador.svg' }
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
import { AfterViewInit, Component } from '@angular/core';
