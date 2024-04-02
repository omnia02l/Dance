import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product.model';
import { CartItem } from 'src/app/core/models/cart-item';
import { OrderDTO } from 'src/app/core/models/order-dto';
import { AccountService } from 'src/app/core/services/account.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {
  products: Product[] = [];
  cartItems: CartItem[] = [];
  totalCartPrice: number = 0;
  showMiniCart: boolean = false;
  showNotification: boolean = false;
  notificationMessage: string = '';
  notificationType: string = 'success';
  recommendedItems: Product[] = [];
  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService,     private accountService: AccountService // Inject AccountService
  ) { }

  ngOnInit(): void {
    // Fetch products
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );

    // Subscribe to cart items
    this.shoppingCartService.getCartItems().subscribe(
      (cartItems: CartItem[]) => {
        this.cartItems = cartItems;
        this.updateTotalCartPrice(); // Update total price when cart items change
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  // Add item to cart
  addToCart(productId: number): void {
    const product = this.products.find(p => p.productId === productId);
    if (product && product.productId && product.title && product.price) {
      this.shoppingCartService.addToCart(product.productId, product.title, product.price, 1);
      this.showNotification = true;
      this.notificationMessage = "Item added to cart!";
      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    } else {
      console.error('Invalid product data for productId:', productId);
    }
    
  }

  // Remove item from cart
  removeItem(item: CartItem): void {
    this.shoppingCartService.removeFromCart(item);
    this.showNotification = true;
    this.notificationMessage = "Item removed from cart!";
    setTimeout(() => {
      this.showNotification = false;
    }, 2000);
  
  }


  // Increase quantity of item in cart
  increaseQuantity(item: CartItem): void {
    item.quantity++;
    this.shoppingCartService.updateQuantity(item.productId, item.quantity);
    this.updateTotalCartPrice(); // Update total price after increasing quantity
  }
  toggleMiniCart(): void {
    this.showMiniCart = !this.showMiniCart;
  }
  // Decrease quantity of item in cart
  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.shoppingCartService.updateQuantity(item.productId, item.quantity);
      this.updateTotalCartPrice(); // Update total price after decreasing quantity
    }
  }

  // Update total cart price based on current cart items
  updateTotalCartPrice(): void {
    this.totalCartPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Placeholder method for placing order
 /* placeOrder(): void {
    const orderDTO: OrderDTO = {
      orderDescription: 'Description of the order', // Replace with actual order description
      cartItems: this.cartItems,
      customerEmail: 'customer@example.com', // Replace with actual customer email
      customerName: 'John Doe' // Replace with actual customer name
    };
    
    this.shoppingCartService.placeOrder(orderDTO).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        // Optionally, clear the cart items or perform any other action upon successful order placement
      },
      (error) => {
        console.error('Error placing order:', error);
        // Handle error accordingly
      }
    );
  }
*/
placeOrder(): void {
  // Fetch user's information from session
  this.accountService.getPrincipal().subscribe(
    (user) => {
      const orderDTO: OrderDTO = {
        orderDescription: 'Description of the order', // Replace with actual order description
        cartItems: this.cartItems,
        customerEmail: user.email, // Use user's email
        customerName: user.userName // Use user's username
      };
      
      this.shoppingCartService.placeOrder(orderDTO).subscribe(
        (response) => {
          console.log('Order placed successfully:', response);
          // Optionally, clear the cart items or perform any other action upon successful order placement
        },
        (error) => {
          console.error('Error placing order:', error);
          // Handle error accordingly
        }
      );
    },
    (error) => {
      console.error('Error fetching user information:', error);
      // Handle error accordingly
    }
  );
}
  

  isAnyProductQuantityZero(): boolean {
    return this.cartItems.some(item => item.quantity === 0);
  }


  // Calculate total price for a cart item dynamically
  calculateTotalPrice(item: CartItem): number {
    return item.price * item.quantity;
  }
 /* showNotification(message: string, type: string = 'success'): void {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;
  }*/

  // Method to hide notification
  hideNotification(): void {
    this.showNotification = false;
    this.notificationMessage = '';
    this.notificationType = 'success'; // Reset notification type to default
  }
  /*loadRecommendedItems(): void {
    // Fetch recommended items from ProductService or any other service
    this.productService.getRecommendedItems().subscribe(items => {
      this.recommendedItems = items;
    });
  }

  loadCartItems(): void {
    // Fetch cart items from ShoppingCartService or any other service
    this.shoppingCartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      // Calculate total cart price
      this.totalCartPrice = this.calculateTotalCartPrice();
    });
  }

*/
}
