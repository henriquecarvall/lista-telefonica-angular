import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './lista/lista.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

export const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'lista', component: ListaComponent },
{ path: 'visualizar/:id', component: VisualizarComponent },
{ path: '**', redirectTo: '/home' }
];
