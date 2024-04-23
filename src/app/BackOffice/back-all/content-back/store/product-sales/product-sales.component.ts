import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/Category.model';
import { Product } from 'src/app/core/models/Product.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css'],
  animations: [
    trigger('zoomIn', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('zoomed', style({
        transform: 'scale(1.1)'
      })),
      transition('normal => zoomed', [
        animate('0.3s')
      ]),
      transition('zoomed => normal', [
        animate('0.3s')
      ])
    ])
  ]

})
export class ProductSalesComponent implements OnInit {
  zoomState: string = 'normal'; // Initial state is 'normal'
  orders: any[] = []; // Declare orders property as an array of any type
  topProducts: Product[] = []; // Declare topProducts property as an array of Product type
  categories: Category[] = []; // Assuming you have a Category model
  selectedCategoryId: number | null = null;
  selectedCategoryName: string | null = null;
  mostSoldProducts: any[] = [];
  month!: number;
  year!: number;
  startDate!: string;
  endDate!: string;
  totalAmount!: number;
  selectedMonth: number | null = null;
  selectedYear: number | null = null;
  //months: number[] = Array.from({ length: 12 }, (_, i) => i + 1); // Array of numbers from 1 to 12
  months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'Mars', value: 3 },
    { name: 'Aoril', value: 4 },
    // Add other months as needed
  ];

  // Generate an array of years, e.g., from 2020 to current year
  currentYear = new Date().getFullYear();
  years = Array.from({ length: 5 }, (_, index) => this.currentYear - index);
  constructor(private productService: ProductService, private categoryService: CategoryService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Define your start and end dates here, replace these with actual dates
    const currentDate = new Date();
    this.selectedMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    this.selectedYear = currentDate.getFullYear();
  
    // Call the methods with the specified parameters
    this.getOrdersBetweenDates();
    this.getMostSoldProducts();
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      
    });
    }
    loadMostSoldProducts(): void {
      if (this.selectedMonth && this.selectedYear) {
        this.productService.getMostSoldProductsByMonthAndYear(this.selectedMonth, this.selectedYear)
          .subscribe(
            (data) => {
              this.mostSoldProducts = data;
              // Handle retrieved data here
              console.log('Most sold products:', this.mostSoldProducts);
            },
            (error) => {
              console.error('Error fetching most sold products:', error);
            }
          );
      } else {
        // Display error or prompt user to select both month and year
        console.error('Please select both month and year.');
      }
    }
  
 /*   loadMostSoldProducts(): void {
      if (this.selectedMonth && this.selectedYear) {
        this.productService.getMostSoldProducts(this.selectedMonth, this.selectedYear)
          .subscribe(data => {
            // Handle retrieved data here
          });
      } else {
        // Display error or prompt user to select both month and year
      }
    }
  
    onMonthChange(): void {
      console.log('Selected month:', this.selectedMonth);
      // You can perform additional actions here, such as updating data based on the selected month
      this.loadMostSoldProducts(); // Example: Load most sold products again when month changes
    }
    
    onYearChange(): void {
      console.log('Selected year:', this.selectedYear);
      // You can perform additional actions here, such as updating data based on the selected year
      this.loadMostSoldProducts(); // Example: Load most sold products again when year changes
    }
    
  /*  getOrdersBetweenDates(): void {
      const startDate = new Date('2024-03-01');
      const endDate = new Date('2024-06-31');
      this.productService.getOrdersBetweenDates(startDate, endDate).subscribe(
        (data) => {
          this.orders = data;
          console.log('Orders between dates:', this.orders);
        },
        (error) => {
          console.error('Error fetching orders between dates:', error);
        }
      );
    }*/
    getOrdersBetweenDates() {
      // Make HTTP GET request to backend API
      this.http.get<any[]>(`http://localhost:8085/order/between?start=${this.startDate}&end=${this.endDate}`).subscribe(
        (response) => {
          this.orders = response;
          // Calculate total amount
          this.totalAmount = this.calculateTotalAmount(response);
        },
        (error) => {
          console.error('Error fetching orders:', error);
        }
      );
    }
    calculateTotalAmount(orders: any[]): number {
      // Implement logic to calculate total amount from orders
      let total = 0;
      for (const order of orders) {
        total += order.totalAmount;
      }
      return total;
    }
  
    getMostSoldProducts(): void {
      const month = 4; // January
      const year = 2024;
      this.productService.getMostSoldProductsByMonthAndYear(month, year).subscribe(
        (data) => {
          this.mostSoldProducts = data;
          console.log('Most sold products:', this.mostSoldProducts);
        },
        (error) => {
          console.error('Error fetching most sold products:', error);
        }
      );
    }
  
  
 
  onCategoryChange(): void {
    if (this.selectedCategoryId) {
      this.productService.getTop5SaleProductsByCategory(this.selectedCategoryId)
        .subscribe((products) => {
          // Sort the products based on total revenue in descending order
          this.topProducts = products
            .filter(product => typeof product.totalRevenue === 'number') // Filter out products with undefined totalRevenue
            .sort((a, b) => (b.totalRevenue || 0) - (a.totalRevenue || 0)) // Sort based on total revenue, handling undefined values
            .slice(0, 5); // Take only the top 5 products
          const selectedCategory = this.categories.find(category => category.categoryId === this.selectedCategoryId);
          this.selectedCategoryName = selectedCategory ? selectedCategory.name : null;
        });
    } else {
      this.topProducts = [];
      this.selectedCategoryName = null;
    }
    
  }
  onMouseEnter(product: Product): void {
    product['zoomState'] = 'zoomed';
  }

  onMouseLeave(product: Product): void {
    product['zoomState'] = 'normal';
  }

}