import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'sorcery-slam';
  
  @ViewChild('parallaxBg') parallaxBg!: ElementRef<HTMLDivElement>;
  @ViewChild('parallaxOverlay') parallaxOverlay!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.updateParallax();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateParallax();
  }

  private updateParallax() {
    if (!this.parallaxBg || !this.parallaxOverlay) return;
    
    const scrolled = window.pageYOffset;
    const parallaxSpeed = -0.5;
    const overlaySpeed = -0.3;
    
    this.parallaxBg.nativeElement.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    this.parallaxOverlay.nativeElement.style.transform = `translateY(${scrolled * overlaySpeed}px)`;
  }
}


