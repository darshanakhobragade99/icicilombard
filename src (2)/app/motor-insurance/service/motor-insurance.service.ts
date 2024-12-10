import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotorInsuranceService {

  private apiUrl = 'https://api.example.com/insurance'; // Replace with actual API


  constructor(private http: HttpClient) {}
  getMotorInsuranceData() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // ngOnInit() {
  //   if (!this.insuranceService) {
  //     this.service.getInsuranceData().subscribe((data) => {
  //       this.insuranceData = data;
  //     });
  //   }
  // }
  
  
}


