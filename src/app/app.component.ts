import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeaHouse';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  slides =[
    {id:1, img: "./assets/img/carousel-1.jpg"},
    {id:2, img: "./assets/img/carousel-2.jpg"}
  ];

  ProductOption: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  Products =[
     {id: 1, img: "./assets/img/product-1.jpg",name:"Green Tea",description:"Diam dolor diam ipsum sit diam amet diam et eos. Clita eratipsum"},
    {id: 2, img: "./assets/img/product-2.jpg",name:"Black Tea",description:"Diam dolor diam ipsum sit diam amet diam et eos. Clita eratipsum"},
    {id: 3, img: "./assets/img/product-3.jpg",name:"Spiced Tea",description:"Diam dolor diam ipsum sit diam amet diam et eos. Clita eratipsum"},
    {id: 4, img: "./assets/img/product-4.jpg",name:"Organic Tea",description:"Diam dolor diam ipsum sit diam amet diam et eos. Clita eratipsum"}
  ];


  TestimonialOption: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  Testimonials =[
     {id:1, description:"Diam dolor diam ipsum sit diam amet diam et eos. Clita eratipsum", img:"./assets/img/testimonial-1.jpg",  name:"Client Name", profession:"Profession" },
     {id:2, description:"Diam dolor diam ipsum sit diam amet diam et eos. Clita eratipsum", img:"./assets/img/testimonial-2.jpg",  name:"Client Name", profession:"Profession" },
     {id:3, description:"Diam dolor diam ipsum sit diam amet diam et eos. Clita eratipsum", img:"./assets/img/testimonial-3.jpg",  name:"Client Name", profession:"Profession" }
     
  ];
}
