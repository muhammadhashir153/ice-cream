import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    '/assets/Slider1.jpg',
    '/assets/Slider2.jpg',
    '/assets/Slider3.jpg',
    '/assets/Slider4.jpg'
  ];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
