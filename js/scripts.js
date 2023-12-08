//Business Logic

function Pizza(topping, size, cost) {
    this.topping = topping;
    this.size = size;
    this.cost = cost;
}

let Cheese = new Pizza(["Cheese Pizza (Marinara, Mozzarella)"], ["Small, Med, Large"], 12.99);
let Pepperoni = new Pizza(["Pepperoni Pizza (Marinara, Mozzarella, Liguria Pepperoni)"], ["Small, Med, Large"], 13.85);
let Veggie = new Pizza(["Veggie Pizza (Fresh broccoli, tomatoes, green bell pepper)"], ["Small, Med, Large"], 10.99);

// console.log(Cheese)
// console.log(Pepperoni)
// console.log(Veggie)