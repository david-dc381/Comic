import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EnemigosService } from './services/enemigos.service';
import { EnemigoComponent } from './components/enemigo/enemigo.component';
import { EnemigosComponent } from './components/enemigos/enemigos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BuscadorComponent,
    EnemigosComponent,
    HomeComponent,
    AboutComponent,
    EnemigoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EnemigosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
