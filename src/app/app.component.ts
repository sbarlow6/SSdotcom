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
  private scrollObserver!: IntersectionObserver;

  ngAfterViewInit() {
    this.updateParallax();
    this.initScrollAnimations();
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

  private initScrollAnimations() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Add staggered delay for item rows
          if (entry.target.classList.contains('itemtablerow')) {
            const itemRows = document.querySelectorAll('.itemtablerow');
            itemRows.forEach((row, index) => {
              if (row === entry.target) {
                setTimeout(() => {
                  row.classList.add('in-view');
                }, index * 100);
              }
            });
          }
        }
      });
    }, options);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    animatedElements.forEach(el => {
      this.scrollObserver.observe(el);
    });
  }
}


