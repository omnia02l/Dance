import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/Category.model';
import { Product } from 'src/app/core/models/Product.model';
import { SizeType } from 'src/app/core/models/SizeType.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],  

})
export class AddproductComponent implements OnInit {
  product: Product = new Product();
  categories: Category[] = [];
  sizeOptions: SizeType[] = Object.values(SizeType);
  //selectedFile: File | undefined;
 // selectedFile: any; // Change the type to any
 selectedFile: File | null = null; // Variable to store the selected file

 // uploadedImageUrls: string = ''; // Changed to single string
 uploadedImageUrls: string[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService,    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }
/*
  onSubmit(): void {
    // Check if an image is selected
    if (this.selectedFile) {
      // Upload the selected image
      this.productService.uploadImage(this.selectedFile).subscribe(
        (imageUrl: string) => {
          // Set the product's image property to the uploaded image URL
          this.product.image = imageUrl;
  
          // Assuming categoryId is selected from UI
          const categoryId = this.product['categoryId'];
          
          // Create the product with the updated image URL
          this.productService.createProduct(this.product, categoryId).subscribe(
            (response) => {
              console.log('Product created successfully:', response);
              // Reset form or perform other actions on success
            },
            (error) => {
              console.error('Error creating product:', error);
              // Handle error appropriately
            }
          );
        },
        (error) => {
          console.error('Error uploading image:', error);
          // Handle error appropriately
        }
      );
    } else {
      // If no image is selected, create the product without an image
      // Assuming categoryId is selected from UI
      const categoryId = this.product['categoryId'];
      
      // Create the product without an image
      this.productService.createProduct(this.product, categoryId).subscribe(
        (response) => {
          console.log('Product created successfully:', response);
          // Reset form or perform other actions on success
        },
        (error) => {
          console.error('Error creating product:', error);
          // Handle error appropriately
        }
      );
    }
  }
  */
 /* onSubmit(): void {
    // Set the uploaded image URLs to the product before submitting
    this.product.image = this.uploadedImageUrls;
    // Assuming categoryId is selected from UI
    const categoryId = this.product['categoryId'];
    this.productService.createProduct(this.product, categoryId).subscribe(
      (response) => {
        console.log('Product created successfully:', response);
        // Reset form or perform other actions on success
      },
      (error) => {
        console.error('Error creating product:', error);
        // Handle error appropriately
      }
    );
  }
  handleUploadComplete(event: any) {
    console.log('Upload complete:', event);
    // Get the uploaded file URL and assign it to the uploadedImageUrls property
    if (event) {
      this.uploadedImageUrls = event.cdnUrl;
    }
  }
  handleUploadStart(event: any) {
    console.log('Upload started:', event);
    // Handle upload start event
  }

  handleUploadError(event: any) {
    console.error('Upload error:', event);
    // Handle upload error
  }*/
  onSubmit(): void {
    // Check if an image is selected
    if (this.selectedFile) {
      // Upload the selected image to Uploadcare
      this.productService.uploadImage(this.selectedFile).subscribe(
        (imageUrl: string) => {
          // Set the product's image property to the uploaded image URL
          this.product.image = imageUrl;
          
          // Assuming categoryId is selected from UI
          const categoryId = this.product['categoryId'];
          
          // Create the product with the updated image URL
          this.productService.createProduct(this.product, categoryId).subscribe(
            (response) => {
              console.log('Product created successfully:', response);
              this.showNotification('Product created successfully');
              // Reset form or perform other actions on success
            },
            (error) => {
              console.error('Error creating product:', error);
              // Handle error appropriately
            }
          );
        },
        (error) => {
          console.error('Error uploading image:', error);
          // Handle error appropriately
        }
      );
    } else {
      // If no image is selected, create the product without an image
      // Assuming categoryId is selected from UI
      const categoryId = this.product['categoryId'];
      
      // Create the product without an image
      this.productService.createProduct(this.product, categoryId).subscribe(
        (response) => {
          console.log('Product created successfully:', response);
          this.showNotification('Product created successfully');
          // Reset form or perform other actions on success
        },
        (error) => {
          console.error('Error creating product:', error);
          // Handle error appropriately
        }
      );
    }
  }

  handleUploadComplete(event: any) {
    console.log('Upload complete:', event);
    // Get the uploaded file URL and add it to the product
    if (event && event.cdnUrl) {
      this.selectedFile = event.cdnUrl; // Store the CDN URL of the uploaded file
    }
  }

  handleUploadStart(event: any) {
    console.log('Upload started:', event);
    // Handle upload start event
  }

  handleUploadError(event: any) {
    console.error('Upload error:', event);
    // Handle upload error
  }
  
  showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }
}