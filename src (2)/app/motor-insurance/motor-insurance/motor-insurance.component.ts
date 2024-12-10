import { Component } from '@angular/core';
import { MotorInsuranceService } from '../service/motor-insurance.service';

@Component({
  selector: 'app-motor-insurance',
  templateUrl: './motor-insurance.component.html',
  styleUrls: ['./motor-insurance.component.css']
})
export class MotorInsuranceComponent {

  plans = [
    { coverage: 'Accidental damages', comprehensive: true, standalone: true, thirdParty: false },
    { coverage: 'Natural calamities', comprehensive: true, standalone: true, thirdParty: false },
    { coverage: 'Fire', comprehensive: true, standalone: true, thirdParty: false },
    { coverage: 'Theft', comprehensive: true, standalone: true, thirdParty: false },
    { coverage: 'Riot, strike & terrorist activities', comprehensive: true, standalone: true, thirdParty: false },
    { coverage: 'Damage in transit', comprehensive: true, standalone: true, thirdParty: false },
    { coverage: 'Third-party property damage', comprehensive: true, standalone: false, thirdParty: true },
    { coverage: 'Third-party injury', comprehensive: true, standalone: false, thirdParty: true },
  ];

 


  constructor(private insuranceService: MotorInsuranceService) {}

  activeIndex = 0; // Default to the first tab

changeTab(index: number): void {
  this.activeIndex = index;
}


  ngOnInit():void {
    // If needed, make initial service call here (if it's not about form submission)
    console.log("MotorInsuranceComponent ngOnInit called .");
  }

  onSubmit() {
    console.log('MotorInsuranceComponent form submitted');
    // Only call the service once to prevent multiple requests.
    this.insuranceService.getMotorInsuranceData().subscribe(
      data => {
        console.log('Data fetched:', data);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
}


