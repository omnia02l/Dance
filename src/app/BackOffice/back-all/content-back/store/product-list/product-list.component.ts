import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Initialize with an empty array

  constructor(private sanitizer: DomSanitizer, private productService: ProductService) { }
/*
ngOnInit(): void {
  this.productService.getProducts().subscribe(products => {
    this.products = products;
          this.logImageUrls();

  });
  
}
logImageUrls(): void {
  this.products.forEach(product => {
    console.log('Image URL for product', product.productId + ':', product.image?.imageUrl);
  });
}*/
getSanitizedUrl(url: string) {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
ngOnInit(): void {
  this.productService.getProducts().subscribe(
    (products) => {
      this.products = products;
      this.logImageUrls(); // Log image URLs after fetching products

    },
    (error) => {
      console.error('Failed to fetch products', error);
    }
  );
}
logImageUrls(): void {
  this.products.forEach(product => {
    console.log('Product:', product); // Log the entire product object
    console.log('Image URL for product', product.productId + ':', product.image?.imageUrl);
  });
}



}
