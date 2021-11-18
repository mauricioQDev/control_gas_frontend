import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register-customers',
  templateUrl: './register-customers.component.html',
  styleUrls: ['./register-customers.component.css']
})
export class RegisterCustomersComponent implements OnInit {

  customer: Customer = new Customer();
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.customerService.registerCustomer(this.customer).subscribe(dato => {
      console.log(dato);
    }, error => console.log(error));
  }

  onSubmit() {
    this.saveCustomer();
  }
}
