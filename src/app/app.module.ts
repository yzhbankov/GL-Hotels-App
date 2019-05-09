import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { HotelsModule } from './components/hotels/hotels.module';
import { FilterPipe, SearchPipe } from './pipes/filter.pipe';
import { FavoritesService } from './services/favorites.service';
import { HotelsService } from './services/hotels.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesModal } from './modals/favorites/favorites.component';
import { ContactModal } from './modals/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TokenInterceptor } from './interceprors/token.interceptor';
import { ContactComponent } from './components/contact/contact.component';
import { reducers } from './store/reducers';
import { metaReducers } from './store/reducers/meta.resucers';
import { HotelsEffects } from './store/effects/hotels.effects';
import { UserEffects } from './store/effects/user.effects';
import { environment } from '../environments/environment';

@NgModule({
  entryComponents: [FavoritesModal, ContactModal],
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    FilterPipe,
    SearchPipe,
    FavoritesModal,
    ContactModal,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    ContactComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([HotelsEffects, UserEffects]),
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HotelsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    HotelsService,
    UserService,
    FavoritesService,
    AuthGuardService,
    {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
