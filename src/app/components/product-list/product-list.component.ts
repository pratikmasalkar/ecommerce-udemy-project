import { Component, OnInit,} from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];


  constructor(private _dbser:ProductService){

  }

  ngOnInit(){
    this.listProducts();

  }


  listProducts(){
    this._dbser.getProductList().subscribe(res=>{
      this.products=res
  })
  }
}
