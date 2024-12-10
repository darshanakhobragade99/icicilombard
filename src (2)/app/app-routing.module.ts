import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
   //lazy-loading of angular
   { path: '', component: AppComponent }, // Default route

   {
    path:'motor-insurance', 
    loadChildren:()=>{
      return import('./motor-insurance/motor-insurance.module').then(mod =>mod.MotorInsuranceModule);
    }
   },
 
 
    {path:'**', redirectTo: '/motor-insurance', pathMatch :'full'} // wild card
   
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
