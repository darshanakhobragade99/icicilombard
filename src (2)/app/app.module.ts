import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { StatsSectionComponent } from './stats-section/stats-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { IconsComponent } from './icons/icons.component';
import { FormsModule } from '@angular/forms';
import { MotorInsuranceModule } from './motor-insurance/motor-insurance.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormSectionComponent,
    StatsSectionComponent,
    HeroSectionComponent,
    FooterComponent,
    MenuComponent,
    IconsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MotorInsuranceModule,
    // BrowserAnimationsModule, // Required for PrimeNG animations
    // TabViewModule, // Import TabViewModule here for motorinsurance 
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
