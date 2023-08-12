import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCreateComponent } from './components/menu/menu-create/menu-create.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { CustomerRoutes } from './customer.routing';

@NgModule({
  declarations: [MenuCreateComponent, MenuListComponent, MenuComponent],
  imports: [SharedModule, NgZorroAntdModule, CustomerRoutes],
})
export class CustomerModule {}
