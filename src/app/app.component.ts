import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="app-container">
      <app-header />
      <main>
        <router-outlet />
        <!-- <section id="home">
          <app-home />
        </section>
        <section id="about">
          <app-about />
        </section>
        <section id="career">
          <app-career />
        </section>
        <section id="contact">
          <app-contact />
        </section> -->
      </main>
    </div>
  `,
  styles: [
    `
    .app-container {
      background-color: #0a0a0a;
      min-height: 100vh;
      overflow-x: hidden;
    }

    main {
      margin-top: 60px;
      scroll-behavior: smooth;
      overflow-y: auto;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      position: relative;
    }

    main::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 20%, rgba(0, 123, 255, 0.05) 0%, transparent 25%),
        radial-gradient(circle at 80% 80%, rgba(0, 123, 255, 0.05) 0%, transparent 25%);
      pointer-events: none;
      z-index: 1;
    }

    section {
      min-height: 100vh;
      position: relative;
      z-index: 2;
    }

    :host ::ng-deep app-home,
    :host ::ng-deep app-about,
    :host ::ng-deep app-career,
    :host ::ng-deep app-contact {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 768px) {
      main {
        margin-top: 50px;
      }
    }
    `
  ],
})
export class AppComponent {
  title = 'portfolio';
}