import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../shared/services/http-interceptors';



@NgModule({
  declarations: [],
  imports: [ SharedModule],
  providers:[httpInterceptorProviders]
})
export class CoreModule { }
