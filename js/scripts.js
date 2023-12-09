//Business Logic

function Pizza(topping, size, cost) {
    this.topping = topping;
    this.size = size;
    this.cost = cost;
}

let Cheese = new Pizza(["Cheese Pizza (Marinara, Mozzarella)"], ["small, med, large"], 12.99);
let Pepperoni = new Pizza(["Pepperoni Pizza (Marinara, Mozzarella, Liguria Pepperoni)"], ["small, med, large"], 13.85);
let Veggie = new Pizza(["Veggie Pizza (Fresh broccoli, tomatoes, green bell pepper)"], ["small, med, large"], 10.99);

// console.log(Cheese)
// console.log(Pepperoni)
// console.log(Veggie)

Pizza.prototype.ingredient = function () {
    return "You've selected: " + this.topping + ". Size: " + this.size + ". Cost: " + this.cost;
};
// console.log(Veggie.ingredient())