import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-proyects',
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {
  slides = [
    { 
      title: 'Dashboard', 
      image: '../../assets/images/cafe.jpg'  // Ajusta la URL de la imagen
    },
    { 
      title: 'Proyectos', 
      image: '../../assets/images/cafe.jpg'  // Ajusta la URL de la imagen
    },
    { 
      title: 'Reportes', 
      image: '../../assets/images/cafe.jpg'  // Ajusta la URL de la imagen
    },
    { 
      title: 'hola', 
      image: '../../assets/images/cafe.jpg'  // Ajusta la URL de la imagen
    },
    { 
      title: 'adios', 
      image: '../../assets/images/cafe.jpg'  // Ajusta la URL de la imagen
    },
    { 
      title: 'Tienda', 
      image: '../../assets/images/cafe.jpg'  // Ajusta la URL de la imagen
    },
    { 
      title: 'POS', 
      image: '../../assets/images/cafe.jpg'  // Ajusta la URL de la imagen
    }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "infinite":true,
    "pauseOnHover": true
  }
  // slideconfig = {
  //   "slidesToShow": 4,
  //   "slidesToScroll": 4,
  //   "autoplay": true,
  //   "autoplaySpeed": 5000,
  //   "pauseOnHover": true,
  //   "infinite": true,
  //   "responsive": [
  //     {
  //       "breakpoint":992,
  //       "settings": {
  //         "arrows": true,
  //         "infinite" : true,
  //         "slidesToShow": 3,
  //         "slidesToScroll": 3
  //       }
  //     },
  //     {
  //       "breakpoint":768,
  //       "settings":{
  //         "arrows": true,
  //         "infinite": true,
  //         "slidesToShow": 1,
  //         "slidesToScroll": 1,
  //       }
  //     }
  //   ]
  // }
}

