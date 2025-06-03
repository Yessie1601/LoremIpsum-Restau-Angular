import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  menuItems = [
    { name: 'Salad', description: 'Fresh greens with dressing', price: 8.5 },
    { name: 'Steak', description: 'Grilled beef steak', price: 18.0 },
    { name: 'Soup of the Day', description: 'Homemade seasonal soup', price: 6.0 },
    { name: 'Pasta Carbonara', description: 'Classic Italian pasta with bacon', price: 13.5 },
    { name: 'Grilled Salmon', description: 'Served with vegetables and lemon', price: 17.0 },
    { name: 'Veggie Burger', description: 'Plant-based patty, fresh toppings', price: 12.0 },
    { name: 'Chocolate Mousse', description: 'Rich Belgian chocolate dessert', price: 7.0 },
    { name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, Caesar dressing', price: 9.0 },
    { name: 'Margherita Pizza', description: 'Tomato, mozzarella, fresh basil', price: 11.0 },
    { name: 'Chicken Curry', description: 'Spicy curry with rice', price: 14.0 },
    { name: 'Seafood Paella', description: 'Spanish rice with mixed seafood', price: 19.5 },
    { name: 'Lamb Chops', description: 'Grilled lamb with rosemary', price: 21.0 },
    { name: 'Tiramisu', description: 'Classic Italian dessert', price: 6.5 },
    { name: 'Cheese Plate', description: 'Selection of local cheeses', price: 8.0 }
  ];
}
