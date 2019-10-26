import { Component, OnInit } from '@angular/core';

// service
import { ProductService } from "../../../services/product.service";
import { Product } from 'src/app/models/product';

// Class Product
import {  } from "../../..//models/product";
import { element } from 'protractor';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productList:Product[];

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.productService.getproducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList=[];
      item.forEach(element=>{
       let x=element.payload.toJSON();
       x["$key"] = element.key;
       this.productList.push(x as Product);
      });
    });
  }
  
  onEdit(product:Product){
    this.productService.selectedProduct=Object.assign({},product);
  }

  onDelete($key:string){
    this.productService.deleteProduct($key);
  }
}
