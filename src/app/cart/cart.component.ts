import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  shipping = [ {"type": "Overnight", "price": 25.99} , {"type": "2-Day",
"price": 9.99} , {"type": "Postal", "price": 2.99} ]

  myDropDown : string;
  constructor(private cartService: CartService,
  private formBuilder: FormBuilder,) {this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    }); }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

   onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

    onChangeofOptions(newGov) {
     console.log(newGov);
    }

}

