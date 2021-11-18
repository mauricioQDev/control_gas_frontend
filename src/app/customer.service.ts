import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private baseURL = "http://localhost:8080/customer";

  constructor(private httpClient: HttpClient) { }

  registerCustomer(customer:Customer) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, customer);
  }
}
