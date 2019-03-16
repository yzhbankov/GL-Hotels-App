import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatListModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { HotelsModule } from './hotels/hotels.module';
import { FilterPipe, SearchPipe } from './filter.pipe';
import { FavoritesService } from './favorites.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './navbar/favorites/favorites.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  entryComponents: [FavoritesComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FilterPipe,
    SearchPipe,
    FavoritesComponent,
    NavbarComponent,
  ],
  imports: [
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
  ],
  providers: [FavoritesService, { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
