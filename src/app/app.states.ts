import { Ng2StateDeclaration } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExtraComponent } from './extra/extra.component';

export const appState: Ng2StateDeclaration = {
  name: 'app',
  redirectTo: 'app.layout',
  component: AppComponent
};

export const appLayout: Ng2StateDeclaration = {
  name: 'app.layout',
  views: {
    'header': { component: HeaderComponent },
    'content': { component: HomeComponent },
    'footer': { component: FooterComponent }
  }
};

export const extraComponent: Ng2StateDeclaration = {
  name: 'app.layout.extra',
  views: {
    'content@app': { component: ExtraComponent },
  }
};

export const APP_STATES = [
  appState,
  appLayout,
  extraComponent
];
