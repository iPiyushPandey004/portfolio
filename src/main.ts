import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

history.scrollRestoration = 'manual';

const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
if (navigation?.type === 'reload') {
  if (location.hash) {
    history.replaceState(history.state, '', `${location.pathname}${location.search}`);
  }
  window.addEventListener('pageshow', () => window.scrollTo(0, 0), { once: true });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((error: unknown) => console.error(error));
