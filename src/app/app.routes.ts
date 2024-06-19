import { Routes } from '@angular/router';
import { LaligaAppComponent } from './components/laliga-app.component';
import { PosicionesComponent } from './components/pages/posiciones/posiciones.component';
import { TopComponent } from './components/pages/top/top.component';
import { JugadoresComponent } from './components/pages/jugadores/jugadores.component';
import { EquiposComponent } from './components/pages/equipos/equipos.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';
import { EquipoComponent } from './components/pages/equipos/equipo/equipo.component';
import { NoticiaComponent } from './components/pages/noticias/noticia/noticia.component';

export const routes: Routes = [
    {
        path: '',
        component: LaligaAppComponent,
        pathMatch: 'full'
    },
    {
        path: 'noticias',
        component: NoticiasComponent
    },
    {
        path: 'noticia/:id',
        component: NoticiaComponent
    },
    {
        path: 'posiciones',
        component: PosicionesComponent
    },
    {
        path: 'top',
        component: TopComponent
    },
    {
        path: 'jugadores',
        component: JugadoresComponent
    },
    {
        path: 'equipos',
        component: EquiposComponent
    },
    {
        path: 'equipo/:id',
        component: EquipoComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
