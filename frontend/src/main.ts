import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync('noop')]
})
  .catch(err => console.error('Erro ao inicializar a aplicação:', err));


