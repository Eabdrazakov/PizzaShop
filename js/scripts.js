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


//UI Logic

function getPizzaValue() {
    const checkBox = document.getElementsByName("pizza");

    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            return checkBox[i].value;
        }
    }
    return null;
}

function getData() {
    const selected = getPizzaValue();
    let getAllInfo = null;
    if (selected === "cheese") {
        getAllInfo = Cheese.ingredient();
    } else if (selected === "pepperoni") {
        getAllInfo = Pepperoni.ingredient();
    } else if (selected === "veggie") {
        getAllInfo = Veggie.ingredient();
    } else {
        getAllInfo = null;
    }
    return getAllInfo;
}
// console.log(getData());

function farmHandler() {
    const form = document.querySelector("form");
    const result = document.getElementById("result");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const getInfo = getData();
        result.classList.remove("hidden");
        result.innerText = getInfo;
    });
}

document.addEventListener("DOMContentLoaded", farmHandler);