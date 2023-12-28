import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../product';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products?: Product[];
  title = 'TeaHouse';
 
  
	constructor(private apiService: ApiService) {
		this.apiService.readProducts().subscribe((products: Product[])=>{
			this.products = products;
		})
  }
  
}
