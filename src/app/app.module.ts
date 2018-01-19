import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CurrentViewService } from './shared/current-view.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SpecificComponent } from './specific/specific.component';
import { ThreadItemComponent } from './thread-item/thread-item.component';
import { ThreadService } from './shared/thread.service';
import { ViewComponent } from './view/view.component';
import { TokenService } from './shared/token.service';
import { UrlsService } from './shared/urls.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ViewComponent,
    CatalogComponent,
    ThreadItemComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ModalComponent,
    SpecificComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: ':board',
        component: ViewComponent,
        pathMatch: 'full'
      },
      {
        path: ':board/post/:postId',
        component: ViewComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'IT',
        pathMatch: 'full'
      },
      {
        path: '',
        component: ViewComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [ThreadService, CurrentViewService, TokenService, UrlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
