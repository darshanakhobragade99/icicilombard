import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorInsuranceComponent } from './motor-insurance/motor-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { RouterModule, Routes } from '@angular/router';
import { MotorFloaterComponent } from './motor-floater/motor-floater.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TabViewModule } from 'primeng/tabview';


const route:Routes = [
  {path:'',component:MotorInsuranceComponent},
  {path:'car-insurance',component:CarInsuranceComponent},
  {path:'bike-insurance',component:BikeInsuranceComponent},
  {path:'motor-floater',component:MotorFloaterComponent}

]

// const route: Routes = [
//   {
//     path: '',
//     component: MotorInsuranceComponent,
//     children: [
//       { path: 'car-insurance', component: CarInsuranceComponent },
//       { path: 'bike-insurance', component: BikeInsuranceComponent },
//       { path: 'motor-floater', component: MotorFloaterComponent },
//     ],
//   },
// ];


@NgModule({
  declarations: [
    MotorInsuranceComponent,
    CarInsuranceComponent,
    BikeInsuranceComponent,
    MotorFloaterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule, // Required for PrimeNG animations
    // TabViewModule, // Add this for primeng
    [RouterModule.forChild(route)],
    BrowserAnimationsModule,
    TabViewModule


  ],
  exports: [
    MotorInsuranceComponent,
  ]
})
export class MotorInsuranceModule { }
