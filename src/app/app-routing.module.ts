import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EnemigosComponent } from './components/enemigos/enemigos.component';
import { HomeComponent } from './components/home/home.component';
import { EnemigoComponent } from './components/enemigo/enemigo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'enemigos', component: EnemigosComponent},
  {path: 'buscar/:termino', component: BuscadorComponent},

  {path: 'enemigo/:id', component: EnemigoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
