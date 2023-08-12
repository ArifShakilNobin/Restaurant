import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { MenuCreateComponent } from './components/menu/menu-create/menu-create.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'list',
    //   },
    //   {
    //     path: 'list',
    //     component: MenuListComponent,
    //   },
    //   {
    //     path: 'create',
    //     pathMatch: 'full',
    //     component: MenuCreateComponent,
    //   },
    // ],
  },
];




export const CustomerRoutes = RouterModule.forChild(routes);
